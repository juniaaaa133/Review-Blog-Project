import React from 'react'

const Filter = ({isOnline} : {isOnline : string}) => {
  return (
<div  className="flex gap-[15px] bcu w-fit ">
<input className={'bcu '} type="radio"
    id={
    isOnline == 'online' ? 'op1' 
    : isOnline == 'offline' ?  "op2" 
    : "op0"
    }
    name="status"
    value={
        isOnline == 'online' ? 'online' 
        : isOnline == 'offline' ? 'offline'
        : 'any'
        } />
<label className={'bcu main-f fontcl text-[16px]'} for={
    isOnline == 'online' ? "op1" 
    :isOnline == 'offline'? "op2"
    : 'op0'
    }>{
        isOnline === 'online' ? "Online"
        : isOnline == 'offline' ? "Offline"
        : 'Any'
        }</label>
</div>
  )
}

export default Filter