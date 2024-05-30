import React, { useContext } from 'react'
import Repostiry from './PreComponent/Repostiry'

function GithubRepositries() {

  return (
    <>
      <div className="grid grid-rows-auto grid-cols-2 md:grid-cols-2 lg:grid-cols-5 md:gap-4 min-h-20 gap-4 select-none h-[35vh] overflow-hidden overflow-y-auto  scroll-bar pr-2">


<Repostiry/>

      </div>



    </>
  )
}

export default GithubRepositries