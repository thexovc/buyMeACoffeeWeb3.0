import React, { useEffect, useState } from 'react';
import '../index.css';
import Buy from './Buy'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { BContext } from '../context/BContext';
import { ethers } from 'ethers';

function Profile() {
  const params = useParams();
  const addr = params.addr

  const { coffeeAddress, abi } = useContext(BContext)
  const [profile, setProfile] = useState()


  const updateUIValues = async () => {
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      })

      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const coffeeContract = new ethers.Contract(coffeeAddress, abi, provider)

      const addrProfile = await coffeeContract.getCreators(addressArray[0])
      console.log(addrProfile)
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


  return (
    <div className="w-full md:flex md:px-20 gap-10 px-5 justify-center my-[5%] mb-20">
      <div className="md:w-2/3 w-full mb-10 md:mb-0 flex flex-col gap-5 border border-gray-200 rounded-xl">
        <div className="w-full h-1/2 p-1">
          <img className='h-full w-full rounded-lg' width="" src="https://images.unsplash.com/photo-1629260606767-d6468a9a2ee7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxUcDE5UENkUk5aRXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>

        <div className="flex justify-between px-5 text-lg">
          <h1 className='md:text-2xl font-semibold'>{profile?.name}</h1>
          <h1 className='md:text-xl text-[#FF6937]'><span className="font-bold">{profile?.supporters.toString()}</span> supporters</h1>
        </div>

        <div className='w-full flex justify-center md:text-center px-2 mb-4'>
          <p>
            {profile?.bio}
          </p>
        </div>

      </div>
      <div className="md:w-1/3 w-full  border md:p-4 p-2 rounded-xl border-gray-00 ">
        <Buy addr={addr} />
      </div>
    </div >
  );
}
export default Profile;