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

interface TomiBallotFactoryInterface extends ethers.utils.Interface {
  functions: {
    "TOMI()": FunctionFragment;
    "create(address,uint256,uint256,uint256,string,string)": FunctionFragment;
    "createShareRevenue(address,uint256,uint256,string,string)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "TOMI", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "create",
    values: [string, BigNumberish, BigNumberish, BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createShareRevenue",
    values: [string, BigNumberish, BigNumberish, string, string]
  ): string;

  decodeFunctionResult(functionFragment: "TOMI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createShareRevenue",
    data: BytesLike
  ): Result;

  events: {
    "Created(address,address,uint256)": EventFragment;
    "RevenueCreated(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Created"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RevenueCreated"): EventFragment;
}

export class TomiBallotFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TomiBallotFactoryInterface;

  functions: {
    TOMI(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "TOMI()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    create(
      _proposer: string,
      _value: BigNumberish,
      _endTime: BigNumberish,
      _executionTime: BigNumberish,
      _subject: string,
      _content: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "create(address,uint256,uint256,uint256,string,string)"(
      _proposer: string,
      _value: BigNumberish,
      _endTime: BigNumberish,
      _executionTime: BigNumberish,
      _subject: string,
      _content: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    createShareRevenue(
      _proposer: string,
      _endTime: BigNumberish,
      _executionTime: BigNumberish,
      _subject: string,
      _content: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createShareRevenue(address,uint256,uint256,string,string)"(
      _proposer: string,
      _endTime: BigNumberish,
      _executionTime: BigNumberish,
      _subject: string,
      _content: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  TOMI(overrides?: CallOverrides): Promise<string>;

  "TOMI()"(overrides?: CallOverrides): Promise<string>;

  create(
    _proposer: string,
    _value: BigNumberish,
    _endTime: BigNumberish,
    _executionTime: BigNumberish,
    _subject: string,
    _content: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "create(address,uint256,uint256,uint256,string,string)"(
    _proposer: string,
    _value: BigNumberish,
    _endTime: BigNumberish,
    _executionTime: BigNumberish,
    _subject: string,
    _content: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  createShareRevenue(
    _proposer: string,
    _endTime: BigNumberish,
    _executionTime: BigNumberish,
    _subject: string,
    _content: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createShareRevenue(address,uint256,uint256,string,string)"(
    _proposer: string,
    _endTime: BigNumberish,
    _executionTime: BigNumberish,
    _subject: string,
    _content: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    TOMI(overrides?: CallOverrides): Promise<string>;

    "TOMI()"(overrides?: CallOverrides): Promise<string>;

    create(
      _proposer: string,
      _value: BigNumberish,
      _endTime: BigNumberish,
      _executionTime: BigNumberish,
      _subject: string,
      _content: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "create(address,uint256,uint256,uint256,string,string)"(
      _proposer: string,
      _value: BigNumberish,
      _endTime: BigNumberish,
      _executionTime: BigNumberish,
      _subject: string,
      _content: string,
      overrides?: CallOverrides
    ): Promise<string>;

    createShareRevenue(
      _proposer: string,
      _endTime: BigNumberish,
      _executionTime: BigNumberish,
      _subject: string,
      _content: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "createShareRevenue(address,uint256,uint256,string,string)"(
      _proposer: string,
      _endTime: BigNumberish,
      _executionTime: BigNumberish,
      _subject: string,
      _content: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    Created(
      proposer: string | null,
      ballotAddr: string | null,
      createTime: null
    ): EventFilter;

    RevenueCreated(
      proposer: string | null,
      ballotAddr: string | null,
      createTime: null
    ): EventFilter;
  };

  estimateGas: {
    TOMI(overrides?: CallOverrides): Promise<BigNumber>;

    "TOMI()"(overrides?: CallOverrides): Promise<BigNumber>;

    create(
      _proposer: string,
      _value: BigNumberish,
      _endTime: BigNumberish,
      _executionTime: BigNumberish,
      _subject: string,
      _content: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "create(address,uint256,uint256,uint256,string,string)"(
      _proposer: string,
      _value: BigNumberish,
      _endTime: BigNumberish,
      _executionTime: BigNumberish,
      _subject: string,
      _content: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    createShareRevenue(
      _proposer: string,
      _endTime: BigNumberish,
      _executionTime: BigNumberish,
      _subject: string,
      _content: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createShareRevenue(address,uint256,uint256,string,string)"(
      _proposer: string,
      _endTime: BigNumberish,
      _executionTime: BigNumberish,
      _subject: string,
      _content: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    TOMI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "TOMI()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    create(
      _proposer: string,
      _value: BigNumberish,
      _endTime: BigNumberish,
      _executionTime: BigNumberish,
      _subject: string,
      _content: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "create(address,uint256,uint256,uint256,string,string)"(
      _proposer: string,
      _value: BigNumberish,
      _endTime: BigNumberish,
      _executionTime: BigNumberish,
      _subject: string,
      _content: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    createShareRevenue(
      _proposer: string,
      _endTime: BigNumberish,
      _executionTime: BigNumberish,
      _subject: string,
      _content: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createShareRevenue(address,uint256,uint256,string,string)"(
      _proposer: string,
      _endTime: BigNumberish,
      _executionTime: BigNumberish,
      _subject: string,
      _content: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
