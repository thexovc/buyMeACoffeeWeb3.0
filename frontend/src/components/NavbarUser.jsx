import React, { useContext, useState } from 'react'
import logo from '../assets/svg/logo.svg'
import { Link } from 'react-router-dom'
import { ConnectButton } from "web3uikit"
import { BContext } from '../context/BContext'
import pic from '../assets/images/pixx.webp'

const NavbarUser = () => {
    const { open, setOpen } = useContext(BContext)



    return (

        <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
                <a href="/" class="flex items-center">
                    <img src={logo} class="h-10 ml-3 sm:h-9" alt="Coffee" />

                </a>
                <div class="flex items-center md:order-2 py-1 px-2 justify-between border-2 gap-2  border-gray-300 rounded-full">
                    <button onClick={() => setOpen(!open)} type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <button type="button" class="flex text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span class="sr-only">Open user menu</span>
                        <img class="w-8 h-8 rounded-full" src={pic} alt="user photo" />
                    </button>

                    {open && (
                        <div class="z-50 mt-20 pb-5 fixed top-1 right-10 text-base list-none bg-white divide-y divide-gray-100 rounded shadow border-2 px-4" id="user-dropdown">


                            <Link to="/profile" class="block px-4 py-3 text-xl text-gray-700 hover:bg-gray-100  ">Profile</Link>


                            <Link to="/dashboard" class="block px-4 py-3 text-xl text-gray-700 hover:bg-gray-100  ">Dashboard</Link>


                            <Link to="/search" class="block px-4 py-3 text-xl text-gray-700 hover:bg-gray-100  ">Search</Link>


                            <Link className='w-full text-center my-2'>
                                <ConnectButton class="block px-3 py-2 text-xl !text-gray-900 bg-[#FFDC01] rounded-xl  font-semibold  " moralisAuth={false} />
                            </Link>



                        </div>
                    )}

                </div>

                {/* <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className=' py-2 px-4 border-2 border-gray-300 rounded-full'>
                            <a href="#" class="text-xl" aria-current="page">Edit Page</a>
                        </li>


                    </ul>
                </div> */}
            </div>
        </nav>


    )
}

export default NavbarUser