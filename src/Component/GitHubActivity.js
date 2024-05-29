import React from 'react'
import {Book, User, CodePc, FollowingUser} from './IconsSvg'
import Card from './PreComponent/Card'

function GitHubActivity() {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">


        <Card text="Repositores" icon={<Book style="fill-purple-700"/>} quantity="34"/>
        <Card text="Followers" icon={<User style="fill-purple-700"/>} quantity="93"/>
        <Card text="Followings" icon={<FollowingUser style="fill-purple-700"/>} quantity="1k"/>
        <Card text="Gits" icon={<CodePc style="fill-purple-700"/>} quantity="4"/>

    </div>
    </>
  )
}

export default GitHubActivity