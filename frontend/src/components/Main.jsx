import React, { useState } from 'react';
import '../index.css';
import { ethers } from 'ethers'
import { useContext } from 'react';
import { BContext } from '../context/BContext';
import moment from 'moment'
import Buy from './Buy'
import cover from '../assets/images/cover.jpg'

function Main() {
  const [name, setName] = useState("anon");
  const [message, setMessage] = useState("Enjoy your day!");
  const [amount, setAmount] = useState(1)

  const { currentAccount, connectWallet, coffeeAddress, abi, memos } = useContext(BContext)

  const buyCoffee = async () => {
    console.log("buying coffee")

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();
    const coffeeContract = new ethers.Contract(coffeeAddress, abi, signer)

    try {
      const coffeeTxn = await coffeeContract.buyCoffee(name, message, amount,
        { value: ethers.utils.parseEther((amount * 0.001).toString()) })

      await coffeeTxn.wait();

      console.log("mined ", coffeeTxn.hash);

      console.log("coffee purchased!");

    } catch (error) {

      console.log(error)
      return
    }

  };



  return (
    <div className="w-full md:flex md:px-20 gap-10 px-5 justify-center my-[5%] mb-20">
      <div className="md:w-2/3 w-full mb-10 md:mb-0 flex flex-col gap-5 border border-gray-400 rounded-xl">
        <div className="w-full h-1/2 p-1">
          <img className='h-full w-full rounded-lg' width="" src="https://images.unsplash.com/photo-1629260606767-d6468a9a2ee7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxUcDE5UENkUk5aRXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>

        <div className="flex justify-between px-5 text-lg">
          <h1 className='md:text-2xl font-semibold'>Clean Water Foundation</h1>
          <h1 className='md:text-xl text-[#FF6937]'><span className="font-bold">73</span> supporters</h1>
        </div>

        <div className='w-full flex justify-center md:text-center px-2 mb-4'>
          <p>
            The Clean Water Foundation is a non-profit organization dedicated to bringing safe, clean water to children in developing countries and those hit by natural disasters such as floods,
          </p>
        </div>

      </div>
      <div className="md:w-1/3 w-full  border md:p-4 p-2 rounded-xl border-gray-400 ">
        <Buy />
      </div>
    </div >
  );
}
export default Main;