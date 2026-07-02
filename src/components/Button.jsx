import React from 'react'

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="text-black bg-amber-400 px-6 font-semibold cursor-pointer active:scale-95 py-2 rounded text-sm"
    >
      {props.btn}
    </button>
  )
}

export default Button