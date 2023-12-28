import { HardhatRuntimeEnvironment } from "hardhat/types";

const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { diamond } = hre.deployments;

  await diamond.deploy("GasLover", {
    from: deployer,
    autoMine: true,
    log: true,
    waitConfirmations: 1,
    facets: [
      "InitFacet",
      "Mint Facet",
      "Render Facet",
      "ERC721AUpgradable",
    ],
    execute: {
      contract: 'InitFacet',
      methodName: 'init',
      args: []
    },
  })
}