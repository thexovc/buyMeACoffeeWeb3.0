import React from 'react'

const Home = () => {
    return (
        <div className='w-full bg-[#FDFDFC] flex gap-5 justify-center items-center flex-col'>
            <div className="w-full px-2 md:w-2/3 flex justify-center flex-col items-center gap-5 mt-10 mb-40" >
                <h1 className='md:text-6xl text-3xl text-center font-bold md:mt-20 text-gray-900'>A supporter is worth a thousand followers.</h1>

                <p className='text-lg md:text-2xl text-center text-gray-600'>Accept donations. Start a membership. Sell anything you like. It’s easier than you think.</p>

                <button className='cursor-pointer bg-[#FFDC01] flex justify-center gap-3 items-center w-3/6 md:w-2/6 text-xl font-bold text-black my-4 p-4 rounded-xl'>
                    Connect
                </button>

                <p className='text-lg md:text-2xl text-center text-gray-500 font-semibold'>DONATIONS</p>
                <h1 className='md:text-6xl text-3xl text-center text-gray-600 font-bold'>Give your audience an easy way to say thanks.</h1>
                <p className='text-lg md:text-2xl text-center text-gray-600'>Buy Me a Coffee makes supporting fun and easy. In just a couple of taps, your fans can make the payment (buy you a coffee) and leave a message. They don’t even have to create an account!</p>
            </div>
        </div>
    )
}

export default Home