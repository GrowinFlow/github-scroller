import React from 'react'

function SearchArea() {
  return (
    <>
    <div className="search-area flex-col flex md:flex-row justify-between items-center">

        <div className="search-form flex justify-center items-center p-2 h-16 w-2/3 bg-slate-500 rounded-lg gap-2 group">
            <input
            className='w-full h-10 p-2 px-3 text-md md:text-xl font-medium focus:outline-none border-b-2 border-dashed focus:border-white border-slate-400 bg-slate-500'
            placeholder='@username . . .'
            type="text"
             aria-label='search github profile' />

            <button
            className='px-2 md:px-4 py-1 md:py-2 text-sm flex justify-center items-center gap-2 bg-purple-700 rounded-lg shadow-md active:bg-purple-900 hover:bg-purple-800  ring-4 ring-transparent active:ring-purple-500'
            >
                Search <i class="fa-brands fa-github text-white"></i>
            </button>
        </div>

        <div className="request-count h-16 flex justify-center items-center">
            <p className='text-xl md:text-2xl'>Requests : &nbsp;
            <span className='text-purple-700 font-mono drop-shadow-2xl '>8</span>
            &nbsp;/ 10</p>

        </div>









    </div>
    </>
  )
}

export default SearchArea