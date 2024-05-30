import React from 'react'
import Pie from './Graphs/Pie'


function GithubGraphs() {
  return (
    <>
    <div className="grid grid-cols-1 grid-rows-4 md:grid-rows-2 md:grid-cols-3 lg:grid-cols-5 md:gap-4 min-h-72">


    <div className="col-span-1 mb-4 md:mb-0 bg-slate-500 rounded-lg flex items-center justify-center flex-col">
    <div className="label absolute z-10">
        <div className="l relative -top-[85px] text-slate-700 drop-shadow-lg p-1 mt-1 font-bold">Fav Languages</div>
    </div>
    <Pie/>
    
    </div>

    <div className="col-span-2 mb-4 md:mb-0 lg:col-span-4 bg-slate-500 rounded-lg flex items-center justify-center">col-3</div>


    <div className="col-span-2 mb-4 md:mb-0 lg:col-span-3 bg-slate-500 rounded-lg flex items-center justify-center">col-3</div>

    <div className="col-span-1 mb-4 md:mb-0 lg:col-span-2 bg-slate-500 rounded-lg flex items-center justify-center">col-2</div>












    </div>
    </>
  )
}

export default GithubGraphs