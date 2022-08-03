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

interface TomiPairInterface extends ethers.utils.Interface {
  functions: {
    "CONFIG()": FunctionFragment;
    "FACTORY()": FunctionFragment;
    "MINIMUM_LIQUIDITY()": FunctionFragment;
    "TOMI()": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "burn(address,address,uint256)": FunctionFragment;
    "getProductivity(address)": FunctionFragment;
    "getReserves()": FunctionFragment;
    "getTOMIReserve()": FunctionFragment;
    "initialize(address,address,address,address)": FunctionFragment;
    "interestsPerBlock()": FunctionFragment;
    "lastMintBlock(address)": FunctionFragment;
    "mint(address)": FunctionFragment;
    "mintCumulation()": FunctionFragment;
    "mintReward()": FunctionFragment;
    "mintedShare()": FunctionFragment;
    "price0CumulativeLast()": FunctionFragment;
    "price1CumulativeLast()": FunctionFragment;
    "queryReward()": FunctionFragment;
    "remainReward()": FunctionFragment;
    "shareToken()": FunctionFragment;
    "swap(uint256,uint256,address,bytes)": FunctionFragment;
    "swapFee(uint256,address,address)": FunctionFragment;
    "sync()": FunctionFragment;
    "token0()": FunctionFragment;
    "token1()": FunctionFragment;
    "totalReward()": FunctionFragment;
    "totalShare()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "users(address)": FunctionFragment;
    "version()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "CONFIG", values?: undefined): string;
  encodeFunctionData(functionFragment: "FACTORY", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MINIMUM_LIQUIDITY",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "TOMI", values?: undefined): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProductivity",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserves",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTOMIReserve",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "interestsPerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastMintBlock",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "mint", values: [string]): string;
  encodeFunctionData(
    functionFragment: "mintCumulation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mintReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mintedShare",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "price0CumulativeLast",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "price1CumulativeLast",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "queryReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "remainReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "shareToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [BigNumberish, BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "swapFee",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(functionFragment: "sync", values?: undefined): string;
  encodeFunctionData(functionFragment: "token0", values?: undefined): string;
  encodeFunctionData(functionFragment: "token1", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalShare",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "users", values: [string]): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(functionFragment: "CONFIG", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "FACTORY", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MINIMUM_LIQUIDITY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "TOMI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getProductivity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTOMIReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "interestsPerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastMintBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintCumulation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintedShare",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "price0CumulativeLast",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "price1CumulativeLast",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queryReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "remainReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "shareToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swapFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sync", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "totalShare", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "users", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "Burn(address,address,uint256)": EventFragment;
    "ClaimTOMI(address,uint256,uint256)": EventFragment;
    "Mint(address,address,uint256)": EventFragment;
    "Swap(address,uint256,uint256,uint256,uint256,address)": EventFragment;
    "SwapFee(address,address,uint256)": EventFragment;
    "Sync(uint112,uint112)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ClaimTOMI"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapFee"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Sync"): EventFragment;
}

export class TomiPair extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TomiPairInterface;

  functions: {
    CONFIG(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "CONFIG()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    FACTORY(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "FACTORY()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    MINIMUM_LIQUIDITY(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "MINIMUM_LIQUIDITY()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    TOMI(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "TOMI()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    balanceOf(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "balanceOf(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    burn(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "burn(address,address,uint256)"(
      from: string,
      to: string,
      amount: BigNumberish,
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

    getReserves(overrides?: CallOverrides): Promise<{
      _reserve0: BigNumber;
      _reserve1: BigNumber;
      _blockTimestampLast: number;
      0: BigNumber;
      1: BigNumber;
      2: number;
    }>;

    "getReserves()"(overrides?: CallOverrides): Promise<{
      _reserve0: BigNumber;
      _reserve1: BigNumber;
      _blockTimestampLast: number;
      0: BigNumber;
      1: BigNumber;
      2: number;
    }>;

    getTOMIReserve(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "getTOMIReserve()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    initialize(
      _token0: string,
      _token1: string,
      _config: string,
      _tomi: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address,address,address,address)"(
      _token0: string,
      _token1: string,
      _config: string,
      _tomi: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    interestsPerBlock(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "interestsPerBlock()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    lastMintBlock(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "lastMintBlock(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    mint(to: string, overrides?: Overrides): Promise<ContractTransaction>;

    "mint(address)"(
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    mintCumulation(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "mintCumulation()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    mintReward(overrides?: Overrides): Promise<ContractTransaction>;

    "mintReward()"(overrides?: Overrides): Promise<ContractTransaction>;

    mintedShare(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "mintedShare()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    price0CumulativeLast(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "price0CumulativeLast()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    price1CumulativeLast(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "price1CumulativeLast()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    queryReward(overrides?: CallOverrides): Promise<{
      rewardAmount: BigNumber;
      blockNumber: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "queryReward()"(overrides?: CallOverrides): Promise<{
      rewardAmount: BigNumber;
      blockNumber: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    remainReward(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "remainReward()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    shareToken(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "shareToken()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    swap(
      amount0Out: BigNumberish,
      amount1Out: BigNumberish,
      to: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "swap(uint256,uint256,address,bytes)"(
      amount0Out: BigNumberish,
      amount1Out: BigNumberish,
      to: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    swapFee(
      amount: BigNumberish,
      token: string,
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "swapFee(uint256,address,address)"(
      amount: BigNumberish,
      token: string,
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    sync(overrides?: Overrides): Promise<ContractTransaction>;

    "sync()"(overrides?: Overrides): Promise<ContractTransaction>;

    token0(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "token0()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    token1(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "token1()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    totalReward(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "totalReward()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    totalShare(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "totalShare()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    totalSupply(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "totalSupply()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    users(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      amount: BigNumber;
      rewardDebt: BigNumber;
      rewardEarn: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;

    "users(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      amount: BigNumber;
      rewardDebt: BigNumber;
      rewardEarn: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;

    version(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "version()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;
  };

  CONFIG(overrides?: CallOverrides): Promise<string>;

  "CONFIG()"(overrides?: CallOverrides): Promise<string>;

  FACTORY(overrides?: CallOverrides): Promise<string>;

  "FACTORY()"(overrides?: CallOverrides): Promise<string>;

  MINIMUM_LIQUIDITY(overrides?: CallOverrides): Promise<BigNumber>;

  "MINIMUM_LIQUIDITY()"(overrides?: CallOverrides): Promise<BigNumber>;

  TOMI(overrides?: CallOverrides): Promise<string>;

  "TOMI()"(overrides?: CallOverrides): Promise<string>;

  balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  burn(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "burn(address,address,uint256)"(
    from: string,
    to: string,
    amount: BigNumberish,
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

  getReserves(overrides?: CallOverrides): Promise<{
    _reserve0: BigNumber;
    _reserve1: BigNumber;
    _blockTimestampLast: number;
    0: BigNumber;
    1: BigNumber;
    2: number;
  }>;

  "getReserves()"(overrides?: CallOverrides): Promise<{
    _reserve0: BigNumber;
    _reserve1: BigNumber;
    _blockTimestampLast: number;
    0: BigNumber;
    1: BigNumber;
    2: number;
  }>;

  getTOMIReserve(overrides?: CallOverrides): Promise<BigNumber>;

  "getTOMIReserve()"(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _token0: string,
    _token1: string,
    _config: string,
    _tomi: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address,address,address,address)"(
    _token0: string,
    _token1: string,
    _config: string,
    _tomi: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  interestsPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

  "interestsPerBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

  lastMintBlock(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "lastMintBlock(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  mint(to: string, overrides?: Overrides): Promise<ContractTransaction>;

  "mint(address)"(
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  mintCumulation(overrides?: CallOverrides): Promise<BigNumber>;

  "mintCumulation()"(overrides?: CallOverrides): Promise<BigNumber>;

  mintReward(overrides?: Overrides): Promise<ContractTransaction>;

  "mintReward()"(overrides?: Overrides): Promise<ContractTransaction>;

  mintedShare(overrides?: CallOverrides): Promise<BigNumber>;

  "mintedShare()"(overrides?: CallOverrides): Promise<BigNumber>;

  price0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;

  "price0CumulativeLast()"(overrides?: CallOverrides): Promise<BigNumber>;

  price1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;

  "price1CumulativeLast()"(overrides?: CallOverrides): Promise<BigNumber>;

  queryReward(overrides?: CallOverrides): Promise<{
    rewardAmount: BigNumber;
    blockNumber: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  "queryReward()"(overrides?: CallOverrides): Promise<{
    rewardAmount: BigNumber;
    blockNumber: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  remainReward(overrides?: CallOverrides): Promise<BigNumber>;

  "remainReward()"(overrides?: CallOverrides): Promise<BigNumber>;

  shareToken(overrides?: CallOverrides): Promise<string>;

  "shareToken()"(overrides?: CallOverrides): Promise<string>;

  swap(
    amount0Out: BigNumberish,
    amount1Out: BigNumberish,
    to: string,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "swap(uint256,uint256,address,bytes)"(
    amount0Out: BigNumberish,
    amount1Out: BigNumberish,
    to: string,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  swapFee(
    amount: BigNumberish,
    token: string,
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "swapFee(uint256,address,address)"(
    amount: BigNumberish,
    token: string,
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  sync(overrides?: Overrides): Promise<ContractTransaction>;

  "sync()"(overrides?: Overrides): Promise<ContractTransaction>;

  token0(overrides?: CallOverrides): Promise<string>;

  "token0()"(overrides?: CallOverrides): Promise<string>;

  token1(overrides?: CallOverrides): Promise<string>;

  "token1()"(overrides?: CallOverrides): Promise<string>;

  totalReward(overrides?: CallOverrides): Promise<BigNumber>;

  "totalReward()"(overrides?: CallOverrides): Promise<BigNumber>;

  totalShare(overrides?: CallOverrides): Promise<BigNumber>;

  "totalShare()"(overrides?: CallOverrides): Promise<BigNumber>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  users(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    amount: BigNumber;
    rewardDebt: BigNumber;
    rewardEarn: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
  }>;

  "users(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    amount: BigNumber;
    rewardDebt: BigNumber;
    rewardEarn: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
  }>;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  "version()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    CONFIG(overrides?: CallOverrides): Promise<string>;

    "CONFIG()"(overrides?: CallOverrides): Promise<string>;

    FACTORY(overrides?: CallOverrides): Promise<string>;

    "FACTORY()"(overrides?: CallOverrides): Promise<string>;

    MINIMUM_LIQUIDITY(overrides?: CallOverrides): Promise<BigNumber>;

    "MINIMUM_LIQUIDITY()"(overrides?: CallOverrides): Promise<BigNumber>;

    TOMI(overrides?: CallOverrides): Promise<string>;

    "TOMI()"(overrides?: CallOverrides): Promise<string>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      amount0: BigNumber;
      amount1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "burn(address,address,uint256)"(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      amount0: BigNumber;
      amount1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

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

    getReserves(overrides?: CallOverrides): Promise<{
      _reserve0: BigNumber;
      _reserve1: BigNumber;
      _blockTimestampLast: number;
      0: BigNumber;
      1: BigNumber;
      2: number;
    }>;

    "getReserves()"(overrides?: CallOverrides): Promise<{
      _reserve0: BigNumber;
      _reserve1: BigNumber;
      _blockTimestampLast: number;
      0: BigNumber;
      1: BigNumber;
      2: number;
    }>;

    getTOMIReserve(overrides?: CallOverrides): Promise<BigNumber>;

    "getTOMIReserve()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _token0: string,
      _token1: string,
      _config: string,
      _tomi: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,address,address,address)"(
      _token0: string,
      _token1: string,
      _config: string,
      _tomi: string,
      overrides?: CallOverrides
    ): Promise<void>;

    interestsPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "interestsPerBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    lastMintBlock(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "lastMintBlock(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(to: string, overrides?: CallOverrides): Promise<BigNumber>;

    "mint(address)"(to: string, overrides?: CallOverrides): Promise<BigNumber>;

    mintCumulation(overrides?: CallOverrides): Promise<BigNumber>;

    "mintCumulation()"(overrides?: CallOverrides): Promise<BigNumber>;

    mintReward(overrides?: CallOverrides): Promise<BigNumber>;

    "mintReward()"(overrides?: CallOverrides): Promise<BigNumber>;

    mintedShare(overrides?: CallOverrides): Promise<BigNumber>;

    "mintedShare()"(overrides?: CallOverrides): Promise<BigNumber>;

    price0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;

    "price0CumulativeLast()"(overrides?: CallOverrides): Promise<BigNumber>;

    price1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;

    "price1CumulativeLast()"(overrides?: CallOverrides): Promise<BigNumber>;

    queryReward(overrides?: CallOverrides): Promise<{
      rewardAmount: BigNumber;
      blockNumber: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "queryReward()"(overrides?: CallOverrides): Promise<{
      rewardAmount: BigNumber;
      blockNumber: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    remainReward(overrides?: CallOverrides): Promise<BigNumber>;

    "remainReward()"(overrides?: CallOverrides): Promise<BigNumber>;

    shareToken(overrides?: CallOverrides): Promise<string>;

    "shareToken()"(overrides?: CallOverrides): Promise<string>;

    swap(
      amount0Out: BigNumberish,
      amount1Out: BigNumberish,
      to: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "swap(uint256,uint256,address,bytes)"(
      amount0Out: BigNumberish,
      amount1Out: BigNumberish,
      to: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    swapFee(
      amount: BigNumberish,
      token: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "swapFee(uint256,address,address)"(
      amount: BigNumberish,
      token: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    sync(overrides?: CallOverrides): Promise<void>;

    "sync()"(overrides?: CallOverrides): Promise<void>;

    token0(overrides?: CallOverrides): Promise<string>;

    "token0()"(overrides?: CallOverrides): Promise<string>;

    token1(overrides?: CallOverrides): Promise<string>;

    "token1()"(overrides?: CallOverrides): Promise<string>;

    totalReward(overrides?: CallOverrides): Promise<BigNumber>;

    "totalReward()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalShare(overrides?: CallOverrides): Promise<BigNumber>;

    "totalShare()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    users(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      amount: BigNumber;
      rewardDebt: BigNumber;
      rewardEarn: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;

    "users(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      amount: BigNumber;
      rewardDebt: BigNumber;
      rewardEarn: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    "version()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    Burn(from: string | null, to: string | null, value: null): EventFilter;

    ClaimTOMI(
      player: string | null,
      pairMint: null,
      userMint: null
    ): EventFilter;

    Mint(from: string | null, to: string | null, value: null): EventFilter;

    Swap(
      sender: string | null,
      amount0In: null,
      amount1In: null,
      amount0Out: null,
      amount1Out: null,
      to: string | null
    ): EventFilter;

    SwapFee(token: string | null, to: string | null, amount: null): EventFilter;

    Sync(reserve0: null, reserve1: null): EventFilter;
  };

  estimateGas: {
    CONFIG(overrides?: CallOverrides): Promise<BigNumber>;

    "CONFIG()"(overrides?: CallOverrides): Promise<BigNumber>;

    FACTORY(overrides?: CallOverrides): Promise<BigNumber>;

    "FACTORY()"(overrides?: CallOverrides): Promise<BigNumber>;

    MINIMUM_LIQUIDITY(overrides?: CallOverrides): Promise<BigNumber>;

    "MINIMUM_LIQUIDITY()"(overrides?: CallOverrides): Promise<BigNumber>;

    TOMI(overrides?: CallOverrides): Promise<BigNumber>;

    "TOMI()"(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "burn(address,address,uint256)"(
      from: string,
      to: string,
      amount: BigNumberish,
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

    getReserves(overrides?: CallOverrides): Promise<BigNumber>;

    "getReserves()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTOMIReserve(overrides?: CallOverrides): Promise<BigNumber>;

    "getTOMIReserve()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _token0: string,
      _token1: string,
      _config: string,
      _tomi: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(address,address,address,address)"(
      _token0: string,
      _token1: string,
      _config: string,
      _tomi: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    interestsPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "interestsPerBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    lastMintBlock(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "lastMintBlock(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(to: string, overrides?: Overrides): Promise<BigNumber>;

    "mint(address)"(to: string, overrides?: Overrides): Promise<BigNumber>;

    mintCumulation(overrides?: CallOverrides): Promise<BigNumber>;

    "mintCumulation()"(overrides?: CallOverrides): Promise<BigNumber>;

    mintReward(overrides?: Overrides): Promise<BigNumber>;

    "mintReward()"(overrides?: Overrides): Promise<BigNumber>;

    mintedShare(overrides?: CallOverrides): Promise<BigNumber>;

    "mintedShare()"(overrides?: CallOverrides): Promise<BigNumber>;

    price0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;

    "price0CumulativeLast()"(overrides?: CallOverrides): Promise<BigNumber>;

    price1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;

    "price1CumulativeLast()"(overrides?: CallOverrides): Promise<BigNumber>;

    queryReward(overrides?: CallOverrides): Promise<BigNumber>;

    "queryReward()"(overrides?: CallOverrides): Promise<BigNumber>;

    remainReward(overrides?: CallOverrides): Promise<BigNumber>;

    "remainReward()"(overrides?: CallOverrides): Promise<BigNumber>;

    shareToken(overrides?: CallOverrides): Promise<BigNumber>;

    "shareToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    swap(
      amount0Out: BigNumberish,
      amount1Out: BigNumberish,
      to: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "swap(uint256,uint256,address,bytes)"(
      amount0Out: BigNumberish,
      amount1Out: BigNumberish,
      to: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    swapFee(
      amount: BigNumberish,
      token: string,
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "swapFee(uint256,address,address)"(
      amount: BigNumberish,
      token: string,
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    sync(overrides?: Overrides): Promise<BigNumber>;

    "sync()"(overrides?: Overrides): Promise<BigNumber>;

    token0(overrides?: CallOverrides): Promise<BigNumber>;

    "token0()"(overrides?: CallOverrides): Promise<BigNumber>;

    token1(overrides?: CallOverrides): Promise<BigNumber>;

    "token1()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalReward(overrides?: CallOverrides): Promise<BigNumber>;

    "totalReward()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalShare(overrides?: CallOverrides): Promise<BigNumber>;

    "totalShare()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    users(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "users(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    "version()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    CONFIG(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "CONFIG()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FACTORY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "FACTORY()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MINIMUM_LIQUIDITY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "MINIMUM_LIQUIDITY()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    TOMI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "TOMI()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOf(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "burn(address,address,uint256)"(
      from: string,
      to: string,
      amount: BigNumberish,
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

    getReserves(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getReserves()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTOMIReserve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getTOMIReserve()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _token0: string,
      _token1: string,
      _config: string,
      _tomi: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address,address,address,address)"(
      _token0: string,
      _token1: string,
      _config: string,
      _tomi: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    interestsPerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "interestsPerBlock()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastMintBlock(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "lastMintBlock(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(to: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "mint(address)"(
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    mintCumulation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "mintCumulation()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintReward(overrides?: Overrides): Promise<PopulatedTransaction>;

    "mintReward()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    mintedShare(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "mintedShare()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    price0CumulativeLast(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "price0CumulativeLast()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    price1CumulativeLast(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "price1CumulativeLast()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    queryReward(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "queryReward()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    remainReward(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "remainReward()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    shareToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "shareToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    swap(
      amount0Out: BigNumberish,
      amount1Out: BigNumberish,
      to: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "swap(uint256,uint256,address,bytes)"(
      amount0Out: BigNumberish,
      amount1Out: BigNumberish,
      to: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    swapFee(
      amount: BigNumberish,
      token: string,
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "swapFee(uint256,address,address)"(
      amount: BigNumberish,
      token: string,
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    sync(overrides?: Overrides): Promise<PopulatedTransaction>;

    "sync()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    token0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token0()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token1()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalReward(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalReward()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalShare(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalShare()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalSupply()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    users(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "users(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "version()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
