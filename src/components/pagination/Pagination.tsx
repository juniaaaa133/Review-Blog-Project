import React from 'react'
import { GrFormNext } from "react-icons/gr";

const Pagination = ({
  totalPages,
  page,
  setPage
} : {
  totalPages : number,
  page : number,
  setPage : React.Dispatch<React.SetStateAction<number>>
}) => {

const switchPage = (isPrev : boolean) => {
if(isPrev && page > 1){
setPage(page - 1);
return;
}else if(!isPrev && page > totalPages){
setPage(page + 1);
return;
}
}

return (
    <div className={'flex mt-[200px] items-center gap-[10px] w-full justify-center'}>
 <button disabled={page <= 1} onClick={()=>switchPage(true)} className={`text-[18px] bcu  rotate-180 rounded-[10px] p-[5px] bg-sec ${page <= 1 && "opacity-[.6]"}`}>
            <GrFormNext />
        </button>
        <p className=" fontcl main-f text-[18px]">{page}</p>
        <button disabled={page >= totalPages} onClick={()=>switchPage(false)} className={`bcu text-[18px] rounded-[10px] p-[5px] bg-sec ${page >= totalPages && "opacity-[.6]"}`}>
            <GrFormNext />
        </button>
    </div>
  )
}

export default Pagination