import Follower from './PreComponent/Follower'
import { useContext } from 'react'
import { DataContext } from './../Context/ApiContext'
import FollowersLoading from './../Loadings/FollowersLoading'

function GithubFollowers() {
    
            const {
            followers,
            isLoading,
            isError} = useContext(DataContext)
     
    
    if(!followers || followers.length === 0){
        return(
            <>
            <FollowersLoading/>
            </>
        )
    }
    if(isError){
        return(
            <>
            Error
            </>
        )
    }  



    return (
        <>
            <div className="bg-slate-500 w-full h-72 rounded-lg p-4 flex flex-col gap-2 overflow-hidden">
                <div className="heading sticky top-0">
                <h2 className='font-bold'>Followers:</h2>
                    
                </div>
                <div className="overflow-y-auto scroll-bar flex flex-col gap-2">
                    {
                        isLoading?<FollowersLoading/>: <Follower/>
                    }

               </div>
            </div>

        </>
    )
}

export default GithubFollowers