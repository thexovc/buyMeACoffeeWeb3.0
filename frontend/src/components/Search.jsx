


const Search = () => {

    return (
        <div className="w-full h-screen bg-[#FDFDFC]">

            <div className="flex justify-center flex-col items-center gap-5 pt-5">
                <div className="md:w-1/2 w-full flex justify-center px-4 md:gap-3 gap-2">
                    <input className="my-4 border-4 md:w-5/6 w-4/6 py-4 px-4 rounded-xl text-xl" type="text" placeholder="Search for a creator ..." />
                    <p className=" bg-[#FF6937] md:w-1/6 w-2/6 my-6 rounded-xl flex justify-center items-center font-semibold text-xl"> search</p>

                </div>
                <h1 className='text-2xl text-center  font-bold mb-10'>Search Result For djjdj</h1>

                <div className='flex justify-center  w-full '>
                    <div className='bg-gray-200 md:w-1/2 w-5/6 rounded-[30px] py-4'>
                        <div className='flex justify-between p-6 items-center '>
                            <div className='justify-start font-semibold  w-34 text-12'>

                                <img src="" height={50} width={50} className="rounded-full" />

                            </div>
                            <div className='justify-center items-center'>
                                <p className='justify-center items-center md:text-2xl text-xl'>
                                    Name
                                </p>
                            </div>
                            <div className=' items-center  justify-end'>

                                <div className=' cursor-pointer rounded-xl px-6 text-center font-semibold bg-[#FFDC01]  py-3  text-xl'>
                                    Support
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center pb-10 w-full '>
                    <div className='bg-gray-200 md:w-1/2 w-5/6 rounded-[30px] '>
                        <div className='flex justify-center  p-6 '>
                            <p className=' text-center items-center text-2xl font-semibold'>Nothing to Show Here</p></div>
                    </div>
                </div>

            </div>
        </div>

    );
}
export default Search