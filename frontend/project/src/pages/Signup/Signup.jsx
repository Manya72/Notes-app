import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Passwordinput from "../../components/input/Passwordinput"
import { validateemail } from '../../utils/helper'
import { Link } from 'react-router-dom'
const Signup = () => {
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const[error,seterror]=useState(null)
    const[name,setname]=useState("")
    
        const handleSignup=async(e)=>{
            e.prevent.Deafault
            if(!name){
                seterror("Please enter name")
                return;
            }
            if(!password){
                seterror("Please enter name")
                return;
            }
            if(!validateemail(email)){
                seterror("Please enter a valid email")
                return ;
            }
            seterror("")
        }
    
  return (
    <>
    <Navbar/>
   <div className='flex items-center justify-center mt-28'>
    <div className='w-96 border rounded bg-white px-7 py-10'>
        <form onSubmit={handleSignup}>
            <h4 className='text-2xl mb-7'>
               Signup
            </h4>


            <input type='text ' placeholder='Name' className='input-box'
            value={name}
            onChange={(e)=>setname(e.target.value)}
            />

            <input type='text ' placeholder='Email' className='input-box'
            value={email}
            onChange={(e)=>setemail(e.target.value)}/>
            
            <Passwordinput
            value={password}
            onChange={(e)=>{setpassword(e.target.value)}}/>
            
            {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}

            <button type='submit' className='btn-primary'>
                Create Account
            </button>
            
            <p className='text-sm text-center mt-4'>
                 Already have an account?{""}
                <Link to="/Login" 
                className='font-medium text-primary underline'>
                  Login</Link> </p>


        </form>
    </div>
    </div>
    </>
  )
}

export default Signup