import React, { useContext, useEffect } from 'react'
import { FaEthereum } from 'react-icons/fa';
import { BContext } from '../context/BContext'

const Dashboard = () => {
    const { memos, getMemos } = useContext(BContext)

    useEffect(() => {
        getMemos();
    });

    return (
        <div className='w-full flex md:px-40 justify-center flex-col gap-10 items-center px-2 mt-5'>
            <div className='md:w-2/3 w-full bg-[#F9F8F8] md:px-4 px-1 rounded-xl flex text-xl flex-col'>
                <div className="flex border-b-2 p-8">
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className='text-xl font-semibold'>Hi, Caleb Peter</h1>
                        <p className='text-lg'>buymeacoffee.com/calebpeter.c</p>
                    </div>
                </div>

                <div className="flex flex-col p-8">
                    <div className="earn flex">
                        <h1>Earnings</h1>
                    </div>
                    <p className='text-2xl'>0 eth</p>
                </div>

                <div className='flex justify-center my-10'>
                    <p className='cursor-pointer bg-[#FF6937] flex justify-center gap-3 items-center w-1/3 text-xl font-semibold text-white p-4 rounded-xl'>
                        Withdraw</p>
                </div>
            </div>

            <div className='flex justify-center gap-5 w-full flex-col items-center mb-40'>
                <h1 className='text-2xl'>Recent Supporters</h1>
                <div className='bg-gray-200 md:w-1/2 w-5/6 rounded-[30px] py-4'>
                    <div className='flex justify-between p-6 items-center '>
                        <div className='justify-start font-semibold  w-34 text-12'>

                            <img src="" height={50} width={50} className="rounded-full" />

                        </div>
                        <div className='flex gap-10 justify-between items-center'>
                            <p className='text-xl'>
                                Name
                            </p>
                            <p className='text-xl'>
                                Message
                            </p>
                        </div>
                        <div className=' items-center  justify-end'>

                            <span className='flex justify-center items-center'><FaEthereum />0.001</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard