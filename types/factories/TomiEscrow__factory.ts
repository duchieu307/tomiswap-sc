/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TomiEscrow } from "../TomiEscrow";

export class TomiEscrow__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_DELEGATE: string, overrides?: Overrides): Promise<TomiEscrow> {
    return super.deploy(_DELEGATE, overrides || {}) as Promise<TomiEscrow>;
  }
  getDeployTransaction(
    _DELEGATE: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_DELEGATE, overrides || {});
  }
  attach(address: string): TomiEscrow {
    return super.attach(address) as TomiEscrow;
  }
  connect(signer: Signer): TomiEscrow__factory {
    return super.connect(signer) as TomiEscrow__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TomiEscrow {
    return new Contract(address, _abi, signerOrProvider) as TomiEscrow;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_DELEGATE",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "DgasToTokenRated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalWithdraw",
        type: "uint256",
      },
    ],
    name: "EmergencyWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "newState",
        type: "bool",
      },
    ],
    name: "EmergencyWithdrawStatusUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_oldImpl",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_newImpl",
        type: "address",
      },
    ],
    name: "ImplChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "shareToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "RewardWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dgasRate",
        type: "uint256",
      },
    ],
    name: "ShareTokenSettled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dgasRate",
        type: "uint256",
      },
    ],
    name: "ShareTokenUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "DELEGATE",
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
    inputs: [],
    name: "ableToEmergencyWithdraw",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "emergencyWithdrawERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "impl",
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
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_enableEmergencyWithdraw",
        type: "bool",
      },
    ],
    name: "setEmergencyWithdrawStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_dgasRate",
        type: "uint256",
      },
    ],
    name: "setShareToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "shareTokenExisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "shareTokenReward",
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
        name: "",
        type: "address",
      },
    ],
    name: "shareTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "dgasRate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_dgasRate",
        type: "uint256",
      },
    ],
    name: "updateShareTokenRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newImpl",
        type: "address",
      },
    ],
    name: "upgradeImpl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "withdrawReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161129e38038061129e8339818101604052602081101561003357600080fd5b50516000805460ff60a01b196001600160a01b031991821633178116909255600180546001600160a01b0390941693909116929092171690556112238061007b6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80635a200b0b11610097578063890cdcb311610066578063890cdcb31461024f5780638abf60771461026e57806396153f0714610276578063f2b81ac4146102ae576100f5565b80635a200b0b146101fd5780635c975abb1461023757806368a469101461023f5780638456cb5914610247576100f5565b806337f8a87c116100d357806337f8a87c1461017f5780633f4ba83a146101ab57806340c442de146101b35780634a2d5c9d146101d9576100f5565b80631103b13b146100f75780631a2f13631461012d5780632d8a8ea014610153575b005b6100f56004803603606081101561010d57600080fd5b506001600160a01b038135811691602081013591604090910135166102d4565b6100f56004803603602081101561014357600080fd5b50356001600160a01b03166104a8565b6100f56004803603604081101561016957600080fd5b506001600160a01b038135169060200135610619565b6100f56004803603604081101561019557600080fd5b506001600160a01b03813516906020013561078e565b6100f5610909565b6100f5600480360360208110156101c957600080fd5b50356001600160a01b031661095e565b6101e1610af6565b604080516001600160a01b039092168252519081900360200190f35b6102236004803603602081101561021357600080fd5b50356001600160a01b0316610b05565b604080519115158252519081900360200190f35b610223610b6a565b610223610b7a565b6100f5610b8a565b6100f56004803603602081101561026557600080fd5b50351515610bdd565b6101e1610c86565b61029c6004803603602081101561028c57600080fd5b50356001600160a01b0316610c95565b60408051918252519081900360200190f35b61029c600480360360208110156102c457600080fd5b50356001600160a01b0316610ca7565b6102dc610b6a565b1561032e576040805162461bcd60e51b815260206004820152601060248201527f5061757361626c653a2070617573656400000000000000000000000000000000604482015290519081900360640190fd5b6001546001600160a01b0316331461038d576040805162461bcd60e51b815260206004820152601560248201527f546f6d69457363726f773a3a464f5242494444454e0000000000000000000000604482015290519081900360640190fd5b61039683610b05565b6103d15760405162461bcd60e51b81526004018080602001828103825260248152602001806110ca6024913960400191505060405180910390fd5b60006103dc84610ca7565b6001600160a01b038516600090815260026020526040902054909150838210156104375760405162461bcd60e51b815260040180806020018281038252602c815260200180611074602c913960400191505060405180910390fd5b6000610449858363ffffffff610d3c16565b9050610456868583610d9e565b604080516001600160a01b0380891682526020820184905286168183015290517fad09ff3a9ee8e1fec91bff8a14328e07e73ae646ff305dd93cab53a55f5f64229181900360600190a1505050505050565b6000546001600160a01b031633146104f3576040805162461bcd60e51b81526020600482015260096024820152682327a92124a22222a760b91b604482015290519081900360640190fd5b6001600160a01b03811661054e576040805162461bcd60e51b815260206004820152600f60248201527f494e56414c49445f414444524553530000000000000000000000000000000000604482015290519081900360640190fd5b6000546001600160a01b03828116911614156105b1576040805162461bcd60e51b815260206004820152600960248201527f4e4f5f4348414e47450000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917faad46b89531ed10d02d926f4d6bfe234a6126e3fffc02d3b07167575f9c143379190a35050565b6000546001600160a01b03163314610664576040805162461bcd60e51b81526020600482015260096024820152682327a92124a22222a760b91b604482015290519081900360640190fd5b61066d82610b05565b156106a95760405162461bcd60e51b815260040180806020018281038252602e81526020018061116b602e913960400191505060405180910390fd5b6001600160a01b0382166106ee5760405162461bcd60e51b815260040180806020018281038252602e81526020018061113d602e913960400191505060405180910390fd5b8061072a5760405162461bcd60e51b815260040180806020018281038252602b815260200180611199602b913960400191505060405180910390fd5b60408051602080820183528382526001600160a01b03851660008181526002835284902092519092558251918252810183905281517f86f403cd71c557d38dd9ed5ae4bab0eee242abf162534745a13ae643946ba54e929181900390910190a15050565b6000546001600160a01b031633146107d9576040805162461bcd60e51b81526020600482015260096024820152682327a92124a22222a760b91b604482015290519081900360640190fd5b6107e282610b05565b61081d5760405162461bcd60e51b81526004018080602001828103825260248152602001806110ca6024913960400191505060405180910390fd5b806108595760405162461bcd60e51b815260040180806020018281038252602b815260200180611199602b913960400191505060405180910390fd5b6001600160a01b0382166000908152600260205260409020548114156108b05760405162461bcd60e51b815260040180806020018281038252602e81526020018061110f602e913960400191505060405180910390fd5b6001600160a01b0382166000818152600260209081526040918290208490558151928352820183905280517f5dd471c737aa47a7aba3e192df5e49f7e19a7bb34bc9f47f62c57f3cff3d24399281900390910190a15050565b6000546001600160a01b03163314610954576040805162461bcd60e51b81526020600482015260096024820152682327a92124a22222a760b91b604482015290519081900360640190fd5b61095c610f36565b565b6000546001600160a01b031633146109a9576040805162461bcd60e51b81526020600482015260096024820152682327a92124a22222a760b91b604482015290519081900360640190fd5b6109b1610b6a565b610a02576040805162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015290519081900360640190fd5b600154600160a01b900460ff16610a4a5760405162461bcd60e51b815260040180806020018281038252602a8152602001806110a0602a913960400191505060405180910390fd5b6000610a5582610ca7565b905060008111610aac576040805162461bcd60e51b815260206004820152601f60248201527f546f6d69457363726f773a3a4e6f7468696e6720746f20776974686472617700604482015290519081900360640190fd5b610ab7823383610d9e565b604080513381526020810183905281517f5fafa99d0643513820be26656b45130b01e1c03062e1266bf36f88cbd3bd9695929181900390910190a15050565b6001546001600160a01b031681565b60006001600160a01b038216610b4c5760405162461bcd60e51b815260040180806020018281038252602a8152602001806111c4602a913960400191505060405180910390fd5b506001600160a01b0316600090815260026020526040902054151590565b600054600160a01b900460ff1690565b600154600160a01b900460ff1681565b6000546001600160a01b03163314610bd5576040805162461bcd60e51b81526020600482015260096024820152682327a92124a22222a760b91b604482015290519081900360640190fd5b61095c610fd1565b6000546001600160a01b03163314610c28576040805162461bcd60e51b81526020600482015260096024820152682327a92124a22222a760b91b604482015290519081900360640190fd5b60018054821515600160a01b90810260ff60a01b199092169190911791829055604080519190920460ff161515815290517f2e1f27bd82fb74d054d0bb24ec033d325f5066bc1143c4a2821eb5da67cb1ee29181900360200190a150565b6000546001600160a01b031681565b60026020526000908152604090205481565b604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290516000916001600160a01b038416916370a0823191602480820192602092909190829003018186803b158015610d0a57600080fd5b505afa158015610d1e573d6000803e3d6000fd5b505050506040513d6020811015610d3457600080fd5b505192915050565b600082610d4b57506000610d98565b82820282848281610d5857fe5b0414610d955760405162461bcd60e51b81526004018080602001828103825260218152602001806110ee6021913960400191505060405180910390fd5b90505b92915050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000178152925182516000946060949389169392918291908083835b60208310610e495780518252601f199092019160209182019101610e2a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610eab576040519150601f19603f3d011682016040523d82523d6000602084013e610eb0565b606091505b5091509150818015610ede575080511580610ede5750808060200190516020811015610edb57600080fd5b50515b610f2f576040805162461bcd60e51b815260206004820152601f60248201527f5472616e7366657248656c7065723a205452414e534645525f4641494c454400604482015290519081900360640190fd5b5050505050565b610f3e610b6a565b610f8f576040805162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015290519081900360640190fd5b6000805460ff60a01b191690556040805133815290517f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa9181900360200190a1565b610fd9610b6a565b1561102b576040805162461bcd60e51b815260206004820152601060248201527f5061757361626c653a2070617573656400000000000000000000000000000000604482015290519081900360640190fd5b6000805460ff60a01b1916600160a01b1790556040805133815290517f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2589181900360200190a156fe546f6d69457363726f773a3a4e6f7420656e6f756768207265776172647320666f7220776974686472617721546f6d69457363726f773a3a456d657267656e63792077697468647261772069732064697361626c6564546f6d69457363726f773a3a536861726520746f6b656e206e6f74206578697374656421536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77546f6d69457363726f773a3a4e6f742062652061626c6520746f207365742073616d652044676173207261746521546f6d69457363726f773a3a536861726520746f6b656e2061646472657373206973206e6f7420696c6c6567616c546f6d69457363726f773a3a536861726520746f6b656e206164647265737320616c726561647920657869737421546f6d69457363726f773a3a536861726520746f6b656e2072617465206973206e6f7420696c6c6567616c546f6d69457363726f773a3a536861726520746f6b656e206164647265737320697320696c6c6567616ca264697066735822122074242f57a7948f5ba120fd7cde9277a93586c2d61b5407f4378610a6fc782a8f64736f6c63430006060033";
