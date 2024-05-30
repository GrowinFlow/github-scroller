import React from 'react'

function Card(props) {
  return (
    <>

<div className="grit-item min-w-36 min-h-24 bg-slate-500 flex justify-between items-center p-4 rounded-lg" >

<div className="icon-box w-20 h-20 rounded-full overflow-hidden bg-white flex justify-center items-center ">
    {props.icon}
</div>

<div className="text flex flex-col justify-center items-center w-2/3 h-full ">
    <div className="font-bold text-slate-700 drop-shadow-lg text-3xl h-1/2">{props.quantity}</div>
    <p className=' h-1/3 flex items-end'>{props.text}</p>
</div>
</div>

    
    </>
  )
}

export default Card