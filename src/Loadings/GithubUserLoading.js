import React from 'react'

function GithubUserLoading() {



    return (
        <>
            <div className="animate-pulse bg-slate-600 w-full h-72 rounded-lg p-4 flex flex-col gap-2">
                <h2 className='font-bold'>User:</h2>
                <div className="dp-area flex gap-4">

                <div className='w-24 h-24 rounded-full bg-slate-500'></div>
                <div className="w-[90%] rounded-lg bg-slate-500"></div>
                </div>

          
            <div className="border-b-2 border-dashed border-b-slate-400"></div>

            <div className="user-details flex flex-col gap-2 justify-between  items-centerbg-slate-500">
                <div className="box w-full bg-slate-500 min-h-12 rounded-lg"></div>
                <div className="box w-full bg-slate-500 min-h-12 rounded-lg"></div>

             
            </div>

            </div>


        </>
    )
}

export default GithubUserLoading