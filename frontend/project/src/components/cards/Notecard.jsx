import React from 'react'
import {MdOutlinePushPin} from "react-icons/md"
import {MdCreate,MdDelete} from "react-icons/md"
const Notecard = ({title,tags,date,content,isPinned,onedit,ondelete,onpinnednote}) => {
  return (
    <div className='border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out'>
        <div className='flex items-center justify-between'>
            <div>
                <h6 className='text-sm ont-medium'>{title}</h6>
                <span className='text-xs text-slate-500'>{date}</span>
            </div>
            <MdOutlinePushPin className={`icon-btn ${isPinned ? 'text-primary':'text-slate-300'}`} onClick={onpinnednote}/>

        </div>
        <p className='text-xs text-slate-600 mt-2'>{content?.slice(0,60)}</p>
        <div className='flex items-center justify-between mt-2'>
            <div className='text-xs text-slate-500'>{tags}
            <div className='flex items-center gap-2'>
                <MdCreate
                className='icon-btn hover:text-green-600'
                onClick={onedit}/>
                <MdDelete className='icon-btn hover:text-red-600'
                onClick={ondelete}/>

            </div>

            </div>

        </div>
    </div>
  )
}

export default Notecard