import React from 'react'

const Buttons = ({bgColor, textColor, title, onClick}) => {
  return (
    <button onClick={onClick} className={`${bgColor} ${textColor} rounded-sm px-4 py-2 font-roboto cursor-pointers`}>
        {title}
    </button>
  )
}

export default Buttons
