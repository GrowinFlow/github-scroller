import React, { useContext } from 'react';
import Buttons from '../Helpers/Buttons';
import { DataContext } from '../Context/ApiContext';


function Header() {
  const {userInfo, isLoading} = useContext(DataContext);
 const dp = userInfo.avatar_url;


  return (
    <>

      <header className='h-20 sticky top-0 z-30 flex justify-between items-center bg-slate-500 w-full mb-8 shadow-lg web-logo transition-all ease-in duration-100'>
        <nav className='container mx-auto px-4 flex justify-between items-center'>
        <div className="logo text-xl md:text-2xl font-bold text-shadow-md text-white">Github
         <i className="fa-solid fa-laptop-code animate-bounce text-xl  text-slate-700 drop-shadow-lg px-1"></i>
         Scroller</div>

        <div className="dp-box flex items-center gap-2">
          <div className={`select-none dp w-8 md:w-12 h-8 md:h-12 rounded-full ${isLoading ?"bg-slate-500 animate-pulse" : "bg-purple-700"} overflow-hidden`}>

            <img src={dp || "bg-slate-500 animate-pulse"} alt="dp" width={100} height={100} className='object-fit' />
          </div>
          <Buttons text="Logout" />
        </div>
        </nav>


      </header>

    </>
  );
}

export default Header;
