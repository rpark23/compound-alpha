const Comp = artifacts.require("Comp");
const Timelock = artifacts.require("Timelock");
const GovernorAlpha = artifacts.require("GovernorAlpha");

module.exports = async function (deployer) {
  const user = "0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1";

  const comp = await Comp.deployed();
  const timelock = await Timelock.deployed();
  deployer.deploy(GovernorAlpha, timelock.address, comp.address, user);
};
