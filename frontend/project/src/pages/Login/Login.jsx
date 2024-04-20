import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import Passwordinput from "../../components/input/Passwordinput"
import { validateemail } from '../../utils/helper'

import axiosInstance from '../../utils/axiosInstance'
const Login = () => {
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const[error,seterror]=useState(null)
    const navigate=useNavigate()

    const handlelogin=async(e)=>{
        e.preventDefault()
        if(!validateemail(email)){
            seterror("Please enter a valid email")
            return ;
        }
        if(!password){
            seterror("Please enter password")
            return;
        }
        seterror("")
  try{
            const response=await axiosInstance.post('/login',{
                email:email,
                password: password,

            })
            if(response.data && response.data.accessToken){
                localStorage.setItem("token",response.data.accessToken)
                navigate('/dashboard')
            }
            

        }
        catch(error){
            seterror(error.response)

        }


    };

  return (
   <><Navbar/>
   <div className='flex items-center justify-center mt-28'>
    <div className='w-96 border rounded bg-white px-7 py-10'>
        <form onSubmit={handlelogin}>
            <h4 className='text-2xl mb-7'>
               Login
            </h4>

            <input type='text ' placeholder='Email' className='input-box'
            value={email}
            onChange={(e)=>setemail(e.target.value)}/>
   
            <Passwordinput
            value={password}
            onChange={(e)=>{setpassword(e.target.value)}}/>

            {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}


           

            <button type='submit' className='btn-primary'>
             Login
            </button>

           
            <p className='text-sm text-center mt-4'>
                 Not registerd yet?{""} 
            <Link to="/signup" 
             className='font-medium text-primary underline'>Create an Account</Link> </p>

        </form>
    </div>
   </div>
   </>

  )
}

export default Login
