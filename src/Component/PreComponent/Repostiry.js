import React from 'react'

function Repostiry() {
  return (
    <>
          <div className="repo rounded-lg bg-slate-500 p-4 flex justify-center items-center overflow-hidden">
          <img src="https://github-readme-stats.vercel.app/api/pin/?username=growinflow&repo=fb&bg_color=64748b&title_color=334155&text_color=fff&icon_color=6d28d9&hide_border=true" alt="repo" width={250} height={320} className='scale-110 object-fit' />
          <div className="btn absolute">
            <button
              className=' relative left-12 md:left-20 px-2 md:px-4 py-1 md:py-2 text-sm flex justify-center items-center gap-2 bg-purple-700 rounded-lg shadow-md active:bg-purple-900 hover:bg-purple-800  ring-4 ring-transparent active:ring-purple-500'
            >
              Visit <i class="fa-brands fa-github text-white"></i>
            </button>
          </div>
        </div>


    </>
  )
}

export default Repostiry