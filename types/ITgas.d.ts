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
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ITgasInterface extends ethers.utils.Interface {
  functions: {
    "amountPerBlock()": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "changeInterestRatePerBlock(uint256)": FunctionFragment;
    "decreaseProductivity(address,uint256)": FunctionFragment;
    "getProductivity(address)": FunctionFragment;
    "increaseProductivity(address,uint256)": FunctionFragment;
    "mint()": FunctionFragment;
    "take()": FunctionFragment;
    "takeWithBlock()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "upgradeGovernance(address)": FunctionFragment;
    "upgradeImpl(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "amountPerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "changeInterestRatePerBlock",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseProductivity",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProductivity",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseProductivity",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "mint", values?: undefined): string;
  encodeFunctionData(functionFragment: "take", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "takeWithBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeGovernance",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "upgradeImpl", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "amountPerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeInterestRatePerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseProductivity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProductivity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseProductivity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "take", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "takeWithBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeImpl",
    data: BytesLike
  ): Result;

  events: {};
}

export class ITgas extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ITgasInterface;

  functions: {
    amountPerBlock(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "amountPerBlock()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "approve(address,uint256)"(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "balanceOf(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    changeInterestRatePerBlock(
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "changeInterestRatePerBlock(uint256)"(
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    decreaseProductivity(
      user: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "decreaseProductivity(address,uint256)"(
      user: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getProductivity(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "getProductivity(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    increaseProductivity(
      user: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "increaseProductivity(address,uint256)"(
      user: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    mint(overrides?: Overrides): Promise<ContractTransaction>;

    "mint()"(overrides?: Overrides): Promise<ContractTransaction>;

    take(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "take()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    takeWithBlock(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "takeWithBlock()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    transfer(
      to: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transfer(address,uint256)"(
      to: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    upgradeGovernance(
      _newGovernor: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "upgradeGovernance(address)"(
      _newGovernor: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    upgradeImpl(
      _newImpl: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "upgradeImpl(address)"(
      _newImpl: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  amountPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

  "amountPerBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

  approve(
    spender: string,
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "approve(address,uint256)"(
    spender: string,
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  changeInterestRatePerBlock(
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "changeInterestRatePerBlock(uint256)"(
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  decreaseProductivity(
    user: string,
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "decreaseProductivity(address,uint256)"(
    user: string,
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getProductivity(
    user: string,
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  "getProductivity(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  increaseProductivity(
    user: string,
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "increaseProductivity(address,uint256)"(
    user: string,
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  mint(overrides?: Overrides): Promise<ContractTransaction>;

  "mint()"(overrides?: Overrides): Promise<ContractTransaction>;

  take(overrides?: CallOverrides): Promise<BigNumber>;

  "take()"(overrides?: CallOverrides): Promise<BigNumber>;

  takeWithBlock(overrides?: CallOverrides): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  "takeWithBlock()"(overrides?: CallOverrides): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  transfer(
    to: string,
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transfer(address,uint256)"(
    to: string,
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  upgradeGovernance(
    _newGovernor: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "upgradeGovernance(address)"(
    _newGovernor: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  upgradeImpl(
    _newImpl: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "upgradeImpl(address)"(
    _newImpl: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    amountPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "amountPerBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "approve(address,uint256)"(
      spender: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    changeInterestRatePerBlock(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "changeInterestRatePerBlock(uint256)"(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    decreaseProductivity(
      user: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "decreaseProductivity(address,uint256)"(
      user: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getProductivity(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "getProductivity(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    increaseProductivity(
      user: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "increaseProductivity(address,uint256)"(
      user: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    mint(overrides?: CallOverrides): Promise<BigNumber>;

    "mint()"(overrides?: CallOverrides): Promise<BigNumber>;

    take(overrides?: CallOverrides): Promise<BigNumber>;

    "take()"(overrides?: CallOverrides): Promise<BigNumber>;

    takeWithBlock(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "takeWithBlock()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    transfer(
      to: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transfer(address,uint256)"(
      to: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    upgradeGovernance(
      _newGovernor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "upgradeGovernance(address)"(
      _newGovernor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeImpl(_newImpl: string, overrides?: CallOverrides): Promise<void>;

    "upgradeImpl(address)"(
      _newImpl: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    amountPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "amountPerBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "approve(address,uint256)"(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    changeInterestRatePerBlock(
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "changeInterestRatePerBlock(uint256)"(
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    decreaseProductivity(
      user: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "decreaseProductivity(address,uint256)"(
      user: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getProductivity(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getProductivity(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseProductivity(
      user: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "increaseProductivity(address,uint256)"(
      user: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    mint(overrides?: Overrides): Promise<BigNumber>;

    "mint()"(overrides?: Overrides): Promise<BigNumber>;

    take(overrides?: CallOverrides): Promise<BigNumber>;

    "take()"(overrides?: CallOverrides): Promise<BigNumber>;

    takeWithBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "takeWithBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transfer(address,uint256)"(
      to: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    upgradeGovernance(
      _newGovernor: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "upgradeGovernance(address)"(
      _newGovernor: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    upgradeImpl(_newImpl: string, overrides?: Overrides): Promise<BigNumber>;

    "upgradeImpl(address)"(
      _newImpl: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    amountPerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "amountPerBlock()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "approve(address,uint256)"(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    changeInterestRatePerBlock(
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "changeInterestRatePerBlock(uint256)"(
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    decreaseProductivity(
      user: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "decreaseProductivity(address,uint256)"(
      user: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getProductivity(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getProductivity(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increaseProductivity(
      user: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "increaseProductivity(address,uint256)"(
      user: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    mint(overrides?: Overrides): Promise<PopulatedTransaction>;

    "mint()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    take(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "take()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    takeWithBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "takeWithBlock()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transfer(address,uint256)"(
      to: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    upgradeGovernance(
      _newGovernor: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "upgradeGovernance(address)"(
      _newGovernor: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    upgradeImpl(
      _newImpl: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "upgradeImpl(address)"(
      _newImpl: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}