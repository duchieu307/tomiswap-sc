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

interface ITomiPoolInterface extends ethers.utils.Interface {
  functions: {
    "claimReward(address,address)": FunctionFragment;
    "queryReward(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "claimReward",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "queryReward",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queryReward",
    data: BytesLike
  ): Result;

  events: {};
}

export class ITomiPool extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ITomiPoolInterface;

  functions: {
    claimReward(
      _pair: string,
      _rewardToken: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "claimReward(address,address)"(
      _pair: string,
      _rewardToken: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    queryReward(
      _pair: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "queryReward(address,address)"(
      _pair: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;
  };

  claimReward(
    _pair: string,
    _rewardToken: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "claimReward(address,address)"(
    _pair: string,
    _rewardToken: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  queryReward(
    _pair: string,
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "queryReward(address,address)"(
    _pair: string,
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    claimReward(
      _pair: string,
      _rewardToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "claimReward(address,address)"(
      _pair: string,
      _rewardToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    queryReward(
      _pair: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "queryReward(address,address)"(
      _pair: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    claimReward(
      _pair: string,
      _rewardToken: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "claimReward(address,address)"(
      _pair: string,
      _rewardToken: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    queryReward(
      _pair: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "queryReward(address,address)"(
      _pair: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claimReward(
      _pair: string,
      _rewardToken: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "claimReward(address,address)"(
      _pair: string,
      _rewardToken: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    queryReward(
      _pair: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "queryReward(address,address)"(
      _pair: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}