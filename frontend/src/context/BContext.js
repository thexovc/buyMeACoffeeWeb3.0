import { createContext, useEffect, useState } from 'react'
import { abi } from '../constants'
import { ethers } from 'ethers'
import { useMoralis, useWeb3Contract } from "react-moralis"

export const BContext = createContext()

export const BProvider = ({ children }) => {

  const [currentAccount, setCurrentAccount] = useState('')
  const [memos, setMemos] = useState();
  const [open, setOpen] = useState(false)
  const [recent, setRecent] = useState()


  const coffeeAddress = "0x42d9a3d9517db9A01eb9ca4387867076164D5A75"

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



  // Get Top Creators

  const updateUI = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const coffeeContract = new ethers.Contract(coffeeAddress, abi, provider)
      const allCreators = await coffeeContract.getAllAddr()

      let arr = []

      for (let i = 0; i < allCreators.length; i++) {
        let prof = await coffeeContract.getCreators(allCreators[i])
        arr.push(prof)
      }


      if (arr.length > 0) {
        setRecent(arr)
      }

      console.log("RECENT:", recent)
    } catch (error) {
      console.log(error)
    }


  }


  // useEffect(() => {
  //   updateUI()

  // });


  return (
    <BContext.Provider
      value={{
        currentAccount,
        connectWallet,
        coffeeAddress,
        abi,
        open,
        setOpen,
        memos,
        getMemos,
        recent,
        updateUI
      }}
    >
      {children}
    </BContext.Provider>
  )
}