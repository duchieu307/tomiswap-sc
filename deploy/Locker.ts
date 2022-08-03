
import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {
    expandTo18DecimalsRaw,
} from '../test/shared/utilities'
import settings from '../settings/SettingsSecondYear.json';
import settingsV2 from '../settings/SettingsThirdYear.json';

const deployLocker: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const {deployments, getNamedAccounts, ethers} = hre;
    const {deploy, execute} = deployments;
    const {deployer, dev} = await getNamedAccounts();

    const tomiAddress = (await deployments.get("TomiToken")).address;

    const gasPrice = expandTo18DecimalsRaw(settings.gasPrice, 9);

    const { address: vbitLocker1 } = await deploy('TokenLocker1', {
      from: deployer,
      args: [
        tomiAddress, 
        settings.start, 
        settings.end, 
        settings.merkleRoot
      ],
      contract: "TokenLocker",
      log: true,
      deterministicDeployment: false,
      gasPrice,
    });

    const { address: vbitLocker2 } = await deploy('TokenLocker2', {
      from: deployer,
      args: [
        tomiAddress, 
        settingsV2.start, 
        settingsV2.end, 
        settingsV2.merkleRoot
      ],
      contract: "TokenLocker",
      log: true,
      deterministicDeployment: false,
      gasPrice,
    });

    // await execute("TomiToken", { from: deployer, gasLimit: "300000", log: true }, "addLocker", "3", vbitLocker1);
    // await execute("TomiToken", { from: deployer, gasLimit: "300000", log: true }, "addLocker", "4", vbitLocker2);
  };

deployLocker.dependencies = ["TOMI"];
deployLocker.tags = ["LOCKER"];

export default deployLocker;