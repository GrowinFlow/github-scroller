import React, { useContext } from 'react'
import Stats from './Graphs/Stats'
import Streak from './Graphs/Streak'
import TotalContibutions from './Graphs/TotalContibutions'
import FavLanguages from './Graphs/FavLanguages'
import { DataContext } from '../Context/ApiContext'
import GraphsLoading from '../Loadings/GraphsLoading'



function GithubGraphs() {
  const {userName, isError, isLoading} = useContext(DataContext);
  if(!userName){
    return(
        <>
        Not Found
        </>
    )}
if(isError){
    return(
        <>
        Error
        </>
    )}  
if(isLoading){
    return(
        <>
        <GraphsLoading /> 
        </>
    )}
  return (
    <>
    <div className="select-none grid grid-cols-1 grid-rows-4 md:grid-rows-2 md:grid-cols-3 lg:grid-cols-5 md:gap-4 min-h-72">


    <div className="col-span-1 mb-4 md:mb-0 lg:col-span-2 bg-slate-500 rounded-lg flex items-center justify-center">
    <FavLanguages name={userName}/>
    </div>


    <div className="col-span-2 mb-4 md:mb-0 lg:col-span-3 bg-slate-500 rounded-lg flex items-center justify-center">
        <Stats name={userName} />
    </div>


    <div className="col-span-2 mb-4 md:mb-0 lg:col-span-3 bg-slate-500 rounded-lg flex items-center justify-center">
    <Streak name={userName} />
    </div>

    <div className="col-span-1 mb-4 md:mb-0 lg:col-span-2 bg-slate-500 rounded-lg flex items-center justify-center"><TotalContibutions name={userName} /></div>












    </div>
    </>
  )
}

export default GithubGraphs