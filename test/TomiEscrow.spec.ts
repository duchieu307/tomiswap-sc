import { ethers } from "hardhat";
import {
    expandTo18Decimals,
  } from './shared/utilities'
import { expect } from "chai";
import { Signer } from "ethers";
import { ERC20 } from '../types/ERC20';
import { ERC20__factory } from '../types/factories/ERC20__factory';
import { TomiEscrow } from '../types/TomiEscrow';
import { TomiEscrow__factory } from '../types/factories/TomiEscrow__factory';
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
// import { TomiBallot } from '../types/TomiBallot';
// import { TomiBallot__factory } from '../types/factories/TomiBallot__factory';
import { TomiBallotFactory } from '../types/TomiBallotFactory';
import { TomiBallotFactory__factory } from '../types/factories/TomiBallotFactory__factory';
import { TomiGovernance } from '../types/TomiGovernance';
import { TomiGovernance__factory } from '../types/factories/TomiGovernance__factory';
import { TomiTransferListener } from '../types/TomiTransferListener';
import { TomiTransferListener__factory } from '../types/factories/TomiTransferListener__factory';

describe("TomiEscrow", function () {
    let escrowContract: TomiEscrow | undefined;
    let delegateContract: TomiDelegate | undefined;
    let PLATFORM: TomiPlatform | undefined;
    let POOL: TomiPool | undefined;
    let WETH: WETH9 | undefined;
    let TGAS: TgasTest | undefined;
    let alice: Signer | undefined;
    let dave: Signer | undefined;

    beforeEach(async function () {
        try {
            [alice, dave] = await ethers.getSigners();

            PLATFORM = await new TomiPlatform__factory(alice).deploy();
            WETH = await new WETH9__factory(alice).deploy();
            TGAS = await new TgasTest__factory(alice).deploy();
            POOL = await new TomiPool__factory(alice).deploy();

            delegateContract = await new TomiDelegate__factory(alice).deploy(PLATFORM.address ,POOL.address, TGAS.address, WETH.address);
            const factory = new TomiEscrow__factory(alice);
            escrowContract = await factory.deploy(delegateContract.address);
        } catch (err) {
            console.log(err.message);
        }
    });

    xdescribe("Ownable TomiEscrow", async () => {
        it("Owner of TomiEscrow should be person that init contract", async () => {
            if (alice && escrowContract) {
                const aliceAddress = await alice.getAddress();
                const impl = await escrowContract.impl();
                expect(impl).to.equals(aliceAddress);
            }
        });

        it("Owner of TomiEscrow be able to upgrade impl", async () => {
            if (alice && dave && escrowContract) {
                const daveAddress = await dave.getAddress();
                await expect(escrowContract.connect(alice).upgradeImpl(daveAddress)).to.be.emit(escrowContract, "ImplChanged");
            }
        });

        it("Other persons shouldn't be able to upgrade impl", async () => {
            if (alice && dave && escrowContract) {
                const daveAddress = await dave.getAddress();
                await expect(escrowContract.connect(dave).upgradeImpl(daveAddress)).to.be.revertedWith("FORBIDDEN");
            }
        });
    });


    xdescribe("Set ShareToken", async () => {
        let mockToken: ERC20 | undefined;

        beforeEach(async () => {
            const factory = new ERC20__factory(alice);
            mockToken = await factory.deploy("100000000000000000000", "Ruin", "RUIN");
        });

        it("Other persons not be able to set share token", async () => {
            if (mockToken && dave && escrowContract) {
                await expect(escrowContract?.connect(dave).setShareToken(mockToken?.address, "1"))
                .to.be.revertedWith("FORBIDDEN");
            }
        });

        it("Owner of TomiEscrow be able to set share token", async () => {
            if (mockToken && escrowContract) {
                await expect(escrowContract?.setShareToken(mockToken?.address, "1"))
                .to.be.emit(escrowContract, "ShareTokenSettled")
                .withArgs(mockToken.address, "1");
            }
        });

        it("Owner of TomiEscrow be able to set share token with illegal rate", async () => {
            if (mockToken && escrowContract) {
                await expect(escrowContract?.setShareToken(mockToken?.address, "0"))
                .to.be.revertedWith("TomiEscrow::Share token rate is not illegal");
            }
        });

        it("Owner of TomiEscrow not be able to set existed share token", async () => {
            if (mockToken && escrowContract) {
                await escrowContract?.setShareToken(mockToken?.address, "1");
                await expect(escrowContract?.setShareToken(mockToken?.address, "1"))
                .to.be.revertedWith("TomiEscrow::Share token address already exist!");
            }
        });
    });

    describe("Deposit & Withdraw ShareToken", async () => {
        let mockToken: ERC20 | undefined;
        const depositedAmount = "1000000000000000";

        beforeEach(async () => {
            const factory = new ERC20__factory(alice);
            mockToken = await factory.deploy("100000000000000000000", "Ruin", "RUIN");
        });

        it("Other persons not be able to withdraw", async () => {
            if (mockToken && dave && escrowContract) {
                const daveAddress = await dave.getAddress();

                await escrowContract?.setShareToken(mockToken?.address, "1");
                await mockToken.transfer(escrowContract.address, depositedAmount);
                await expect(escrowContract.connect(dave).withdrawReward(mockToken.address, depositedAmount, daveAddress))
                .to.be.revertedWith("FORBIDDEN");
            }
        });

        it("Owner of TomiEscrow not be able to upgrade share token with illegal rate", async () => {
            if (mockToken && dave && escrowContract) {
                await escrowContract?.setShareToken(mockToken?.address, "1");
                await mockToken.transfer(escrowContract.address, depositedAmount);
                await expect(escrowContract.updateShareTokenRate(mockToken.address, "0"))
                .to.be.revertedWith("TomiEscrow::Share token rate is not illegal");
            }
        });

        it("Owner of TomiEscrow be able to pause contract", async () => {
            if (mockToken && dave && escrowContract) {
                await escrowContract?.setShareToken(mockToken?.address, "1");
                await escrowContract.pause();
                await expect(escrowContract.updateShareTokenRate(mockToken.address, "0"))
                .to.be.revertedWith("TomiEscrow::Share token rate is not illegal");
            }
        });

    });
});
