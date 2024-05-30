import React from 'react'
import Pie from './Graphs/Pie'


function GithubGraphs() {
  return (
    <>
    <div className="grid grid-cols-1 grid-rows-auto md:grid-rows-2 md:grid-cols-3 lg:grid-cols-5 gap-4 min-h-72">


    <div className="col-span-1 lg:col-span-2 bg-slate-500 rounded-lg flex items-center justify-center flex-col">
    <Pie/>
    <div className="label absolute z-10">
        <div className="l relative top-20 text-purple-700 font-bold">Fav Languages</div>
    </div>
    </div>

    <div className="col-span-2 lg:col-span-3 bg-slate-500 rounded-lg flex items-center justify-center">col-3</div>


    <div className="col-span-2 lg:col-span-3 bg-slate-500 rounded-lg flex items-center justify-center">col-3</div>

    <div className="col-span-1 lg:col-span-2 bg-slate-500 rounded-lg flex items-center justify-center">col-2</div>












    </div>
    </>
  )
}

export default GithubGraphs