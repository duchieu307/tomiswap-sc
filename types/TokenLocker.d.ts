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

interface TokenLockerInterface extends ethers.utils.Interface {
  functions: {
    "canUnlockAmount(address)": FunctionFragment;
    "emergencyWithdraw(address,uint256)": FunctionFragment;
    "endReleaseTimestamp()": FunctionFragment;
    "firstUnlock(uint256,address,uint256,bytes32[])": FunctionFragment;
    "firstUnlockAmount(uint256)": FunctionFragment;
    "lockOf(address)": FunctionFragment;
    "merkleRoot()": FunctionFragment;
    "owner()": FunctionFragment;
    "released(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setLockAmount(address,uint256)": FunctionFragment;
    "startReleaseTimestamp()": FunctionFragment;
    "token()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unlock(address)": FunctionFragment;
    "updateRoot(bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "canUnlockAmount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "endReleaseTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "firstUnlock",
    values: [BigNumberish, string, BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "firstUnlockAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "lockOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "merkleRoot",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "released", values: [string]): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setLockAmount",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "startReleaseTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "unlock", values: [string]): string;
  encodeFunctionData(
    functionFragment: "updateRoot",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "canUnlockAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "endReleaseTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "firstUnlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "firstUnlockAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lockOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "merkleRoot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "released", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLockAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startReleaseTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unlock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updateRoot", data: BytesLike): Result;

  events: {
    "Lock(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "UnLock(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Lock"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnLock"): EventFragment;
}

export class TokenLocker extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TokenLockerInterface;

  functions: {
    canUnlockAmount(
      _account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "canUnlockAmount(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    emergencyWithdraw(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "emergencyWithdraw(address,uint256)"(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    endReleaseTimestamp(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "endReleaseTimestamp()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    firstUnlock(
      _index: BigNumberish,
      _account: string,
      _amount: BigNumberish,
      _merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "firstUnlock(uint256,address,uint256,bytes32[])"(
      _index: BigNumberish,
      _account: string,
      _amount: BigNumberish,
      _merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    firstUnlockAmount(
      _lockAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "firstUnlockAmount(uint256)"(
      _lockAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    lockOf(
      _account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "lockOf(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    merkleRoot(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    owner(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "owner()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    released(
      _account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "released(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    setLockAmount(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setLockAmount(address,uint256)"(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    startReleaseTimestamp(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "startReleaseTimestamp()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    token(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "token()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    unlock(
      _account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "unlock(address)"(
      _account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    updateRoot(
      _merkleRoot: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateRoot(bytes32)"(
      _merkleRoot: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  canUnlockAmount(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "canUnlockAmount(address)"(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  emergencyWithdraw(
    _token: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "emergencyWithdraw(address,uint256)"(
    _token: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  endReleaseTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  "endReleaseTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

  firstUnlock(
    _index: BigNumberish,
    _account: string,
    _amount: BigNumberish,
    _merkleProof: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "firstUnlock(uint256,address,uint256,bytes32[])"(
    _index: BigNumberish,
    _account: string,
    _amount: BigNumberish,
    _merkleProof: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  firstUnlockAmount(
    _lockAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "firstUnlockAmount(uint256)"(
    _lockAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lockOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

  "lockOf(address)"(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  merkleRoot(overrides?: CallOverrides): Promise<string>;

  "merkleRoot()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  released(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

  "released(address)"(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  setLockAmount(
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setLockAmount(address,uint256)"(
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  startReleaseTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  "startReleaseTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

  token(overrides?: CallOverrides): Promise<string>;

  "token()"(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  unlock(_account: string, overrides?: Overrides): Promise<ContractTransaction>;

  "unlock(address)"(
    _account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  updateRoot(
    _merkleRoot: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateRoot(bytes32)"(
    _merkleRoot: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    canUnlockAmount(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "canUnlockAmount(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    emergencyWithdraw(
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "emergencyWithdraw(address,uint256)"(
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    endReleaseTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "endReleaseTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    firstUnlock(
      _index: BigNumberish,
      _account: string,
      _amount: BigNumberish,
      _merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    "firstUnlock(uint256,address,uint256,bytes32[])"(
      _index: BigNumberish,
      _account: string,
      _amount: BigNumberish,
      _merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    firstUnlockAmount(
      _lockAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "firstUnlockAmount(uint256)"(
      _lockAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lockOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "lockOf(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    merkleRoot(overrides?: CallOverrides): Promise<string>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    released(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "released(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setLockAmount(
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setLockAmount(address,uint256)"(
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    startReleaseTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "startReleaseTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<string>;

    "token()"(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unlock(_account: string, overrides?: CallOverrides): Promise<void>;

    "unlock(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateRoot(
      _merkleRoot: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateRoot(bytes32)"(
      _merkleRoot: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Lock(to: string | null, value: null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    UnLock(to: string | null, value: null): EventFilter;
  };

  estimateGas: {
    canUnlockAmount(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "canUnlockAmount(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    emergencyWithdraw(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "emergencyWithdraw(address,uint256)"(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    endReleaseTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "endReleaseTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    firstUnlock(
      _index: BigNumberish,
      _account: string,
      _amount: BigNumberish,
      _merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "firstUnlock(uint256,address,uint256,bytes32[])"(
      _index: BigNumberish,
      _account: string,
      _amount: BigNumberish,
      _merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    firstUnlockAmount(
      _lockAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "firstUnlockAmount(uint256)"(
      _lockAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lockOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "lockOf(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    merkleRoot(overrides?: CallOverrides): Promise<BigNumber>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    released(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "released(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    setLockAmount(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setLockAmount(address,uint256)"(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    startReleaseTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "startReleaseTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    "token()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    unlock(_account: string, overrides?: Overrides): Promise<BigNumber>;

    "unlock(address)"(
      _account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    updateRoot(
      _merkleRoot: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updateRoot(bytes32)"(
      _merkleRoot: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    canUnlockAmount(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "canUnlockAmount(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    emergencyWithdraw(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "emergencyWithdraw(address,uint256)"(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    endReleaseTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "endReleaseTimestamp()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    firstUnlock(
      _index: BigNumberish,
      _account: string,
      _amount: BigNumberish,
      _merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "firstUnlock(uint256,address,uint256,bytes32[])"(
      _index: BigNumberish,
      _account: string,
      _amount: BigNumberish,
      _merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    firstUnlockAmount(
      _lockAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "firstUnlockAmount(uint256)"(
      _lockAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lockOf(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "lockOf(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    merkleRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    released(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "released(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setLockAmount(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setLockAmount(address,uint256)"(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    startReleaseTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "startReleaseTimestamp()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    unlock(
      _account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "unlock(address)"(
      _account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    updateRoot(
      _merkleRoot: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateRoot(bytes32)"(
      _merkleRoot: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
