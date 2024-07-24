async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await ethers.provider.getBalance(deployer.address)).toString());
  
    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy();
  
    // Wait for the contract to be mined
    await nft.waitForDeployment();
  
    const nftAddress = await nft.getAddress();
    console.log("NFT CONTRACT ADDRESS", nftAddress);
    saveFrontendFiles(nft, "NFT");
    await nftAddress
  }
  
  async function saveFrontendFiles(contract, name) {
    const fs = require("fs");
    const contractsDir = __dirname + "/../../frontend/contractsData";
    if (!fs.existsSync(contractsDir)) {
      fs.mkdirSync(contractsDir);
    }
  
    const contractAddress = await contract.getAddress();
    console.log("Contract address:", contractAddress);
  
    const addressData = JSON.stringify({ address: contractAddress }, undefined, 2);
    console.log("Address data to be written:", addressData);
  
    const filePath = contractsDir + `/${name}-address.json`;
    console.log("Writing to file:", filePath);
  
    try {
      fs.writeFileSync(filePath, addressData);
      console.log("File written successfully");
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