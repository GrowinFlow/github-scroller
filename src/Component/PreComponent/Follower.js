import { useContext } from 'react'
import { DataContext } from '../../Context/ApiContext'

function Follower() {
        const {
        followers,
        isLoading,
        isError} = useContext(DataContext)
 


    return (
        <>
      
{
    followers.map((follower, index)=>{
        return(

        <span  key={follower.id + index} className="div">

            <div className="follower flex items-center gap-4 justify-between pr-2">
                <div className=" flex items-center gap-4 justify-between w-full">
    
                    <div className="userDetails flex justify-between items-center gap-4">
    
                        <div className="dp h-12 w-12 rounded-full overflow-hidden">
                            <img src={follower.avatar_url} alt={follower.name} />
                        </div>
                        <div className="name">
                            <div className="usename font-bold text-slate-700 drop-shadow-lg text-lg">{follower.login}</div>
                            <div className="link ">{follower.html_url}</div>
                        </div>
                    </div>
                    <div className="btn">
                        <a href={follower.html_url} target='_blank'>
                            <button
                                className='px-2 md:px-4 py-1 md:py-2 text-sm flex justify-center items-center gap-2 bg-purple-700 rounded-lg shadow-md active:bg-purple-900 hover:bg-purple-800  ring-4 ring-transparent active:ring-purple-500'
                            >
                                Visit <i class="fa-brands fa-github text-white"></i>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-b-2 border-dashed border-b-slate-400 w-[98%]"></div>
        
        </span>

        )

    })
}
        </>
    )
}

export default Follower