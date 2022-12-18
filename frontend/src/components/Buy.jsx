import React from 'react'
import { FaEthereum } from 'react-icons/fa'

const Buy = () => {
    return (
        <div className='w-full flex flex-col gap-3 items-center justify-center'>
            <h1 className='text-2xl text-black font-semibold '>Buy <span className='text-gray-500'>Clean Water ...</span> a coffee</h1>

            <div className="flex text-xl justify-center items-center gap-10 px-4 w-full py-10 bg-[#FEF7F4] border-2 rounded-lg border-[#FFD2C4]">
                <div className="text-4xl">☕</div>
                <div className="text-gray-400 font-bold">x</div>
                <div className="flex gap-3 md:text-xl">
                    <div className="px-4 py-3 font-semibold  rounded-xl bg-[#FF6937] text-white">1</div>
                    <div className="px-4 py-3 font-semibold  rounded-xl bg-[#FF6937] text-white">3</div>
                    <div className="px-4 py-3 font-semibold  rounded-xl bg-[#FF6937] text-white">5</div>
                    <input type="text" placeholder='10' className='w-10 border-2 border-gray-300 text-center ' />
                </div>
            </div>

            <div className='w-full'>
                <input
                    className='p-4 border-2 border-gray-300 w-full rounded-lg mt-5'
                    type="text"
                    placeholder="Name (optional)"
                />
                <textarea
                    className='p-4 border-2 border-gray-300 text-xl w-full rounded-lg mt-5 mb-5'
                    rows={3}
                    placeholder="Say something nice.. (optional)"
                    id="message"
                    required
                >
                </textarea>

                <button className='bg-[#FF6937] flex justify-center gap-3 items-center w-full text-xl font-semibold text-white p-4 rounded-xl'>
                    Support   <span className='flex justify-center items-center'><FaEthereum />0.001</span>
                </button>
            </div>

        </div>
    )
}

export default Buy