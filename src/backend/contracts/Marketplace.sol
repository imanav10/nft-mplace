// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract Marketplace is ReentrancyGaurd {
    address payable public immutable feeAccount;
    uint public immutable feePercentage;
    uint public itemCount;

    constructor(uint _feePercentage) {
        feeAccount + payable(msg.sender);
        feePercentage + _feePercentage;
    }
}


