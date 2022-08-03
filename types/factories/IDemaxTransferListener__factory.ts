/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IDemaxTransferListener } from "../IDemaxTransferListener";

export class IDemaxTransferListener__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDemaxTransferListener {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IDemaxTransferListener;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferNotify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "fromPair",
        type: "address",
      },
      {
        internalType: "address",
        name: "toPair",
        type: "address",
      },
    ],
    name: "upgradeProdutivity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];