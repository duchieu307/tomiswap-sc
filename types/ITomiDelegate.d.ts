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

interface ITomiDelegateInterface extends ethers.utils.Interface {
  functions: {
    "getPlayerPairCount(address)": FunctionFragment;
    "playerPairs(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getPlayerPairCount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "playerPairs",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getPlayerPairCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "playerPairs",
    data: BytesLike
  ): Result;

  events: {};
}

export class ITomiDelegate extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ITomiDelegateInterface;

  functions: {
    getPlayerPairCount(
      player: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getPlayerPairCount(address)"(
      player: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    playerPairs(
      user: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "playerPairs(address,uint256)"(
      user: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  getPlayerPairCount(
    player: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getPlayerPairCount(address)"(
    player: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  playerPairs(
    user: string,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "playerPairs(address,uint256)"(
    user: string,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    getPlayerPairCount(
      player: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPlayerPairCount(address)"(
      player: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    playerPairs(
      user: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "playerPairs(address,uint256)"(
      user: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getPlayerPairCount(
      player: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPlayerPairCount(address)"(
      player: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    playerPairs(
      user: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "playerPairs(address,uint256)"(
      user: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getPlayerPairCount(
      player: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPlayerPairCount(address)"(
      player: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    playerPairs(
      user: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "playerPairs(address,uint256)"(
      user: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
