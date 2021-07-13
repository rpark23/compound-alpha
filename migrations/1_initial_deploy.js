const Comp = artifacts.require("Comp");
const Timelock = artifacts.require("Timelock");

module.exports = async function (deployer) {
  const user = "0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1";
  const timelockLength = 7; /* Number of days (Minimum of 2 and Maximum of 30)*/

  deployer.deploy(Comp, user);
  deployer.deploy(Timelock, user, timelockLength * 86400);
};
