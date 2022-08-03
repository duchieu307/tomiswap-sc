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

interface IDemaxConfigInterface extends ethers.utils.Interface {
  functions: {
    "configs(bytes32)": FunctionFragment;
    "getConfigValue(bytes32)": FunctionFragment;
    "tokenCount()": FunctionFragment;
    "tokenList(uint256)": FunctionFragment;
    "tokenStatus(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "configs", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getConfigValue",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "tokenStatus", values: [string]): string;

  decodeFunctionResult(functionFragment: "configs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getConfigValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenList", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenStatus",
    data: BytesLike
  ): Result;

  events: {};
}

export class IDemaxConfig extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IDemaxConfigInterface;

  functions: {
    configs(
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        minValue: BigNumber;
        maxValue: BigNumber;
        maxSpan: BigNumber;
        value: BigNumber;
        enable: BigNumber;
        0: BigNumber;
        1: BigNumber;
        2: BigNumber;
        3: BigNumber;
        4: BigNumber;
      };
    }>;

    "configs(bytes32)"(
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        minValue: BigNumber;
        maxValue: BigNumber;
        maxSpan: BigNumber;
        value: BigNumber;
        enable: BigNumber;
        0: BigNumber;
        1: BigNumber;
        2: BigNumber;
        3: BigNumber;
        4: BigNumber;
      };
    }>;

    getConfigValue(
      _name: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getConfigValue(bytes32)"(
      _name: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    tokenCount(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "tokenCount()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    tokenList(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "tokenList(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    tokenStatus(
      token: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "tokenStatus(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;
  };

  configs(
    name: BytesLike,
    overrides?: CallOverrides
  ): Promise<{
    minValue: BigNumber;
    maxValue: BigNumber;
    maxSpan: BigNumber;
    value: BigNumber;
    enable: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
  }>;

  "configs(bytes32)"(
    name: BytesLike,
    overrides?: CallOverrides
  ): Promise<{
    minValue: BigNumber;
    maxValue: BigNumber;
    maxSpan: BigNumber;
    value: BigNumber;
    enable: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
  }>;

  getConfigValue(
    _name: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getConfigValue(bytes32)"(
    _name: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tokenCount(overrides?: CallOverrides): Promise<BigNumber>;

  "tokenCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  tokenList(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "tokenList(uint256)"(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  tokenStatus(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  "tokenStatus(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    configs(
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      minValue: BigNumber;
      maxValue: BigNumber;
      maxSpan: BigNumber;
      value: BigNumber;
      enable: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
    }>;

    "configs(bytes32)"(
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      minValue: BigNumber;
      maxValue: BigNumber;
      maxSpan: BigNumber;
      value: BigNumber;
      enable: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
    }>;

    getConfigValue(
      _name: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getConfigValue(bytes32)"(
      _name: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenCount(overrides?: CallOverrides): Promise<BigNumber>;

    "tokenCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    tokenList(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "tokenList(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    tokenStatus(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "tokenStatus(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    configs(name: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "configs(bytes32)"(
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getConfigValue(
      _name: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getConfigValue(bytes32)"(
      _name: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenCount(overrides?: CallOverrides): Promise<BigNumber>;

    "tokenCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    tokenList(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenList(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenStatus(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "tokenStatus(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    configs(
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "configs(bytes32)"(
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getConfigValue(
      _name: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getConfigValue(bytes32)"(
      _name: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "tokenCount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenList(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokenList(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenStatus(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokenStatus(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
