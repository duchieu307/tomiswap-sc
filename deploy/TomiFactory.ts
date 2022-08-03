
import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const deployFactory: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const {deployments, getNamedAccounts, ethers} = hre;
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();

    const tomiAddress = (await deployments.get("TomiToken")).address;
    const configAddress = (await deployments.get("TomiConfig")).address;
    const deployArgs = [tomiAddress, configAddress];

    const { address: contractAddress } = await deploy('TomiFactory', {
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
    //         constructorArguments: [],
    //     })
    //     )
    // }, 20000);
    // })
  };

deployFactory.tags = ["FACTORY"];
deployFactory.dependencies = ["CONFIG", "TOMI"];

export default deployFactory;