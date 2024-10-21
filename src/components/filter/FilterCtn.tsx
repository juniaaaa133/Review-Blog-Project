import React from 'react'
import Filter from './Filter'

const FilterCtn = ({setStatus} : {
  setStatus : React.Dispatch<React.SetStateAction<string | null>>
}) => {
  return (
    <div className={`flex flex-col gap-[10px]`}>
        <Filter setStatus={setStatus} isOnline={'online'} />
        <Filter setStatus={setStatus} isOnline={'offline'} />
        <Filter setStatus={setStatus} isOnline={'any'} />
    </div>
  )
}

export default FilterCtn