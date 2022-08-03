
import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const deployFunding: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const {deployments, getNamedAccounts, ethers} = hre;
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();

    const tomiAddress = (await deployments.get("TomiToken")).address;
    const deployArgs = [tomiAddress];

    const { address: contractAddress } = await deploy('TomiFunding', {
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

deployFunding.tags = ["FUNDING"];
deployFunding.dependencies = ["TOMI"];

export default deployFunding;