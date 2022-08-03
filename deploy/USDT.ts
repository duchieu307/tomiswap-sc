
import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const deployUSDT: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const {deployments, getNamedAccounts, ethers} = hre;
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();

    const { address: contractAddress } = await deploy('USDT', {
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

deployUSDT.tags = ["USDT"];

export default deployUSDT;