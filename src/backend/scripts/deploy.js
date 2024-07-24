async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await ethers.provider.getBalance(deployer.address)).toString());
  
    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy();
    const Marketplace = await ethers.getContractFactory("Marketplace");
    const marketplace = await Marketplace.deploy(1)
  
    // Wait for the contract to be mined
    await nft.waitForDeployment();
    await marketplace.waitForDeployment();
  
    const nftAddress = await nft.getAddress();
    const marketplaceAddress = await marketplace.getAddress()
    console.log("NFT CONTRACT ADDRESS", nftAddress);
    console.log("MARKETPLACE CONTACT ADDRESS", marketplaceAddress);

    saveFrontendFiles(nft, "NFT");
    saveFrontendFiles(marketplace, "Marketplace")

    await nftAddress
    await marketplaceAddress
  }
  
  async function saveFrontendFiles(contract, name) {
    const fs = require("fs");
    const contractsDir = __dirname + "/../../frontend/contractsData";
    if (!fs.existsSync(contractsDir)) {
      fs.mkdirSync(contractsDir);
    }
  
    const contractAddress = await contract.getAddress();
  
    const addressData = JSON.stringify({ address: contractAddress }, undefined, 2);
  
    const filePath = contractsDir + `/${name}-address.json`;
  
    try {
      fs.writeFileSync(filePath, addressData);
    } catch (error) {
      console.error("Error writing file:", error);
    }
  
    const contractArtifact = artifacts.readArtifactSync(name);
    fs.writeFileSync(
      contractsDir + `/${name}.json`,
      JSON.stringify(contractArtifact, null, 2)
    );
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });