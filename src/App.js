import React from 'react';
import Header from './Layout/Header';
import Main from './Layout/Main'
import Footer from './Layout/Footer';
import ParticleContainer from './Component/PracticleContainer';


function App() {

  return (
    <>
      <div className="w-full overflow-x-hidden bg-slate-800 text-white web-logo  transition-all ease-in duration-100">
        <div className=" min-h-[80vh] flex flex-col justify-between items-center">
<ParticleContainer />
     <Header />
     
     <Main />
     <br /><br /><br />
     <Footer />
     
        </div>
      </div>
    </>
  );
}

export default App;
