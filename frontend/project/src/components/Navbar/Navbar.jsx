import React, { useState } from 'react'
import ProfileInfo from '../cards/ProfileInfo'
import { useNavigate } from 'react-router-dom'
import Searchbar from '../Searchbar/Searchbar'

const Navbar = () => {
    const[search,setsearch]=useState("")
    const navigate=useNavigate
    const handlesearch =()=>{

    }
    const onclearsearch =()=>{
        setsearch("")

    }
    const onLogout=()=>{
        navigate("/login")
    }
  return (
    <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
    <h2 className='text-xl font-medium text-black py-2'>Notes</h2>
    <Searchbar value={search} onChange={({target})=>{
        setsearch(target.value)

    }}
    handlesearch={handlesearch}
    onclearsearch={onclearsearch} />
    <ProfileInfo onLogout={onLogout}/>
</div>
  )
}

export default Navbar