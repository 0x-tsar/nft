const NFT = artifacts.require("NFT");

module.exports = async (deployer, network, account) => {
  console.log(network);
  console.log(`account ${account}`);
  nft = await deployer.deploy(NFT);
};
