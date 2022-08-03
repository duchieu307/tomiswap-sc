import { ethers, network } from "hardhat";
import {
    expandTo18Decimals, expandToNumber,
  } from './shared/utilities'
import { expect } from "chai";
import { Signer } from "ethers";
import { TomiToken } from '../types/TomiToken';
import { TomiToken__factory } from '../types/factories/TomiToken__factory';
import { ERC20 } from '../types/ERC20';
import { ERC20__factory } from '../types/factories/ERC20__factory';
import { TomiDelegate } from '../types/TomiDelegate';
import { TomiDelegate__factory } from '../types/factories/TomiDelegate__factory';
import { TomiFactory } from '../types/TomiFactory';
import { TomiFactory__factory } from '../types/factories/TomiFactory__factory';
import { TomiPlatform } from '../types/TomiPlatform';
import { TomiPlatform__factory } from '../types/factories/TomiPlatform__factory';
import { TgasTest } from '../types/TgasTest';
import { TgasTest__factory } from '../types/factories/TgasTest__factory';
import { TomiPool } from '../types/TomiPool';
import { TomiPool__factory } from '../types/factories/TomiPool__factory';
import { TomiConfig } from '../types/TomiConfig';
import { TomiConfig__factory } from '../types/factories/TomiConfig__factory';
import { TomiPair__factory } from '../types/factories/TomiPair__factory';
import { WETH9 } from '../types/WETH9';
import { WETH9__factory } from '../types/factories/WETH9__factory';
import { USDT } from '../types/USDT';
import { USDT__factory } from '../types/factories/USDT__factory';
import { TomiBallot } from '../types/TomiBallot';
import { TomiBallot__factory } from '../types/factories/TomiBallot__factory';
import { TomiBallotRevenue } from '../types/TomiBallotRevenue';
import { TomiBallotRevenue__factory } from '../types/factories/TomiBallotRevenue__factory';
import { TomiBallotFactory } from '../types/TomiBallotFactory';
import { TomiBallotFactory__factory } from '../types/factories/TomiBallotFactory__factory';
import { TomiGovernance } from '../types/TomiGovernance';
import { TomiGovernance__factory } from '../types/factories/TomiGovernance__factory';
import { TomiTransferListener } from '../types/TomiTransferListener';
import { TomiTransferListener__factory } from '../types/factories/TomiTransferListener__factory';
import { TomiFunding } from '../types/TomiFunding';
import { TomiFunding__factory } from '../types/factories/TomiFunding__factory';

//@ts-ignore
import TomiPairABI from '../artifacts/contracts/TomiPair.sol/TomiPair.json';
//@ts-ignore
import TomiLPABI from '../artifacts/contracts/TomiLP.sol/TomiLP.json';

describe("TomiPlatform", function () {
    let PLATFORM: TomiPlatform | undefined;
    let WETH: WETH9 | undefined;
    let TGAS: TgasTest | undefined;
    let TOKENA: ERC20 | undefined;
    let TOKENB: ERC20 | undefined;
    let TOMI: TomiToken | undefined;
    let USDT: USDT | undefined;
    let GOVERNANCE: TomiGovernance | undefined;
    let CONFIG: TomiConfig | undefined;
    let BALLOT_FACTORY: TomiBallotFactory | undefined;
    let TRANSFER_LISTENER: TomiTransferListener | undefined;
    let FACTORY: TomiFactory | undefined;
    let POOL: TomiPool | undefined;
    let DELEGATE: TomiDelegate | undefined;
    let FUNDING: TomiFunding | undefined;

    let alice: Signer | undefined;
    let dev: Signer | undefined;

    beforeEach(async function () {
      async function runBlock(count = 5) {
        for (let i = 0; i < count; i++) {
          USDT && PLATFORM && await USDT.approve(PLATFORM.address, expandTo18Decimals(1))
        }
      }

      async function getPairContract(tokenA: string, tokenB: string) {
        if (PLATFORM) {
          const pair = await PLATFORM.pairFor(tokenA, tokenB)
          const pairContract = new TomiPair__factory(alice).attach(pair);
          return pairContract;
        }
      }

      try {
          [alice, dev] = await ethers.getSigners();

          if (alice && dev) {
            const aliceAddress = await alice.getAddress();
            const devAddress = await dev.getAddress();

            PLATFORM = await new TomiPlatform__factory(alice).deploy();
            console.log("PLATFORM: " + PLATFORM.address);
            WETH = await new WETH9__factory(alice).deploy();
            console.log("WETH: " + WETH.address);
            TGAS = await new TgasTest__factory(alice).deploy();
            console.log("TGAS: " + TGAS.address);
            TOMI = await new TomiToken__factory(alice).deploy(aliceAddress, aliceAddress, devAddress);
            console.log("TOMI: " + TOMI.address);
            TOKENA = await new ERC20__factory(alice).deploy(expandTo18Decimals(100000000000), "Token A", "A");
            console.log("TOKENA: " + TOKENA.address);
            TOKENB = await new ERC20__factory(alice).deploy(expandTo18Decimals(100000000000), "Token B", "B");
            console.log("TOKENB: " + TOKENB.address);
            USDT = await new USDT__factory(alice).deploy();
            console.log("USDT: " + USDT.address);
            GOVERNANCE = await new TomiGovernance__factory(alice).deploy(TOMI.address, "300", "300", "300", "300");
            console.log("GOVERNANCE: " + GOVERNANCE.address);
            CONFIG = await new TomiConfig__factory(alice).deploy();
            console.log("CONFIG: " + CONFIG.address);
            BALLOT_FACTORY = await new TomiBallotFactory__factory(alice).deploy(TOMI.address);
            console.log("BALLOT_FACTORY: " + BALLOT_FACTORY.address);
            TRANSFER_LISTENER = await new TomiTransferListener__factory(alice).deploy();
            console.log("TRANSFER_LISTENER: " + TRANSFER_LISTENER.address);
            FACTORY = await new TomiFactory__factory(alice).deploy(TOMI.address, CONFIG.address);
            console.log("FACTORY: " + FACTORY.address);
            POOL = await new TomiPool__factory(alice).deploy();
            console.log("POOL: " + POOL.address);
            DELEGATE = await new TomiDelegate__factory(alice).deploy(PLATFORM.address, POOL.address, TOMI.address, WETH.address);
            console.log("DELEGATE: " + DELEGATE.address);

            FUNDING = await new TomiFunding__factory(alice).deploy(TOMI.address);
            console.log("FUNDING: " + FUNDING.address);

            await POOL.initialize(TOMI.address, WETH.address, FACTORY.address, PLATFORM.address, CONFIG.address, GOVERNANCE.address, FUNDING.address, CONFIG.address);
            await TRANSFER_LISTENER.initialize(TGAS.address, FACTORY.address, WETH.address, PLATFORM.address, aliceAddress)
            await PLATFORM.initialize(
                TOMI.address,
                CONFIG.address,
                FACTORY.address,
                WETH.address,
                GOVERNANCE.address,
                TRANSFER_LISTENER.address,
                POOL.address
            )
            await CONFIG.initialize(TOMI.address, GOVERNANCE.address, PLATFORM.address, devAddress, [
                TOMI.address,
                WETH.address,
                USDT.address,
            ]);

            await CONFIG.changeConfig("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 2000, 6000, 1000, 4000);
            await CONFIG.changeConfig("0x4645455f4c4f54544552595f5245574152445f50455243454e54000000000000", 2000, 4000, 1000, 4000);
            await CONFIG.changeConfig("0x4645455f46554e444d455f5245574152445f50455243454e5400000000000000", 2000, 4000, 1000, 4000);
            await CONFIG.changeConfig("0x564f54455f4455524154494f4e00000000000000000000000000000000000000", 5, 300000, 1, 300);
            await CONFIG.changeConfig("0x50524f504f53414c5f544741535f414d4f554e54000000000000000000000000", 0, expandTo18Decimals(100), 250, expandTo18Decimals(100));
            await CONFIG.changeConfig("0x554e5354414b455f4455524154494f4e00000000000000000000000000000000", 0, 30000, 20, 200);

            await GOVERNANCE.initialize(PLATFORM.address, CONFIG.address, BALLOT_FACTORY.address)

            // await TGAS.upgradeImpl(TRANSFER_LISTENER.address)
            await WETH.deposit({ value: expandTo18Decimals(1) });

            await TOMI.approve(DELEGATE.address, expandTo18Decimals(10000, 18))
            await TOMI.approve(PLATFORM.address, expandTo18Decimals(10000, 18))
            await TOMI.approve(GOVERNANCE.address, expandTo18Decimals(10000, 18))
            await TOMI.connect(dev).approve(GOVERNANCE.address, expandTo18Decimals(10000, 18))
            await WETH.approve(DELEGATE.address, expandTo18Decimals(10000, 18))
            await WETH.approve(PLATFORM.address, expandTo18Decimals(10000, 18))
            await USDT.approve(DELEGATE.address, expandTo18Decimals(10000, 18))

            const devAddr = await dev?.getAddress();

            await TOMI.transfer(devAddr, expandTo18Decimals(10));

            const tx = await DELEGATE.connect(alice).addLiquidity(
              TOMI.address,
              WETH.address,
              expandTo18Decimals(10000, 6),
              expandTo18Decimals(5),
              expandTo18Decimals(10000, 6),
              expandTo18Decimals(5),
              Math.trunc(Date.now() / 1000) + 10000,
            )

            const receipt = await tx.wait();

            await DELEGATE.addLiquidity(
              TOMI.address,
              USDT.address,
              expandTo18Decimals(10000, 6),
              expandTo18Decimals(5),
              expandTo18Decimals(10000, 6),
              expandTo18Decimals(5),
              Math.trunc(Date.now() / 1000) + 10000,
            )

            await DELEGATE.addLiquidity(
              WETH.address,
              USDT.address,
              expandTo18Decimals(10000, 6),
              expandTo18Decimals(5),
              expandTo18Decimals(10000, 6),
              expandTo18Decimals(5),
              Math.trunc(Date.now() / 1000) + 10000,
            )
          
            const pairContract = await getPairContract(TOMI.address, WETH.address)
            pairContract && await TRANSFER_LISTENER.updatePairPowers([pairContract.address], [2]);
          }
      } catch (err) {
          console.log(err.message);
      }
    });

    describe("TomiGovernance Voting", async () => {
      async function runBlock(count = 5) {
        for (let i = 0; i < count; i++) {
          USDT && PLATFORM && await USDT.approve(PLATFORM.address, expandTo18Decimals(1))
        }
      }
      
      // it("Voter will be able to claim reward if proposal win", async () => {
      //     if (TOMI && USDT && dev && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice) {
      //       const devAddr = await dev?.getAddress();
      //       const aliceAddress = await alice.getAddress();

      //       const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
      //       console.log("POOL BALANCE: " + poolBalanceBefore.toString());

      //       await PLATFORM?.swapExactTokensForTokens(
      //         expandTo18Decimals(10000000, 0),
      //         "4975010060039920000",
      //         [TOMI.address, WETH.address, USDT.address],
      //         aliceAddress,
      //         Math.trunc(Date.now() / 1000) + 20000, 
      //       );

      //       const tx1 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
      //       const receipt1 = await tx1.wait();
      //       const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];
      //       const ballotAddr = event && event.args && event.args[event.args.length - 2];

      //       await GOVERNANCE.deposit(expandTo18Decimals(10));
      //       await GOVERNANCE.connect(dev).deposit(expandTo18Decimals(1));

      //       const collateralStaking = await GOVERNANCE.balanceOf(devAddr);

      //       console.log("COLLATERAL CURRENT: " + collateralStaking.toString());

      //       const totalReward = await GOVERNANCE.rewardOf(ballotAddr);
      //       console.log("TOTAL REWARD: " + totalReward.toString());
 
      //       await GOVERNANCE.connect(dev).vote(ballotAddr, 1, expandTo18Decimals(1));
      //       await GOVERNANCE.vote(ballotAddr, 1, expandTo18Decimals(110));

      //       await network.provider.send("evm_increaseTime", [300]);

      //       await GOVERNANCE.connect(dev).collectReward(ballotAddr, false);

      //       const collateralStakingAfter = await GOVERNANCE.balanceOf(devAddr);

      //       console.log("COLLATERAL AFTER: " + collateralStakingAfter.toString());
            
      //       await expect(collateralStakingAfter.toString()).to.be.equals(collateralStaking.add(totalReward.sub(totalReward.mul(5).div(100)))); 
      //     } 
      //   });

      //   it("All Tomi in Ballot won't be claimed by proposer if proposal results in failure", async () => {
      //     if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice) {
      //       const devAddr = await dev?.getAddress();
      //       const aliceAddress = await alice.getAddress();
          
      //       const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
      //       console.log("POOL BALANCE: " + poolBalanceBefore.toString());

      //       await PLATFORM?.swapExactTokensForTokens(
      //         expandTo18Decimals(10000000, 0),
      //         "4975010060039920000",
      //         [TOMI.address, WETH.address, USDT.address],
      //         aliceAddress,
      //         Math.trunc(Date.now() / 1000) + 20000, 
      //       );
            
      //       const tx1 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
      //       const receipt1 = await tx1.wait();
      //       const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];
      //       const ballotAddr = event && event.args && event.args[event.args.length - 2];
      //       const ballotContract = new TomiBallot__factory(alice).attach(ballotAddr);

      //       await GOVERNANCE.deposit(expandTo18Decimals(10, 18));

      //       const collateralStaking = await GOVERNANCE.balanceOf(await alice.getAddress());

      //       console.log("COLLATERAL CURRENT: " + collateralStaking.toString());

      //       const totalReward = await GOVERNANCE.rewardOf(ballotAddr);
      //       console.log("TOTAL REWARD: " + totalReward.toString());

      //       await ballotContract.vote(2, 0);

      //       await runBlock(10);

      //       await GOVERNANCE.collectReward(ballotAddr, false);

      //       const collateralStakingAfter = await GOVERNANCE.balanceOf(await alice.getAddress());

      //       console.log("COLLATERAL AFTER: " + collateralStakingAfter.toString());

      //       await expect(collateralStakingAfter.toString()).to.be.equals(collateralStaking); 
      //     } 
      //   });

      //   it("Tomi in Ballot will be claimed by voter even proposal results in failure", async () => {
      //     if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
      //       const devAddr = await dev?.getAddress();
      //       const aliceAddress = await alice.getAddress();

      //       const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
      //       console.log("POOL BALANCE: " + poolBalanceBefore.toString());

      //       await PLATFORM?.swapExactTokensForTokens(
      //         expandTo18Decimals(10000000, 0),
      //         "4975010060039920000",
      //         [TOMI.address, WETH.address, USDT.address],
      //         aliceAddress,
      //         Math.trunc(Date.now() / 1000) + 20000, 
      //       );

      //       const tx1 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
      //       const receipt1 = await tx1.wait();
      //       const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];
      //       const ballotAddr = event && event.args && event.args[event.args.length - 2];
      //       const ballotContract = new TomiBallot__factory(alice).attach(ballotAddr);

      //       await GOVERNANCE.deposit(expandTo18Decimals(10));
      //       await GOVERNANCE.connect(dev).deposit(expandTo18Decimals(1));

      //       const collateralStaking = await GOVERNANCE.balanceOf(devAddr);

      //       console.log("COLLATERAL CURRENT: " + collateralStaking.toString());

      //       const totalReward = await GOVERNANCE.rewardOf(ballotAddr);
      //       console.log("TOTAL REWARD: " + totalReward.toString());

      //       await ballotContract.connect(dev).vote(2, 0);
      //       await ballotContract.vote(2, 0);

      //       await runBlock(5);

      //       await GOVERNANCE.connect(dev).collectReward(ballotAddr, false);

      //       const collateralStakingAfter = await GOVERNANCE.balanceOf(devAddr);

      //       console.log("COLLATERAL AFTER: " + collateralStakingAfter.toString());
            
      //       await expect(collateralStakingAfter.toString()).to.be.equals(collateralStaking.add(totalReward)); 
      //     } 
      //   });

      //   it("Other voter in Ballot will be able to claim TOMI if proposal results in failure", async () => {
      //     if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
      //       const devAddr = await dev?.getAddress();
      //       const aliceAddress = await alice.getAddress();

      //       const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
      //       console.log("POOL BALANCE: " + poolBalanceBefore.toString());

      //       await PLATFORM?.swapExactTokensForTokens(
      //         expandTo18Decimals(10000000, 0),
      //         "4975010060039920000",
      //         [TOMI.address, WETH.address, USDT.address],
      //         aliceAddress,
      //         Math.trunc(Date.now() / 1000) + 20000, 
      //       );

      //       const tx1 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
      //       const receipt1 = await tx1.wait();
      //       const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];
      //       const ballotAddr = event && event.args && event.args[event.args.length - 2];
      //       const ballotContract = new TomiBallot__factory(alice).attach(ballotAddr);

      //       await GOVERNANCE.deposit(expandTo18Decimals(10, 18));
      //       await GOVERNANCE.connect(dev).deposit(expandTo18Decimals(1, 18));

      //       const collateralStaking = await GOVERNANCE.balanceOf(devAddr);

      //       console.log("COLLATERAL CURRENT: " + collateralStaking.toString());

      //       const totalReward = await GOVERNANCE.rewardOf(ballotAddr);
      //       console.log("TOTAL REWARD: " + totalReward.toString());

      //       await ballotContract.connect(dev).vote(2, 0);
      //       await ballotContract.vote(2, 0);

      //       await runBlock(5);

      //       await GOVERNANCE.connect(dev).collectReward(ballotAddr, false);

      //       const collateralStakingAfter = await GOVERNANCE.balanceOf(devAddr);

      //       console.log("COLLATERAL AFTER: " + collateralStakingAfter.toString());
            
      //       await expect(collateralStakingAfter.toString()).to.be.equals(collateralStaking.add(totalReward)); 
      //     } 
      //   });


      //   it("Other voter in Ballot will be able to vote Snapshot Proposal", async () => {
      //     if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
      //       const devAddr = await dev?.getAddress();
      //       const aliceAddress = await alice.getAddress();

      //       const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
      //       console.log("POOL BALANCE: " + poolBalanceBefore.toString());

      //       await PLATFORM?.swapExactTokensForTokens(
      //         expandTo18Decimals(10000000, 0),
      //         "4975010060039920000",
      //         [TOMI.address, WETH.address, USDT.address],
      //         aliceAddress,
      //         Math.trunc(Date.now() / 1000) + 20000, 
      //       );

      //       const tx1 = await GOVERNANCE.createSnapshotBallot(expandTo18Decimals(100), true, "nana", "momo");
      //       const receipt1 = await tx1.wait();
      //       const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];
      //       const ballotAddr = event && event.args && event.args[event.args.length - 2];
      //       const ballotContract = new TomiBallot__factory(alice).attach(ballotAddr);

      //       await GOVERNANCE.deposit(expandTo18Decimals(10, 18));
      //       await GOVERNANCE.connect(dev).deposit(expandTo18Decimals(1, 18));

      //       const collateralStaking = await GOVERNANCE.balanceOf(devAddr);

      //       console.log("COLLATERAL CURRENT: " + collateralStaking.toString());

      //       const totalReward = await GOVERNANCE.rewardOf(ballotAddr);
      //       console.log("TOTAL REWARD: " + totalReward.toString());

      //       await ballotContract.connect(dev).vote(2 ,0);
      //       await ballotContract.vote(2, 0);

      //       await runBlock(5);

      //       await GOVERNANCE.connect(dev).collectReward(ballotAddr, false);

      //       const collateralStakingAfter = await GOVERNANCE.balanceOf(devAddr);

      //       console.log("COLLATERAL AFTER: " + collateralStakingAfter.toString());
            
      //       await expect(collateralStakingAfter.toString()).to.be.equals(collateralStaking.add(totalReward).toString()); 
      //     } 
      //   });

      //   it("Others in Ballot will be able to join Revenue Proposal if they're eligible", async () => {
      //     if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
      //       const devAddr = await dev?.getAddress();
      //       const aliceAddress = await alice.getAddress();

      //       const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
      //       console.log("POOL BALANCE: " + poolBalanceBefore.toString());

      //       await PLATFORM?.swapExactTokensForTokens(
      //         expandTo18Decimals(10000000, 0),
      //         "4975010060039920000",
      //         [TOMI.address, WETH.address, USDT.address],
      //         aliceAddress,
      //         Math.trunc(Date.now() / 1000) + 20000, 
      //       );

      //       const tx1 = await GOVERNANCE.createRevenueBallot(expandTo18Decimals(100), true, "nana", "momo");
      //       const receipt1 = await tx1.wait();
      //       const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];
      //       const ballotAddr = event && event.args && event.args[event.args.length - 2];
      //       const ballotContract = new TomiBallotRevenue__factory(alice).attach(ballotAddr);

      //       await GOVERNANCE.deposit(expandTo18Decimals(10, 18));
      //       await GOVERNANCE.connect(dev).deposit(expandTo18Decimals(1, 18));

      //       const collateralStaking = await GOVERNANCE.balanceOf(devAddr);

      //       console.log("COLLATERAL CURRENT: " + collateralStaking.toString());

      //       const totalReward = await GOVERNANCE.rewardOf(ballotAddr);
      //       console.log("TOTAL REWARD: " + totalReward.toString());

      //       await ballotContract.connect(dev).participate(0);
      //       await ballotContract.participate(0);

      //       await runBlock(5);

      //       await GOVERNANCE.connect(dev).collectReward(ballotAddr, true);

      //       const collateralStakingAfter = await GOVERNANCE.balanceOf(devAddr);

      //       console.log("COLLATERAL AFTER: " + collateralStakingAfter.toString());
            
      //       await expect(collateralStakingAfter.toString()).to.be.equals(collateralStaking.add(totalReward)); 
      //     } 
      //   });

      //   it("Others in Ballot will not be able to apply Revenue Proposal rule to claim TOMI from other proposals ", async () => {
      //     if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
      //       const devAddr = await dev?.getAddress();
      //       const aliceAddress = await alice.getAddress();

      //       const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
      //       console.log("POOL BALANCE: " + poolBalanceBefore.toString());

      //       await PLATFORM?.swapExactTokensForTokens(
      //         expandTo18Decimals(10000000, 0),
      //         "4975010060039920000",
      //         [TOMI.address, WETH.address, USDT.address],
      //         aliceAddress,
      //         Math.trunc(Date.now() / 1000) + 20000, 
      //       );

      //       const tx1 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
      //       const receipt1 = await tx1.wait();
      //       const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];
      //       const ballotAddr = event && event.args && event.args[event.args.length - 2];
      //       const ballotContract = new TomiBallot__factory(alice).attach(ballotAddr);

      //       await GOVERNANCE.deposit(expandTo18Decimals(10));
      //       await GOVERNANCE.connect(dev).deposit(expandTo18Decimals(1));

      //       const collateralStaking = await GOVERNANCE.balanceOf(devAddr);

      //       console.log("COLLATERAL CURRENT: " + collateralStaking.toString());

      //       const totalReward = await GOVERNANCE.rewardOf(ballotAddr);
      //       console.log("TOTAL REWARD: " + totalReward.toString());

      //       await ballotContract.connect(dev).vote(1 ,0);
      //       await ballotContract.vote(1, 0);

      //       await runBlock(5);

      //       await expect(GOVERNANCE.connect(dev).collectReward(ballotAddr, true)).to.be.revertedWith("TomiGovernance::Fail due to wrong ballot");
      //     } 
      //   });

      //   it("Others voter will be able to vote Proposal without staking collateral before", async () => {
      //     if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
      //       const devAddr = await dev?.getAddress();
      //       const aliceAddress = await alice.getAddress();

      //       const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
      //       console.log("POOL BALANCE: " + poolBalanceBefore.toString());

      //       await PLATFORM?.swapExactTokensForTokens(
      //         expandTo18Decimals(10000000, 0),
      //         "4975010060039920000",
      //         [TOMI.address, WETH.address, USDT.address],
      //         aliceAddress,
      //         Math.trunc(Date.now() / 1000) + 20000, 
      //       );

      //       const tx1 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
      //       const receipt1 = await tx1.wait();
      //       const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];
      //       const ballotAddr = event && event.args && event.args[event.args.length - 2];
      //       const ballotContract = new TomiBallot__factory(alice).attach(ballotAddr);
            
      //       await TOMI.approve(ballotAddr, expandTo18Decimals(10000, 18))
      //       await TOMI.connect(dev).approve(ballotAddr, expandTo18Decimals(10000, 18))
            
      //       const collateralStaking = await GOVERNANCE.balanceOf(devAddr);

      //       console.log("COLLATERAL CURRENT: " + collateralStaking.toString());

      //       const totalReward = await GOVERNANCE.rewardOf(ballotAddr);
      //       console.log("TOTAL REWARD: " + totalReward.toString());

      //       await ballotContract.connect(dev).vote(1 ,expandTo18Decimals(1));
      //       await ballotContract.vote(1, expandTo18Decimals(110));

      //       await runBlock(5);

      //       await expect(GOVERNANCE.connect(dev).collectReward(ballotAddr, true)).to.be.revertedWith("TomiGovernance::Fail due to wrong ballot");
      //     } 
      //   });

      //   // it("Others voter will be able to vote Proposal without staking collateral before", async () => {
      //   //   if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
      //   //     const devAddr = await dev?.getAddress();
      //   //     const aliceAddress = await alice.getAddress();

      //   //     const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
      //   //     console.log("POOL BALANCE: " + poolBalanceBefore.toString());

      //   //     await PLATFORM?.swapExactTokensForTokens(
      //   //       expandTo18Decimals(10000000, 0),
      //   //       "4975010060039920000",
      //   //       [TOMI.address, WETH.address, USDT.address],
      //   //       aliceAddress,
      //   //       Math.trunc(Date.now() / 1000) + 20000, 
      //   //     );

      //   //     const tx1 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
      //   //     const receipt1 = await tx1.wait();
      //   //     const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];
      //   //     const ballotAddr = event && event.args && event.args[event.args.length - 2];
      //   //     const ballotContract = new TomiBallot__factory(alice).attach(ballotAddr);
            
      //   //     await TOMI.approve(ballotAddr, expandTo18Decimals(10000, 18))
      //   //     await TOMI.connect(dev).approve(ballotAddr, expandTo18Decimals(10000, 18))
            
      //   //     const collateralStaking = await GOVERNANCE.balanceOf(devAddr);

      //   //     console.log("COLLATERAL CURRENT: " + collateralStaking.toString());

      //   //     const totalReward = await GOVERNANCE.rewardOf(ballotAddr);
      //   //     console.log("TOTAL REWARD: " + totalReward.toString());

      //   //     await ballotContract.connect(dev).vote(1 ,expandTo18Decimals(1));
      //   //     await ballotContract.vote(1, expandTo18Decimals(102));

      //   //     await runBlock(5);

      //   //     await expect(GOVERNANCE.connect(dev).collectReward(ballotAddr, true)).to.be.revertedWith("TomiGovernance::Fail due to wrong ballot");
      //   //   } 
      //   // });

      //   it("Others voter will be able to vote Proposal with total staked collateral before", async () => {
      //     if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
      //       const devAddr = await dev?.getAddress();
      //       const aliceAddress = await alice.getAddress();

      //       const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
      //       console.log("POOL BALANCE: " + poolBalanceBefore.toString());

      //       await PLATFORM?.swapExactTokensForTokens(
      //         expandTo18Decimals(10000000, 0),
      //         "4975010060039920000",
      //         [TOMI.address, WETH.address, USDT.address],
      //         aliceAddress,
      //         Math.trunc(Date.now() / 1000) + 20000, 
      //       );

      //       const tx1 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
      //       const receipt1 = await tx1.wait();
      //       const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];
      //       const ballotAddr = event && event.args && event.args[event.args.length - 2];
      //       const ballotContract = new TomiBallot__factory(alice).attach(ballotAddr);
            
      //       await TOMI.approve(ballotAddr, expandTo18Decimals(10000, 18))
      //       await TOMI.connect(dev).approve(ballotAddr, expandTo18Decimals(10000, 18))
            
      //       await GOVERNANCE.connect(dev).deposit(expandTo18Decimals(1));

      //       await ballotContract.connect(dev).vote(1 ,expandTo18Decimals(2));

      //       const collateralStakingMore = await GOVERNANCE.balanceOf(devAddr);

      //       console.log("COLLATERAL CURRENT MORE: " + collateralStakingMore.toString());

      //       expect(collateralStakingMore.toString()).to.be.equals(expandTo18Decimals(2));

      //       const totalReward = await GOVERNANCE.rewardOf(ballotAddr);
      //       console.log("TOTAL REWARD: " + totalReward.toString());

      //       await runBlock(5);

      //       const collateralStaking = await GOVERNANCE.balanceOf(devAddr);

      //       console.log("COLLATERAL CURRENT: " + collateralStaking.toString());

      //       await GOVERNANCE.connect(dev).collectReward(ballotAddr, false);

      //       const collateralStakingAfter = await GOVERNANCE.balanceOf(devAddr);

      //       console.log("COLLATERAL AFTER: " + collateralStakingAfter.toString());
            
      //       await expect(collateralStakingAfter.toString()).to.be.equals(collateralStaking.add(totalReward.sub(totalReward.mul(5).div(100)))); 
      //     } 
      //   });

      //   it("Others voter will be able to participate Revenue Proposal without staking collateral before", async () => {
      //     if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
      //       const devAddr = await dev?.getAddress();
      //       const aliceAddress = await alice.getAddress();
            
      //       const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
      //       console.log("POOL BALANCE: " + poolBalanceBefore.toString());

      //       await PLATFORM?.swapExactTokensForTokens(
      //         expandTo18Decimals(10000000, 0),
      //         "4975010060039920000",
      //         [TOMI.address, WETH.address, USDT.address],
      //         aliceAddress,
      //         Math.trunc(Date.now() / 1000) + 20000, 
      //       );

      //       const tx1 = await GOVERNANCE.createRevenueBallot(expandTo18Decimals(100), true, "nana", "momo");
      //       const receipt1 = await tx1.wait();
      //       const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];
      //       const ballotAddr = event && event.args && event.args[event.args.length - 2];
      //       const ballotContract = new TomiBallotRevenue__factory(alice).attach(ballotAddr);

      //       await TOMI.approve(ballotAddr, expandTo18Decimals(10000, 18))
      //       await TOMI.connect(dev).approve(ballotAddr, expandTo18Decimals(10000, 18))

      //       const totalReward = await GOVERNANCE.rewardOf(ballotAddr);
      //       console.log("TOTAL REWARD: " + totalReward.toString());

      //       await ballotContract.connect(dev).participate(expandTo18Decimals(1, 18));
      //       await ballotContract.participate(expandTo18Decimals(110, 18));

      //       await runBlock(5);

      //       const collateralStaking = await GOVERNANCE.balanceOf(devAddr);

      //       console.log("COLLATERAL CURRENT: " + collateralStaking.toString());

      //       await GOVERNANCE.connect(dev).collectReward(ballotAddr, true);

      //       const collateralStakingAfter = await GOVERNANCE.balanceOf(devAddr);

      //       console.log("COLLATERAL AFTER: " + collateralStakingAfter.toString());
            
      //       await expect(collateralStakingAfter.toString()).to.be.equals(collateralStaking.add(totalReward)); 
      //     } 
      //   });

      //   it("Others voter will not be able to vote Proposal with collateral greater than TOMI balance", async () => {
      //     if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
      //       const devAddr = await dev?.getAddress();
      //       const aliceAddress = await alice.getAddress();
    
      //       const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
      //       console.log("POOL BALANCE: " + poolBalanceBefore.toString());
    
      //       await PLATFORM?.swapExactTokensForTokens(
      //         expandTo18Decimals(10000000, 0),
      //         "4975010060039920000",
      //         [TOMI.address, WETH.address, USDT.address],
      //         aliceAddress,
      //         Math.trunc(Date.now() / 1000) + 20000, 
      //       );
    
      //       const tx1 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
      //       const receipt1 = await tx1.wait();
      //       const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];
      //       const ballotAddr = event && event.args && event.args[event.args.length - 2];
      //       const ballotContract = new TomiBallot__factory(alice).attach(ballotAddr);
            
      //       await TOMI.approve(ballotAddr, expandTo18Decimals(10000, 18))
      //       await TOMI.connect(dev).approve(ballotAddr, expandTo18Decimals(10000, 18))
            
      //       await GOVERNANCE.connect(dev).deposit(expandTo18Decimals(1));
    
      //       await expect(ballotContract.connect(dev).vote(1 ,expandTo18Decimals(1000000000000))).to.be.revertedWith("TomiBallot:Collateral allowance is not enough to vote!");
      //     } 
      //   });

      it("Just only admin can create revenue proposal", async () => {
          if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
            const devAddr = await dev?.getAddress();
            const aliceAddress = await alice.getAddress();
            
            const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
            console.log("POOL BALANCE: " + poolBalanceBefore.toString());

            await PLATFORM?.swapExactTokensForTokens(
              expandTo18Decimals(10000000, 0),
              "4975010060039920000",
              [TOMI.address, WETH.address, USDT.address],
              aliceAddress,
              Math.trunc(Date.now() / 1000) + 20000, 
            );

            const totalReward = await GOVERNANCE.rewardOf(PLATFORM.address);

            await expect(GOVERNANCE.createRevenueBallot("BIPP", "GOD OF WAR"))
            .to.be.emit(GOVERNANCE, "ConfigBallotCreated");
            await expect(GOVERNANCE.connect(dev).createRevenueBallot("BIPP", "GOD OF WAR")).to.be.revertedWith("TomiGovernance: sender not allowed to do!")
            
            await GOVERNANCE.grantRole(await GOVERNANCE.DEFAULT_ADMIN_ROLE(), devAddr)
            await expect(GOVERNANCE.connect(dev).createRevenueBallot("BIPP", "GOD OF WAR")).not.to.be.revertedWith("TomiGovernance: sender not allowed to do!")
          } 
        });

        it("Just only admin can create config proposal without deposit MINIMUM TOMI Amount", async () => {
          if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
            const devAddr = await dev?.getAddress();
            const aliceAddress = await alice.getAddress();
            
            const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
            console.log("POOL BALANCE: " + poolBalanceBefore.toString());

            await PLATFORM?.swapExactTokensForTokens(
              expandTo18Decimals(10000000, 0),
              "4975010060039920000",
              [TOMI.address, WETH.address, USDT.address],
              aliceAddress,
              Math.trunc(Date.now() / 1000) + 20000, 
            );

            await expect(GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(0), "nana", "momo")).to.be.emit(GOVERNANCE, "ConfigBallotCreated");
            await expect(GOVERNANCE.connect(dev).createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(10), "nana", "momo")).to.be.revertedWith("TomiGovernance: NOT_ENOUGH_AMOUNT_TO_PROPOSAL");
          } 
        });

        it("Config Proposal not be eligible to claim reward from platform reward", async () => {
          if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
            const devAddr = await dev?.getAddress();
            const aliceAddress = await alice.getAddress();
            
            const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
            console.log("POOL BALANCE: " + poolBalanceBefore.toString());

            await PLATFORM?.swapExactTokensForTokens(
              expandTo18Decimals(10000000, 0),
              "4975010060039920000",
              [TOMI.address, WETH.address, USDT.address],
              aliceAddress,
              Math.trunc(Date.now() / 1000) + 20000, 
            );

            const totalReward = await GOVERNANCE.rewardOf(PLATFORM.address);

            const tx1 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), "nana", "momo");
            const receipt1 = await tx1.wait();
            const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];
            const ballotAddr = event && event.args && event.args[event.args.length - 2];
            
            const totalRewardAfter = await GOVERNANCE.rewardOf(PLATFORM.address);
            expect(totalRewardAfter).to.be.equals(totalReward.add(expandTo18Decimals(100)));
            expect(await GOVERNANCE.rewardOf(ballotAddr)).to.be.equals("0");
          }
        })

        it("Config Proposal voting amount must greater than 3 TOMI to be eligible to execute", async () => {
          if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
            const devAddr = await dev?.getAddress();
            const aliceAddress = await alice.getAddress();
            
            const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
            console.log("POOL BALANCE: " + poolBalanceBefore.toString());

            await PLATFORM?.swapExactTokensForTokens(
              expandTo18Decimals(10000000, 0),
              "4975010060039920000",
              [TOMI.address, WETH.address, USDT.address],
              aliceAddress,
              Math.trunc(Date.now() / 1000) + 20000, 
            );

            const totalReward = await GOVERNANCE.rewardOf(PLATFORM.address);

            const tx1 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), "nana", "momo");
            const receipt1 = await tx1.wait();
            const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];
            const ballotAddr = event && event.args && event.args[event.args.length - 2];

            await GOVERNANCE.vote(ballotAddr, "1", expandTo18Decimals(5, 16));
            await GOVERNANCE.connect(dev).vote(ballotAddr, "1", expandTo18Decimals(1));
              
            await network.provider.send("evm_increaseTime", [700]);
            await expect(GOVERNANCE.auditConfig(ballotAddr)).to.be.revertedWith("TomiGovernance: NO_PASS");
          
            const tx2 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), "nana", "momo");
            const receipt2 = await tx2.wait();
            const event2 = receipt2 && receipt2.events && receipt2.events[receipt2.events.length - 1];
            const ballotAddr2 = event2 && event2.args && event2.args[event2.args.length - 2];

            await GOVERNANCE.vote(ballotAddr2, "1", expandTo18Decimals(5, 16));
            await GOVERNANCE.connect(dev).vote(ballotAddr2, "1", expandTo18Decimals(3));

            await network.provider.send("evm_increaseTime", [700]);
            await expect(GOVERNANCE.auditConfig(ballotAddr2)).to.be.emit(GOVERNANCE, "ConfigAudited");
         
            await expect(await GOVERNANCE.balanceOf(devAddr)).to.be.equals("0");
            await expect(await GOVERNANCE.balanceOf(aliceAddress)).to.be.equals("0");

            const totalRewardAfter = await GOVERNANCE.rewardOf(PLATFORM.address);
            await expect(totalRewardAfter).to.be.equals(
              totalReward.add(expandTo18Decimals(204)).add(expandTo18Decimals(10, 16))
            );
          } 
        });

        it("User will lose money when create config proposal. All TOMI will go to Revenue Proposal", async () => {
          if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
            const devAddr = await dev?.getAddress();
            const aliceAddress = await alice.getAddress();
            
            const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
            console.log("POOL BALANCE: " + poolBalanceBefore.toString());

            await PLATFORM?.swapExactTokensForTokens(
              expandTo18Decimals(10000000, 0),
              "4975010060039920000",
              [TOMI.address, WETH.address, USDT.address],
              aliceAddress,
              Math.trunc(Date.now() / 1000) + 20000, 
            );


            const tx1 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), "nana", "momo");
            const receipt1 = await tx1.wait();
            const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];
            const ballotAddr = event && event.args && event.args[event.args.length - 2];
            // const ballotContract = new TomiBallot__factory(alice).attach(ballotAddr);
 
            const totalReward = await GOVERNANCE.rewardOf(PLATFORM.address);

            const balanceOf = await GOVERNANCE.balanceOf(aliceAddress);
            expect(balanceOf).to.be.equals("0");

            await GOVERNANCE.vote(ballotAddr, "1", expandTo18Decimals(10));

            const totalRewardAfter = await GOVERNANCE.rewardOf(PLATFORM.address);

            expect(totalRewardAfter).to.be.equals(totalReward.add(expandTo18Decimals(10)));
         
            const tx2 = await GOVERNANCE.createRevenueBallot("BIPP", "GOD OF WAR");
            const receipt2 = await tx2.wait();
            const event2 = receipt2 && receipt2.events && receipt2.events[receipt2.events.length - 1];
            const ballotAddr2 = event2 && event2.args && event2.args[event2.args.length - 2];

            expect(await GOVERNANCE.rewardOf(ballotAddr2)).to.be.equals(totalReward.add(expandTo18Decimals(10)));
            expect(await GOVERNANCE.ballotOf(ballotAddr2)).to.be.equals(totalReward.add(expandTo18Decimals(10)));
          }
        });

        it("User can't collect reward from Normal Proposal", async () => {
          if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
            const devAddr = await dev?.getAddress();
            const aliceAddress = await alice.getAddress();
            
            const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
            console.log("POOL BALANCE: " + poolBalanceBefore.toString());

            await PLATFORM?.swapExactTokensForTokens(
              expandTo18Decimals(10000000, 0),
              "4975010060039920000",
              [TOMI.address, WETH.address, USDT.address],
              aliceAddress,
              Math.trunc(Date.now() / 1000) + 20000, 
            );

            const tx1 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), "nana", "momo");
            const receipt1 = await tx1.wait();
            const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];
            const ballotAddr = event && event.args && event.args[event.args.length - 2];
           
            await GOVERNANCE.vote(ballotAddr, "1", expandTo18Decimals(5, 16));

            await network.provider.send("evm_increaseTime", [700]);

            await expect(GOVERNANCE.collectReward(ballotAddr)).to.be.revertedWith("TomiGovernance::Fail due to wrong ballot");
          }
        });

        it("User can collect reward from Revenue Proposal If they participated", async () => {
          if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
            const devAddr = await dev?.getAddress();
            const aliceAddress = await alice.getAddress();
            
            const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
            console.log("POOL BALANCE: " + poolBalanceBefore.toString());

            await PLATFORM?.swapExactTokensForTokens(
              expandTo18Decimals(10000000, 0),
              "4975010060039920000",
              [TOMI.address, WETH.address, USDT.address],
              aliceAddress,
              Math.trunc(Date.now() / 1000) + 20000, 
            );

            const tx1 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), "nana", "momo");
            const receipt1 = await tx1.wait();
            const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];
            const ballotAddr = event && event.args && event.args[event.args.length - 2];
           
            await GOVERNANCE.vote(ballotAddr, "1", expandTo18Decimals(5, 16));

            await expect(GOVERNANCE.collectReward(ballotAddr)).to.be.revertedWith("TomiGovernance: NOT_YET_ENDED");
          
            const tx2 = await GOVERNANCE.createRevenueBallot("1234", "zxczxc");
            const receipt2 = await tx2.wait();
            const event2 = receipt2 && receipt2.events && receipt2.events[receipt2.events.length - 1];
            const ballotAddr2 = event2 && event2.args && event2.args[event2.args.length - 2];
      
            const totalRewardAfter = await GOVERNANCE.rewardOf(ballotAddr2);

            await GOVERNANCE.connect(dev).participate(ballotAddr2, expandTo18Decimals(10));
          
            await network.provider.send("evm_increaseTime", [700]);

            await expect(GOVERNANCE.connect(dev).collectReward(ballotAddr2))
            .to.be.emit(GOVERNANCE, "RewardCollected")
            .withArgs(devAddr, ballotAddr2, totalRewardAfter);
            const devBalance = await GOVERNANCE.balanceOf(devAddr); 
            expect(devBalance).to.be.equals(totalRewardAfter.add(expandTo18Decimals(10)));
          }
        });

        it("User can't withdraw TOMI before execution time If they participated", async () => {
          if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
            const devAddr = await dev?.getAddress();
            const aliceAddress = await alice.getAddress();
            
            const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
            console.log("POOL BALANCE: " + poolBalanceBefore.toString());

            await PLATFORM?.swapExactTokensForTokens(
              expandTo18Decimals(10000000, 0),
              "4975010060039920000",
              [TOMI.address, WETH.address, USDT.address],
              aliceAddress,
              Math.trunc(Date.now() / 1000) + 20000, 
            );

            const tx1 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), "nana", "momo");
            const receipt1 = await tx1.wait();
            const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];
            const ballotAddr = event && event.args && event.args[event.args.length - 2];
           
            await GOVERNANCE.vote(ballotAddr, "1", expandTo18Decimals(5, 16));

            await expect(GOVERNANCE.collectReward(ballotAddr)).to.be.revertedWith("TomiGovernance: NOT_YET_ENDED");
          
            const tx2 = await GOVERNANCE.createRevenueBallot("1234", "zxczxc");
            const receipt2 = await tx2.wait();
            const event2 = receipt2 && receipt2.events && receipt2.events[receipt2.events.length - 1];
            const ballotAddr2 = event2 && event2.args && event2.args[event2.args.length - 2];
      
            const totalRewardAfter = await GOVERNANCE.rewardOf(ballotAddr2);

            await GOVERNANCE.connect(dev).participate(ballotAddr2, expandTo18Decimals(10));
          
            await network.provider.send("evm_increaseTime", [300]);

            await expect(GOVERNANCE.connect(dev).collectReward(ballotAddr2))
            .to.be.emit(GOVERNANCE, "RewardCollected")
            .withArgs(devAddr, ballotAddr2, totalRewardAfter);
            const devBalance = await GOVERNANCE.balanceOf(devAddr); 
            expect(devBalance).to.be.equals(totalRewardAfter.add(expandTo18Decimals(10)));
          
            await expect(GOVERNANCE.connect(dev).withdraw(expandTo18Decimals(1))).to.be.revertedWith("TgasStaking: NOT_DUE");
          }
        });

        it("User can use existing TOMI locked in Governance for voting other proposals", async () => {
          if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
            const devAddr = await dev?.getAddress();
            const aliceAddress = await alice.getAddress();
            
            const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
            console.log("POOL BALANCE: " + poolBalanceBefore.toString());

            await PLATFORM?.swapExactTokensForTokens(
              expandTo18Decimals(10000000, 0),
              "4975010060039920000",
              [TOMI.address, WETH.address, USDT.address],
              aliceAddress,
              Math.trunc(Date.now() / 1000) + 20000, 
            );

            const TOMIBalance = await TOMI.balanceOf(devAddr);

            await GOVERNANCE.connect(dev).deposit(expandTo18Decimals(10));

            const tx1 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), "nana", "momo");
            const receipt1 = await tx1.wait();
            const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];
            const ballotAddr = event && event.args && event.args[event.args.length - 2];
           
            await GOVERNANCE.connect(dev).vote(ballotAddr, "1", expandTo18Decimals(2));

            await expect(await GOVERNANCE.balanceOf(devAddr)).to.be.equals(expandTo18Decimals(8));
         
            const tx2 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), "nana", "momo");
            const receipt2 = await tx2.wait();
            const event2 = receipt2 && receipt2.events && receipt2.events[receipt2.events.length - 1];
            const ballotAddr2 = event2 && event2.args && event2.args[event2.args.length - 2];

            await GOVERNANCE.connect(dev).vote(ballotAddr2, "1", expandTo18Decimals(10));

            await expect(await GOVERNANCE.balanceOf(devAddr)).to.be.equals(expandTo18Decimals(0));
            await expect(await TOMI.balanceOf(devAddr)).to.be.equals(TOMIBalance.sub(expandTo18Decimals(12)));
          }
        });

        // xit("Others voter will be able to vote Proposal through Governance without staking collateral before", async () => {
        //   if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
        //     const devAddr = await dev?.getAddress();
        //     const aliceAddress = await alice.getAddress();
            
        //     const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
        //     console.log("POOL BALANCE: " + poolBalanceBefore.toString());

        //     await PLATFORM?.swapExactTokensForTokens(
        //       expandTo18Decimals(10000000, 0),
        //       "4975010060039920000",
        //       [TOMI.address, WETH.address, USDT.address],
        //       aliceAddress,
        //       Math.trunc(Date.now() / 1000) + 20000, 
        //     );

        //     const tx1 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
        //     const receipt1 = await tx1.wait();
        //     const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];
        //     const ballotAddr = event && event.args && event.args[event.args.length - 2];
        //     const ballotContract = new TomiBallot__factory(alice).attach(ballotAddr);

        //     const tx2 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
        //     const receipt2 = await tx2.wait();
        //     const event2 = receipt2 && receipt2.events && receipt2.events[receipt2.events.length - 1];
        //     const ballotAddr2 = event2 && event2.args && event2.args[event2.args.length - 2];
        //     const ballotContract2 = new TomiBallot__factory(alice).attach(ballotAddr2);

        //     await TOMI.approve(GOVERNANCE.address, expandTo18Decimals(10000, 18))
        //     await TOMI.connect(dev).approve(GOVERNANCE.address, expandTo18Decimals(10000, 18))

        //     const totalReward = await GOVERNANCE.rewardOf(ballotAddr2);

        //     console.log("TOTAL REWARD", totalReward.toString());

        //     const balanceOf = await TOMI.balanceOf(devAddr);

        //     console.log("BALANCE OF BEFORE VOTING: " + balanceOf.toString())

        //     await GOVERNANCE.connect(dev).vote(ballotAddr, 1, expandTo18Decimals(1, 18));
        //     await GOVERNANCE.connect(dev).vote(ballotAddr2, 1, expandTo18Decimals(10, 18));
        //     await GOVERNANCE.vote(ballotAddr, 2, expandTo18Decimals(210, 18));

        //     const balanceOfAfterParticipated = await TOMI.balanceOf(devAddr); 

        //     console.log("BALANCE OF AFTER VOTING: " + balanceOfAfterParticipated.toString())

        //     expect(balanceOfAfterParticipated.toString()).to.be.equals("750000000000000000000000000");

        //     await runBlock(5);

        //     const collateralStaking = await GOVERNANCE.balanceOf(devAddr);

        //     console.log("COLLATERAL CURRENT: " + collateralStaking.toString());

        //     await GOVERNANCE.connect(dev).collectReward(ballotAddr2, false);

        //     const collateralStakingAfter = await GOVERNANCE.balanceOf(devAddr);

        //     console.log("COLLATERAL AFTER: " + collateralStakingAfter.toString());
            
        //     await expect(collateralStakingAfter.toString()).to.be.equals(collateralStaking.add(totalReward)); 
        //   } 
        // });

        // xit("Others voter will not be able to vote Proposal on behalf of others through Governance", async () => {
        //   if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
        //     const devAddr = await dev?.getAddress();
        //     const aliceAddress = await alice.getAddress();
            
        //     const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
        //     console.log("POOL BALANCE: " + poolBalanceBefore.toString());

        //     await PLATFORM?.swapExactTokensForTokens(
        //       expandTo18Decimals(10000000, 0),
        //       "4975010060039920000",
        //       [TOMI.address, WETH.address, USDT.address],
        //       aliceAddress,
        //       Math.trunc(Date.now() / 1000) + 20000, 
        //     );

        //     const tx1 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
        //     const receipt1 = await tx1.wait();
        //     const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];
        //     const ballotAddr = event && event.args && event.args[event.args.length - 2];

        //     const tx2 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
        //     const receipt2 = await tx2.wait();
        //     const event2 = receipt2 && receipt2.events && receipt2.events[receipt2.events.length - 1];
        //     const ballotAddr2 = event2 && event2.args && event2.args[event2.args.length - 2];
        //     const ballotContract2 = new TomiBallot__factory(alice).attach(ballotAddr2);

        //     await TOMI.approve(GOVERNANCE.address, expandTo18Decimals(10000, 18))
        //     await TOMI.connect(dev).approve(GOVERNANCE.address, expandTo18Decimals(10000, 18))

        //     const totalReward = await GOVERNANCE.rewardOf(ballotAddr2);

        //     console.log("TOTAL REWARD", totalReward.toString());

        //     await expect(ballotContract2.connect(dev).voteByGovernor(await alice.getAddress(), "1")).to.be.revertedWith("TomiBallot: FORBIDDEN");
        //   } 
        // });

        // xit("Others voter will not be able to vote Revenue Proposal on behalf of others through Governance", async () => {
        //   if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
        //     const aliceAddress = await alice.getAddress();
            
        //     const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
        //     console.log("POOL BALANCE: " + poolBalanceBefore.toString());

        //     await PLATFORM?.swapExactTokensForTokens(
        //       expandTo18Decimals(10000000, 0),
        //       "4975010060039920000",
        //       [TOMI.address, WETH.address, USDT.address],
        //       aliceAddress,
        //       Math.trunc(Date.now() / 1000) + 20000, 
        //     );

        //     const tx2 = await GOVERNANCE.createRevenueBallot(expandTo18Decimals(100), true, "BIPP", "GOD OF WAR");
        //     const receipt2 = await tx2.wait();
        //     const event2 = receipt2 && receipt2.events && receipt2.events[receipt2.events.length - 1];
        //     const ballotAddr2 = event2 && event2.args && event2.args[event2.args.length - 2];
        //     const ballotContract2 = new TomiBallotRevenue__factory(alice).attach(ballotAddr2);

        //     const tx1 = await GOVERNANCE.createRevenueBallot(expandTo18Decimals(100), true, "nana", "momo");
        //     const receipt1 = await tx1.wait();
        //     const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];

        //     await TOMI.approve(GOVERNANCE.address, expandTo18Decimals(10000, 18))
        //     await TOMI.connect(dev).approve(GOVERNANCE.address, expandTo18Decimals(10000, 18))

        //     const totalReward = await GOVERNANCE.rewardOf(ballotAddr2);

        //     console.log("TOTAL REWARD", totalReward.toString());

        //     await expect(ballotContract2.connect(dev).participateByGovernor(await alice.getAddress())).to.be.revertedWith("TomiBallot: FORBIDDEN");
        //   } 
        // });

        // xit("Others voter will not be able to vote Revenue Proposal on behalf of others through Governance", async () => {
        //   if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
        //     const devAddr = await dev?.getAddress();
        //     const aliceAddress = await alice.getAddress();
            
        //     const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
        //     console.log("POOL BALANCE: " + poolBalanceBefore.toString());

        //     await PLATFORM?.swapExactTokensForTokens(
        //       expandTo18Decimals(10000000, 0),
        //       "4975010060039920000",
        //       [TOMI.address, WETH.address, USDT.address],
        //       aliceAddress,
        //       Math.trunc(Date.now() / 1000) + 20000, 
        //     );

        //     const tx1 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
        //     const receipt1 = await tx1.wait();
        //     const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];
        //     const ballotAddr = event && event.args && event.args[event.args.length - 2];
        //     const ballotContract = new TomiBallot__factory(alice).attach(ballotAddr);

        //     const tx2 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
        //     const receipt2 = await tx2.wait();
        //     const event2 = receipt2 && receipt2.events && receipt2.events[receipt2.events.length - 1];
        //     const ballotAddr2 = event2 && event2.args && event2.args[event2.args.length - 2];
        //     const ballotContract2 = new TomiBallot__factory(alice).attach(ballotAddr2);

        //     await TOMI.approve(GOVERNANCE.address, expandTo18Decimals(10000, 18))
        //     await TOMI.connect(dev).approve(GOVERNANCE.address, expandTo18Decimals(10000, 18))

        //     const totalReward = await GOVERNANCE.rewardOf(ballotAddr2);

        //     console.log("TOTAL REWARD", totalReward.toString());

        //     const balanceOf = await TOMI.balanceOf(devAddr);

        //     console.log("BALANCE OF BEFORE VOTING: " + balanceOf.toString())

        //     await GOVERNANCE.connect(dev).vote(ballotAddr, 1, expandTo18Decimals(1, 18));
        //     await GOVERNANCE.connect(dev).vote(ballotAddr2, 1, expandTo18Decimals(1, 18));
        //     await GOVERNANCE.vote(ballotAddr, 2, expandTo18Decimals(210, 18));

        //     const balanceOfAfterParticipated = await TOMI.balanceOf(devAddr); 

        //     console.log("BALANCE OF AFTER VOTING: " + balanceOfAfterParticipated.toString())

        //     expect(balanceOfAfterParticipated.toString()).to.be.equals(balanceOf.sub("1000000000000000000"));

        //     await runBlock(5);

        //     const collateralStaking = await GOVERNANCE.balanceOf(devAddr);

        //     console.log("COLLATERAL CURRENT: " + collateralStaking.toString());

        //     await GOVERNANCE.connect(dev).collectReward(ballotAddr2, false);

        //     const collateralStakingAfter = await GOVERNANCE.balanceOf(devAddr);

        //     console.log("COLLATERAL AFTER: " + collateralStakingAfter.toString());
            
        //     await expect(collateralStakingAfter.toString()).to.be.equals(collateralStaking.add(totalReward)); 
        //   } 
        // });

        // it("Voters will not be able to vote Proposal after voting time", async () => {
        //   if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
        //     const devAddr = await dev?.getAddress();
        //     const aliceAddress = await alice.getAddress();
            
        //     const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
        //     console.log("POOL BALANCE: " + poolBalanceBefore.toString());

        //     await PLATFORM?.swapExactTokensForTokens(
        //       expandTo18Decimals(10000000, 0),
        //       "4975010060039920000",
        //       [TOMI.address, WETH.address, USDT.address],
        //       aliceAddress,
        //       Math.trunc(Date.now() / 1000) + 20000, 
        //     );

        //     const tx1 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
        //     const receipt1 = await tx1.wait();
        //     const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];
        //     const ballotAddr = event && event.args && event.args[event.args.length - 2];

        //     const tx2 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
        //     const receipt2 = await tx2.wait();
        //     const event2 = receipt2 && receipt2.events && receipt2.events[receipt2.events.length - 1];
        //     const ballotAddr2 = event2 && event2.args && event2.args[event2.args.length - 2];

        //     await TOMI.approve(GOVERNANCE.address, expandTo18Decimals(10000, 18))
        //     await TOMI.connect(dev).approve(GOVERNANCE.address, expandTo18Decimals(10000, 18))

        //     const totalReward = await GOVERNANCE.rewardOf(ballotAddr2);

        //     console.log("TOTAL REWARD", totalReward.toString());

        //     const balanceOf = await TOMI.balanceOf(devAddr);

        //     console.log("BALANCE OF BEFORE VOTING: " + balanceOf.toString())

        //     await GOVERNANCE.connect(dev).vote(ballotAddr, 1, expandTo18Decimals(1, 18));
        //     await GOVERNANCE.connect(dev).vote(ballotAddr2, 1, expandTo18Decimals(1, 18));

        //     await network.provider.send("evm_increaseTime", [500]);

        //     await expect(GOVERNANCE.vote(ballotAddr2, 2, expandTo18Decimals(210, 18))).to.be.revertedWith("Ballot is ended");
        //     await expect(GOVERNANCE.vote(ballotAddr, 2, expandTo18Decimals(210, 18))).to.be.revertedWith("Ballot is ended");
        //   } 
        // });

        // it("Voters will be able to vote Proposal in voting time", async () => {
        //   if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
        //     const devAddr = await dev?.getAddress();
        //     const aliceAddress = await alice.getAddress();
            
        //     const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
        //     console.log("POOL BALANCE: " + poolBalanceBefore.toString());

        //     await PLATFORM?.swapExactTokensForTokens(
        //       expandTo18Decimals(10000000, 0),
        //       "4975010060039920000",
        //       [TOMI.address, WETH.address, USDT.address],
        //       aliceAddress,
        //       Math.trunc(Date.now() / 1000) + 40000, 
        //     );

        //     const tx1 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
        //     const receipt1 = await tx1.wait();
        //     const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];
        //     const ballotAddr = event && event.args && event.args[event.args.length - 2];

        //     const tx2 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
        //     const receipt2 = await tx2.wait();
        //     const event2 = receipt2 && receipt2.events && receipt2.events[receipt2.events.length - 1];
        //     const ballotAddr2 = event2 && event2.args && event2.args[event2.args.length - 2];

        //     await TOMI.approve(GOVERNANCE.address, expandTo18Decimals(10000, 18))
        //     await TOMI.connect(dev).approve(GOVERNANCE.address, expandTo18Decimals(10000, 18))

        //     const totalReward = await GOVERNANCE.rewardOf(ballotAddr2);

        //     console.log("TOTAL REWARD", totalReward.toString());

        //     const balanceOf = await TOMI.balanceOf(devAddr);

        //     console.log("BALANCE OF BEFORE VOTING: " + balanceOf.toString())

        //     await GOVERNANCE.connect(dev).vote(ballotAddr, 1, expandTo18Decimals(1, 18));
        //     await GOVERNANCE.connect(dev).vote(ballotAddr2, 1, expandTo18Decimals(1, 18));

        //     await network.provider.send("evm_increaseTime", [200]);

        //     await expect(GOVERNANCE.vote(ballotAddr2, 2, expandTo18Decimals(210, 18))).to.not.be.revertedWith("Ballot is ended");
        //     await expect(GOVERNANCE.vote(ballotAddr, 2, expandTo18Decimals(210, 18))).to.not.be.revertedWith("Ballot is ended");
        //   } 
        // });

        // it("Proposer will not be able to execute Proposal before Execution time", async () => {
        //   if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
        //     const devAddr = await dev?.getAddress();
        //     const aliceAddress = await alice.getAddress();
            
        //     const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
        //     console.log("POOL BALANCE: " + poolBalanceBefore.toString());

        //     await PLATFORM?.swapExactTokensForTokens(
        //       expandTo18Decimals(10000000, 0),
        //       "4975010060039920000",
        //       [TOMI.address, WETH.address, USDT.address],
        //       aliceAddress,
        //       Math.trunc(Date.now() / 1000) + 40000, 
        //     );

        //     const tx1 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
        //     const receipt1 = await tx1.wait();
        //     const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];
        //     const ballotAddr = event && event.args && event.args[event.args.length - 2];

        //     const tx2 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
        //     const receipt2 = await tx2.wait();
        //     const event2 = receipt2 && receipt2.events && receipt2.events[receipt2.events.length - 1];
        //     const ballotAddr2 = event2 && event2.args && event2.args[event2.args.length - 2];

        //     await TOMI.approve(GOVERNANCE.address, expandTo18Decimals(10000, 18))
        //     await TOMI.connect(dev).approve(GOVERNANCE.address, expandTo18Decimals(10000, 18))

        //     const totalReward = await GOVERNANCE.rewardOf(ballotAddr2);

        //     console.log("TOTAL REWARD", totalReward.toString());

        //     const balanceOf = await TOMI.balanceOf(devAddr);

        //     console.log("BALANCE OF BEFORE VOTING: " + balanceOf.toString())

        //     await GOVERNANCE.connect(dev).vote(ballotAddr, 1, expandTo18Decimals(1, 18));
        //     await GOVERNANCE.connect(dev).vote(ballotAddr2, 1, expandTo18Decimals(1, 18));

        //     await network.provider.send("evm_increaseTime", [400]);
            
        //     await expect(GOVERNANCE.auditConfig(ballotAddr)).to.be.revertedWith("ballot not yet ended");
        //   } 
        // });

        // it("Proposer will be able to execute Proposal after Execution time", async () => {
        //   if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
        //     const devAddr = await dev?.getAddress();
        //     const aliceAddress = await alice.getAddress();
            
        //     const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
        //     console.log("POOL BALANCE: " + poolBalanceBefore.toString());

        //     await PLATFORM?.swapExactTokensForTokens(
        //       expandTo18Decimals(10000000, 0),
        //       "4975010060039920000",
        //       [TOMI.address, WETH.address, USDT.address],
        //       aliceAddress,
        //       Math.trunc(Date.now() / 1000) + 40000, 
        //     );

        //     const tx1 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
        //     const receipt1 = await tx1.wait();
        //     const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];
        //     const ballotAddr = event && event.args && event.args[event.args.length - 2];

        //     const tx2 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
        //     const receipt2 = await tx2.wait();
        //     const event2 = receipt2 && receipt2.events && receipt2.events[receipt2.events.length - 1];
        //     const ballotAddr2 = event2 && event2.args && event2.args[event2.args.length - 2];

        //     await TOMI.approve(GOVERNANCE.address, expandTo18Decimals(10000, 18))
        //     await TOMI.connect(dev).approve(GOVERNANCE.address, expandTo18Decimals(10000, 18))

        //     const totalReward = await GOVERNANCE.rewardOf(ballotAddr2);

        //     console.log("TOTAL REWARD", totalReward.toString());

        //     const balanceOf = await TOMI.balanceOf(devAddr);

        //     console.log("BALANCE OF BEFORE VOTING: " + balanceOf.toString())

        //     await GOVERNANCE.connect(dev).vote(ballotAddr, 1, expandTo18Decimals(1, 18));
        //     await GOVERNANCE.connect(dev).vote(ballotAddr2, 1, expandTo18Decimals(1, 18));

        //     await network.provider.send("evm_increaseTime", [600]);
            
        //     await expect(GOVERNANCE.auditConfig(ballotAddr2)).to.be.emit(GOVERNANCE, "ConfigAudited");
        //   } 
        // });

        // it("Voter will not be able to redeem TOMI in lockTime", async () => {
        //   if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
        //     const aliceAddress = await alice.getAddress();
            
        //     const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
        //     console.log("POOL BALANCE: " + poolBalanceBefore.toString());

        //     await PLATFORM?.swapExactTokensForTokens(
        //       expandTo18Decimals(10000000, 0),
        //       "4975010060039920000",
        //       [TOMI.address, WETH.address, USDT.address],
        //       aliceAddress,
        //       Math.trunc(Date.now() / 1000) + 40000, 
        //     );

        //     const tx2 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
        //     const receipt2 = await tx2.wait();
        //     const event2 = receipt2 && receipt2.events && receipt2.events[receipt2.events.length - 1];
        //     const ballotAddr2 = event2 && event2.args && event2.args[event2.args.length - 2];

        //     await TOMI.approve(GOVERNANCE.address, expandTo18Decimals(10000, 18))
        //     await TOMI.connect(dev).approve(GOVERNANCE.address, expandTo18Decimals(10000, 18))

        //     const tx3 = await GOVERNANCE.deposit(expandTo18Decimals(1));
        //     const receipt = await tx3.wait();
        //     const blockHash = receipt && receipt.blockHash;

        //     const allowance = await GOVERNANCE.allowance(aliceAddress);
        //     const lockTime = await GOVERNANCE.lockTime();

        //     const block = await network.provider.send("eth_getBlockByHash", [blockHash, true]);
        //     const blockTimestamp = block.timestamp;

        //     expect(allowance).to.be.equals(lockTime.add(blockTimestamp));

        //     const tx1 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
        //     const receipt1 = await tx1.wait();
        //     const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];
        //     const ballotAddr = event && event.args && event.args[event.args.length - 2];
        //     const ballotContract = new TomiBallot__factory(alice).attach(ballotAddr);

        //     // const executionTime = await ballotContract.executionTime();
        //     const allowanceAfterCreateConfig = await GOVERNANCE.allowance(aliceAddress);

        //     expect(allowanceAfterCreateConfig).to.be.equals(allowance);

        //     await GOVERNANCE.vote(ballotAddr2, 1, expandTo18Decimals(210));

        //     const allowanceAfterVoting = await GOVERNANCE.allowance(aliceAddress);
          
        //     expect(allowanceAfterVoting).to.be.equals(allowance);

        //     await expect(GOVERNANCE.withdraw(expandTo18Decimals(1))).to.be.revertedWith("TgasStaking: NOT_DUE");
        //   } 
        // });

        // it("Voter will be able to redeem TOMI after lockTime", async () => {
        //   if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice && dev) {
        //     const devAddr = await dev?.getAddress();
        //     const aliceAddress = await alice.getAddress();
            
        //     const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
        //     console.log("POOL BALANCE: " + poolBalanceBefore.toString());

        //     await PLATFORM?.swapExactTokensForTokens(
        //       expandTo18Decimals(10000000, 0),
        //       "4975010060039920000",
        //       [TOMI.address, WETH.address, USDT.address],
        //       aliceAddress,
        //       Math.trunc(Date.now() / 1000) + 40000, 
        //     );

        //     await TOMI.approve(GOVERNANCE.address, expandTo18Decimals(10000, 18))
        //     await TOMI.connect(dev).approve(GOVERNANCE.address, expandTo18Decimals(10000, 18))

        //     const tx3 = await GOVERNANCE.deposit(expandTo18Decimals(1));
        //     const receipt = await tx3.wait();
        //     const blockHash = receipt && receipt.blockHash;

        //     const allowance = await GOVERNANCE.allowance(aliceAddress);
        //     const lockTime = await GOVERNANCE.lockTime();

        //     const block = await network.provider.send("eth_getBlockByHash", [blockHash, true]);
        //     const blockTimestamp = block.timestamp;

        //     expect(allowance).to.be.equals(lockTime.add(blockTimestamp));

        //     await network.provider.send("evm_increaseTime", [1000]);

        //     const tx1 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
        //     const receipt1 = await tx1.wait();
        //     const event = receipt1 && receipt1.events && receipt1.events[receipt1.events.length - 1];
        //     const ballotAddr = event && event.args && event.args[event.args.length - 2];
        //     const ballotContract = new TomiBallot__factory(alice).attach(ballotAddr);

        //     const tx2 = await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
        //     const receipt2 = await tx2.wait();
        //     const event2 = receipt2 && receipt2.events && receipt2.events[receipt2.events.length - 1];
        //     const ballotAddr2 = event2 && event2.args && event2.args[event2.args.length - 2];
        //     const ballotContract2 = new TomiBallot__factory(alice).attach(ballotAddr2);

        //     const executionTime = await ballotContract2.executionTime();
        //     const allowanceAfterCreateConfig = await GOVERNANCE.allowance(aliceAddress);

        //     expect(allowanceAfterCreateConfig).to.be.equals(executionTime);

        //     await GOVERNANCE.vote(ballotAddr2, 1, expandTo18Decimals(210));

        //     const allowanceAfterVoting = await GOVERNANCE.allowance(aliceAddress);
          
        //     expect(allowanceAfterVoting).to.be.equals(executionTime);

        //     await network.provider.send("evm_increaseTime", [600]);

        //     await expect(GOVERNANCE.withdraw(expandTo18Decimals(1))).not.to.be.revertedWith("TgasStaking: NOT_DUE");
         
        //     const balanceOf = await GOVERNANCE.balanceOf(aliceAddress);
        //     expect(balanceOf.toString()).to.be.equals(expandTo18Decimals(209));
        //   } 
        // });
    });
});
