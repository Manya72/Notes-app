import React, { useState } from 'react'
import { MdAdd,MdClose } from 'react-icons/md'

const Taginput = ({tags,settags}) => {
    const[inputvalue,setinputvalue]=useState("")
    const handleinputchange=(e)=>{
        setinputvalue(e.target.value)
    }
    const addnewtag =()=>{
        if(inputvalue.trim()!==""){
            settags([...tags,inputvalue.trim()])
            setinputvalue("")
        }

    }
    const handlekeydown = (e)=>{
        if(e.key==="Enter"){
            addnewtag()

        }
    }
    const handleremovetag=(tagtoremove)=>{
        settags(tags.filter((tag)=>tag!=tagtoremove))
    }
  return (
    <div>
        {tags?.length >0 && <div className='flex items-center gap-2 flex-wrap mt-2'>{
            tags.map((tag,index)=>(
                <span key={index} className='flex items-center gap-2 text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded'>
                # {tag}
                <button onClick={()=>{
                    handleremovetag(tag)
                }}/>
                <MdClose/>
                </span>

            ))
        }</div>
    }
    <div className='flex items-center gap-4 mt-3 '>

        <input type="text" value={inputvalue} className='text-sm bg-transparent border px-3 py-2 rounded outline-none' placeholder='Add Tags' 
        onChange={handleinputchange}
        onKeyDown={handlekeydown}></input>
        <button className='' onClick={()=>{
            addnewtag()
        }}>
        <MdAdd className='text-2xl text-blue-700 hover:text-white'/>
        </button>
        
    </div>
    </div>
  )
}

export default Taginput