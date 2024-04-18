import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import {IoMdClose} from "react-icons/io"
const Searchbar = ({value,onChange,handlesearch,onclearsearch}) => {
  return (
    <div className='w-80 flex items-center px-4 bg-slate-100 rounded-md'>
        <input
        type="text"
        placeholder='searchnotes'
        className='w-full text-xs g-transparent py-[11px] outline-none '
        value={value}
        onChange={onChange}
        />
        {value && (<IoMdClose className='text-xl text-slate-500 cursor-pointer hover:text-black mr-3' onClick={onclearsearch}/>)}
        
        <FaMagnifyingGlass className='text-sate-400 cursor-pointer hover:text-black' onClick={handlesearch}/>
    </div>
  )
}

export default Searchbar

