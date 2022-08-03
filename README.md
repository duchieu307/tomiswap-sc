# Local Development

The following assumes the use of `node@>=10`.

## Install Dependencies

`yarn`

## Compile Contracts

`yarn compile`

## Run postcompile

`yarn postcompile`

# Goerli test net
1. [WETH9](https://goerli.etherscan.io/address/0x5A985b957ca99b33DF9631f8124D35db739DBe79#contracts)  
1. [TomiPlatform](https://goerli.etherscan.io/address/0x0d7b8f305995B21c786e70A50121E4b12ae85A4c#contracts)  
1. [Tgas](https://goerli.etherscan.io/address/0x0f729B3e2940e7d625eDA988D1dCd8c4a9f7EfD7#contracts)  
1. [USDT](https://goerli.etherscan.io/address/0xFaCE0604A0C053aaE3131fA636FEc9c2658f1A15#contracts)  
1. [TomiGovernance](https://goerli.etherscan.io/address/0x1D4F745e0AD7Fe0d76641cBcca85caD5DDdEc914#contracts)  
1. [TomiConfig](https://goerli.etherscan.io/address/0xa2E6ea29b4F0b2aB3ea60fE08eB354CcF6Cf875f#contracts)  
1. [TomiBallotFactory](https://goerli.etherscan.io/address/0xCA6965f50E4A1f071309E6512f3Bcba4297B5a8b#contracts)  
1. [TomiTransferListener](https://goerli.etherscan.io/address/0x8d0C00fE5a843E17Cc44ba0fBDa4d250084f6Cb2#contracts)  
1. [TomiFactory](https://goerli.etherscan.io/address/0x009f6Ad70b7c393A0BE1d6b38841b614977aDb52#contracts)  
1. [TomiPool](https://goerli.etherscan.io/address/0x9809d538BEe8a5715bC84697D9B43dB20FA0173e#contracts)  
1. [TomiDelegate](https://goerli.etherscan.io/address/0x3E1F48bE848640b45946A81291B464dF651Ca81C#contracts)  
1. [TomiPair](https://goerli.etherscan.io/address/0xdE9046F3709bED6bc2BF86664E79633Ab42f99E7#contracts)  
1. [ERC20](https://goerli.etherscan.io/address/0x7287ac1d94153f0339b03211A05fAA63e0601AdF#contracts)  
1. [TomiQuery2](https://goerli.etherscan.io/address/0xf5f9e283428715f19cC0E789Da6baF92AF5f0D12#code)  
1. [TomiQuery](https://goerli.etherscan.io/address/0xA73318AB33286237cA248000cD459Ed08cb6aEbC#code)  

# BCS test net  
1. [TomiLP](https://testnet.bscscan.com/address/0x326AC765404F586957eAfcA0E04B7b8B768B4093#contracts)  
1. [WETH9](https://testnet.bscscan.com/address/0x8fb177896d3335DEB9Cf6B115781886913258F06#contracts)  
1. [TomiPlatform](https://testnet.bscscan.com/address/0xb7d521F869C9d432FFaeE9aAa6F89c4c8c4623fa#contracts)  
1. [Tgas](https://testnet.bscscan.com/address/0xfee6063414b06981e5F60A48282ecFAdD508c449#contracts)  
1. [USDT](https://testnet.bscscan.com/address/0x76c81363bd8C5222F0E02d4d3184004245C71771#contracts)  
1. [TomiGovernance](https://testnet.bscscan.com/address/0x439F3f2E78259236d4c2Ad1dFfccAB30678dc104#contracts)  
1. [TomiConfig](https://testnet.bscscan.com/address/0xCbf150618777115EE4b030A3f9046804A0c06749#contracts)  
1. [TomiBallotFactory](https://testnet.bscscan.com/address/0x22153BbaF08d99b6C5D4B6932E8cE9160e4e1bdd#contracts)  
1. [TomiTransferListener](https://testnet.bscscan.com/address/0x676C903FB592cEd76c302E0a13613b13Ac31A2e8#contracts)  
1. [TomiFactory](https://testnet.bscscan.com/address/0xB7eE1e218bf97041FCD14B01C8887F186eFA3108#contracts)  
1. [TomiPool](https://testnet.bscscan.com/address/0xC546C37Ce2D13f23aABc44A7108BB1AbBDAe8Fc6#contracts)  
1. [TomiDelegate](https://testnet.bscscan.com/address/0x5F1D8395ca5112F19741Ce7B16EB24B1e489Ca11#contracts)  
1. [TomiPair](https://testnet.bscscan.com/address/0x9567e32aC0E7D39D1e0aBCbe5fbA2f1B20E58d61#contracts)  
1. [TomiQuery2](https://testnet.bscscan.com/address/0xd7E31661eCE07858E1d9943430db0870B392CBA6#code)  
1. [TomiQuery](https://testnet.bscscan.com/address/0x3965320aeBBFd191439aE7CF31fD676463a22c28#code)  
1. [ERC20](https://testnet.bscscan.com/address/0xF133e6F51ba453e3759138dcEEB81F7Eb5927329#contracts)  
1. [ERC20](https://testnet.bscscan.com/address/0xc7c23dEB78cd94149f786D600aa3569573250FEA#contracts)  
1. [ERC20](https://testnet.bscscan.com/address/0x5DEEaC2FEb1e4853Ec40AA8eF6D01FAF56b5A05d#contracts)  

1. [TokenQuery](https://testnet.bscscan.com/address/0x7B9690b29aed6d299dA2B13Bd0D51270316455ae#contracts)  
1. [WBNB](https://testnet.bscscan.com/address/0xba435f0aa52137f1eE12B741eFF7f7B9D432d57f#contracts)  

## Additional verify command  
1. tokenB
```
truffle run verify ERC20@0xc7c23dEB78cd94149f786D600aa3569573250FEA --network bsc
```
1. tokenC
```
truffle run verify ERC20@0xF133e6F51ba453e3759138dcEEB81F7Eb5927329 --network bsc
```
