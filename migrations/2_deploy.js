const NFT = artifacts.require("NFT");

module.exports = async function (deployer, network, accounts) {
  const nft = await deployer.deploy(NFT);

  // const nft_deployed = await nft.deployed();
  // console.log();

  // const minting = await nft.mint(account, {
  //   from: account,
  //   value: 10000000000,
  // });
};

// web: npm start

// let account;
// console.log(`typeof ${typeof accounts}`);
// if (typeof account === "object") {
//   account = accounts[0];
// } else {
//   account = accounts;
// }

// ----
// console.log(minting);
// console.log("TOKEN MINTED!");
// const amountTokens = await nft.balanceOf(account);
// console.log(`balance of ${account}  ${amountTokens}`);
// -----
// deployer.deploy(YourContract, { from: accounts[0], value: "1000000000000000000" });
