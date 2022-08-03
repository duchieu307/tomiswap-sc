
import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const deployTransferListener: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const {deployments, getNamedAccounts, ethers} = hre;
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();

    const { address: contractAddress } = await deploy('TomiTransferListener', {
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
    //         constructorArguments: deployArgs,
    //     })
    //     )
    // }, 20000);
    // })
  };

deployTransferListener.tags = ["TRANSFERLISTENER"];
deployTransferListener.dependencies = [];

export default deployTransferListener;