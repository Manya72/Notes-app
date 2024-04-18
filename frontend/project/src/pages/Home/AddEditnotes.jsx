import React, { useState } from 'react'
import Taginput from '../../components/input/Taginput/Taginput'
import { MdClose } from 'react-icons/md'

const AddEditnotes = ({notedata,type,onClose}) => {
    const[title,settitle]=useState("")
    const[content,setcontent]=useState("")
    const[tags,settags]=useState([])
    const[error,seterror]=useState(null)
    const addnewnote =async()=>{}
    const editnote=async()=>{}
  const handleaddnote =(e)=>{
    if(!title){
        seterror("Add title")
        return
    }
    if(!content){
        seterror("no content")
        return;
    }
    seterror("")

    if(type==="edit"){
        editnote()

    }
    else{
        addnewnote()
    }
  }
  return (
    <div className='relative'>
        <button className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50'
        onClick={onClose}
        >
            <MdClose className='text-xl text-slate-400'/>
        </button>
        <div className='flex flex-col gap-2'>
            <label className='input-label'>Title</label>
            <input 
            type="text"
            className='text-2xl text-slate-950 outline-none'
            placeholder='Go to Gym at 5'
            value={title}
            onChange={({target})=>settitle(target.value)}
            />


        </div>
        <div className='flex flex-col gap-2 mt-4'>
            <label className='input-label'>CONTENT</label>
            <textarea 
            type="text"
            className='text-sm text-slate-950 outlibe-none bg-slate-50 p-2 rounded '
            placeholder='content'
            rows={10}
            value={content}
            onChange={({target})=>setcontent(target.value)}
            /> 
        </div>
        <div className='mt-3'>
            <label className='input-label'>TAGS </label>
            <Taginput tags={tags} settags={settags}/>

        </div>
        {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}
        <button className='btn-primary font-medium mt-5 p-3 ' onClick={handleaddnote}>ADD</button>
    </div>
  )
}

export default AddEditnotes