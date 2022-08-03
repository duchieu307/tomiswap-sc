/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TomiFactory } from "../TomiFactory";

export class TomiFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _TOMI: string,
    _CONFIG: string,
    overrides?: Overrides
  ): Promise<TomiFactory> {
    return super.deploy(
      _TOMI,
      _CONFIG,
      overrides || {}
    ) as Promise<TomiFactory>;
  }
  getDeployTransaction(
    _TOMI: string,
    _CONFIG: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_TOMI, _CONFIG, overrides || {});
  }
  attach(address: string): TomiFactory {
    return super.attach(address) as TomiFactory;
  }
  connect(signer: Signer): TomiFactory__factory {
    return super.connect(signer) as TomiFactory__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TomiFactory {
    return new Contract(address, _abi, signerOrProvider) as TomiFactory;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_TOMI",
        type: "address",
      },
      {
        internalType: "address",
        name: "_CONFIG",
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
        indexed: true,
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "pair",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "PairCreated",
    type: "event",
  },
  {
    inputs: [],
    name: "CONFIG",
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
    name: "TOMI",
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
        name: "_player",
        type: "address",
      },
      {
        internalType: "address",
        name: "_pair",
        type: "address",
      },
    ],
    name: "addPlayerPair",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allPairs",
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
    name: "allPairsLength",
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
    name: "contractCodeHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
    ],
    name: "createPair",
    outputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "getPair",
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
        name: "player",
        type: "address",
      },
    ],
    name: "getPlayerPairCount",
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
    name: "isPair",
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
    inputs: [],
    name: "owner",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "playerPairs",
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
        name: "_CONFIG",
        type: "address",
      },
    ],
    name: "updateConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
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
];

const _bytecode =
  "0x6080604052600160005534801561001557600080fd5b506040516133833803806133838339818101604052604081101561003857600080fd5b508051602090910151600180546001600160a01b039384166001600160a01b031991821617909155600280549390921692811692909217905560038054909116331790556132f88061008b6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063bf1512d31161008c578063c9ead25811610066578063c9ead2581461020a578063d92e82e41461024c578063e5e31b1314610254578063e6a439051461027a576100ea565b8063bf1512d3146101a8578063c1dfe652146101d4578063c9c65396146101dc576100ea565b80636c42fa66116100c85780636c42fa661461014a5780636cc919c8146101705780637c7f84ee146101985780638da5cb5b146101a0576100ea565b80631e3dd18b146100ef57806354fd4d5014610128578063574f2ba314610142575b600080fd5b61010c6004803603602081101561010557600080fd5b50356102a8565b604080516001600160a01b039092168252519081900360200190f35b6101306102cf565b60408051918252519081900360200190f35b6101306102d5565b6101306004803603602081101561016057600080fd5b50356001600160a01b03166102db565b6101966004803603602081101561018657600080fd5b50356001600160a01b031661030c565b005b6101306105a5565b61010c6105ab565b61010c600480360360408110156101be57600080fd5b506001600160a01b0381351690602001356105ba565b61010c6105ef565b61010c600480360360408110156101f257600080fd5b506001600160a01b03813581169160200135166105fe565b6102386004803603604081101561022057600080fd5b506001600160a01b0381358116916020013516610b9a565b604080519115158252519081900360200190f35b61010c610d07565b6102386004803603602081101561026a57600080fd5b50356001600160a01b0316610d16565b61010c6004803603604081101561029057600080fd5b506001600160a01b0381358116916020013516610d2b565b600681815481106102b557fe5b6000918252602090912001546001600160a01b0316905081565b60005481565b60065490565b6001600160a01b03811660009081526007602052604081208054610303576000915050610307565b5490505b919050565b6003546001600160a01b0316331461036b576040805162461bcd60e51b815260206004820152601860248201527f544f4d4920464143544f52593a205045524d495353494f4e0000000000000000604482015290519081900360640190fd5b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03831617905560005b6006548110156105a157600681815481106103ad57fe5b600091825260209091200154600680546001600160a01b039092169163f8c8765e9190849081106103da57fe5b60009182526020918290200154604080517f0dfe168100000000000000000000000000000000000000000000000000000000815290516001600160a01b0390921692630dfe168192600480840193829003018186803b15801561043c57600080fd5b505afa158015610450573d6000803e3d6000fd5b505050506040513d602081101561046657600080fd5b5051600680548590811061047657fe5b60009182526020918290200154604080517fd21220a700000000000000000000000000000000000000000000000000000000815290516001600160a01b039092169263d21220a792600480840193829003018186803b1580156104d857600080fd5b505afa1580156104ec573d6000803e3d6000fd5b505050506040513d602081101561050257600080fd5b5051600154604080517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b1681526001600160a01b03948516600482015292841660248401528388166044840152921660648201529051608480830192600092919082900301818387803b15801561057d57600080fd5b505af1158015610591573d6000803e3d6000fd5b5050600190920191506103969050565b5050565b60095481565b6003546001600160a01b031681565b600760205281600052604060002081815481106105d357fe5b6000918252602090912001546001600160a01b03169150829050565b6001546001600160a01b031681565b6002546040805163097bc71960e31b815290516000926001600160a01b031691634bde38c8916004808301926020929190829003018186803b15801561064357600080fd5b505afa158015610657573d6000803e3d6000fd5b505050506040513d602081101561066d57600080fd5b50516001600160a01b031633146106cb576040805162461bcd60e51b815260206004820152601860248201527f544f4d4920464143544f52593a205045524d495353494f4e0000000000000000604482015290519081900360640190fd5b816001600160a01b0316836001600160a01b0316141561071c5760405162461bcd60e51b81526004018080602001828103825260218152602001806132a26021913960400191505060405180910390fd5b60025460408051633c6202c960e21b81526001600160a01b0386811660048301529151919092169163f1880b24916024808301926020929190829003018186803b15801561076957600080fd5b505afa15801561077d573d6000803e3d6000fd5b505050506040513d602081101561079357600080fd5b50518015610816575060025460408051633c6202c960e21b81526001600160a01b0385811660048301529151919092169163f1880b24916024808301926020929190829003018186803b1580156107e957600080fd5b505afa1580156107fd573d6000803e3d6000fd5b505050506040513d602081101561081357600080fd5b50515b610867576040805162461bcd60e51b815260206004820152601660248201527f544f4d4920464143544f52593a204e4f54204c49535400000000000000000000604482015290519081900360640190fd5b600080836001600160a01b0316856001600160a01b03161061088a57838561088d565b84845b90925090506001600160a01b0382166108ed576040805162461bcd60e51b815260206004820152601a60248201527f544f4d4920464143544f52593a205a45524f5f41444452455353000000000000604482015290519081900360640190fd5b6001600160a01b03828116600090815260046020908152604080832085851684529091529020541615610967576040805162461bcd60e51b815260206004820152601960248201527f544f4d4920464143544f52593a20504149525f45584953545300000000000000604482015290519081900360640190fd5b60606040518060200161097990610d51565b601f1982820381018352601f909101166040526009549091506109a157805160208201206009555b6000838360405160200180836001600160a01b03166001600160a01b031660601b8152601401826001600160a01b03166001600160a01b031660601b815260140192505050604051602081830303815290604052805190602001209050808251602084016000f56001600160a01b03808216600081815260056020526040808220805460ff19166001908117909155600254905482517ff8c8765e0000000000000000000000000000000000000000000000000000000081528b871660048201528a871660248201529186166044830152909416606485015251939850909263f8c8765e92608480820193929182900301818387803b158015610aa357600080fd5b505af1158015610ab7573d6000803e3d6000fd5b505050506001600160a01b0384811660008181526004602081815260408084208987168086529083528185208054978d1673ffffffffffffffffffffffffffffffffffffffff1998891681179091559383528185208686528352818520805488168517905560068054600181018255958190527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f90950180549097168417909655925483519283529082015281517f0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9929181900390910190a35050505092915050565b6002546040805163097bc71960e31b815290516000926001600160a01b031691634bde38c8916004808301926020929190829003018186803b158015610bdf57600080fd5b505afa158015610bf3573d6000803e3d6000fd5b505050506040513d6020811015610c0957600080fd5b50516001600160a01b03163314610c67576040805162461bcd60e51b815260206004820152601860248201527f544f4d4920464143544f52593a205045524d495353494f4e0000000000000000604482015290519081900360640190fd5b6001600160a01b0380841660009081526008602090815260408083209386168352929052205460ff16610cfe576001600160a01b038084166000818152600860209081526040808320948716808452948252808320805460ff19166001908117909155938352600782528220805493840181558252902001805473ffffffffffffffffffffffffffffffffffffffff191690911790555b50600192915050565b6002546001600160a01b031681565b60056020526000908152604090205460ff1681565b60046020908152600092835260408084209091529082529020546001600160a01b031681565b61254380610d5f8339019056fe60806040526001600755600160155534801561001a57600080fd5b50600880546001600160a01b031916331790556125078061003c6000396000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c806370a082311161010f578063c1dfe652116100a2578063d92e82e411610071578063d92e82e41461049f578063f6b911bc146104a7578063f8c8765e146104dd578063fff6cae91461051b576101e5565b8063c1dfe6521461047f578063cf67536514610487578063d14c96411461048f578063d21220a714610497576101e5565b806396cda080116100de57806396cda080146103f7578063a87430ba1461042b578063ba9a7a561461046f578063bfc8b20814610477576101e5565b806370a082311461039b578063750142e6146103c15780638b185b35146103c95780639660c266146103ef576101e5565b806328e964e9116101875780635909c0d5116101565780635909c0d51461035d5780635a3d5493146103655780636a6278421461036d5780636c9fa59e14610393576101e5565b806328e964e9146103065780632c79db11146103455780632dd310001461034d57806354fd4d5014610355576101e5565b80630dfe1681116101c35780630dfe1681146102ca5780631485ff78146102ee578063174f57af146102f657806318160ddd146102fe576101e5565b8063022c0d9f146101ea578063026c4207146102785780630902f1ac14610292575b600080fd5b6102766004803603608081101561020057600080fd5b8135916020810135916001600160a01b03604083013516919081019060808101606082013564010000000081111561023757600080fd5b82018360208201111561024957600080fd5b8035906020019184600183028401116401000000008311171561026b57600080fd5b509092509050610523565b005b610280610982565b60408051918252519081900360200190f35b61029a610988565b604080516001600160701b03948516815292909316602083015263ffffffff168183015290519081900360600190f35b6102d26109b2565b604080516001600160a01b039092168252519081900360200190f35b6102806109c1565b6102806109c7565b610280610a75565b61032c6004803603602081101561031c57600080fd5b50356001600160a01b0316610a7b565b6040805192835260208301919091528051918290030190f35b61032c610a99565b6102d2610aad565b610280610abc565b610280610ac2565b610280610ac8565b6102806004803603602081101561038357600080fd5b50356001600160a01b0316610ace565b6102d2610dbc565b610280600480360360208110156103b157600080fd5b50356001600160a01b0316610dcb565b610280610ddd565b610280600480360360208110156103df57600080fd5b50356001600160a01b0316610de3565b610280610df5565b6102766004803603606081101561040d57600080fd5b508035906001600160a01b0360208201358116916040013516610e13565b6104516004803603602081101561044157600080fd5b50356001600160a01b0316611035565b60408051938452602084019290925282820152519081900360600190f35b610280611056565b61028061105c565b6102d2611062565b610280611071565b610280611077565b6102d261107d565b6102d261108c565b61032c600480360360608110156104bd57600080fd5b506001600160a01b0381358116916020810135909116906040013561109b565b610276600480360360808110156104f357600080fd5b506001600160a01b03813581169160208101358216916040820135811691606001351661147f565b610276611536565b6009546040805163097bc71960e31b815290516000926001600160a01b031691634bde38c8916004808301926020929190829003018186803b15801561056857600080fd5b505afa15801561057c573d6000803e3d6000fd5b505050506040513d602081101561059257600080fd5b50519050336001600160a01b038216146105eb576040805162461bcd60e51b81526020600482015260156024820152742a27a6a4902820a4a9101d102327a92124a22222a760591b604482015290519081900360640190fd5b60155460011461062b576040805162461bcd60e51b8152602060048201526006602482015265131bd8dad95960d21b604482015290519081900360640190fd5b60006015558515158061063e5750600085115b6106795760405162461bcd60e51b81526004018080602001828103825260268152602001806124836026913960400191505060405180910390fd5b600080610684610988565b5091509150816001600160701b0316881080156106a95750806001600160701b031687105b6106e45760405162461bcd60e51b815260040180806020018281038252602381526020018061239a6023913960400191505060405180910390fd5b600b54600c5460009182916001600160a01b0391821691908116908a1682148015906107225750806001600160a01b03168a6001600160a01b031614155b610773576040805162461bcd60e51b815260206004820152601660248201527f544f4d492050414952203a20494e56414c49445f544f00000000000000000000604482015290519081900360640190fd5b8b1561078457610784828b8e6115ce565b8a1561079557610795818b8d6115ce565b871561085057896001600160a01b0316631932ba53338e8e8d8d6040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b15801561083757600080fd5b505af115801561084b573d6000803e3d6000fd5b505050505b61085a8230611768565b93506108668130611768565b9250505060008a856001600160701b0316038311610885576000610894565b8a856001600160701b03160383035b905060008a856001600160701b03160383116108b15760006108c0565b8a856001600160701b03160383035b90508b8b831515806108d25750600083115b61090d5760405162461bcd60e51b81526004018080602001828103825260258152602001806124146025913960400191505060405180910390fd5b61091986868a8a6118bb565b60408051858152602081018590528082018490526060810183905290516001600160a01b038e169133917fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229181900360800190a350506001601555505050505050505050505050565b60025481565b600d546001600160701b0380821692600160701b830490911691600160e01b900463ffffffff1690565b600b546001600160a01b031681565b60115481565b6000601554600114610a09576040805162461bcd60e51b8152602060048201526006602482015265131bd8dad95960d21b604482015290519081900360640190fd5b6000601555610a1733611a98565b601154909150610a2d908263ffffffff611b7216565b60118190556040805191825260208201839052805133927ff31aa2aa8628a933f70d74fb07da3f979fc08324cfd2d3d9032bbdbf64da0f5e92908290030190a2600160155590565b60125481565b6001600160a01b031660009081526006602052604081205490549091565b600080610aa533611bbb565b924392509050565b6008546001600160a01b031681565b60075481565b600e5481565b600f5481565b600080600960009054906101000a90046001600160a01b03166001600160a01b0316634bde38c86040518163ffffffff1660e01b815260040160206040518083038186803b158015610b1f57600080fd5b505afa158015610b33573d6000803e3d6000fd5b505050506040513d6020811015610b4957600080fd5b50519050336001600160a01b03821614610ba2576040805162461bcd60e51b81526020600482015260156024820152742a27a6a4902820a4a9101d102327a92124a22222a760591b604482015290519081900360640190fd5b601554600114610be2576040805162461bcd60e51b8152602060048201526006602482015265131bd8dad95960d21b604482015290519081900360640190fd5b6000601581905580610bf2610988565b50600b549193509150600090610c11906001600160a01b031630611768565b600c54909150600090610c2d906001600160a01b031630611768565b90506000610c4a836001600160701b03871663ffffffff611b7216565b90506000610c67836001600160701b03871663ffffffff611b7216565b60125490915080610cb057610c9c6103e8610c90610c8b868663ffffffff611c6b16565b611cc4565b9063ffffffff611b7216565b9850610cab60006103e8611d15565b610cff565b610cfc6001600160701b038816610ccd858463ffffffff611c6b16565b81610cd457fe5b046001600160701b038816610cef858563ffffffff611c6b16565b81610cf657fe5b04611dac565b98505b60008911610d3e5760405162461bcd60e51b81526004018080602001828103825260298152602001806123eb6029913960400191505060405180910390fd5b610d488a8a611d15565b6001600160a01b038a166000908152601460205260409020439055610d6f858589896118bb565b6040805184815260208101849052815133927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a25050600160155550949695505050505050565b6005546001600160a01b031681565b60136020526000908152604090205481565b60105481565b60146020526000908152604090205481565b600a54600090610e0e906001600160a01b031630611768565b905090565b6009546040805163097bc71960e31b815290516000926001600160a01b031691634bde38c8916004808301926020929190829003018186803b158015610e5857600080fd5b505afa158015610e6c573d6000803e3d6000fd5b505050506040513d6020811015610e8257600080fd5b50519050336001600160a01b03821614610edb576040805162461bcd60e51b81526020600482015260156024820152742a27a6a4902820a4a9101d102327a92124a22222a760591b604482015290519081900360640190fd5b831580610ef95750816001600160a01b0316836001600160a01b0316145b15610f035761102f565b600080610f0e610988565b50600b5491935091506001600160a01b03858116911614801590610f405750600c546001600160a01b03858116911614155b610f91576040805162461bcd60e51b815260206004820152601660248201527f544f4d492050414952203a20494e56414c49445f544f00000000000000000000604482015290519081900360640190fd5b610f9c8585886115ce565b600b54600090610fb5906001600160a01b031630611768565b600c54909150600090610fd1906001600160a01b031630611768565b9050610fdf828286866118bb565b856001600160a01b0316876001600160a01b03167fd58eef465bb0100d5e79f7940ef7ec9eafeff04fa088db4388968231fffaf07d8a6040518082815260200191505060405180910390a3505050505b50505050565b60066020526000908152604090208054600182015460029092015490919083565b6103e881565b60015490565b600a546001600160a01b031681565b60045481565b60035481565b600c546001600160a01b031681565b6009546001600160a01b031681565b6000806000600960009054906101000a90046001600160a01b03166001600160a01b0316634bde38c86040518163ffffffff1660e01b815260040160206040518083038186803b1580156110ee57600080fd5b505afa158015611102573d6000803e3d6000fd5b505050506040513d602081101561111857600080fd5b50519050336001600160a01b03821614611171576040805162461bcd60e51b81526020600482015260156024820152742a27a6a4902820a4a9101d102327a92124a22222a760591b604482015290519081900360640190fd5b6015546001146111b1576040805162461bcd60e51b8152602060048201526006602482015265131bd8dad95960d21b604482015290519081900360640190fd5b6000601555600954604080517fc199de320000000000000000000000000000000000000000000000000000000081527f52454d4f56455f4c49515549444954595f4455524154494f4e00000000000000600482015290516001600160a01b039092169163c199de3291602480820192602092909190829003018186803b15801561123a57600080fd5b505afa15801561124e573d6000803e3d6000fd5b505050506040513d602081101561126457600080fd5b50516001600160a01b038716600090815260146020526040902054014310156112be5760405162461bcd60e51b815260040180806020018281038252602e8152602001806123bd602e913960400191505060405180910390fd5b6000806112c9610988565b50600b54600c549294509092506001600160a01b03908116911660006112ef8330611768565b905060006112fd8330611768565b6001600160a01b038d166000908152601360205260409020549091508a11156113575760405162461bcd60e51b81526004018080602001828103825260298152602001806124a96029913960400191505060405180910390fd5b6012548061136b8c8563ffffffff611c6b16565b8161137257fe5b049950806113868c8463ffffffff611c6b16565b8161138d57fe5b04985060008a1180156113a05750600089115b6113db5760405162461bcd60e51b81526004018080602001828103825260298152602001806124396029913960400191505060405180910390fd5b6113e58d8c611dc2565b6113f0858d8c6115ce565b6113fb848d8b6115ce565b6114058530611768565b92506114118430611768565b915061141f838389896118bb565b604080518b8152602081018b905281516001600160a01b038f169233927fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496929081900390910190a350505050505050600160158190555050935093915050565b6008546001600160a01b031633146114d6576040805162461bcd60e51b81526020600482015260156024820152742a27a6a4902820a4a9101d102327a92124a22222a760591b604482015290519081900360640190fd5b600b805473ffffffffffffffffffffffffffffffffffffffff199081166001600160a01b0387811691909117909255600c80548216868416179055600980548216858416179055600a8054909116838316179081905561102f9116611e5f565b601554600114611576576040805162461bcd60e51b8152602060048201526006602482015265131bd8dad95960d21b604482015290519081900360640190fd5b6000601555600b546115c790611595906001600160a01b031630611768565b600c546115ab906001600160a01b031630611768565b600d546001600160701b0380821691600160701b9004166118bb565b6001601555565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b1781529251815160009460609489169392918291908083835b6020831061167b5780518252601f19909201916020918201910161165c565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146116dd576040519150601f19603f3d011682016040523d82523d6000602084013e6116e2565b606091505b5091509150818015611710575080511580611710575080806020019051602081101561170d57600080fd5b50515b611761576040805162461bcd60e51b815260206004820152601b60248201527f544f4d492050414952203a205452414e534645525f4641494c45440000000000604482015290519081900360640190fd5b5050505050565b600a546000906001600160a01b03848116911614801561179057506001600160a01b03821630145b1561183057611829601154846001600160a01b03166370a08231856040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156117f157600080fd5b505afa158015611805573d6000803e3d6000fd5b505050506040513d602081101561181b57600080fd5b50519063ffffffff611b7216565b90506118b5565b826001600160a01b03166370a08231836040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561188657600080fd5b505afa15801561189a573d6000803e3d6000fd5b505050506040513d60208110156118b057600080fd5b505190505b92915050565b6001600160701b0384118015906118d957506001600160701b038311155b61192a576040805162461bcd60e51b815260206004820152601460248201527f544f4d492050414952203a204f564552464c4f57000000000000000000000000604482015290519081900360640190fd5b600d5463ffffffff42811691600160e01b9004811682039081161580159061195a57506001600160701b03841615155b801561196e57506001600160701b03831615155b156119df578063ffffffff1661199c8561198786611e8e565b6001600160e01b03169063ffffffff611ea016565b600e80546001600160e01b03929092169290920201905563ffffffff81166119c78461198787611e8e565b600f80546001600160e01b0392909216929092020190555b600d80546dffffffffffffffffffffffffffff19166001600160701b03888116919091177fffffffff0000000000000000000000000000ffffffffffffffffffffffffffff16600160701b8883168102919091176001600160e01b0316600160e01b63ffffffff871602179283905560408051848416815291909304909116602082015281517f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1929181900390910190a1505050505050565b6000611aa2611ec5565b611aab82611f47565b6001600160a01b038216600090815260066020526040902060020154611b18576040805162461bcd60e51b815260206004820152600f60248201527f4e4f5448494e4720544f204d494e540000000000000000000000000000000000604482015290519081900360640190fd5b6001600160a01b038083166000908152600660205260409020600201546005549091611b4691163383611fef565b6001600160a01b038316600090815260066020526040812060020155600380548201905590505b919050565b6000611bb483836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612152565b9392505050565b6001600160a01b0381166000908152600660205260408120600154825415611c27576000611be76121e9565b9050611c23611c16600054611c0a64e8d4a5100085611c6b90919063ffffffff16565b9063ffffffff61229816565b839063ffffffff6122da16565b9150505b611c638260010154610c908460020154611c5764e8d4a51000611c0a878960000154611c6b90919063ffffffff16565b9063ffffffff6122da16565b949350505050565b600082611c7a575060006118b5565b82820282848281611c8757fe5b0414611bb45760405162461bcd60e51b81526004018080602001828103825260218152602001806124626021913960400191505060405180910390fd5b60006003821115611d07575080600160028204015b81811015611d0157809150600281828581611cf057fe5b040181611cf957fe5b049050611cd9565b50611b6d565b8115611b6d57506001919050565b601254611d28908263ffffffff6122da16565b6012556001600160a01b038216600090815260136020526040902054611d54908263ffffffff6122da16565b6001600160a01b03831660008181526013602090815260408083209490945583518581529351929391927fab8530f87dc9b59234c4623bf917212bb2536d647574c8e7e5da92c2ede0c9f89281900390910190a35050565b6000818310611dbb5781611bb4565b5090919050565b6001600160a01b038216600090815260136020526040902054611deb908263ffffffff611b7216565b6001600160a01b038316600090815260136020526040902055601254611e17908263ffffffff611b7216565b6012556040805182815290516000916001600160a01b038516917fbac40739b0d4ca32fa2d82fc91630465ba3eddd1598da6fca393b26fb63b94539181900360200190a35050565b6005805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6001600160701b0316600160701b0290565b60006001600160701b0382166001600160e01b03841681611ebd57fe5b049392505050565b600054611eee57611ee6611ed76121e9565b6002549063ffffffff6122da16565b600255611f45565b6000611ef86121e9565b9050611f2a611f1b600054611c0a64e8d4a5100085611c6b90919063ffffffff16565b6001549063ffffffff6122da16565b600155600254611f40908263ffffffff6122da16565b600255505b565b6001600160a01b0381166000908152600660205260409020805415611feb576000611f928260010154610c9064e8d4a51000611c0a6001548760000154611c6b90919063ffffffff16565b6002830154909150611faa908263ffffffff6122da16565b6002830155600454611fc2908263ffffffff6122da16565b6004556001548254611fe49164e8d4a5100091611c0a9163ffffffff611c6b16565b6001830155505b5050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b178152925182516000946060949389169392918291908083835b6020831061206c5780518252601f19909201916020918201910161204d565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146120ce576040519150601f19603f3d011682016040523d82523d6000602084013e6120d3565b606091505b509150915081801561210157508051158061210157508080602001905160208110156120fe57600080fd5b50515b611761576040805162461bcd60e51b815260206004820152601f60248201527f5472616e7366657248656c7065723a205452414e534645525f4641494c454400604482015290519081900360640190fd5b600081848411156121e15760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156121a657818101518382015260200161218e565b50505050905090810190601f1680156121d35780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600254600554604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051600093610e0e939092610c90926001600160a01b03909216916370a0823191602480820192602092909190829003018186803b15801561225d57600080fd5b505afa158015612271573d6000803e3d6000fd5b505050506040513d602081101561228757600080fd5b50516003549063ffffffff6122da16565b6000611bb483836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250612334565b600082820183811015611bb4576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600081836123835760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156121a657818101518382015260200161218e565b50600083858161238f57fe5b049594505050505056fe544f4d492050414952203a2020494e53554646494349454e545f4c4951554944495459544f4d4920504c4154464f524d203a2052454d4f5645204c4951554944495459204455524154494f4e204641494c544f4d492050414952203a20494e53554646494349454e545f4c49515549444954595f4d494e544544544f4d492050414952203a20494e53554646494349454e545f494e5055545f414d4f554e54544f4d492050414952203a20494e53554646494349454e545f4c49515549444954595f4255524e4544536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77544f4d492050414952203a20494e53554646494349454e545f4f55545055545f414d4f554e54544f4d492050414952203a20494e53554646494349454e545f4c49515549444954595f414d4f554e54a2646970667358221220fa6185e3efc6f34df6425833a2e7d25b164b4e159383f1323ab57e0134f3fc2964736f6c63430006060033544f4d4920464143544f52593a204944454e544943414c5f414444524553534553a26469706673582212207e8c70c36d6327defd24a4f1200699d4ce08a2fdf0a2afc0052161b1a4a2461464736f6c63430006060033";