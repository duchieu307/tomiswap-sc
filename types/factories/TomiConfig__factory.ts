/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TomiConfig } from "../TomiConfig";

export class TomiConfig__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TomiConfig> {
    return super.deploy(overrides || {}) as Promise<TomiConfig>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TomiConfig {
    return super.attach(address) as TomiConfig;
  }
  connect(signer: Signer): TomiConfig__factory {
    return super.connect(signer) as TomiConfig__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TomiConfig {
    return new Contract(address, _abi, signerOrProvider) as TomiConfig;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
        indexed: false,
        internalType: "bytes32",
        name: "_name",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_old",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "ConfigValueChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_oldOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "OwnerChanged",
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
    name: "PERCENT_DENOMINATOR",
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
    inputs: [],
    name: "TGAS_DECIMAL",
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
    name: "addToken",
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
        internalType: "bytes32",
        name: "_name",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_minValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxSpan",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "changeConfig",
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
        internalType: "bytes32",
        name: "_name",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "changeConfigValue",
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
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "changeOwner",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "checkPair",
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
        name: "_token",
        type: "address",
      },
    ],
    name: "checkToken",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "configs",
    outputs: [
      {
        internalType: "uint256",
        name: "minValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxSpan",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "enable",
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
    name: "defaultListTokens",
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
    name: "dev",
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
        internalType: "bytes32",
        name: "_name",
        type: "bytes32",
      },
    ],
    name: "getConfig",
    outputs: [
      {
        internalType: "uint256",
        name: "minValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxSpan",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "enable",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_name",
        type: "bytes32",
      },
    ],
    name: "getConfigValue",
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
    name: "getDefaultListTokens",
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
        internalType: "address",
        name: "_tgas",
        type: "address",
      },
      {
        internalType: "address",
        name: "_governor",
        type: "address",
      },
      {
        internalType: "address",
        name: "_platform",
        type: "address",
      },
      {
        internalType: "address",
        name: "_dev",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_listTokens",
        type: "address[]",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "_new",
        type: "address",
      },
    ],
    name: "modifyDev",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "modifyGovernor",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "platform",
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
    name: "tgas",
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
  "0x608060405260016006553480156200001657600080fd5b50600580546001600160a01b03191633179055620000777050524f445543455f544741535f5241544560781b670de0b6b3a764000068068155a43676e00000678ac7230489e8000068022b1c8c1227a000006001600160e01b036200040516565b620000a46f14d5d05417d1915157d4115490d1539560821b6005601e81816001600160e01b036200040516565b620000e36f131254d517d511d054d7d05353d5539560821b600069152d02c7e14af6800000683635c9adc5dea00000826001600160e01b036200040516565b620001136f2aa729aa20a5a2afa22aa920aa24a7a760811b6143806201d88081806001600160e01b036200040516565b620001517f52454d4f56455f4c49515549444954595f4455524154494f4e0000000000000060006201d880614380826001600160e01b036200040516565b6200018e7f544f4b454e5f544f5f544741535f504149525f4d494e5f50455243454e54000060146101f4600a60646001600160e01b036200040516565b620001cd7f4c4953545f544f4b454e5f4641494c5552455f4255524e5f50524543454e540060646113886101f46103e86001600160e01b036200040516565b6200020b7f4c4953545f544f4b454e5f535543434553535f4255524e5f50524543454e54006103e86113886101f4816001600160e01b036200040516565b620002567f50524f504f53414c5f544741535f414d4f554e5400000000000000000000000068056bc75e2d6310000069021e19e0c9bab240000081806001600160e01b036200040516565b620002947f564f54455f5245574152445f50455243454e540000000000000000000000000060006103e860646101f46001600160e01b036200040516565b620002ce7f544f4b454e5f50454e4744494e475f53574954434800000000000000000000006000600180806001600160e01b036200040516565b6200030d7f544f4b454e5f50454e4744494e475f54494d45000000000000000000000000006000621a5e006202a300816001600160e01b036200040516565b6200033b7009892a6a8bea89e968a9cbea6ae92a8869607b1b6000600180826001600160e01b036200040516565b620003636a11115597d4149150d1539560aa1b6103e88080806001600160e01b036200040516565b6200038b6a11115597d4149150d1539560aa1b6103e88080806001600160e01b036200040516565b620003c57f4645455f46554e444d455f5245574152445f50455243454e54000000000000006103418080806001600160e01b036200040516565b620003ff7f4645455f4c4f54544552595f5245574152445f50455243454e540000000000006103418080806001600160e01b036200040516565b62000433565b6000948552600760205260409094209283556001808401929092556002830155600382019290925560040155565b611b7580620004436000396000f3fe608060405234801561001057600080fd5b50600436106102775760003560e01c80639ead722211610160578063c7099b8a116100d8578063dcc27d041161008c578063e4c0aaf411610071578063e4c0aaf414610651578063f1880b2414610677578063f8453e7c1461069d57610277565b8063dcc27d04146105f6578063e137c0331461061c57610277565b8063cf04153d116100bd578063cf04153d146105ab578063d2457370146105c8578063d48bfca7146105d057610277565b8063c7099b8a14610586578063ce8f60781461058e57610277565b8063aa23a8f41161012f578063be69c64311610114578063be69c6431461051d578063c0a0508414610543578063c199de321461056957610277565b8063aa23a8f41461050d578063b1f4c1b21461051557610277565b80639ead7222146104925780639f181b5e146104af578063a6f9dae1146104b7578063a9ece1b7146104df57610277565b80632bce9e7b116101f35780636dd5b69d116101c25780638da5cb5b116101a75780638da5cb5b1461047a57806391cca3db146104825780639e6c29591461048a57610277565b80636dd5b69d1461042a578063835253941461047257610277565b80632bce9e7b1461037b5780634bde38c8146103a757806354fd4d50146103af5780636a751447146103b757610277565b80630c340a241161024a5780632239eb3a1161022f5780632239eb3a14610316578063242562e8146103505780632609e5f41461037357610277565b80630c340a24146102ea5780630e2636a31461030e57610277565b806305b98fad1461027c5780630acac942146102b45780630b0ab776146102da5780630b14c571146102e2575b600080fd5b6102a26004803603602081101561029257600080fd5b50356001600160a01b0316610768565b60408051918252519081900360200190f35b6102a2600480360360208110156102ca57600080fd5b50356001600160a01b031661077a565b6102a261078c565b6102a2610791565b6102f261079d565b604080516001600160a01b039092168252519081900360200190f35b6102a26107ac565b61033c6004803603602081101561032c57600080fd5b50356001600160a01b03166107b1565b604080519115158252519081900360200190f35b61033c6004803603604081101561036657600080fd5b508035906020013561081c565b6102a26109f6565b61033c6004803603604081101561039157600080fd5b506001600160a01b0381351690602001356109fb565b6102f2610a64565b6102a2610a73565b6103da600480360360408110156103cd57600080fd5b5080359060200135610a79565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156104165781810151838201526020016103fe565b505050509050019250505060405180910390f35b6104476004803603602081101561044057600080fd5b5035610d0f565b6040805195865260208601949094528484019290925260608401526080830152519081900360a00190f35b6102a2610d7c565b6102f2610d81565b6102f2610d90565b6102a2610d9f565b6102f2600480360360208110156104a857600080fd5b5035610da5565b6102a2610dcc565b6104dd600480360360208110156104cd57600080fd5b50356001600160a01b0316610dd2565b005b61033c600480360360408110156104f557600080fd5b506001600160a01b0381358116916020013516610edd565b6102a2610f0e565b6102f2610f13565b6104dd6004803603602081101561053357600080fd5b50356001600160a01b0316610f22565b6104dd6004803603602081101561055957600080fd5b50356001600160a01b0316610fa3565b6102a26004803603602081101561057f57600080fd5b5035611003565b6103da611018565b610447600480360360208110156105a457600080fd5b50356110cd565b6102f2600480360360208110156105c157600080fd5b50356110fc565b6103da611109565b61033c600480360360208110156105e657600080fd5b50356001600160a01b03166112e0565b61033c6004803603602081101561060c57600080fd5b50356001600160a01b03166113a4565b61033c600480360360a081101561063257600080fd5b5080359060208101359060408101359060608101359060800135611425565b6104dd6004803603602081101561066757600080fd5b50356001600160a01b0316611495565b61033c6004803603602081101561068d57600080fd5b50356001600160a01b03166114ec565b6104dd600480360360a08110156106b357600080fd5b6001600160a01b03823581169260208101358216926040820135831692606083013516919081019060a0810160808201356401000000008111156106f657600080fd5b82018360208201111561070857600080fd5b8035906020019184602083028401116401000000008311171561072a57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550611603945050505050565b60026020526000908152604090205481565b60016020526000908152604090205481565b600181565b670de0b6b3a764000081565b6000546001600160a01b031681565b600481565b600080546001600160a01b03163314610809576040805162461bcd60e51b815260206004820152601560248201527423b7bb32b93730b136329d102327a92124a22222a760591b604482015290519081900360640190fd5b61081482600161177e565b90505b919050565b600080546001600160a01b03163314610874576040805162461bcd60e51b815260206004820152601560248201527423b7bb32b93730b136329d102327a92124a22222a760591b604482015290519081900360640190fd5b600083815260076020526040902060048101546001146108db576040805162461bcd60e51b815260206004820152601360248201527f546f6d69436f6e6669673a2044495341424c4500000000000000000000000000604482015290519081900360640190fd5b806001015483111580156108f0575080548310155b610941576040805162461bcd60e51b815260206004820152601460248201527f546f6d69436f6e6669673a204f564552464c4f57000000000000000000000000604482015290519081900360640190fd5b60038101546000818510156109585784820361095c565b8185035b905082600201548111156109a15760405162461bcd60e51b8152600401808060200182810382526022815260200180611ad86022913960400191505060405180910390fd5b60038301859055604080518781526020810184905280820187905290517f91e498895c71f4ba76ff7cf4df7b71a7e5a2ed2599c57149bb498f461b0ecc129181900360600190a1600193505050505b92915050565b600281565b600080546001600160a01b03163314610a53576040805162461bcd60e51b815260206004820152601560248201527423b7bb32b93730b136329d102327a92124a22222a760591b604482015290519081900360640190fd5b610a5d838361177e565b9392505050565b6009546001600160a01b031681565b60065481565b600454606090821115610ad3576040805162461bcd60e51b815260206004820152601760248201527f546f6b656e52656769737472793a204f564552464c4f57000000000000000000604482015290519081900360640190fd5b818311158015610ae1575060015b8015610aeb575060015b610b3c576040805162461bcd60e51b815260206004820152601f60248201527f546f6b656e52656769737472793a20494e564149445f504152414d5445525300604482015290519081900360640190fd5b6000835b83811015610bd55760026001600060048481548110610b5b57fe5b60009182526020808320909101546001600160a01b031683528201929092526040019020541480610bc1575060036001600060048481548110610b9a57fe5b60009182526020808320909101546001600160a01b03168352820192909252604001902054145b15610bcd576001909101905b600101610b40565b5060608167ffffffffffffffff81118015610bef57600080fd5b50604051908082528060200260200182016040528015610c19578160200160208202803683370190505b5090506000855b85811015610d045760026001600060048481548110610c3b57fe5b60009182526020808320909101546001600160a01b031683528201929092526040019020541480610ca1575060036001600060048481548110610c7a57fe5b60009182526020808320909101546001600160a01b03168352820192909252604001902054145b15610cfc5760048181548110610cb357fe5b9060005260206000200160009054906101000a90046001600160a01b0316838381518110610cdd57fe5b6001600160a01b03909216602092830291909101909101526001909101905b600101610c20565b509095945050505050565b6000806000806000610d1f611aa8565b5050506000938452505060076020908152604092839020835160a081018552815480825260018301549382018490526002830154958201869052600383015460608301819052600490930154608090920182905295929493509091565b600081565b6005546001600160a01b031681565b600a546001600160a01b031681565b61271081565b60048181548110610db257fe5b6000918252602090912001546001600160a01b0316905081565b60035481565b6005546001600160a01b03163314610e26576040805162461bcd60e51b815260206004820152601260248201527127bbb730b136329d102327a92124a22222a760711b604482015290519081900360640190fd5b6001600160a01b038116610e81576040805162461bcd60e51b815260206004820152601860248201527f4f776e61626c653a20494e56414c49445f414444524553530000000000000000604482015290519081900360640190fd5b6005546040516001600160a01b038084169216907fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c90600090a3600580546001600160a01b0319166001600160a01b0392909216919091179055565b6000610ee8836114ec565b8015610ef85750610ef8826114ec565b15610f05575060016109f0565b50600092915050565b600381565b6008546001600160a01b031681565b600a546001600160a01b03163314610f81576040805162461bcd60e51b815260206004820152601560248201527f546f6d69436f6e6669673a20464f5242494444454e0000000000000000000000604482015290519081900360640190fd5b600a80546001600160a01b0319166001600160a01b0392909216919091179055565b6005546001600160a01b03163314610ff7576040805162461bcd60e51b815260206004820152601260248201527127bbb730b136329d102327a92124a22222a760711b604482015290519081900360640190fd5b61100081611906565b50565b60009081526007602052604090206003015490565b600b54606090819067ffffffffffffffff8111801561103657600080fd5b50604051908082528060200260200182016040528015611060578160200160208202803683370190505b50905060005b600b548110156110c757600b818154811061107d57fe5b9060005260206000200160009054906101000a90046001600160a01b03168282815181106110a757fe5b6001600160a01b0390921660209283029190910190910152600101611066565b50905090565b600760205260009081526040902080546001820154600283015460038401546004909401549293919290919085565b600b8181548110610db257fe5b60606000805b6004548110156111a6576002600160006004848154811061112c57fe5b60009182526020808320909101546001600160a01b03168352820192909252604001902054148061119257506003600160006004848154811061116b57fe5b60009182526020808320909101546001600160a01b03168352820192909252604001902054145b1561119e576001909101905b60010161110f565b5060608167ffffffffffffffff811180156111c057600080fd5b506040519080825280602002602001820160405280156111ea578160200160208202803683370190505b5090506000805b6004548110156112d7576002600160006004848154811061120e57fe5b60009182526020808320909101546001600160a01b03168352820192909252604001902054148061127457506003600160006004848154811061124d57fe5b60009182526020808320909101546001600160a01b03168352820192909252604001902054145b156112cf576004818154811061128657fe5b9060005260206000200160009054906101000a90046001600160a01b03168383815181106112b057fe5b6001600160a01b03909216602092830291909101909101526001909101905b6001016111f1565b50909250505090565b6009546000906001600160a01b03163314611342576040805162461bcd60e51b815260206004820152601960248201527f546f6d69436f6e6669673a204f4e4c595f504c4154464f524d00000000000000604482015290519081900360640190fd5b61136b7f4c4953545f544f4b454e5f535749544348000000000000000000000000000000611003565b61139c576001600160a01b03821660009081526001602052604090205460031461139c5761139a82600361177e565b505b506001919050565b600080546001600160a01b031633146113fc576040805162461bcd60e51b815260206004820152601560248201527423b7bb32b93730b136329d102327a92124a22222a760591b604482015290519081900360640190fd5b6001600160a01b038216600090815260026020819052604090912043905561081490839061177e565b6005546000906001600160a01b0316331461147c576040805162461bcd60e51b815260206004820152601260248201527127bbb730b136329d102327a92124a22222a760711b604482015290519081900360640190fd5b6114898686868686611a13565b50600195945050505050565b6000546001600160a01b03163314610ff7576040805162461bcd60e51b815260206004820152601560248201527423b7bb32b93730b136329d102327a92124a22222a760591b604482015290519081900360640190fd5b60006115177f4c4953545f544f4b454e5f535749544348000000000000000000000000000000611003565b61152357506001610817565b6001600160a01b0382166000908152600160205260409020546003141561154c57506001610817565b6001600160a01b038216600090815260016020526040902054600214156115fb576115967f544f4b454e5f50454e4744494e475f5357495443480000000000000000000000611003565b60011480156115e657506115c97f544f4b454e5f50454e4744494e475f54494d4500000000000000000000000000611003565b6001600160a01b0383166000908152600260205260409020540143115b156115f357506000610817565b506001610817565b506000919050565b6005546001600160a01b03163314611657576040805162461bcd60e51b815260206004820152601260248201527127bbb730b136329d102327a92124a22222a760711b604482015290519081900360640190fd5b6001600160a01b0385166116b2576040805162461bcd60e51b815260206004820152601860248201527f546f6d69436f6e6669673a205a45524f20414444524553530000000000000000604482015290519081900360640190fd5b600880546001600160a01b038088166001600160a01b03199283161790925560098054868416908316179055600a80549285169290911691909117905560005b815181101561176d5761171982828151811061170a57fe5b6020026020010151600361177e565b50600b82828151811061172857fe5b60209081029190910181015182546001808201855560009485529290932090920180546001600160a01b0319166001600160a01b0390931692909217909155016116f2565b5061177784611a41565b5050505050565b60006001600160a01b0383166117db576040805162461bcd60e51b815260206004820152601c60248201527f546f6b656e52656769737472793a20494e56414c49445f544f4b454e00000000604482015290519081900360640190fd5b6001600160a01b0383166000908152600160205260409020548214156118325760405162461bcd60e51b8152600401808060200182810382526025815260200180611afa6025913960400191505060405180910390fd5b6001600160a01b0383166000908152600160205260409020546118a457600380546001019055600480546001810182556000919091527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0180546001600160a01b0319166001600160a01b0385161790555b6001600160a01b0383166000818152600160209081526040918290208590558151858152439181019190915281517f14c4e14d48705f2a0e0384106c92ba8c0c2901533a176b0ccde91b5c3d823456929181900390910190a250600192915050565b6001600160a01b038116611961576040805162461bcd60e51b815260206004820152601b60248201527f476f7665726e61626c653a20494e56414c49445f414444524553530000000000604482015290519081900360640190fd5b6000546001600160a01b03828116911614156119c4576040805162461bcd60e51b815260206004820152601560248201527f476f7665726e61626c653a204e4f5f4348414e47450000000000000000000000604482015290519081900360640190fd5b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917e355779987285d4d75ca85a340086a1243f46cf4fba5927b1f7fc9d5dd8b9d09190a35050565b6000948552600760205260409094209283556001808401929092556002830155600382019290925560040155565b6001600160a01b038116611a865760405162461bcd60e51b8152600401808060200182810382526021815260200180611b1f6021913960400191505060405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6040518060a001604052806000815260200160008152602001600081526020016000815260200160008152509056fe546f6d69436f6e6669673a20455843454544204d41582041444a555354205350414e546f6b656e52656769737472793a20544f4b454e5f5354415455535f4e4f5f4348414e4745476f7665726e61626c653a20494e5055545f414444524553535f49535f5a45524fa2646970667358221220bf916fc61a2ffe17412a49fb459e27ef4ab4447427d4d22f3c7febe60d4925f864736f6c63430006060033";
