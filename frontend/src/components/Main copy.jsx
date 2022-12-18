import React, { useState } from 'react';
import '../index.css';
import { ethers } from 'ethers'
import { useContext } from 'react';
import { BContext } from '../context/BContext';
import moment from 'moment'
import Buy from './Buy'

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
    <div className="w-full flex justify-center items-center flex-col my-[5%] mb-20">
      <main >
        <h1 className='text-3xl text-amber-900 font-semibold mb-10 p-4 text-center'> Buy <a href='https://twitter.com/thexovc' target="_blank" className='underline '>DanielOsariemen.eth</a> a Coffee!   </h1>

        {currentAccount ? (
          <div>
            <form className='w-full flex justify-center px-4  flex-col'>
              <div>
                <label className='text-2xl font-semibold mb-5 '> Name </label>
                <br />

                <input
                  className='p-4 border-2 border-gray-500 w-full rounded-lg mt-5'
                  id="name"
                  type="text"
                  placeholder="anon"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <br />
              <div>
                <label className='text-2xl font-semibold mb-5 '> How many coffee </label>
                <br />

                <input
                  className='p-4 border-2 border-gray-500 w-full rounded-lg mt-5'
                  id="name"
                  type="number"
                  placeholder="1"
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <br />
              <div>
                <label className='text-2xl font-semibold mb-5 '>
                  Send Daniel a message
                </label>
                <br />

                <textarea
                  className='p-4 border-2 border-gray-500 w-full rounded-lg mt-5 mb-5'
                  rows={3}
                  placeholder="Enjoy your coffee!"
                  id="message"
                  onChange={(e) => setMessage(e.target.value)}
                  required
                >
                </textarea>
              </div>
              <div className='w-full flex justify-center'>
                <button type="button" onClick={buyCoffee} className="bg-teal-800 p-3 mb-10 text-white text-xl rounded-xl" >
                  Send {amount} Coffee for {amount * 0.001}ETH
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className='w-full flex justify-center'>
            <button onClick={connectWallet} className="  bg-teal-800 p-3 mb-10 text-white text-xl rounded-xl"> Connect your wallet </button>
          </div>
        )}

        <div className="w-2/3 my-20">
          <Buy />
        </div>
      </main>

      {currentAccount && (<h1 className='text-xl mb-5'>Memos received</h1>)}

      {
        currentAccount && (memos?.map((memo, idx) => {
          return (
            <div key={idx} className="md:w-3/6 text-center gap-3 w-5/6 p-5 flex flex-col items-center text-xl " style={{ border: "2px solid brown", "borderRadius": "5px", margin: "5px" }}>
              <p style={{ "fontWeight": "bold" }} className="text-gray-600">"{memo.message}"</p>
              <p style={{ "fontWeight": "semibold" }} className="text-black flex">{memo.amount.toString()} ☕</p>
              <p className='text-lg'><span className='text-black font-semibold'>From:</span> {memo.name} <span className='font-bold text-black'>~</span> {moment.unix(memo.timestamp.toString()).toString()}</p>
            </div>
          )
        }))
      }
    </div >
  );
}
export default Main;