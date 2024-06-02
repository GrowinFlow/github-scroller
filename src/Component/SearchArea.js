import React, { useContext, useState } from 'react'
import { DataContext } from '../Context/ApiContext'

function SearchArea() {


  const { userName, setUserName,
    isLoading,    requestN, setRequestN,} = useContext(DataContext)

const [userInp, setUserInp] = useState(" " || userName)

function changeUser() {
  setUserName(userInp.trim());
  setRequestN(requestN - 1);
}  
function handleKeyDown(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent the default behavior (e.g., form submission)
    changeUser(); // Call the changeUser function when Enter key is pressed
  }
}



  return (
    <>
    <form 
    onSubmit={(e) => e.preventDefault()}
    className="search-area flex-col flex md:flex-row justify-between items-center">

        <div className="search-form flex justify-center items-center p-2 h-16 w-full bg-slate-500 rounded-lg gap-2 group">
            <input
            className='w-full h-10 p-2 px-3 text-md md:text-xl  text-slate-700 drop-shadow-lg font-medium focus:outline-none border-b-2 border-dashed focus:border-white border-slate-400 bg-slate-500'
            placeholder={`${userName}. . .`}
            value={userInp}
            onChange={(e) => setUserInp(e.target.value.trim())}
            onKeyDown={handleKeyDown}
            type="text"
             aria-label='search github profile' />

<button
    onClick={() => { changeUser(); }}
    aria-label="Set user name"
    className="px-2 md:px-4 py-1 md:py-2 text-sm flex justify-center items-center gap-2 bg-purple-700 rounded-lg shadow-md active:bg-purple-900 hover:bg-purple-800 ring-4 ring-transparent active:ring-purple-500"
>
    {isLoading ? (

            <i className="fa-solid fa-arrows-rotate f-spain"></i>
    ) : (
      <>
      Search <i className="fa-brands fa-github  text-white"></i>
  </>
    )}
</button>

        </div>

        <div className="request-count h-16 w-80 flex justify-center items-center">
            <p className='text-xl md:text-2xl'>Requests : &nbsp;
            <span className='text-slate-500 drop-shadow-2xl '>{requestN}</span>
            &nbsp;/ 10</p>

        </div>


    </form>
    </>
  )
}

export default SearchArea