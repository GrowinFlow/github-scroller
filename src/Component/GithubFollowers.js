import React from 'react'
import Follower from './PreComponent/Follower'

function GithubFollowers() {
    return (
        <>
            <div className="bg-slate-500 w-full h-72 rounded-lg p-4 flex flex-col gap-2 overflow-hidden">
                <div className="heading sticky top-0">
                <h2 className='font-bold'>Followers:</h2>
                    
                </div>
                <div className="overflow-y-auto scroll-bar flex flex-col gap-2">

<Follower/>
                    
<Follower/>
                    
<Follower/>
<Follower/>
                    
<Follower/>
<Follower/>
                    
<Follower/>


                </div>
            </div>

        </>
    )
}

export default GithubFollowers