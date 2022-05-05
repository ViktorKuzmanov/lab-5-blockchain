const hre = require("hardhat");

async function main() {
  const FinkiCoin = await hre.ethers.getContractFactory("FinkiCoin");
  const finkiCoin = await FinkiCoin.deploy();

  await finkiCoin.deployed();

  console.log("finkiCoin deployed to:", finkiCoin.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
