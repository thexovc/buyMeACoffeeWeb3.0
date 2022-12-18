import { createContext, useEffect, useState } from 'react'
import { abi } from '../constants'
import { ethers } from 'ethers'

export const BContext = createContext()

export const BProvider = ({ children }) => {

  const [currentAccount, setCurrentAccount] = useState('')
  const [memos, setMemos] = useState();

  const coffeeAddress = "0xBb88351E3B23a225E13c79e63b0ba26B22f152bB"


  // Wallet connection logic
  const isWalletConnected = async () => {
    try {
      const { ethereum } = window;

      const accounts = await ethereum.request({ method: 'eth_accounts' })

      console.log("accounts: ", accounts);

      if (accounts.length > 0) {
        const account = accounts[0];
        setCurrentAccount(accounts[0])
        console.log("wallet is connected! " + account);
      } else {
        console.log("make sure MetaMask is connected");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("please install MetaMask");
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts'
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  }

  // Function to fetch all memos stored on-chain.
  const getMemos = async () => {
    try {

      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const coffeeContract = new ethers.Contract(coffeeAddress, abi, provider)

      const allMemo = await coffeeContract.getMemos()
      console.log(allMemo)
      setMemos(allMemo)

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isWalletConnected();
    getMemos();

  });


  return (
    <BContext.Provider
      value={{
        currentAccount,
        connectWallet,
        coffeeAddress,
        abi,
        memos
      }}
    >
      {children}
    </BContext.Provider>
  )
}