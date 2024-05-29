import React from 'react'
import GithubUser from './GithubUser'
import GithubFollowers from './GithubFollowers'


function GithubUserFollwer() {
  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

    <GithubUser/>
    <GithubFollowers/>
    </div>
    </>
  )
}

export default GithubUserFollwer