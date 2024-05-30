import React from 'react'

function FollowersLoading() {

  return (
    <>
        <div className="animate-pulse bg-slate-600 w-full h-72 rounded-lg p-4 flex flex-col gap-2">
            <h2 className='font-bold'>Followers:</h2>
            <div className="dp-area flex gap-4">

            <div className='w-12 h-12 rounded-full bg-slate-500'></div>
            <div className="w-[90%] rounded-lg bg-slate-500"></div>

            </div>
            <div className="dp-area flex gap-4">

            <div className='w-12 h-12 rounded-full bg-slate-500'></div>
            <div className="w-[90%] rounded-lg bg-slate-500"></div>

            </div>
            <div className="dp-area flex gap-4">

            <div className='w-12 h-12 rounded-full bg-slate-500'></div>
            <div className="w-[90%] rounded-lg bg-slate-500"></div>

            </div>
            <div className="dp-area flex gap-4">

            <div className='w-12 h-12 rounded-full bg-slate-500'></div>
            <div className="w-[90%] rounded-lg bg-slate-500"></div>

            </div>
        </div>
    </>
)
}

export default FollowersLoading