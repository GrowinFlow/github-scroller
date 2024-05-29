import React from 'react'

function Buttons(props) {
  return (
    <>
    <button type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-500 font-medium rounded-lg text-sm px-2 md:px-4 py-1 md:py-2 text-center shadow-md " aria-label='Duff button'>{props.text}</button>
    </>
  )
}

export default Buttons