import React from 'react'

const ErrorMsg = ({text} : {text : string}) => {
  return (
    <p className={'main-f text-red-600 text-[15px]'}>{text}</p>
  )
}

export default ErrorMsg