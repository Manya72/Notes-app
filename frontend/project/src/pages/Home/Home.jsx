import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Notecard from '../../components/cards/Notecard'
import { MdAdd } from 'react-icons/md'
import AddEditnotes from './AddEditnotes'
import Modal from "react-modal";
import axiosInstance from '../../utils/axiosInstance'
import moment from "moment"
const Home = () => {

    const[openaddeditmodal,setopeneditmodal] = useState({
        isShown: false,
        type: "add",
        data: null,
    });
    const[allnotes,setallnotes]=useState([])
    const getallnotes=async()=>{
        try{
            const response=await axiosInstance.post('/get-all-notes',{
                email:email,
            password: password,

            })
            if(response.data && response.data.accessToken){
                setallnotes(response.data.notes)
            }
            

        }
        catch(error){
           console.log("An unexpected error occured")

        }
    }
    useEffect(()=>{
        getallnotes()
        return ()=>{}
    },[])
  return (

    <><Navbar/>
    <div className='container mx-auto'>
        <div className='grid grid-cols-3 gap-4 mt-8'>
        <Notecard
                 title="My note"
                date="19-4-2024"
                content="My note is my note"
                tags="#hashtag #notes"
                isPinned={true}
                onedit={()=>{}}
                ondelete={()=>{}}
                onpinnednote={()=>{}}
            />
            <Notecard
                 title="My note 2"
                date="19-4-2024"
                content="My second note about mynotes"
                tags="#note#note2"
                isPinned={false}
                onedit={()=>{}}
                ondelete={()=>{}}
                onpinnednote={()=>{}}
            />
            <Notecard
                 title="Presentation at 9"
                date="19-4-2024"
                content="Presentation on  the project using MERN stack"
                tags="#note #presentation #mern"
                isPinned={false}
                onedit={()=>{}}
                ondelete={()=>{}}
                onpinnednote={()=>{}}
            />
            
            {allnotes.map((item,index)=>{
                <Notecard
                key={item._id} title={item.title}
                date={moment(item.createdOn).format('Do MMM YYYY')}
                content={item.content}
                tags={item.tags}
                isPinned={item.isPinned}
                onedit={()=>{}}
                ondelete={()=>{}}
                onpinnednote={()=>{}}
                />

            }
            
            )}
            
        
        
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
}}
getallnotes={getallnotes}
/>
   
    </Modal>
    
    </>
  )
}

export default Home