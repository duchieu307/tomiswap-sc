
import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const initialize: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const {deployments, getNamedAccounts} = hre;
    const {execute} = deployments;
    const {deployer, dev } = await getNamedAccounts();

    const usdtAddress = (await deployments.get("USDT")).address;
    const tomiAddress = (await deployments.get("TomiToken")).address;
    const poolAddress = (await deployments.get("TomiPool")).address;
    const platformAddress = (await deployments.get("TomiPlatform")).address;
    const factoryAddress = (await deployments.get("TomiFactory")).address;
    const configAddress = (await deployments.get("TomiConfig")).address;
    const transferListenerAddress = (await deployments.get("TomiTransferListener")).address;
    const governanceAddress = (await deployments.get("TomiGovernance")).address;
    const ballotFactoryAddress = (await deployments.get("TomiBallotFactory")).address;
    const delegateAddress = (await deployments.get("TomiDelegate")).address;
    const fundingAddress = (await deployments.get("TomiFunding")).address;

    // RINKEBY WETH ADDRESS
    const wethAddress = process.env.WETH_ADDRESS as string;

    await execute(
      "TomiQuery2", 
      { 
        from: deployer, 
        gasLimit: "300000", 
        log: true 
      }, 
      "upgrade", 
      configAddress, 
      platformAddress, 
      factoryAddress, 
      governanceAddress,
      transferListenerAddress, 
      delegateAddress
    )

    await execute(
      "TomiPool", 
      { 
        from: deployer, 
        gasLimit: "300000", 
        log: true 
      }, 
      "initialize", 
      tomiAddress, 
      wethAddress, 
      factoryAddress, 
      platformAddress,
      configAddress, 
      governanceAddress,
      fundingAddress,
      dev
    )
    await execute(
      "TomiTransferListener", 
      { 
        from: deployer, 
        gasLimit: "300000", 
        log: true 
      }, 
      "initialize", 
      usdtAddress, 
      factoryAddress, 
      wethAddress, 
      platformAddress, 
      deployer
    )

    await execute(
      "TomiPlatform", 
      { 
        from: deployer, 
        gasLimit: "300000", 
        log: true 
      }, 
      "initialize", 
      tomiAddress, 
      configAddress, 
      factoryAddress, 
      wethAddress, 
      governanceAddress, 
      transferListenerAddress, 
      poolAddress
    )

    await execute(
      "TomiConfig", 
      { 
        from: deployer, 
        gasLimit: "400000", 
        log: true 
      }, 
      "initialize", 
        tomiAddress, 
        governanceAddress, 
        platformAddress, 
        dev, 
        [
          tomiAddress,
          wethAddress,
          usdtAddress
        ]
    )
    // FEE GOVERNANCE
    await execute(
      "TomiConfig", 
      { 
        from: deployer, 
        gasLimit: "300000", 
        log: true 
      }, 
      "changeConfig", 
      "0x4645455f474f5645524e414e43455f5245574152445f50455243454e54000000",
      2000, 4000, 1000, 4000
    )
    // //  FEE LP REWARD
    await execute(
      "TomiConfig", 
      { 
        from: deployer, 
        gasLimit: "300000", 
        log: true 
      }, 
      "changeConfig", 
      "0x4645455f4c505f5245574152445f50455243454e540000000000000000000000",
      2000, 4000, 1000, 4000
    )
    // // VOTE DURATION
    await execute(
      "TomiConfig", 
      { 
        from: deployer, 
        gasLimit: "300000", 
        log: true 
      }, 
      "changeConfig", 
      "0x564f54455f4455524154494f4e00000000000000000000000000000000000000",
      100, 300, 50, 100
    )
    // // UNSTAKE DURATION
    await execute(
      "TomiConfig", 
      { 
        from: deployer, 
        gasLimit: "300000", 
        log: true 
      }, 
      "changeConfig", 
      "0x554e5354414b455f4455524154494f4e00000000000000000000000000000000",
      0, 100, 20, 0
    )

    await execute(
      "TomiGovernance", 
      { 
        from: deployer, 
        gasLimit: "300000", 
        log: true 
      }, 
      "initialize", 
      platformAddress, 
      configAddress, 
      ballotFactoryAddress
    )
  };

initialize.tags = ["Initialize"];
initialize.runAtTheEnd = true;

export default initialize;