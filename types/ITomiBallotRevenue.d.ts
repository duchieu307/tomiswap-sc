/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ITomiBallotRevenueInterface extends ethers.utils.Interface {
  functions: {
    "content()": FunctionFragment;
    "createTime()": FunctionFragment;
    "endTime()": FunctionFragment;
    "ended()": FunctionFragment;
    "executionTime()": FunctionFragment;
    "participators(address)": FunctionFragment;
    "proposals(uint256)": FunctionFragment;
    "proposer()": FunctionFragment;
    "subject()": FunctionFragment;
    "total()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "content", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createTime",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "endTime", values?: undefined): string;
  encodeFunctionData(functionFragment: "ended", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "executionTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "participators",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "proposals",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "proposer", values?: undefined): string;
  encodeFunctionData(functionFragment: "subject", values?: undefined): string;
  encodeFunctionData(functionFragment: "total", values?: undefined): string;

  decodeFunctionResult(functionFragment: "content", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createTime", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "endTime", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ended", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executionTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "participators",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "proposer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "subject", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "total", data: BytesLike): Result;

  events: {};
}

export class ITomiBallotRevenue extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ITomiBallotRevenueInterface;

  functions: {
    content(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "content()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    createTime(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "createTime()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    endTime(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "endTime()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    ended(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    "ended()"(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    executionTime(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "executionTime()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    participators(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        weight: BigNumber;
        participated: boolean;
        delegate: string;
        0: BigNumber;
        1: boolean;
        2: string;
      };
    }>;

    "participators(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        weight: BigNumber;
        participated: boolean;
        delegate: string;
        0: BigNumber;
        1: boolean;
        2: string;
      };
    }>;

    proposals(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "proposals(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    proposer(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "proposer()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    subject(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "subject()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    total(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "total()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;
  };

  content(overrides?: CallOverrides): Promise<string>;

  "content()"(overrides?: CallOverrides): Promise<string>;

  createTime(overrides?: CallOverrides): Promise<BigNumber>;

  "createTime()"(overrides?: CallOverrides): Promise<BigNumber>;

  endTime(overrides?: CallOverrides): Promise<BigNumber>;

  "endTime()"(overrides?: CallOverrides): Promise<BigNumber>;

  ended(overrides?: CallOverrides): Promise<boolean>;

  "ended()"(overrides?: CallOverrides): Promise<boolean>;

  executionTime(overrides?: CallOverrides): Promise<BigNumber>;

  "executionTime()"(overrides?: CallOverrides): Promise<BigNumber>;

  participators(
    user: string,
    overrides?: CallOverrides
  ): Promise<{
    weight: BigNumber;
    participated: boolean;
    delegate: string;
    0: BigNumber;
    1: boolean;
    2: string;
  }>;

  "participators(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<{
    weight: BigNumber;
    participated: boolean;
    delegate: string;
    0: BigNumber;
    1: boolean;
    2: string;
  }>;

  proposals(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "proposals(uint256)"(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  proposer(overrides?: CallOverrides): Promise<string>;

  "proposer()"(overrides?: CallOverrides): Promise<string>;

  subject(overrides?: CallOverrides): Promise<string>;

  "subject()"(overrides?: CallOverrides): Promise<string>;

  total(overrides?: CallOverrides): Promise<BigNumber>;

  "total()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    content(overrides?: CallOverrides): Promise<string>;

    "content()"(overrides?: CallOverrides): Promise<string>;

    createTime(overrides?: CallOverrides): Promise<BigNumber>;

    "createTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    endTime(overrides?: CallOverrides): Promise<BigNumber>;

    "endTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    ended(overrides?: CallOverrides): Promise<boolean>;

    "ended()"(overrides?: CallOverrides): Promise<boolean>;

    executionTime(overrides?: CallOverrides): Promise<BigNumber>;

    "executionTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    participators(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      weight: BigNumber;
      participated: boolean;
      delegate: string;
      0: BigNumber;
      1: boolean;
      2: string;
    }>;

    "participators(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      weight: BigNumber;
      participated: boolean;
      delegate: string;
      0: BigNumber;
      1: boolean;
      2: string;
    }>;

    proposals(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "proposals(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposer(overrides?: CallOverrides): Promise<string>;

    "proposer()"(overrides?: CallOverrides): Promise<string>;

    subject(overrides?: CallOverrides): Promise<string>;

    "subject()"(overrides?: CallOverrides): Promise<string>;

    total(overrides?: CallOverrides): Promise<BigNumber>;

    "total()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    content(overrides?: CallOverrides): Promise<BigNumber>;

    "content()"(overrides?: CallOverrides): Promise<BigNumber>;

    createTime(overrides?: CallOverrides): Promise<BigNumber>;

    "createTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    endTime(overrides?: CallOverrides): Promise<BigNumber>;

    "endTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    ended(overrides?: CallOverrides): Promise<BigNumber>;

    "ended()"(overrides?: CallOverrides): Promise<BigNumber>;

    executionTime(overrides?: CallOverrides): Promise<BigNumber>;

    "executionTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    participators(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    "participators(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposals(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "proposals(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposer(overrides?: CallOverrides): Promise<BigNumber>;

    "proposer()"(overrides?: CallOverrides): Promise<BigNumber>;

    subject(overrides?: CallOverrides): Promise<BigNumber>;

    "subject()"(overrides?: CallOverrides): Promise<BigNumber>;

    total(overrides?: CallOverrides): Promise<BigNumber>;

    "total()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    content(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "content()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "createTime()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    endTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "endTime()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ended(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ended()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    executionTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "executionTime()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    participators(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "participators(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proposals(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "proposals(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proposer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "proposer()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    subject(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "subject()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    total(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "total()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
