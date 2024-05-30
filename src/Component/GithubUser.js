import React from 'react'
import placeHolderImg from './../assets/images/dp.jpg'
import {Celender, Building, Key, Update, Location, Link, Name} from './PreComponent/IconsSvg'



import { useContext } from 'react'
import { DataContext } from '../Context/ApiContext'
import GithubUserLoading from '../Loadings/GithubUserLoading'



function GithubUser() {

    const {userName, setUserName,
        userInfo,
        isLoading,
        isError} = useContext(DataContext)
 

if(!userInfo){
    return(
        <>
        Not Found
        </>
    )
}

const {id, login, name, created_at, location, avatar_url, company, html_url, updated_at} = userInfo;



if(isError){
    return(
        <>
        Error
        </>
    )
}
    
if(isLoading){
    return(
        <>
        <GithubUserLoading />
        </>
    )
}




    return (
        <>
            <div className="bg-slate-500 w-full min-h-72 rounded-lg p-4 flex flex-col gap-2">
            <div className="heading sticky top-0">
                <h2 className='font-bold'>User:</h2>
                    
                </div>
                <div className="top-area flex justify-between items-center">
                    <div className="details flex items-center">

                        <div className="dp w-20 h-20  bg-purple-700 rounded-full overflow-hidden shadow-lg">
                            <img src={avatar_url || placeHolderImg} alt={name} />
                        </div>
                        <div className="usenames px-2">
                            <div className="h-2/3 user text-lg text-slate-700 drop-shadow-lg font-sans font-bold select-none">  
                   
                            <img src={`https://readme-typing-svg.demolab.com/?font=Fira+Code&weight=700&pause=1000&color=334155&size=30&random=false&width=435&lines=${name}`} alt="User Name" />

                            </div>
                            <p className='h-1/3 text-xs md:text-md lowercase'>@{login}</p>
                        </div>
                    </div>

                    <div className="follow-btn">
                        <a href={html_url} target='_blank'>
                    <button
            className='px-2 md:px-4 py-1 md:py-2 text-sm flex justify-center items-center gap-2 bg-purple-700 rounded-lg shadow-md active:bg-purple-900 hover:bg-purple-800  ring-4 ring-transparent active:ring-purple-500'
            >
                Follow <i class="fa-brands fa-github text-white"></i>
            </button>
                        </a>
                    </div>
                </div>
            <div className="border-b-2 border-dashed border-b-slate-400"></div>

            <div className="user-details grid grid-cols-2 font-ligth text-sm md:text-md md:font-medium">

               <div className="flex gap-2 items-center justify-start">
                  <Key style="w-8 h-8 fill-slate-700 drop-shadow-lg"/>
                <p>#{id}</p>
                </div>
               <div className="flex gap-2 items-center justify-start">
                  <Name  style="w-8 h-8 fill-slate-700 drop-shadow-lg"/>
                <p>{name}</p>
                </div>
               <div className="flex gap-2 items-center justify-start">
                  <Building  style="w-8 h-8 fill-slate-700 drop-shadow-lg"/>
                <p>{company || 'N/A'}</p>
                </div>
               <div className="flex gap-2 items-center justify-start">
                  <Location  style="w-8 h-8 fill-slate-700 drop-shadow-lg"/>
                <p>{location || 'N/A'}</p>
                </div>
               <div className="flex gap-2 items-center justify-start">
                  <Celender  style="w-8 h-8 fill-slate-700 drop-shadow-lg"/>
                <p>{created_at || 'N/A'}</p>
                </div>
               <div className="flex gap-2 items-center justify-start">
                  <Update  style="w-8 h-8 fill-slate-700 drop-shadow-lg"/>
                <p> {updated_at}</p>
                </div>
               <div className="col-span-2 flex gap-2 items-center justify-start">
                  <Link  style="w-8 h-8 fill-slate-700 drop-shadow-lg"/>
                <p>{html_url}</p>
                </div>
            </div>

            </div>


        </>
    )
}

export default GithubUser