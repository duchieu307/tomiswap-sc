
import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const deployDelegate: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const {deployments, getNamedAccounts, ethers} = hre;
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();

    const wethAddress = process.env.WETH_ADDRESS as string;
    const tomiAddress = (await deployments.get("TomiToken")).address;
    const poolAddress = (await deployments.get("TomiPool")).address;
    const platformAddress = (await deployments.get("TomiPlatform")).address;
    const deployArgs = [platformAddress, poolAddress, tomiAddress, wethAddress];

    const { address: contractAddress } = await deploy('TomiDelegate', {
      from: deployer,
      args: deployArgs,
      log: true,
      deterministicDeployment: false
    });

    // await new Promise((res, rej) => {
    // setTimeout(async () => {
    //     res(
    //     await hre.run("verify:verify", {
    //         address: contractAddress,
    //         constructorArguments: deployArgs,
    //     })
    //     )
    // }, 20000);
    // })
  };

deployDelegate.tags = ["DELEGATE"];
deployDelegate.dependencies = ["PLATFORM", "POOL", "TOMI", "WETH"];

export default deployDelegate;