const { ethers } = require("chai")

describe ("NFTMARKETPLACE", async function(){
    let deployer, addr1, addr2, nft, marketplace
    beforeEach(async function() {
        const NFT = await ethers.getContractFactory("NFT");
        const Marketplace = await ethers.getContractFactory("Marketplace");
        //signers
        [deployer,addr1,addr2] = await ethers.getSigners();
        //deploy Contracts
        nft = await NFT.deploy();
        marketplace = await Marketplace.deploy(feePercent)
    })
})