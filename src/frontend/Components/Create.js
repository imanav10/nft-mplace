import React, { useState, useEffect } from 'react';
import { Row, Form, Button, Alert } from 'react-bootstrap';
import { createHelia } from 'helia';
import { unixfs } from '@helia/unixfs';
const ethers = require('ethers')

const Create = ({ marketplace, nft }) => {
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [helia, setHelia] = useState(null);
  const [fs, setFs] = useState(null);

  useEffect(() => {
    const initHelia = async () => {
      try {
        const heliaNode = await createHelia();
        setHelia(heliaNode);
        setFs(unixfs(heliaNode));
      } catch (error) {
        console.error("Failed to initialize Helia:", error);
        setErrorMessage("Failed to initialize IPFS client");
      }
    };

    initHelia();
  }, []);

  const uploadToIPFS = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (typeof file !== 'undefined' && fs) {
      try {
        const result = await fs.addFile({ content: file });
        const cid = result.toString();
        setImage(`https://ipfs.io/ipfs/${cid}`);
        setErrorMessage(`Image uploaded successfully: ${cid}`);
      } catch (error) {
        console.error("IPFS image upload error: ", error);
        setErrorMessage("Failed to upload image to IPFS");
      }
    } else {
      setErrorMessage("Please select a file to upload or wait for IPFS to initialize");
    }
  };

  const createNFT = async (event) => {
    event.preventDefault();
    console.log("Creating NFT with:", { image, price, name, description });
    if (!image || !price || !name || !description) {
      setErrorMessage("Please fill in all fields");
      return;
    }
    try {
      const metadata = JSON.stringify({ image, price, name, description });
      const result = await fs.addFile({ content: new TextEncoder().encode(metadata) });
      await mintThenList(result.toString());
    } catch (error) {
      console.error("IPFS URI upload error: ", error);
      setErrorMessage("Failed to create NFT");
    }
  };

  const mintThenList = async (cid) => {
    const uri = `https://ipfs.io/ipfs/${cid}`;
    try {
      // Request account access if needed
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      // Connect to the contracts
      const nftWithSigner = nft.connect(signer);
      const marketplaceWithSigner = marketplace.connect(signer);

      // Mint NFT
      let transaction = await nftWithSigner.mint(uri);
      await transaction.wait();

      // Get tokenId of new NFT
      const id = await nftWithSigner.tokenCount();

      // Approve marketplace to spend NFT
      transaction = await nftWithSigner.setApprovalForAll(marketplace.address, true);
      await transaction.wait();

      // Add NFT to marketplace
      const listingPrice = ethers.utils.parseEther(price.toString());
      transaction = await marketplaceWithSigner.makeItem(nft.address, id, listingPrice);
      await transaction.wait();

      setErrorMessage("NFT created and listed successfully!");
    } catch (error) {
      console.error("Error in mintThenList: ", error);
      setErrorMessage("Failed to mint and list NFT");
    }
  };

  // ... rest of the component (return statement) remains the same
};

export default Create;