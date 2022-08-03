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

interface UpgradableProductInterface extends ethers.utils.Interface {
  functions: {
    "impl()": FunctionFragment;
    "upgradeImpl(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "impl", values?: undefined): string;
  encodeFunctionData(functionFragment: "upgradeImpl", values: [string]): string;

  decodeFunctionResult(functionFragment: "impl", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeImpl",
    data: BytesLike
  ): Result;

  events: {
    "ImplChanged(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ImplChanged"): EventFragment;
}

export class UpgradableProduct extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: UpgradableProductInterface;

  functions: {
    impl(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "impl()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    upgradeImpl(
      _newImpl: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "upgradeImpl(address)"(
      _newImpl: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  impl(overrides?: CallOverrides): Promise<string>;

  "impl()"(overrides?: CallOverrides): Promise<string>;

  upgradeImpl(
    _newImpl: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "upgradeImpl(address)"(
    _newImpl: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    impl(overrides?: CallOverrides): Promise<string>;

    "impl()"(overrides?: CallOverrides): Promise<string>;

    upgradeImpl(_newImpl: string, overrides?: CallOverrides): Promise<void>;

    "upgradeImpl(address)"(
      _newImpl: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    ImplChanged(_oldImpl: string | null, _newImpl: string | null): EventFilter;
  };

  estimateGas: {
    impl(overrides?: CallOverrides): Promise<BigNumber>;

    "impl()"(overrides?: CallOverrides): Promise<BigNumber>;

    upgradeImpl(_newImpl: string, overrides?: Overrides): Promise<BigNumber>;

    "upgradeImpl(address)"(
      _newImpl: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    impl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "impl()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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