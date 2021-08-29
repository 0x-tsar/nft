const NFT = artifacts.require("NFT.sol");

module.exports = async () => {
  const nft = await NFT.deployed();
  // const value = web3.utils.fromWei("10000000000");
  // const value = web3.utils.fromWei("10000000000", "Wei");
  // const value = web3.utils.toWei("0.000001");
  // const value = web3.utils.fromWei("1000000000000");
  // const value = web3.utils.fromWei("10000000000000000");
  // console.log(value);
  // console.log(typeof value);
  // try {
  const [admin, _] = await web3.eth.getAccounts();
  console.log(admin);

  // msg.value == 10000000000 wei,

  // const minting = await nft.mint(admin, {
  //   from: admin,
  //   value: "100000000000000000",
  // });

  const balance = await nft.balanceOf(admin);
  console.log(parseInt(balance));
  console.log(balance.toString());

  // const evento = new web3.eth.Contract(
  //     Evento.abi,
  //     Evento.networks['5777'].address
  // );
};
