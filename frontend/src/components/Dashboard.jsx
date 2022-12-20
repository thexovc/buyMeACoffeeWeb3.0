import { ethers } from 'ethers';
import React, { useContext, useEffect, useState } from 'react'
import { FaEthereum } from 'react-icons/fa';
import { BContext } from '../context/BContext';
import supp from '../assets/images/supp.webp'

const Dashboard = () => {

    const [profile, setProfile] = useState()
    const [memos, setMemos] = useState()
    const { coffeeAddress, abi } = useContext(BContext)

    const getMemos = async () => {
        try {
            const addressArray = await window.ethereum.request({
                method: 'eth_accounts',
            })

            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const coffeeContract = new ethers.Contract(coffeeAddress, abi, provider)

            const allMemo = await coffeeContract.getMemos(addressArray[0])
            console.log("allMemo", allMemo)
            setMemos(allMemo)

        } catch (err) {
            console.log(err)

            // window.location.href = '/'
        }
    }



    const updateUIValues = async () => {
        try {
            const addressArray = await window.ethereum.request({
                method: 'eth_accounts',
            })

            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const coffeeContract = new ethers.Contract(coffeeAddress, abi, provider)

            const addrProfile = await coffeeContract.getCreators(addressArray[0])
            console.log("addrProfile", addrProfile)
            setProfile(addrProfile)
        } catch (err) {
            console.log(err)

            // window.location.href = '/'
        }

    }

    useEffect(() => {
        setTimeout(() => {
            updateUIValues()
        }, 1000);
    }, [])



    useEffect(() => {
        getMemos();
    });

    return (
        <div className='w-full flex md:px-40 justify-center flex-col gap-10 items-center px-2 mt-5'>
            <div className='md:w-2/3 w-full bg-[#F9F8F8] md:px-4 px-1 rounded-xl flex text-xl flex-col'>
                <div className="flex flex-col border-b-2 p-8">
                    <div className="image flex justify-center">
                        <img className='rounded-2xl md:w-1/3 w-2/3 mb-5' src={supp} alt="" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className='text-xl font-semibold'>Hi, {profile?.name}</h1>
                        <a href={`${profile?.link[0]}`}>
                            {profile?.link[0]}
                        </a>
                    </div>
                </div>

                <div className="flex flex-col p-8">
                    <div className="earn flex">
                        <h1>Earnings</h1>
                    </div>
                    <p className='text-2xl'>{parseInt(profile?.balance.toString()) / 1e18} eth</p>
                </div>

                <div className='flex justify-center my-10'>
                    <p className='cursor-pointer bg-[#FF6937] flex justify-center gap-3 items-center w-1/3 text-xl font-semibold text-white p-4 rounded-xl'>
                        Withdraw</p>
                </div>
            </div>

            <div className='flex justify-center gap-5 w-full flex-col items-center mb-40'>
                <h1 className='text-2xl'>Recent Supporters</h1>
                {memos?.map((item) => (
                    <div className='bg-gray-200 md:w-1/2 w-5/6 rounded-[30px] py-4'>
                        <div className='flex justify-between p-6 items-center '>
                            <div className='justify-start font-semibold w-50 border-2 h-50 text-12'>

                                <img src={supp} height={50} width={50} className="rounded-full" />

                            </div>
                            <div className='flex gap-10 justify-between items-center'>
                                <p className='text-xl'>
                                    {item?.name}
                                </p>
                                <p className='text-xl'>
                                    {item?.message}
                                </p>
                            </div>
                            <div className=' items-center  justify-end'>

                                <span className='flex justify-center items-center'><FaEthereum />{item?.amount.toString()}</span>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard