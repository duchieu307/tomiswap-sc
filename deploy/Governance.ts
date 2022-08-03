
import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const deployGovernance: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const {deployments, getNamedAccounts, ethers} = hre;
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();

    const tomiAddress = (await deployments.get("TomiToken")).address;
    const deployArgs = [tomiAddress, "300", "300", "300", "300"];

    const { address: contractAddress } = await deploy('TomiGovernance', {
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

deployGovernance.tags = ["GOVERNANCE"];
deployGovernance.dependencies = ["TOMI"];

export default deployGovernance;