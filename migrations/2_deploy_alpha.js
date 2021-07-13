const Comp = artifacts.require("Comp");
const Timelock = artifacts.require("Timelock");
const GovernorAlpha = artifacts.require("GovernorAlpha");

module.exports = async function (deployer) {
  const user = "YOUR_ADDRESS";

  const comp = await Comp.deployed();
  const timelock = await Timelock.deployed();
  deployer.deploy(GovernorAlpha, timelock.address, comp.address, user);
};
