import './App.css';
import {ethers} from "ethers";
import { useState } from 'react';

function App() {
  const [account, setaccount] = useState(null);
  const web3Handler = async () => {
    const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
    setaccount(accounts[0])
    const { ethereum } = window;
    const provider = new ethers.BrowserProvider(ethereum);
    const signer = provider.Signer()
    loadContracts(signer)

  }
  const loadContracts = async (signer) => {
    const marketplace = ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer)
    setMarketplace
  }
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

export default App;
