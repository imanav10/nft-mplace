import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ethers } from 'ethers';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Create from './Components/Create';
import MyListedItems from './Components/Owned'
import Spinner from 'react-bootstrap/Spinner';
import MarketplaceAbi from './contractsData/Marketplace.json';
import NFTAbi from './contractsData/NFT.json';
import MarketplaceAddress from './contractsData/Marketplace-address.json';
import NFTAddress from './contractsData/NFT-address.json';

function App() {
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState(null);
  const [nft, setNFT] = useState({});
  const [marketplace, setMarketplace] = useState({});

  const web3Handler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0]);
    const { ethereum } = window;
    const provider = new ethers.BrowserProvider(ethereum);
    const signer = provider.getSigner();
    loadContracts(signer);
  };

  const loadContracts = async (signer) => {
    const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer);
    setMarketplace(marketplace);
    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer);
    setNFT(nft);
    setLoading(false);
  };

  return (
    <div className="App">
      <Navbar web3Handler={web3Handler} account={account} />
      <div>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
            <Spinner animation="border" style={{ display: 'flex' }} />
            <p className='mx-3 my-0'>Awaiting Metamask Connection...</p>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Home marketplace={marketplace} nft={nft} />} />
            <Route path="/create" element={<Create marketplace={marketplace} nft={nft} />} />
            <Route path="/my-listed-items" element={<MyListedItems marketplace={marketplace} nft={nft} />} />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;