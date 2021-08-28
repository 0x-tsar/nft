// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721 {
    uint256 public nextTokenId;
    address public admin;

    constructor() ERC721("My NFT", "NFT") {
        admin = msg.sender;
    }

    function mint(address to) external payable {
        require(msg.sender == admin, "only admin");
        require(
            msg.value == 10000000000 wei,
            "value must be EQUAL TO 0.000000001 Ether"
        );
        _safeMint(to, nextTokenId);
        nextTokenId++;
    }

    function _baseURI() internal view override returns (string memory) {
        return "";
    }
}
