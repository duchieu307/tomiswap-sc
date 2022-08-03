/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { UpgradableProduct } from "../UpgradableProduct";

export class UpgradableProduct__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<UpgradableProduct> {
    return super.deploy(overrides || {}) as Promise<UpgradableProduct>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UpgradableProduct {
    return super.attach(address) as UpgradableProduct;
  }
  connect(signer: Signer): UpgradableProduct__factory {
    return super.connect(signer) as UpgradableProduct__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpgradableProduct {
    return new Contract(address, _abi, signerOrProvider) as UpgradableProduct;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_oldImpl",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_newImpl",
        type: "address",
      },
    ],
    name: "ImplChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "impl",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newImpl",
        type: "address",
      },
    ],
    name: "upgradeImpl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055610251806100326000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631a2f13631461003b5780638abf607714610063575b600080fd5b6100616004803603602081101561005157600080fd5b50356001600160a01b0316610087565b005b61006b61020c565b604080516001600160a01b039092168252519081900360200190f35b6000546001600160a01b031633146100e6576040805162461bcd60e51b815260206004820152600960248201527f464f5242494444454e0000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6001600160a01b038116610141576040805162461bcd60e51b815260206004820152600f60248201527f494e56414c49445f414444524553530000000000000000000000000000000000604482015290519081900360640190fd5b6000546001600160a01b03828116911614156101a4576040805162461bcd60e51b815260206004820152600960248201527f4e4f5f4348414e47450000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917faad46b89531ed10d02d926f4d6bfe234a6126e3fffc02d3b07167575f9c143379190a35050565b6000546001600160a01b03168156fea26469706673582212201d2ccc414cb21b4c117398d6ce38da7e6054e80c4e1823db57cae951572bc18d64736f6c63430006060033";