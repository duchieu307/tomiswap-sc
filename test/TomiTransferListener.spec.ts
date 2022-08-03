import { ethers, network } from "hardhat";
import {
    expandTo18Decimals,
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
import { TomiQuery2 } from '../types/TomiQuery2';
import { TomiQuery2__factory } from '../types/factories/TomiQuery2__factory';

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
    let QUERY: TomiQuery2 | undefined;

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

                QUERY = await new TomiQuery2__factory(alice).deploy();
                console.log("QUERY: " + QUERY.address);

                FUNDING = await new TomiFunding__factory(alice).deploy(TOMI.address);
                console.log("FUNDING: " + FUNDING.address);

                await POOL.initialize(TOMI.address, WETH.address, FACTORY.address, PLATFORM.address, CONFIG.address, GOVERNANCE.address, FUNDING.address, CONFIG.address);
                await TRANSFER_LISTENER.initialize(TGAS.address, FACTORY.address, WETH.address, PLATFORM.address, aliceAddress)
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

                await QUERY.upgrade(CONFIG.address, PLATFORM.address, FACTORY.address, GOVERNANCE.address, TRANSFER_LISTENER.address, DELEGATE.address);

                await CONFIG.changeConfig("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 2000, 6000, 1000, 4000);
                await CONFIG.changeConfig("0x4645455f4c4f54544552595f5245574152445f50455243454e54000000000000", 2000, 4000, 1000, 4000);
                await CONFIG.changeConfig("0x4645455f46554e444d455f5245574152445f50455243454e5400000000000000", 2000, 4000, 1000, 4000);
                await CONFIG.changeConfig("0x564f54455f4455524154494f4e00000000000000000000000000000000000000", 5, 10, 1, 5);
                await CONFIG.changeConfig("0x50524f504f53414c5f544741535f414d4f554e54000000000000000000000000", 0, expandTo18Decimals(100), 250, expandTo18Decimals(100));

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

        it("User be able to query all proposals", async () => {
            if (TOMI && USDT && dev && QUERY && GOVERNANCE && CONFIG && DELEGATE && TRANSFER_LISTENER && WETH && POOL && PLATFORM && alice) {
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
    
                await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
                await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
                await GOVERNANCE.createConfigBallot("0x4645455f4c505f5245574152445f50455243454e540000000000000000000000", 4500, expandTo18Decimals(100), true, "nana", "momo");
                await GOVERNANCE.createRevenueBallot(expandTo18Decimals(100), true, "KOW", "KOW");
                await GOVERNANCE.createRevenueBallot(expandTo18Decimals(100), true, "KOW", "KOW");


                const list = await QUERY.queryProposalList();
                const listRevenue = await QUERY.queryRevenueProposalList();
                console.log(listRevenue);
                expect(list.length).to.be.equals(3);
                expect(listRevenue.length).to.be.equals(2);

            }
        });
    });
});
