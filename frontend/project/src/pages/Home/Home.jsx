import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Notecard from '../../components/cards/Notecard'
import { MdAdd } from 'react-icons/md'
import AddEditnotes from './AddEditnotes'
import Modal from "react-modal";
const Home = () => {
    const[openaddeditmodal,setopeneditmodal] = useState({
        isShown: false,
        type: "add",
        data: null,
    });
  return (
    <><Navbar/>
    <div className='container mx-auto'>
        <div className='grid grid-cols-3 gap-4 mt-8'>
        <Notecard title="Presentation on 7th" date="3rd april"
        content="Presentation on 7th"
        tags="#present"
        isPinned={true}
        onedit={()=>{}}
        ondelete={()=>{}}
        onpinnednote={()=>{}}
        />
        
        </div>

    </div>

    <button className='w-16 h-16 flex items-center justify-center rounded-2xl bg-primary 
    hover:bg-blue-600 absolute right-10 bottom-10 '
     onClick={()=>{
        setopeneditmodal({isShown :true ,type :"add",data:null });
     }}>
        <MdAdd className='text-[32px] text-white'/>
    </button>


    
    <Modal

    isOpen={openaddeditmodal.isShown}
    onRequestClose={()=>{}}
    style={{
        overlay:{
            backgroundColor:"rgba(0,0,0,0.2)",
        },
    }}
    contentLabel=""
    className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
    >
<AddEditnotes
type={openaddeditmodal.type}
notedata={openaddeditmodal.data}
onClose={()=>{
    setopeneditmodal({isShown :false ,type :"add",data:null });
}}/>
   
    </Modal>
    
    </>
  )
}

export default Home