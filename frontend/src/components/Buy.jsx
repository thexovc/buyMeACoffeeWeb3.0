import { ethers } from 'ethers'
import React, { useContext, useEffect, useState } from 'react'
import { FaEthereum } from 'react-icons/fa'
import { useMoralis, useWeb3Contract } from "react-moralis"
import { useNotification } from "web3uikit"
import { BContext } from '../context/BContext'

const Buy = ({ addr }) => {
    const dispatch = useNotification()
    const [name, setName] = useState("anon");
    const [message, setMessage] = useState("Enjoy your day!");
    const [amount, setAmount] = useState(1)

    const { Moralis, account, isWeb3Enabled, chainId: chainIdHex } = useMoralis()
    const { coffeeAddress, abi, memos } = useContext(BContext)

    const { runContractFunction: buyCoffee } = useWeb3Contract({
        abi: abi,
        contractAddress: coffeeAddress,
        functionName: "buyCoffee",
        msgValue: ethers.utils.parseEther((amount * 0.001).toString()),
        params: {
            _name: name,
            _message: message,
            _amount: amount * 0.001,
            _addr: addr
        },
    })

    const handleSuccess = async (tx) => {
        await tx.wait(1)

        handleNewNotification(tx)
    }

    const handleNewNotification = () => {
        dispatch({
            type: "success",
            message: "Your transaction was successful",
            title: "Supporting Creator",
            position: "topR",
            icon: "bell",
        })
    }

    const handleErrorNotification = (err) => {

        dispatch({
            type: "error",
            message: `Error occured please make sure you are connected`,
            title: "Supporting Creator",
            position: "topR",
            icon: "bell",
        })
    }


    async function buyCoffeeFunc() {
        try {

            await buyCoffee({
                onSuccess: handleSuccess,
                onError: (error) => {
                    handleErrorNotification(error)
                    console.log(error)
                },
            })
        } catch (error) {
            console.log(error)
            handleErrorNotification(error)
        }
    }

    useEffect(() => {
        console.log("connected")
    }, [isWeb3Enabled])

    return (
        <div className='w-full flex flex-col gap-3 items-center justify-center'>
            <h1 className='text-2xl text-black font-semibold text-center'>Buy <span className='text-gray-500'>Clean Water ...</span> a coffee</h1>

            <div className="flex text-xl justify-center items-center md:gap-10 gap-5 px-4 w-full py-10 bg-[#FEF7F4] border-2 rounded-lg border-[#FFD2C4]">
                <div className="text-4xl">☕</div>
                <div className="text-gray-400 font-bold">x</div>
                <div className="flex md:gap-3 gap-1 md:text-xl text-sm">
                    <div onClick={() => setAmount(1)} className="px-3 md:px-4 py-3 font-semibold cursor-pointer  rounded-xl bg-[#FF6937] text-white">1</div>
                    <div onClick={() => setAmount(3)} className="px-3 md:px-4 py-3 font-semibold cursor-pointer  rounded-xl bg-[#FF6937] text-white">3</div>
                    <div onClick={() => setAmount(5)} className="px-3 md:px-4 py-3 font-semibold cursor-pointer  rounded-xl bg-[#FF6937] text-white">5</div>
                    <input type="text" placeholder='10' onChange={(e) => setAmount(e.target.value)} className='w-10 border-2 border-gray-300 text-center ' />
                </div>
            </div>

            <div className='w-full'>
                <input
                    className='p-4 border-2 border-gray-300 w-full rounded-lg mt-5'
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name (optional)"
                />
                <textarea
                    className='p-4 border-2 border-gray-300 text-xl w-full rounded-lg mt-5 mb-5'
                    rows={3}
                    placeholder="Say something nice.. (optional)"
                    id="message"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                >
                </textarea>

                <button onClick={buyCoffeeFunc} className='bg-[#FF6937] flex justify-center gap-3 cursor-pointer items-center w-full text-xl hover:bg-orange-600 font-semibold text-white p-4 rounded-xl'>
                    Support   <span className='flex justify-center items-center'><FaEthereum />{0.001 * amount}</span>
                </button>
            </div>

        </div>
    )
}

export default Buy