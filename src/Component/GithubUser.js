import React from 'react'
import dp from './../assets/images/dp.webp'
import {Celender, Building, Key, Update, Location, Link, Name} from './IconsSvg'



function GithubUser() {
    return (
        <>
            <div className="bg-slate-500 w-full h-72 rounded-lg p-4 flex flex-col gap-2">
            <div className="heading sticky top-0">
                <h2 className='font-bold'>User:</h2>
                    
                </div>
                <div className="top-area flex justify-between items-center">
                    <div className="details flex items-center">

                        <div className="dp w-20 h-20  bg-purple-700 rounded-full overflow-hidden shadow-lg">
                            <img src={dp} alt="dp" />
                        </div>
                        <div className="usenames px-2">
                            <div className="h-2/3 user text-lg md:text-3xl text-purple-700 font-sans font-bold">Grow in Flow</div>
                            <p className='h-1/3 text-xs md:text-md'>@growinflow</p>
                        </div>
                    </div>

                    <div className="follow-btn">
                    <button
            className='px-2 md:px-4 py-1 md:py-2 text-sm flex justify-center items-center gap-2 bg-purple-700 rounded-lg shadow-md active:bg-purple-900 hover:bg-purple-800  ring-4 ring-transparent active:ring-purple-500'
            >
                Follow <i class="fa-brands fa-github text-white"></i>
            </button>
                    </div>
                </div>
            <hr />

            <div className="user-details grid grid-cols-2 font-ligth text-sm md:text-md md:font-medium">

               <div className="flex gap-2 items-center justify-start">
                  <Key style="w-8 h-8 fill-slate-400"/>
                <p>#32940324</p>
                </div>
               <div className="flex gap-2 items-center justify-start">
                  <Name  style="w-8 h-8 fill-slate-400"/>
                <p>Grow in Flow</p>
                </div>
               <div className="flex gap-2 items-center justify-start">
                  <Building  style="w-8 h-8 fill-slate-400"/>
                <p>Dycoders</p>
                </div>
               <div className="flex gap-2 items-center justify-start">
                  <Location  style="w-8 h-8 fill-slate-400"/>
                <p>PK</p>
                </div>
               <div className="flex gap-2 items-center justify-start">
                  <Celender  style="w-8 h-8 fill-slate-400"/>
                <p>2023-07-30T07:44:16Z</p>
                </div>
               <div className="flex gap-2 items-center justify-start">
                  <Update  style="w-8 h-8 fill-slate-400"/>
                <p> 2024-05-08T13:21:51Z</p>
                </div>
               <div className="col-span-2 flex gap-2 items-center justify-start">
                  <Link  style="w-8 h-8 fill-slate-400"/>
                <p>https://github.com/GrowinFlow</p>
                </div>
            </div>

            </div>


        </>
    )
}

export default GithubUser