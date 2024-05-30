import React from 'react'
import Stats from './Graphs/Stats'
import Streak from './Graphs/Streak'
import TotalContibutions from './Graphs/TotalContibutions'
import FavLanguages from './Graphs/FavLanguages'



function GithubGraphs() {
  return (
    <>
    <div className="select-none grid grid-cols-1 grid-rows-4 md:grid-rows-2 md:grid-cols-3 lg:grid-cols-5 md:gap-4 min-h-72">


    <div className="col-span-1 mb-4 md:mb-0 lg:col-span-2 bg-slate-500 rounded-lg flex items-center justify-center">
    <FavLanguages />
    </div>


    <div className="col-span-2 mb-4 md:mb-0 lg:col-span-3 bg-slate-500 rounded-lg flex items-center justify-center">
        <Stats />
    </div>


    <div className="col-span-2 mb-4 md:mb-0 lg:col-span-3 bg-slate-500 rounded-lg flex items-center justify-center">
    <Streak />
    </div>

    <div className="col-span-1 mb-4 md:mb-0 lg:col-span-2 bg-slate-500 rounded-lg flex items-center justify-center"><TotalContibutions /></div>












    </div>
    </>
  )
}

export default GithubGraphs