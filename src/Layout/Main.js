import React from 'react'
import SearchArea from '../Component/SearchArea'
import GitHubActivity from '../Component/GitHubActivity'
import GithubUserFollwer from '../Component/GithubUserFollwer'
import GithubGraphs from '../Component/GithubGraphs'
import GithubRepositries from '../Component/GithubRepositries'


function Main() {
  return (
    <>
    <div className="container mx-auto p-4 flex flex-col gap-8">

      <SearchArea/>
      <GithubUserFollwer />
      <GitHubActivity />
      <GithubGraphs />
      <GithubRepositries/>















    </div>
    </>
    
  )
}

export default Main