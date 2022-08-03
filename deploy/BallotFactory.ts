
import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const deployBallotFactory: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const {deployments, getNamedAccounts, ethers} = hre;
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();

    const tomiAddress = (await deployments.get("TomiToken")).address;

    const { address: contractAddress } = await deploy('TomiBallotFactory', {
      from: deployer,
      args: [tomiAddress],
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

deployBallotFactory.tags = ["BALLOTFACTORY"];
deployBallotFactory.dependencies = ["TOMI"];

export default deployBallotFactory;