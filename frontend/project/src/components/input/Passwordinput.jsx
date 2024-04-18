import React, { useState } from 'react'
import {FaRegEye,FaRegEyeSlash} from 'react-icons/fa6'
const Passwordinput = ({value,onChange,placeholder}) => {
    const[ispw,setpw]=useState(false);
    const togglepw=()=>{
        setpw(!ispw);
    }
  return (
    <div className='flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3'>
        <input value={value}
        onChange={onChange}
        type ={ispw ? "text":"password"}
        placeholder={placeholder || "Password"}
        className='w-full  text-sm bg-transparent py-3 mr-3 rounded outline-none'/>

        { ispw ? <FaRegEye
        size={22}
        className='text-primary cursor-pointer'
        onClick={()=>togglepw()}
        />: <FaRegEyeSlash
        size={22}
        className='text-slate-400 cursor-pointer'
        onClick={()=>togglepw()}
        />}


    </div>
  )
}

export default Passwordinput