import React from 'react'

function Footer() {

    let curYear = new Date().getFullYear();
  return (
    <>
    <footer className='w-full bg-slate-500 flex justify-center items-center  transition-all ease-in duration-100'>

    <div className="w-full bg-slate-500 text-white shadow-lg flex justify-center items-center h-20">
        <div className="made-by flex items-center min-w-56 justify-center text-sm md:text-lg lg:text-xl">©copyrights {curYear} |Powered by <span className='name-logo-font text-xl px-2 animate-bounce text-purple-700 font-medium md:font-bold'>AR</span></div>
    </div>
    </footer>
    </>
  )
}

export default Footer