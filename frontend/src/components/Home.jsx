import React, { useEffect } from 'react'
import { useContext } from 'react'
import { FaEthereum } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { ConnectButton } from "web3uikit"
import { BContext } from '../context/BContext'
import { useLocation, useParams } from 'react-router-dom';

const Home = () => {

    const { recent, updateUI } = useContext(BContext)

    useEffect(() => {
        updateUI()


    })


    return (
        <div className='w-full bg-[#FDFDFC] flex gap-5 justify-center items-center flex-col'>
            <div className="w-full px-2 md:w-2/3 flex justify-center flex-col items-center gap-5 mt-10 md:mb-20 mb-10" >
                <h1 className='md:text-6xl text-3xl text-center font-bold md:mt-20 text-gray-900'>A supporter is worth a thousand followers.</h1>

                <p className='text-lg md:text-2xl text-center text-gray-600'>Accept donations. Start a membership. Sell anything you like. It’s easier than you think.</p>

                <Link to={"/auth"} className='cursor-pointer bg-[#FFDC01] flex justify-center gap-3 items-center w-3/6 md:w-2/6 text-xl font-bold text-black my-4 p-4 rounded-xl'>
                    Become A Creator
                </Link>

                <p className='text-lg md:text-2xl text-center text-gray-500 font-semibold'>DONATIONS</p>
                <h1 className='md:text-6xl text-3xl text-center text-gray-600 font-bold'>Give your audience an easy way to say thanks.</h1>
                <p className='text-lg md:text-2xl text-center text-gray-600'>Buy Me a Coffee makes supporting fun and easy. In just a couple of taps, your fans can make the payment (buy you a coffee) and leave a message. They don’t even have to create an account!</p>
            </div>

            <div className='w-full flex justify-center md:mb-40 mb-20 '>
                <div class="relative md:w-1/2 w-11/12 h-full md:h-auto ">

                    <div class="relative bg-[#FFFCE6] rounded-lg shadow px-2">
                        <div class="py-4 px-6 rounded-t border-b flex justify-center ">
                            <h3 class="text-2xl font-semibold text-gray-900 mt-2">
                                Recent Creators
                            </h3>
                        </div>

                        <div class="md:p-6 p-3">

                            <ul class="my-4 space-y-3">

                                {recent?.map((item) => (
                                    <div class="flex items-center p-3 text-base font-bold px-4 text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 group hover:shadow">
                                        <svg aria-hidden="true" class="h-4" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.0728 0L21.9092 12.6999L25.1009 5.21543L39.0728 0Z" fill="#E17726" /><path d="M0.966797 0.0151367L14.9013 5.21656L17.932 12.7992L0.966797 0.0151367Z" fill="#E27625" /><path d="M32.1656 27.0093L39.7516 27.1537L37.1004 36.1603L27.8438 33.6116L32.1656 27.0093Z" fill="#E27625" /><path d="M7.83409 27.0093L12.1399 33.6116L2.89876 36.1604L0.263672 27.1537L7.83409 27.0093Z" fill="#E27625" /><path d="M17.5203 10.8677L17.8304 20.8807L8.55371 20.4587L11.1924 16.4778L11.2258 16.4394L17.5203 10.8677Z" fill="#E27625" /><path d="M22.3831 10.7559L28.7737 16.4397L28.8067 16.4778L31.4455 20.4586L22.1709 20.8806L22.3831 10.7559Z" fill="#E27625" /><path d="M12.4115 27.0381L17.4768 30.9848L11.5928 33.8257L12.4115 27.0381Z" fill="#E27625" /><path d="M27.5893 27.0376L28.391 33.8258L22.5234 30.9847L27.5893 27.0376Z" fill="#E27625" /><path d="M22.6523 30.6128L28.6066 33.4959L23.0679 36.1282L23.1255 34.3884L22.6523 30.6128Z" fill="#D5BFB2" /><path d="M17.3458 30.6143L16.8913 34.3601L16.9286 36.1263L11.377 33.4961L17.3458 30.6143Z" fill="#D5BFB2" /><path d="M15.6263 22.1875L17.1822 25.4575L11.8848 23.9057L15.6263 22.1875Z" fill="#233447" /><path d="M24.3739 22.1875L28.133 23.9053L22.8184 25.4567L24.3739 22.1875Z" fill="#233447" /><path d="M12.8169 27.0049L11.9606 34.0423L7.37109 27.1587L12.8169 27.0049Z" fill="#CC6228" /><path d="M27.1836 27.0049L32.6296 27.1587L28.0228 34.0425L27.1836 27.0049Z" fill="#CC6228" /><path d="M31.5799 20.0605L27.6165 24.0998L24.5608 22.7034L23.0978 25.779L22.1387 20.4901L31.5799 20.0605Z" fill="#CC6228" /><path d="M8.41797 20.0605L17.8608 20.4902L16.9017 25.779L15.4384 22.7038L12.3988 24.0999L8.41797 20.0605Z" fill="#CC6228" /><path d="M8.15039 19.2314L12.6345 23.7816L12.7899 28.2736L8.15039 19.2314Z" fill="#E27525" /><path d="M31.8538 19.2236L27.2061 28.2819L27.381 23.7819L31.8538 19.2236Z" fill="#E27525" /><path d="M17.6412 19.5088L17.8217 20.6447L18.2676 23.4745L17.9809 32.166L16.6254 25.1841L16.625 25.1119L17.6412 19.5088Z" fill="#E27525" /><path d="M22.3562 19.4932L23.3751 25.1119L23.3747 25.1841L22.0158 32.1835L21.962 30.4328L21.75 23.4231L22.3562 19.4932Z" fill="#E27525" /><path d="M27.7797 23.6011L27.628 27.5039L22.8977 31.1894L21.9414 30.5138L23.0133 24.9926L27.7797 23.6011Z" fill="#F5841F" /><path d="M12.2373 23.6011L16.9873 24.9926L18.0591 30.5137L17.1029 31.1893L12.3723 27.5035L12.2373 23.6011Z" fill="#F5841F" /><path d="M10.4717 32.6338L16.5236 35.5013L16.4979 34.2768L17.0043 33.8323H22.994L23.5187 34.2753L23.48 35.4989L29.4935 32.641L26.5673 35.0591L23.0289 37.4894H16.9558L13.4197 35.0492L10.4717 32.6338Z" fill="#C0AC9D" /><path d="M22.2191 30.231L23.0748 30.8354L23.5763 34.8361L22.8506 34.2234H17.1513L16.4395 34.8485L16.9244 30.8357L17.7804 30.231H22.2191Z" fill="#161616" /><path d="M37.9395 0.351562L39.9998 6.53242L38.7131 12.7819L39.6293 13.4887L38.3895 14.4346L39.3213 15.1542L38.0875 16.2779L38.8449 16.8264L36.8347 19.1742L28.5894 16.7735L28.5179 16.7352L22.5762 11.723L37.9395 0.351562Z" fill="#763E1A" /><path d="M2.06031 0.351562L17.4237 11.723L11.4819 16.7352L11.4105 16.7735L3.16512 19.1742L1.15488 16.8264L1.91176 16.2783L0.678517 15.1542L1.60852 14.4354L0.350209 13.4868L1.30098 12.7795L0 6.53265L2.06031 0.351562Z" fill="#763E1A" /><path d="M28.1861 16.2485L36.9226 18.7921L39.7609 27.5398L32.2728 27.5398L27.1133 27.6049L30.8655 20.2912L28.1861 16.2485Z" fill="#F5841F" /><path d="M11.8139 16.2485L9.13399 20.2912L12.8867 27.6049L7.72971 27.5398H0.254883L3.07728 18.7922L11.8139 16.2485Z" fill="#F5841F" /><path d="M25.5283 5.17383L23.0847 11.7736L22.5661 20.6894L22.3677 23.4839L22.352 30.6225H17.6471L17.6318 23.4973L17.4327 20.6869L16.9139 11.7736L14.4707 5.17383H25.5283Z" fill="#F5841F" /></svg>
                                        <span class="flex-1 ml-6 whitespace-nowrap">{item?.name}</span>
                                        <span class="flex-1 flex items-center ml-3 whitespace-nowrap"><FaEthereum /> {item?.balance.toString()} </span>
                                        <Link to={`/creator/${item?.addr}`} class=" items-center justify-center cursor-pointer hover:bg-orange-500 px-2 py-2 text-white ml-3 text-sm md:text-lg bg-[#FF6937] font-semibold rounded-xl">
                                            Support
                                        </Link>
                                    </div>
                                ))}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home