/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ITomiBallotFactory } from "../ITomiBallotFactory";

export class ITomiBallotFactory__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITomiBallotFactory {
    return new Contract(address, _abi, signerOrProvider) as ITomiBallotFactory;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_proposer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_executionTime",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_subject",
        type: "string",
      },
      {
        internalType: "string",
        name: "_content",
        type: "string",
      },
    ],
    name: "create",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_proposer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_executionTime",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_subject",
        type: "string",
      },
      {
        internalType: "string",
        name: "_content",
        type: "string",
      },
    ],
    name: "createShareRevenue",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
