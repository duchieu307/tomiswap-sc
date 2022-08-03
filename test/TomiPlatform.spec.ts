import { ethers, network } from "hardhat";
import {
    expandTo18Decimals,
  } from './shared/utilities'
import { expect } from "chai";
import { Signer } from "ethers";
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
import { TomiPair } from '../types/TomiPair';
import { TomiPair__factory } from '../types/factories/TomiPair__factory';
import { TomiLP } from '../types/TomiLP';
import { TomiLP__factory } from '../types/factories/TomiLP__factory';
import { WETH9 } from '../types/WETH9';
import { WETH9__factory } from '../types/factories/WETH9__factory';
import { USDT } from '../types/USDT';
import { USDT__factory } from '../types/factories/USDT__factory';
import { TomiBallot } from '../types/TomiBallot';
import { TomiBallot__factory } from '../types/factories/TomiBallot__factory';
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
    let TOMI: ERC20 | undefined;
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
              TOMI = await new ERC20__factory(alice).deploy(expandTo18Decimals(100000000000), "TOMI", "TOMI");
              console.log("TOMI: " + TOMI.address);
              TOKENA = await new ERC20__factory(alice).deploy(expandTo18Decimals(100000000000), "Token A", "A");
              console.log("TOKENA: " + TOKENA.address);
              TOKENB = await new ERC20__factory(alice).deploy(expandTo18Decimals(100000000000), "Token B", "B");
              console.log("TOKENB: " + TOKENB.address);
              USDT = await new USDT__factory(alice).deploy();
              console.log("USDT: " + USDT.address);
              GOVERNANCE = await new TomiGovernance__factory(alice).deploy(TOMI.address);
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
              await TRANSFER_LISTENER.initialize(TOKENA.address, FACTORY.address, WETH.address, PLATFORM.address, aliceAddress)
              await GOVERNANCE.initialize(PLATFORM.address, CONFIG.address, BALLOT_FACTORY.address)
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
              await CONFIG.changeConfig("0x564f54455f4455524154494f4e00000000000000000000000000000000000000", 5, 10, 1, 5);
              await CONFIG.changeConfig("0x50524f504f53414c5f544741535f414d4f554e54000000000000000000000000", 0, expandTo18Decimals(100), 250, expandTo18Decimals(100));
              
              // await TGAS.upgradeImpl(TRANSFER_LISTENER.address)
              await WETH.deposit({ value: expandTo18Decimals(1) });
            }
        } catch (err) {
            console.log(err.message);
        }
    });

    describe("TomiPlatform Revenue", async () => {
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

        it("Tomi LP will claimed reward after Add/Remove Liquidity", async () => {
          if (TOMI && USDT && FUNDING && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice) {
            await TOMI.approve(DELEGATE.address, expandTo18Decimals(10000, 18))
            await TOMI.approve(PLATFORM.address, expandTo18Decimals(10000, 18))
            await WETH.approve(DELEGATE.address, expandTo18Decimals(10000, 18))
            await WETH.approve(PLATFORM.address, expandTo18Decimals(10000, 18))
            await USDT.approve(DELEGATE.address, expandTo18Decimals(10000, 18))

            const tx = await DELEGATE.connect(alice).addLiquidity(
              WETH.address,
              TOMI.address,
              expandTo18Decimals(5),
              expandTo18Decimals(5),
              expandTo18Decimals(0),
              expandTo18Decimals(0),
              Math.trunc(Date.now() / 1000) + 100000000,
            )

            const receipt = await tx.wait();

            await DELEGATE.addLiquidity(
              USDT.address,
              TOMI.address,
              expandTo18Decimals(5),
              expandTo18Decimals(5),
              expandTo18Decimals(5),
              expandTo18Decimals(5),
              Math.trunc(Date.now() / 1000) + 10000,
            )

            await DELEGATE.addLiquidity(
              WETH.address,
              USDT.address,
              expandTo18Decimals(5),
              expandTo18Decimals(5),
              expandTo18Decimals(5),
              expandTo18Decimals(5),
              Math.trunc(Date.now() / 1000) + 10000,
            )
          
            const lpAddress =  receipt && receipt.events && receipt.events[0].args && receipt.events[0].args[2];
            console.log("LP: ", lpAddress);
            const pairContract = await getPairContract(TOMI.address, WETH.address)
            // pairContract && await TRANSFER_LISTENER.updatePairPowers([pairContract.address], [2]);
          
            const aliceAddress = await alice.getAddress();

            console.log("pairAddress: " + pairContract?.address);

            const totalSupply = pairContract && await pairContract?.totalSupply();
            console.log("TOTAL SUPPLY: " + totalSupply?.toString());

            const poolBalanceBefore = await TOMI.balanceOf(POOL.address);
            console.log("POOL BALANCE: " + poolBalanceBefore.toString());

            await PLATFORM?.swapExactTokensForTokens(
              expandTo18Decimals(1),
              "0",
              [TOMI.address, WETH.address, USDT.address],
              aliceAddress,
              Math.trunc(Date.now() / 1000) + 20000, 
            );

            await PLATFORM?.swapExactTokensForTokens(
              expandTo18Decimals(10),
              "0",
              [TOMI.address, WETH.address, USDT.address],
              aliceAddress,
              Math.trunc(Date.now() / 1000) + 20000, 
            );

            await PLATFORM?.swapExactTokensForTokens(
              expandTo18Decimals(10),
              "0",
              [TOMI.address, WETH.address, USDT.address],
              aliceAddress,
              Math.trunc(Date.now() / 1000) + 20000, 
            );

            const reserves = pairContract && await pairContract.getReserves();
            reserves && console.log(reserves[0].toString(), reserves[1].toString());

            const lotteryBalance = await TOMI.balanceOf(CONFIG.address);
            console.log("LOTTERY BALANCE: " + lotteryBalance.toString());

            const fundingBalance = await TOMI.balanceOf(FUNDING.address);
            console.log("FUNDING BALANCE: " + fundingBalance.toString());

            const governanceBalance = await TOMI.balanceOf(GOVERNANCE.address);
            console.log("GOVERNANCE BALANCE: " + governanceBalance.toString());

            const poolBalance = await TOMI.balanceOf(POOL.address);
            console.log("POOL BALANCE: " + poolBalance.toString());
            
            const pairReward = pairContract && await POOL?.pairReward(pairContract.address);
            console.log("PAIR REWARD: " + pairReward);

            const lpBalance = await TOMI.balanceOf(lpAddress);
            
            console.log("add liquidity  usdt/eth after 20 block get dgas amount : " + lpBalance);

            const lpContract = new TomiLP__factory(alice).attach(lpAddress);

            const userReward = await lpContract.queryReward();
            console.log("USER REWARD: " + userReward.toString());
            
            await expect(lpContract.connect(alice).mintReward()).to.emit(lpContract, "Mint").withArgs(aliceAddress, userReward); 
          } 
        });
    });
});