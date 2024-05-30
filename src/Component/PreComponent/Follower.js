import React from 'react'

import dp from '../../assets/images/dp.webp'
function Follower() {
  return (
    <>

<div className="follower flex items-center gap-4 justify-between pr-2">
    <div className=" flex items-center gap-4 justify-between w-full">

                        <div className="userDetails flex justify-between items-center gap-4">

                            <div className="dp h-12 w-12 rounded-full overflow-hidden">
                                <img src={dp} alt="dp" />
                            </div>
                            <div className="name">
                                <div className="usename font-bold text-slate-700 drop-shadow-lg text-lg">follower</div>
                                <div className="link "><a href="githum.com" target='_blank'>https://github.com/user</a></div>
                            </div>
                        </div>
                            <div className="btn">
                                <button
                                    className='px-2 md:px-4 py-1 md:py-2 text-sm flex justify-center items-center gap-2 bg-purple-700 rounded-lg shadow-md active:bg-purple-900 hover:bg-purple-800  ring-4 ring-transparent active:ring-purple-500'
                                >
                                    Visit <i class="fa-brands fa-github text-white"></i>
                                </button>
                            </div>
    </div>
                    </div>
                            <hr className='w-[98%]' />
    </>
  )
}

export default Follower