import React, { useContext } from 'react'
import {Book, User, Fork, FollowingUser} from './PreComponent/IconsSvg'
import Card from './PreComponent/Card'
import { DataContext } from '../Context/ApiContext'
import ActivitesLoading from '../Loadings/ActivitesLoading'


function GitHubActivity() {
  const {userInfo, isError, isLoading} = useContext(DataContext);
  if(!userInfo){
    return(
        <>
       <ActivitesLoading />
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
       <ActivitesLoading />
        </>
    )}

    const {public_repos, public_gists, followers, following } = userInfo;
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">


        <Card text="Repositores" icon={<Book style="fill-purple-700"/>} quantity={public_repos}/>
        <Card text="Followers" icon={<User style="fill-purple-700"/>} quantity={followers}/>
        <Card text="Followings" icon={<FollowingUser style="fill-purple-700"/>} quantity={following}/>
        <Card text="Gits" icon={<Fork style="fill-purple-700"/>} quantity={public_gists}/>

    </div>
    </>
  )
}

export default GitHubActivity