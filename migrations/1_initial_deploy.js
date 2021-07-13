const Comp = artifacts.require("Comp");
const Timelock = artifacts.require("Timelock");

module.exports = async function (deployer) {
  const user = "YOUR_ADDRESS";
  const timelockLength = 7; /* Number of days (Minimum of 2 and Maximum of 30)*/

  deployer.deploy(Comp, user);
  deployer.deploy(Timelock, user, timelockLength * 86400);
};
