import React from 'react'

function FavLanguages(props) {
  return (
    <>
    <img src= {`https://github-readme-stats.vercel.app/api/top-langs/?username=${props.name}&layout=pie&title_color=334155&text_color=ffffff&bg_color=64748b&hide_border=true`} alt="Top Languages" width={300} height={100}/>

    
    </>
  )
}

export default FavLanguages