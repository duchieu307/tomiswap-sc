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

interface ConfigNamesInterface extends ethers.utils.Interface {
  functions: {
    "DEV_PRECENT()": FunctionFragment;
    "FEE_FUNDME_REWARD_PERCENT()": FunctionFragment;
    "FEE_GOVERNANCE_REWARD_PERCENT()": FunctionFragment;
    "FEE_LOTTERY_REWARD_PERCENT()": FunctionFragment;
    "FEE_LP_REWARD_PERCENT()": FunctionFragment;
    "LIST_TGAS_AMOUNT()": FunctionFragment;
    "LIST_TOKEN_FAILURE_BURN_PRECENT()": FunctionFragment;
    "LIST_TOKEN_SUCCESS_BURN_PRECENT()": FunctionFragment;
    "LIST_TOKEN_SWITCH()": FunctionFragment;
    "PRODUCE_TGAS_RATE()": FunctionFragment;
    "PROPOSAL_TGAS_AMOUNT()": FunctionFragment;
    "REMOVE_LIQUIDITY_DURATION()": FunctionFragment;
    "SWAP_FEE_PERCENT()": FunctionFragment;
    "TOKEN_PENGDING_SWITCH()": FunctionFragment;
    "TOKEN_PENGDING_TIME()": FunctionFragment;
    "TOKEN_TO_TGAS_PAIR_MIN_PERCENT()": FunctionFragment;
    "UNSTAKE_DURATION()": FunctionFragment;
    "VOTE_REWARD_PERCENT()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DEV_PRECENT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FEE_FUNDME_REWARD_PERCENT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FEE_GOVERNANCE_REWARD_PERCENT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FEE_LOTTERY_REWARD_PERCENT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FEE_LP_REWARD_PERCENT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LIST_TGAS_AMOUNT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LIST_TOKEN_FAILURE_BURN_PRECENT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LIST_TOKEN_SUCCESS_BURN_PRECENT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LIST_TOKEN_SWITCH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PRODUCE_TGAS_RATE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PROPOSAL_TGAS_AMOUNT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REMOVE_LIQUIDITY_DURATION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SWAP_FEE_PERCENT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TOKEN_PENGDING_SWITCH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TOKEN_PENGDING_TIME",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TOKEN_TO_TGAS_PAIR_MIN_PERCENT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UNSTAKE_DURATION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "VOTE_REWARD_PERCENT",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "DEV_PRECENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FEE_FUNDME_REWARD_PERCENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FEE_GOVERNANCE_REWARD_PERCENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FEE_LOTTERY_REWARD_PERCENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FEE_LP_REWARD_PERCENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LIST_TGAS_AMOUNT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LIST_TOKEN_FAILURE_BURN_PRECENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LIST_TOKEN_SUCCESS_BURN_PRECENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LIST_TOKEN_SWITCH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PRODUCE_TGAS_RATE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PROPOSAL_TGAS_AMOUNT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REMOVE_LIQUIDITY_DURATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SWAP_FEE_PERCENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TOKEN_PENGDING_SWITCH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TOKEN_PENGDING_TIME",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TOKEN_TO_TGAS_PAIR_MIN_PERCENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "UNSTAKE_DURATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "VOTE_REWARD_PERCENT",
    data: BytesLike
  ): Result;

  events: {};
}

export class ConfigNames extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ConfigNamesInterface;

  functions: {
    DEV_PRECENT(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "DEV_PRECENT()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    FEE_FUNDME_REWARD_PERCENT(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "FEE_FUNDME_REWARD_PERCENT()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    FEE_GOVERNANCE_REWARD_PERCENT(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "FEE_GOVERNANCE_REWARD_PERCENT()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    FEE_LOTTERY_REWARD_PERCENT(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "FEE_LOTTERY_REWARD_PERCENT()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    FEE_LP_REWARD_PERCENT(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "FEE_LP_REWARD_PERCENT()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    LIST_TGAS_AMOUNT(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "LIST_TGAS_AMOUNT()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    LIST_TOKEN_FAILURE_BURN_PRECENT(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "LIST_TOKEN_FAILURE_BURN_PRECENT()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    LIST_TOKEN_SUCCESS_BURN_PRECENT(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "LIST_TOKEN_SUCCESS_BURN_PRECENT()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    LIST_TOKEN_SWITCH(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "LIST_TOKEN_SWITCH()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    PRODUCE_TGAS_RATE(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "PRODUCE_TGAS_RATE()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    PROPOSAL_TGAS_AMOUNT(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "PROPOSAL_TGAS_AMOUNT()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    REMOVE_LIQUIDITY_DURATION(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "REMOVE_LIQUIDITY_DURATION()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    SWAP_FEE_PERCENT(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "SWAP_FEE_PERCENT()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    TOKEN_PENGDING_SWITCH(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "TOKEN_PENGDING_SWITCH()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    TOKEN_PENGDING_TIME(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "TOKEN_PENGDING_TIME()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    TOKEN_TO_TGAS_PAIR_MIN_PERCENT(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "TOKEN_TO_TGAS_PAIR_MIN_PERCENT()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    UNSTAKE_DURATION(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "UNSTAKE_DURATION()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    VOTE_REWARD_PERCENT(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "VOTE_REWARD_PERCENT()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;
  };

  DEV_PRECENT(overrides?: CallOverrides): Promise<string>;

  "DEV_PRECENT()"(overrides?: CallOverrides): Promise<string>;

  FEE_FUNDME_REWARD_PERCENT(overrides?: CallOverrides): Promise<string>;

  "FEE_FUNDME_REWARD_PERCENT()"(overrides?: CallOverrides): Promise<string>;

  FEE_GOVERNANCE_REWARD_PERCENT(overrides?: CallOverrides): Promise<string>;

  "FEE_GOVERNANCE_REWARD_PERCENT()"(overrides?: CallOverrides): Promise<string>;

  FEE_LOTTERY_REWARD_PERCENT(overrides?: CallOverrides): Promise<string>;

  "FEE_LOTTERY_REWARD_PERCENT()"(overrides?: CallOverrides): Promise<string>;

  FEE_LP_REWARD_PERCENT(overrides?: CallOverrides): Promise<string>;

  "FEE_LP_REWARD_PERCENT()"(overrides?: CallOverrides): Promise<string>;

  LIST_TGAS_AMOUNT(overrides?: CallOverrides): Promise<string>;

  "LIST_TGAS_AMOUNT()"(overrides?: CallOverrides): Promise<string>;

  LIST_TOKEN_FAILURE_BURN_PRECENT(overrides?: CallOverrides): Promise<string>;

  "LIST_TOKEN_FAILURE_BURN_PRECENT()"(
    overrides?: CallOverrides
  ): Promise<string>;

  LIST_TOKEN_SUCCESS_BURN_PRECENT(overrides?: CallOverrides): Promise<string>;

  "LIST_TOKEN_SUCCESS_BURN_PRECENT()"(
    overrides?: CallOverrides
  ): Promise<string>;

  LIST_TOKEN_SWITCH(overrides?: CallOverrides): Promise<string>;

  "LIST_TOKEN_SWITCH()"(overrides?: CallOverrides): Promise<string>;

  PRODUCE_TGAS_RATE(overrides?: CallOverrides): Promise<string>;

  "PRODUCE_TGAS_RATE()"(overrides?: CallOverrides): Promise<string>;

  PROPOSAL_TGAS_AMOUNT(overrides?: CallOverrides): Promise<string>;

  "PROPOSAL_TGAS_AMOUNT()"(overrides?: CallOverrides): Promise<string>;

  REMOVE_LIQUIDITY_DURATION(overrides?: CallOverrides): Promise<string>;

  "REMOVE_LIQUIDITY_DURATION()"(overrides?: CallOverrides): Promise<string>;

  SWAP_FEE_PERCENT(overrides?: CallOverrides): Promise<string>;

  "SWAP_FEE_PERCENT()"(overrides?: CallOverrides): Promise<string>;

  TOKEN_PENGDING_SWITCH(overrides?: CallOverrides): Promise<string>;

  "TOKEN_PENGDING_SWITCH()"(overrides?: CallOverrides): Promise<string>;

  TOKEN_PENGDING_TIME(overrides?: CallOverrides): Promise<string>;

  "TOKEN_PENGDING_TIME()"(overrides?: CallOverrides): Promise<string>;

  TOKEN_TO_TGAS_PAIR_MIN_PERCENT(overrides?: CallOverrides): Promise<string>;

  "TOKEN_TO_TGAS_PAIR_MIN_PERCENT()"(
    overrides?: CallOverrides
  ): Promise<string>;

  UNSTAKE_DURATION(overrides?: CallOverrides): Promise<string>;

  "UNSTAKE_DURATION()"(overrides?: CallOverrides): Promise<string>;

  VOTE_REWARD_PERCENT(overrides?: CallOverrides): Promise<string>;

  "VOTE_REWARD_PERCENT()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    DEV_PRECENT(overrides?: CallOverrides): Promise<string>;

    "DEV_PRECENT()"(overrides?: CallOverrides): Promise<string>;

    FEE_FUNDME_REWARD_PERCENT(overrides?: CallOverrides): Promise<string>;

    "FEE_FUNDME_REWARD_PERCENT()"(overrides?: CallOverrides): Promise<string>;

    FEE_GOVERNANCE_REWARD_PERCENT(overrides?: CallOverrides): Promise<string>;

    "FEE_GOVERNANCE_REWARD_PERCENT()"(
      overrides?: CallOverrides
    ): Promise<string>;

    FEE_LOTTERY_REWARD_PERCENT(overrides?: CallOverrides): Promise<string>;

    "FEE_LOTTERY_REWARD_PERCENT()"(overrides?: CallOverrides): Promise<string>;

    FEE_LP_REWARD_PERCENT(overrides?: CallOverrides): Promise<string>;

    "FEE_LP_REWARD_PERCENT()"(overrides?: CallOverrides): Promise<string>;

    LIST_TGAS_AMOUNT(overrides?: CallOverrides): Promise<string>;

    "LIST_TGAS_AMOUNT()"(overrides?: CallOverrides): Promise<string>;

    LIST_TOKEN_FAILURE_BURN_PRECENT(overrides?: CallOverrides): Promise<string>;

    "LIST_TOKEN_FAILURE_BURN_PRECENT()"(
      overrides?: CallOverrides
    ): Promise<string>;

    LIST_TOKEN_SUCCESS_BURN_PRECENT(overrides?: CallOverrides): Promise<string>;

    "LIST_TOKEN_SUCCESS_BURN_PRECENT()"(
      overrides?: CallOverrides
    ): Promise<string>;

    LIST_TOKEN_SWITCH(overrides?: CallOverrides): Promise<string>;

    "LIST_TOKEN_SWITCH()"(overrides?: CallOverrides): Promise<string>;

    PRODUCE_TGAS_RATE(overrides?: CallOverrides): Promise<string>;

    "PRODUCE_TGAS_RATE()"(overrides?: CallOverrides): Promise<string>;

    PROPOSAL_TGAS_AMOUNT(overrides?: CallOverrides): Promise<string>;

    "PROPOSAL_TGAS_AMOUNT()"(overrides?: CallOverrides): Promise<string>;

    REMOVE_LIQUIDITY_DURATION(overrides?: CallOverrides): Promise<string>;

    "REMOVE_LIQUIDITY_DURATION()"(overrides?: CallOverrides): Promise<string>;

    SWAP_FEE_PERCENT(overrides?: CallOverrides): Promise<string>;

    "SWAP_FEE_PERCENT()"(overrides?: CallOverrides): Promise<string>;

    TOKEN_PENGDING_SWITCH(overrides?: CallOverrides): Promise<string>;

    "TOKEN_PENGDING_SWITCH()"(overrides?: CallOverrides): Promise<string>;

    TOKEN_PENGDING_TIME(overrides?: CallOverrides): Promise<string>;

    "TOKEN_PENGDING_TIME()"(overrides?: CallOverrides): Promise<string>;

    TOKEN_TO_TGAS_PAIR_MIN_PERCENT(overrides?: CallOverrides): Promise<string>;

    "TOKEN_TO_TGAS_PAIR_MIN_PERCENT()"(
      overrides?: CallOverrides
    ): Promise<string>;

    UNSTAKE_DURATION(overrides?: CallOverrides): Promise<string>;

    "UNSTAKE_DURATION()"(overrides?: CallOverrides): Promise<string>;

    VOTE_REWARD_PERCENT(overrides?: CallOverrides): Promise<string>;

    "VOTE_REWARD_PERCENT()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    DEV_PRECENT(overrides?: CallOverrides): Promise<BigNumber>;

    "DEV_PRECENT()"(overrides?: CallOverrides): Promise<BigNumber>;

    FEE_FUNDME_REWARD_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    "FEE_FUNDME_REWARD_PERCENT()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    FEE_GOVERNANCE_REWARD_PERCENT(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "FEE_GOVERNANCE_REWARD_PERCENT()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    FEE_LOTTERY_REWARD_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    "FEE_LOTTERY_REWARD_PERCENT()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    FEE_LP_REWARD_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    "FEE_LP_REWARD_PERCENT()"(overrides?: CallOverrides): Promise<BigNumber>;

    LIST_TGAS_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    "LIST_TGAS_AMOUNT()"(overrides?: CallOverrides): Promise<BigNumber>;

    LIST_TOKEN_FAILURE_BURN_PRECENT(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "LIST_TOKEN_FAILURE_BURN_PRECENT()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    LIST_TOKEN_SUCCESS_BURN_PRECENT(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "LIST_TOKEN_SUCCESS_BURN_PRECENT()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    LIST_TOKEN_SWITCH(overrides?: CallOverrides): Promise<BigNumber>;

    "LIST_TOKEN_SWITCH()"(overrides?: CallOverrides): Promise<BigNumber>;

    PRODUCE_TGAS_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    "PRODUCE_TGAS_RATE()"(overrides?: CallOverrides): Promise<BigNumber>;

    PROPOSAL_TGAS_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    "PROPOSAL_TGAS_AMOUNT()"(overrides?: CallOverrides): Promise<BigNumber>;

    REMOVE_LIQUIDITY_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    "REMOVE_LIQUIDITY_DURATION()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    SWAP_FEE_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    "SWAP_FEE_PERCENT()"(overrides?: CallOverrides): Promise<BigNumber>;

    TOKEN_PENGDING_SWITCH(overrides?: CallOverrides): Promise<BigNumber>;

    "TOKEN_PENGDING_SWITCH()"(overrides?: CallOverrides): Promise<BigNumber>;

    TOKEN_PENGDING_TIME(overrides?: CallOverrides): Promise<BigNumber>;

    "TOKEN_PENGDING_TIME()"(overrides?: CallOverrides): Promise<BigNumber>;

    TOKEN_TO_TGAS_PAIR_MIN_PERCENT(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "TOKEN_TO_TGAS_PAIR_MIN_PERCENT()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    UNSTAKE_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    "UNSTAKE_DURATION()"(overrides?: CallOverrides): Promise<BigNumber>;

    VOTE_REWARD_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    "VOTE_REWARD_PERCENT()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DEV_PRECENT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "DEV_PRECENT()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FEE_FUNDME_REWARD_PERCENT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "FEE_FUNDME_REWARD_PERCENT()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    FEE_GOVERNANCE_REWARD_PERCENT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "FEE_GOVERNANCE_REWARD_PERCENT()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    FEE_LOTTERY_REWARD_PERCENT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "FEE_LOTTERY_REWARD_PERCENT()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    FEE_LP_REWARD_PERCENT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "FEE_LP_REWARD_PERCENT()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    LIST_TGAS_AMOUNT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "LIST_TGAS_AMOUNT()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    LIST_TOKEN_FAILURE_BURN_PRECENT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "LIST_TOKEN_FAILURE_BURN_PRECENT()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    LIST_TOKEN_SUCCESS_BURN_PRECENT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "LIST_TOKEN_SUCCESS_BURN_PRECENT()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    LIST_TOKEN_SWITCH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "LIST_TOKEN_SWITCH()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    PRODUCE_TGAS_RATE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "PRODUCE_TGAS_RATE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    PROPOSAL_TGAS_AMOUNT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "PROPOSAL_TGAS_AMOUNT()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    REMOVE_LIQUIDITY_DURATION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "REMOVE_LIQUIDITY_DURATION()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    SWAP_FEE_PERCENT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "SWAP_FEE_PERCENT()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    TOKEN_PENGDING_SWITCH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "TOKEN_PENGDING_SWITCH()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    TOKEN_PENGDING_TIME(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "TOKEN_PENGDING_TIME()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    TOKEN_TO_TGAS_PAIR_MIN_PERCENT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "TOKEN_TO_TGAS_PAIR_MIN_PERCENT()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    UNSTAKE_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "UNSTAKE_DURATION()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    VOTE_REWARD_PERCENT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "VOTE_REWARD_PERCENT()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
