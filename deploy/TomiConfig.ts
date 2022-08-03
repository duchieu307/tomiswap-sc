
import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const deployConfig: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const {deployments, getNamedAccounts, ethers} = hre;
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();

    const { address: contractAddress } = await deploy('TomiConfig', {
      from: deployer,
      args: [],
      log: true,
      deterministicDeployment: false
    });

    // await new Promise((res, rej) => {
    // setTimeout(async () => {
    //     res(
    //     await hre.run("verify:verify", {
    //         address: contractAddress,
    //         constructorArguments: [],
    //     })
    //     )
    // }, 20000);
    // })
  };

deployConfig.tags = ["CONFIG"];
deployConfig.dependencies = [];

export default deployConfig;