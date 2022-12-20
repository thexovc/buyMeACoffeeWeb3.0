import React, { useContext, useState } from 'react'
import ProfileImage from '../assets/images/pixx.webp'
import { ethers } from 'ethers'
import axios from 'axios'
import FormData from 'form-data';
import { BContext } from '../context/BContext'


const Auth = () => {

    const { coffeeAddress, abi } = useContext(BContext)

    const [newHost, setNewHost] = useState(false)
    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState()
    const [linkText, setLinkText] = useState("")
    const [name, setName] = useState("")
    const [bio, setBio] = useState("")
    const [ipfsHash, setIpfsHash] = useState('')


    // console.log(coffeeAddress, abi)

    const handleCreate = async () => {

        if (file) {
            console.log('starting')
            console.log(file)

            const formData = new FormData()

            formData.append("file", file)

            const API_KEY = "194b413d599fe41e79d5"
            const API_SECRET = "91668b71fc76cca7e55bcf83c9ecb6ce0e8a2c544da78fab6b76d444f0be7151"

            console.log(formData)
            console.log(API_KEY)
            console.log(API_SECRET)

            // the endpoint needed to upload the file
            const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`

            setLoading(true)

            await axios.post(
                url,
                formData,
                {
                    maxContentLength: "Infinity",
                    headers: {
                        "Content-Type": `multipart/form-data;boundary=${formData._boundary}`,
                        'pinata_api_key': API_KEY,
                        'pinata_secret_api_key': API_SECRET

                    }
                }
            )
                .then(async (response) => {

                    console.log(response)
                    setIpfsHash(response.data.IpfsHash)

                    try {
                        const provider = new ethers.providers.Web3Provider(window.ethereum)
                        const signer = provider.getSigner();
                        const coffeeContract = new ethers.Contract(coffeeAddress, abi, signer)

                        console.log("creating profile")
                        const createHost = await coffeeContract.beCreator(name, linkText, response.data.IpfsHash, bio)
                        window.location.href = "/profile"
                    } catch (error) {
                        setLoading(false)
                        alert("Ensure that you wallet is connected")
                    }

                })
                .catch((err) => {
                    alert("Ensure that you wallet is connected")
                    setLoading(false)
                    console.log(err)
                })

            // get the hash

        } else {
            setLoading(false)
            alert("Ensure that you wallet is connected")
            return
        }

    }


    return (
        <div className='bg-[#F9F8F8]'>
            <div className='bg-hero bg-right w-full bg-no-repeat flex h-screen mb-20'>
                <div className='grid w-full place-items-center'>
                    <div className='text-[32px] font-noto text-gray-600  font-semibold'>Edit Profile details</div>
                    {file ?
                        <img src={URL.createObjectURL(file)} width="100px" height="100px" className='rounded-full border-x-white border-r-2' />
                        :
                        <img src={ProfileImage} width="100px" height="100px" />
                    }
                    <input type="file" onChange={(event) => setFile(event.target.files[0])} className='border-gray-500 rounded-[12px]  w-[426px] py-2 px-2 h-[50px] border-2' accept="image/*" />
                    <input onChange={(e) => setName(e.target.value)} maxLength="130" className='w-[426px] border-gray-500 h-[50px] bg-transparent rounded-[12px]  border-2 pl-2' placeholder='nickname...' />

                    <input onChange={(e) => setLinkText(e.target.value)} maxLength="130" className='w-[426px] border-gray-500 h-[50px] bg-transparent rounded-[12px]  border-2 pl-2' placeholder='website link or social link...' />

                    <textarea onChange={(e) => setBio(e.target.value)} maxLength="40" className=' border-gray-500 w-[426px] h-[221px] rounded-[12px] text-black  bg-transparent border-2 px-2' placeholder='Bio' />
                    <div onClick={handleCreate} className='font-noto bg-[#FF6937] font-semibold text-gray-100 hover:bg-orange-500 cursor-pointer text-lg p-3 rounded-[12px] text-center'>{loading ? "Loading ..." : "Create Profile"}</div>
                    <br />
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Auth