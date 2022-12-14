/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BaseToken } from "../BaseToken";

export class BaseToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<BaseToken> {
    return super.deploy(overrides || {}) as Promise<BaseToken>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BaseToken {
    return super.attach(address) as BaseToken;
  }
  connect(signer: Signer): BaseToken__factory {
    return super.connect(signer) as BaseToken__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseToken {
    return new Contract(address, _abi, signerOrProvider) as BaseToken;
  }
}

const _abi = [
  {
    inputs: [],
    name: "baseToken",
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
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060ae8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063c55dae6314602d575b600080fd5b6033605c565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60005473ffffffffffffffffffffffffffffffffffffffff168156fea2646970667358221220ceebeac35a2f7d4875fe492b3a2469df6678173129370049ca4c68a00107048364736f6c63430006060033";
