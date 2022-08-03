/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IDemaxBallot } from "../IDemaxBallot";

export class IDemaxBallot__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDemaxBallot {
    return new Contract(address, _abi, signerOrProvider) as IDemaxBallot;
  }
}

const _abi = [
  {
    inputs: [],
    name: "content",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "createTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "endBlockNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ended",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proposer",
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
    inputs: [],
    name: "subject",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "value",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "voters",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "voted",
            type: "bool",
          },
          {
            internalType: "address",
            name: "delegate",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "vote",
            type: "uint256",
          },
        ],
        internalType: "struct IDemaxBallot.Voter",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
