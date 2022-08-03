
import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {
  expandTo18Decimals,
} from '../test/shared/utilities'


const deployTomi: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const {deployments, getNamedAccounts, ethers} = hre;
    const {deploy} = deployments;
    const {deployer, dev} = await getNamedAccounts();

    const { address: contractAddress } = await deploy('TomiToken', {
      from: deployer,
      args: [deployer, deployer, dev],
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

deployTomi.tags = ["TOMI"];

export default deployTomi;