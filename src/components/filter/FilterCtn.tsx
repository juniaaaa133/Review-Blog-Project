import React from 'react'
import Filter from './Filter'

const FilterCtn = () => {
  return (
    <div className={`flex flex-col gap-[10px]`}>
        <Filter isOnline={'online'} />
        <Filter isOnline={'offline'} />
        <Filter isOnline={'any'} />
    </div>
  )
}

export default FilterCtn