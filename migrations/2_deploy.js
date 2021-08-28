const NFT = artifacts.require("NFT");

module.exports = async (deployer, network, account) => {
  console.log(network);
  console.log(`account ${account}`);
  nft = await deployer.deploy(NFT);
  const minting = await nft.mint(account, {
    from: account,
    value: 10000000000,
  });

  console.log(minting);
  console.log("TOKEN MINTED!");
  const amountTokens = await nft.balanceOf(account);
  console.log(`balance of ${account}  ${amountTokens}`);
  // deployer.deploy(YourContract, { from: accounts[0], value: "1000000000000000000" });
};
