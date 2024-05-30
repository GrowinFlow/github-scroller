import React, { useContext } from 'react'

import { DataContext } from './../../Context/ApiContext'

function Repostiry() {
    const {userName,repos, isError, isLoading} = useContext(DataContext);

  if(!repos || repos.length === 0){
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
        Loading . . . 
        </>
    )}
if(repos.private === true){

}

  return (
    <>
    {
      repos.map((repo,index)=> {
        return(
          <div key={repo.id + index} className="repo rounded-lg min-h-[80px] bg-slate-500 p-4 flex justify-between items-center overflow-hidden  transition-all ease-in duration-100 group">
          <img src={`https://github-readme-stats.vercel.app/api/pin/?username=${userName}&repo=${repo.name}&bg_color=64748b&title_color=334155&text_color=fff&icon_color=6d28d9&hide_border=true`} alt="repo" className='scale-110 object-fit w-[150px] md:w-[300px] group-hover:opacity-25 group-hover:absolute group-hover:h-[80px]' />
          
          <div className="btn  group-hover:relative p-4">
            <a href={repo.html_url} target='_blank'>

            <button
              className=' transition-all ease-in duration-100 relative md:-left-20 px-2 py-1 md:py-2 text-sm flex justify-center items-center gap-2  shadow-sm bg-purple-700 rounded-lg active:bg-purple-900 hover:bg-purple-800  ring-4 ring-transparent active:ring-purple-500 group-hover:w-full group-hover:left-12 group-hover:shadow-lg group-hover:px-16 group-hover:py-6 group'>
                <span className='hidden group-hover:flex text-white'>Fork</span>
              
              <i className="fa-solid fa-code-fork text-white"></i>
            </button>
            </a>
          </div>
  
        </div>
        )
      })
    }


    </>
  )
}

export default Repostiry