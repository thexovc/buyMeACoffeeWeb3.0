import React from 'react'

const Dashboard = () => {
    return (
        <div className='w-full flex md:px-40 justify-center items-center px-2 mt-5'>
            <div className='md:w-1/3 hidden md:flex'>sjs</div>
            <div className='md:w-2/3 w-full bg-[#F9F8F8] md:px-4 px-1 flex text-xl flex-col'>
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
        </div>
    )
}

export default Dashboard