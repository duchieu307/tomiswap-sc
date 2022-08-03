/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TokenRegistry } from "../TokenRegistry";

export class TokenRegistry__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TokenRegistry> {
    return super.deploy(overrides || {}) as Promise<TokenRegistry>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TokenRegistry {
    return super.attach(address) as TokenRegistry;
  }
  connect(signer: Signer): TokenRegistry__factory {
    return super.connect(signer) as TokenRegistry__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenRegistry {
    return new Contract(address, _abi, signerOrProvider) as TokenRegistry;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_old",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_new",
        type: "address",
      },
    ],
    name: "ChangeGovernor",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_status",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_block",
        type: "uint256",
      },
    ],
    name: "TokenStatusChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "CLOSED",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NONE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "OPENED",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PENDING",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REGISTERED",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_new",
        type: "address",
      },
    ],
    name: "changeGovernor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "governor",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_end",
        type: "uint256",
      },
    ],
    name: "iterateValidTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "publishTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "publishToken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "registryToken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenList",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "tokenStatus",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_status",
        type: "uint256",
      },
    ],
    name: "updateToken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "validTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610ca9806100206000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80636a75144711610097578063aa23a8f411610066578063aa23a8f4146102a5578063d2457370146102ad578063dcc27d04146102b5578063e4c0aaf4146102db57610100565b80636a7514471461020557806383525394146102785780639ead7222146102805780639f181b5e1461029d57610100565b80630e2636a3116100d35780630e2636a31461018f5780632239eb3a146101975780632609e5f4146101d15780632bce9e7b146101d957610100565b806305b98fad146101055780630acac9421461013d5780630b0ab776146101635780630c340a241461016b575b600080fd5b61012b6004803603602081101561011b57600080fd5b50356001600160a01b0316610303565b60408051918252519081900360200190f35b61012b6004803603602081101561015357600080fd5b50356001600160a01b0316610315565b61012b610327565b61017361032c565b604080516001600160a01b039092168252519081900360200190f35b61012b61033b565b6101bd600480360360208110156101ad57600080fd5b50356001600160a01b0316610340565b604080519115158252519081900360200190f35b61012b6103a9565b6101bd600480360360408110156101ef57600080fd5b506001600160a01b0381351690602001356103ae565b6102286004803603604081101561021b57600080fd5b5080359060200135610417565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561026457818101518382015260200161024c565b505050509050019250505060405180910390f35b61012b6106ad565b6101736004803603602081101561029657600080fd5b50356106b2565b61012b6106d9565b61012b6106df565b6102286106e4565b6101bd600480360360208110156102cb57600080fd5b50356001600160a01b03166108bb565b610301600480360360208110156102f157600080fd5b50356001600160a01b031661093c565b005b60026020526000908152604090205481565b60016020526000908152604090205481565b600181565b6000546001600160a01b031681565b600481565b600080546001600160a01b03163314610398576040805162461bcd60e51b815260206004820152601560248201527423b7bb32b93730b136329d102327a92124a22222a760591b604482015290519081900360640190fd5b6103a382600161099f565b92915050565b600281565b600080546001600160a01b03163314610406576040805162461bcd60e51b815260206004820152601560248201527423b7bb32b93730b136329d102327a92124a22222a760591b604482015290519081900360640190fd5b610410838361099f565b9392505050565b600454606090821115610471576040805162461bcd60e51b815260206004820152601760248201527f546f6b656e52656769737472793a204f564552464c4f57000000000000000000604482015290519081900360640190fd5b81831115801561047f575060015b8015610489575060015b6104da576040805162461bcd60e51b815260206004820152601f60248201527f546f6b656e52656769737472793a20494e564149445f504152414d5445525300604482015290519081900360640190fd5b6000835b8381101561057357600260016000600484815481106104f957fe5b60009182526020808320909101546001600160a01b03168352820192909252604001902054148061055f57506003600160006004848154811061053857fe5b60009182526020808320909101546001600160a01b03168352820192909252604001902054145b1561056b576001909101905b6001016104de565b5060608167ffffffffffffffff8111801561058d57600080fd5b506040519080825280602002602001820160405280156105b7578160200160208202803683370190505b5090506000855b858110156106a257600260016000600484815481106105d957fe5b60009182526020808320909101546001600160a01b03168352820192909252604001902054148061063f57506003600160006004848154811061061857fe5b60009182526020808320909101546001600160a01b03168352820192909252604001902054145b1561069a576004818154811061065157fe5b9060005260206000200160009054906101000a90046001600160a01b031683838151811061067b57fe5b6001600160a01b03909216602092830291909101909101526001909101905b6001016105be565b509095945050505050565b600081565b600481815481106106bf57fe5b6000918252602090912001546001600160a01b0316905081565b60035481565b600381565b60606000805b600454811015610781576002600160006004848154811061070757fe5b60009182526020808320909101546001600160a01b03168352820192909252604001902054148061076d57506003600160006004848154811061074657fe5b60009182526020808320909101546001600160a01b03168352820192909252604001902054145b15610779576001909101905b6001016106ea565b5060608167ffffffffffffffff8111801561079b57600080fd5b506040519080825280602002602001820160405280156107c5578160200160208202803683370190505b5090506000805b6004548110156108b257600260016000600484815481106107e957fe5b60009182526020808320909101546001600160a01b03168352820192909252604001902054148061084f57506003600160006004848154811061082857fe5b60009182526020808320909101546001600160a01b03168352820192909252604001902054145b156108aa576004818154811061086157fe5b9060005260206000200160009054906101000a90046001600160a01b031683838151811061088b57fe5b6001600160a01b03909216602092830291909101909101526001909101905b6001016107cc565b50909250505090565b600080546001600160a01b03163314610913576040805162461bcd60e51b815260206004820152601560248201527423b7bb32b93730b136329d102327a92124a22222a760591b604482015290519081900360640190fd5b6001600160a01b03821660009081526002602081905260409091204390556103a390839061099f565b6000546001600160a01b03163314610993576040805162461bcd60e51b815260206004820152601560248201527423b7bb32b93730b136329d102327a92124a22222a760591b604482015290519081900360640190fd5b61099c81610b34565b50565b60006001600160a01b0383166109fc576040805162461bcd60e51b815260206004820152601c60248201527f546f6b656e52656769737472793a20494e56414c49445f544f4b454e00000000604482015290519081900360640190fd5b6001600160a01b038316600090815260016020526040902054821415610a535760405162461bcd60e51b8152600401808060200182810382526025815260200180610c4f6025913960400191505060405180910390fd5b6001600160a01b038316600090815260016020526040902054610ad257600380546001019055600480546001810182556000919091527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b01805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0385161790555b6001600160a01b0383166000818152600160209081526040918290208590558151858152439181019190915281517f14c4e14d48705f2a0e0384106c92ba8c0c2901533a176b0ccde91b5c3d823456929181900390910190a250600192915050565b6001600160a01b038116610b8f576040805162461bcd60e51b815260206004820152601b60248201527f476f7665726e61626c653a20494e56414c49445f414444524553530000000000604482015290519081900360640190fd5b6000546001600160a01b0382811691161415610bf2576040805162461bcd60e51b815260206004820152601560248201527f476f7665726e61626c653a204e4f5f4348414e47450000000000000000000000604482015290519081900360640190fd5b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917e355779987285d4d75ca85a340086a1243f46cf4fba5927b1f7fc9d5dd8b9d09190a3505056fe546f6b656e52656769737472793a20544f4b454e5f5354415455535f4e4f5f4348414e4745a2646970667358221220e8cb6fd2743793e6828155ad6ee8b7d9551bb701d4027e5a9718f9d4265ff2ad64736f6c63430006060033";
