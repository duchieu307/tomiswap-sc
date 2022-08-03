import { ethers } from "hardhat";
import {
    expandTo18Decimals,
  } from './shared/utilities'
import { expect } from "chai";
import { Signer } from "ethers";
import { ERC20 } from '../types/ERC20';
import { ERC20__factory } from '../types/factories/ERC20__factory';
import { TomiFunding } from '../types/TomiFunding';
import { TomiFunding__factory } from '../types/factories/TomiFunding__factory';


describe("TomiFunding", function () {
    let funding: TomiFunding | undefined;
    let TOMI: ERC20 | undefined;
    let alice: Signer | undefined;
    let dave: Signer | undefined;

    beforeEach(async function () {
        try {
            [alice, dave] = await ethers.getSigners();

            TOMI = await new ERC20__factory(alice).deploy(expandTo18Decimals(10000000), "TOMI", "TOMI");
            funding = await new TomiFunding__factory(alice).deploy(TOMI.address);
        } catch (err) {
            console.log(err.message);
        }
    });

    describe("Ownable TomiFunding", async () => {
        it("Owner be able to set new tomi token for claim", async () => {
            if (dave && funding) {
                let mockToken = await new ERC20__factory(dave).deploy(expandTo18Decimals(10000000), "TOMI", "TOMI");
                await expect(funding.setTomi(mockToken.address)).to.be.emit(funding, "FundingTokenSettled").withArgs(mockToken.address);
            }
        })

        it("Owner be able to grant claim role for others", async () => {
            if (dave && funding) {
                const daveAddress = await dave.getAddress();
                await expect(funding.grantClaimable(daveAddress)).to.be.emit(funding, "ClaimableGranted").withArgs(daveAddress);
            }
        })

        it("Owner be able to revoke claim role for others", async () => {
            if (dave && funding) {
                const daveAddress = await dave.getAddress();
                await funding.grantClaimable(daveAddress);
                await expect(funding.revokeClaimable(daveAddress)).to.be.emit(funding, "ClaimableRevoked").withArgs(daveAddress);
            }
        })

        it("Others not be able to set new tomi token for claim", async () => {
            if (dave && funding) {
                let mockToken = await new ERC20__factory(dave).deploy(expandTo18Decimals(10000000), "TOMI", "TOMI");
                await expect(funding.connect(dave).setTomi(mockToken.address)).to.be.revertedWith("Ownable: FORBIDDEN");
            }
        })

        it("Others not be able to grant claim role for others", async () => {
            if (dave && funding) {
                const daveAddress = await dave.getAddress();
                await expect(funding.connect(dave).grantClaimable(daveAddress)).to.be.revertedWith("Ownable: FORBIDDEN");
            }
        })

        it("Others not be able to revoke claim role from others", async () => {
            if (dave && alice &&  funding) {
                const aliceAddress = await alice.getAddress();
                await funding.grantClaimable(aliceAddress);
                await expect(funding.connect(dave).revokeClaimable(aliceAddress)).to.be.revertedWith("Ownable: FORBIDDEN");
            }
        })
    });


    describe("TomiFunding GrantRole", async () => {
        it("One user not be able to grant claimable role again", async () => {
            if (dave && TOMI && funding) {
                const daveAddress = await dave.getAddress();
                await expect(funding.grantClaimable(daveAddress)).to.be.emit(funding, "ClaimableGranted").withArgs(daveAddress);
                await expect(funding.grantClaimable(daveAddress)).to.be.revertedWith("TomiFunding::User already in claimable list!");
            }
        });

        it("Non-claimable user not be able to be revoked role", async () => {
            if (dave && TOMI && funding) {
                const daveAddress = await dave.getAddress();
                await expect(funding.revokeClaimable(daveAddress)).to.be.revertedWith("TomiFunding::User not in claimable list!");
            }
        });
    });

    describe("TomiFunding Claimable", async () => {
        it("Claimable role be able to claim TOMI token", async () => {
            if (dave && TOMI && funding) {
                const daveAddress = await dave.getAddress();
                await TOMI.transfer(funding.address, expandTo18Decimals(100));
                await funding.grantClaimable(daveAddress);
                await expect(funding.connect(dave).claim(expandTo18Decimals(10))).to.be.emit(funding, "Claimed").withArgs(daveAddress, expandTo18Decimals(10));
                const fundingRemain = await TOMI.balanceOf(funding.address);
                expect(fundingRemain).to.equals(expandTo18Decimals(90));
            }
        })

        it("Claimable role not be able to claim exceeds remaining TOMI token", async () => {
            if (dave && TOMI && funding) {
                const daveAddress = await dave.getAddress();
                await TOMI.transfer(funding.address, expandTo18Decimals(100));
                await funding.grantClaimable(daveAddress);
                await expect(funding.connect(dave).claim(expandTo18Decimals(101))).to.be.revertedWith("TomiFunding::Remain balance is not enough to claim!");
            }
        })

        it("Non-Claimable role not be able to claim TOMI token", async () => {
            if (dave && TOMI && funding) {
                const daveAddress = await dave.getAddress();
                await TOMI.transfer(funding.address, expandTo18Decimals(100));
                await funding.grantClaimable(daveAddress);
                await expect(funding.claim(expandTo18Decimals(10))).to.be.revertedWith("TomiFunding::User not in claimable list!");
                const fundingRemain = await TOMI.balanceOf(funding.address);
                expect(fundingRemain).to.equals(expandTo18Decimals(100));
            }
        })
    });
});
