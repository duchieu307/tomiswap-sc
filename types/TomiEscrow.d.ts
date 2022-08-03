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

interface TomiEscrowInterface extends ethers.utils.Interface {
  functions: {
    "DELEGATE()": FunctionFragment;
    "ableToEmergencyWithdraw()": FunctionFragment;
    "emergencyWithdrawERC20(address)": FunctionFragment;
    "impl()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "setEmergencyWithdrawStatus(bool)": FunctionFragment;
    "setShareToken(address,uint256)": FunctionFragment;
    "shareTokenExisted(address)": FunctionFragment;
    "shareTokenReward(address)": FunctionFragment;
    "shareTokens(address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "updateShareTokenRate(address,uint256)": FunctionFragment;
    "upgradeImpl(address)": FunctionFragment;
    "withdrawReward(address,uint256,address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "DELEGATE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ableToEmergencyWithdraw",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdrawERC20",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "impl", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setEmergencyWithdrawStatus",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setShareToken",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "shareTokenExisted",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "shareTokenReward",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "shareTokens", values: [string]): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateShareTokenRate",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "upgradeImpl", values: [string]): string;
  encodeFunctionData(
    functionFragment: "withdrawReward",
    values: [string, BigNumberish, string]
  ): string;

  decodeFunctionResult(functionFragment: "DELEGATE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ableToEmergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdrawERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "impl", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setEmergencyWithdrawStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setShareToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shareTokenExisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shareTokenReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shareTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateShareTokenRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeImpl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawReward",
    data: BytesLike
  ): Result;

  events: {
    "DgasToTokenRated(uint256,uint256)": EventFragment;
    "EmergencyWithdraw(address,uint256)": EventFragment;
    "EmergencyWithdrawStatusUpdate(bool)": EventFragment;
    "ImplChanged(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "RewardWithdraw(address,uint256,address)": EventFragment;
    "ShareTokenSettled(address,uint256)": EventFragment;
    "ShareTokenUpdated(address,uint256)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DgasToTokenRated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EmergencyWithdraw"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "EmergencyWithdrawStatusUpdate"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ImplChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ShareTokenSettled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ShareTokenUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export class TomiEscrow extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TomiEscrowInterface;

  functions: {
    DELEGATE(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "DELEGATE()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    ableToEmergencyWithdraw(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    "ableToEmergencyWithdraw()"(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    emergencyWithdrawERC20(
      _tokenAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "emergencyWithdrawERC20(address)"(
      _tokenAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    impl(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "impl()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    pause(overrides?: Overrides): Promise<ContractTransaction>;

    "pause()"(overrides?: Overrides): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    "paused()"(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    setEmergencyWithdrawStatus(
      _enableEmergencyWithdraw: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setEmergencyWithdrawStatus(bool)"(
      _enableEmergencyWithdraw: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setShareToken(
      _tokenAddress: string,
      _dgasRate: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setShareToken(address,uint256)"(
      _tokenAddress: string,
      _dgasRate: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    shareTokenExisted(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "shareTokenExisted(address)"(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    shareTokenReward(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "shareTokenReward(address)"(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    shareTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      dgasRate: BigNumber;
      0: BigNumber;
    }>;

    "shareTokens(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      dgasRate: BigNumber;
      0: BigNumber;
    }>;

    unpause(overrides?: Overrides): Promise<ContractTransaction>;

    "unpause()"(overrides?: Overrides): Promise<ContractTransaction>;

    updateShareTokenRate(
      _tokenAddress: string,
      _dgasRate: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateShareTokenRate(address,uint256)"(
      _tokenAddress: string,
      _dgasRate: BigNumberish,
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

    withdrawReward(
      _tokenAddress: string,
      _amount: BigNumberish,
      _to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdrawReward(address,uint256,address)"(
      _tokenAddress: string,
      _amount: BigNumberish,
      _to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  DELEGATE(overrides?: CallOverrides): Promise<string>;

  "DELEGATE()"(overrides?: CallOverrides): Promise<string>;

  ableToEmergencyWithdraw(overrides?: CallOverrides): Promise<boolean>;

  "ableToEmergencyWithdraw()"(overrides?: CallOverrides): Promise<boolean>;

  emergencyWithdrawERC20(
    _tokenAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "emergencyWithdrawERC20(address)"(
    _tokenAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  impl(overrides?: CallOverrides): Promise<string>;

  "impl()"(overrides?: CallOverrides): Promise<string>;

  pause(overrides?: Overrides): Promise<ContractTransaction>;

  "pause()"(overrides?: Overrides): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  "paused()"(overrides?: CallOverrides): Promise<boolean>;

  setEmergencyWithdrawStatus(
    _enableEmergencyWithdraw: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setEmergencyWithdrawStatus(bool)"(
    _enableEmergencyWithdraw: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setShareToken(
    _tokenAddress: string,
    _dgasRate: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setShareToken(address,uint256)"(
    _tokenAddress: string,
    _dgasRate: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  shareTokenExisted(
    _tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "shareTokenExisted(address)"(
    _tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  shareTokenReward(
    _tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "shareTokenReward(address)"(
    _tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  shareTokens(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "shareTokens(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  unpause(overrides?: Overrides): Promise<ContractTransaction>;

  "unpause()"(overrides?: Overrides): Promise<ContractTransaction>;

  updateShareTokenRate(
    _tokenAddress: string,
    _dgasRate: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateShareTokenRate(address,uint256)"(
    _tokenAddress: string,
    _dgasRate: BigNumberish,
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

  withdrawReward(
    _tokenAddress: string,
    _amount: BigNumberish,
    _to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdrawReward(address,uint256,address)"(
    _tokenAddress: string,
    _amount: BigNumberish,
    _to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    DELEGATE(overrides?: CallOverrides): Promise<string>;

    "DELEGATE()"(overrides?: CallOverrides): Promise<string>;

    ableToEmergencyWithdraw(overrides?: CallOverrides): Promise<boolean>;

    "ableToEmergencyWithdraw()"(overrides?: CallOverrides): Promise<boolean>;

    emergencyWithdrawERC20(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "emergencyWithdrawERC20(address)"(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    impl(overrides?: CallOverrides): Promise<string>;

    "impl()"(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    "pause()"(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    "paused()"(overrides?: CallOverrides): Promise<boolean>;

    setEmergencyWithdrawStatus(
      _enableEmergencyWithdraw: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setEmergencyWithdrawStatus(bool)"(
      _enableEmergencyWithdraw: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setShareToken(
      _tokenAddress: string,
      _dgasRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setShareToken(address,uint256)"(
      _tokenAddress: string,
      _dgasRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    shareTokenExisted(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "shareTokenExisted(address)"(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    shareTokenReward(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "shareTokenReward(address)"(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    shareTokens(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "shareTokens(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unpause(overrides?: CallOverrides): Promise<void>;

    "unpause()"(overrides?: CallOverrides): Promise<void>;

    updateShareTokenRate(
      _tokenAddress: string,
      _dgasRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateShareTokenRate(address,uint256)"(
      _tokenAddress: string,
      _dgasRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeImpl(_newImpl: string, overrides?: CallOverrides): Promise<void>;

    "upgradeImpl(address)"(
      _newImpl: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawReward(
      _tokenAddress: string,
      _amount: BigNumberish,
      _to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawReward(address,uint256,address)"(
      _tokenAddress: string,
      _amount: BigNumberish,
      _to: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    DgasToTokenRated(oldRate: null, newRate: null): EventFilter;

    EmergencyWithdraw(to: null, totalWithdraw: null): EventFilter;

    EmergencyWithdrawStatusUpdate(newState: null): EventFilter;

    ImplChanged(_oldImpl: string | null, _newImpl: string | null): EventFilter;

    Paused(account: null): EventFilter;

    RewardWithdraw(shareToken: null, reward: null, to: null): EventFilter;

    ShareTokenSettled(tokenAddress: null, dgasRate: null): EventFilter;

    ShareTokenUpdated(tokenAddress: null, dgasRate: null): EventFilter;

    Unpaused(account: null): EventFilter;
  };

  estimateGas: {
    DELEGATE(overrides?: CallOverrides): Promise<BigNumber>;

    "DELEGATE()"(overrides?: CallOverrides): Promise<BigNumber>;

    ableToEmergencyWithdraw(overrides?: CallOverrides): Promise<BigNumber>;

    "ableToEmergencyWithdraw()"(overrides?: CallOverrides): Promise<BigNumber>;

    emergencyWithdrawERC20(
      _tokenAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "emergencyWithdrawERC20(address)"(
      _tokenAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    impl(overrides?: CallOverrides): Promise<BigNumber>;

    "impl()"(overrides?: CallOverrides): Promise<BigNumber>;

    pause(overrides?: Overrides): Promise<BigNumber>;

    "pause()"(overrides?: Overrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    "paused()"(overrides?: CallOverrides): Promise<BigNumber>;

    setEmergencyWithdrawStatus(
      _enableEmergencyWithdraw: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setEmergencyWithdrawStatus(bool)"(
      _enableEmergencyWithdraw: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setShareToken(
      _tokenAddress: string,
      _dgasRate: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setShareToken(address,uint256)"(
      _tokenAddress: string,
      _dgasRate: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    shareTokenExisted(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "shareTokenExisted(address)"(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    shareTokenReward(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "shareTokenReward(address)"(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    shareTokens(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "shareTokens(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unpause(overrides?: Overrides): Promise<BigNumber>;

    "unpause()"(overrides?: Overrides): Promise<BigNumber>;

    updateShareTokenRate(
      _tokenAddress: string,
      _dgasRate: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updateShareTokenRate(address,uint256)"(
      _tokenAddress: string,
      _dgasRate: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    upgradeImpl(_newImpl: string, overrides?: Overrides): Promise<BigNumber>;

    "upgradeImpl(address)"(
      _newImpl: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdrawReward(
      _tokenAddress: string,
      _amount: BigNumberish,
      _to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdrawReward(address,uint256,address)"(
      _tokenAddress: string,
      _amount: BigNumberish,
      _to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DELEGATE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "DELEGATE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ableToEmergencyWithdraw(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "ableToEmergencyWithdraw()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    emergencyWithdrawERC20(
      _tokenAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "emergencyWithdrawERC20(address)"(
      _tokenAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    impl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "impl()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(overrides?: Overrides): Promise<PopulatedTransaction>;

    "pause()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "paused()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setEmergencyWithdrawStatus(
      _enableEmergencyWithdraw: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setEmergencyWithdrawStatus(bool)"(
      _enableEmergencyWithdraw: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setShareToken(
      _tokenAddress: string,
      _dgasRate: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setShareToken(address,uint256)"(
      _tokenAddress: string,
      _dgasRate: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    shareTokenExisted(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "shareTokenExisted(address)"(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    shareTokenReward(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "shareTokenReward(address)"(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    shareTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "shareTokens(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unpause(overrides?: Overrides): Promise<PopulatedTransaction>;

    "unpause()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    updateShareTokenRate(
      _tokenAddress: string,
      _dgasRate: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateShareTokenRate(address,uint256)"(
      _tokenAddress: string,
      _dgasRate: BigNumberish,
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

    withdrawReward(
      _tokenAddress: string,
      _amount: BigNumberish,
      _to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdrawReward(address,uint256,address)"(
      _tokenAddress: string,
      _amount: BigNumberish,
      _to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
