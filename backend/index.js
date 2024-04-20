require("dotenv").config()
const config=require('./config.json')

const mongoose=require("mongoose")
const express=require('express')
const cors=require('cors')
const app=express()
const User=require('./models/user.model')
const Note=require('./models/note.model')
const jwt=require('jsonwebtoken')
const{authenticatetoken} =require('./utilities')
mongoose.connect(config.connectionstring)
app.use(express.json())
app.use(
    cors({
        origin:"*"
    })
)
app.get("/",(req,res)=>{
   res.json({data:"hello"})
})
app.post("/create-account",async(req,res)=>{
    const{fullname,email,password}=req.body
    if(!fullname){
        return res.status(400).json({error:true,message:"Name required"})
    }
    if(!email){
        return res.status(400).json({error:true,message:"Email required"})
    }
    if(!password){
        return res.status(400).json({error:true,message:"Paasword required"})
    }

    const isUser =await User.findOne({email:email})
    if(isUser){
        return res.json({
            error:true,
            message:"Already Registered"
        })


        
    }
    const user =new User({
        fullname,
        email,
        password
    })
    await user.save()

    const accessToken=jwt.sign({user},process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:"3600m"
    })
    return res.json({
        error:false,
        user,
        accessToken,
        message:"Registration Succesful"
    })


 })
 app.post("/login",async(req,res)=>{
    const{email,password}=req.body

    if(!email){
        return res.status(400).json({error:true,message:"Email required"})
    }
    if(!password){
        return res.status(400).json({error:true,message:"Paasword required"})
    }
    const Userinfo =await User.findOne({email:email})
    if(!Userinfo){
        return res.json({
            error:true,
            message:"User not found"
        })
    }
    if(Userinfo.email==email && Userinfo.password==password){
        const user={user:Userinfo}
        const accessToken=jwt.sign({user},process.env.ACCESS_TOKEN_SECRET,{
            expiresIn:"3600m"
        })
        return res.json({
            error:false,
            user,
            accessToken,
            message:"Login Succesful"
        })
    }else{
        return res.status(400).json({error:true,message:"Invalid name or password"})

    }

 })
 app.post('/add-note',authenticatetoken,async(req,res)=>{
    const {title,tags,content}=req.body
    const {user}=req.user
    if(!title){
        return res.status(400).json({error:true,message:"Title required"})
    }
    if(!content){
        return res.status(400).json({error:true,message:"Content required"})
    }
    try{
        const note=new Note({
            title,
            content,
            tags:tags || [],
            userId:user._id
        })
        await note.save()

        return res.json({
            error:false,
            note,
            message:"Note Added Successfully"
        })

    }
    catch(error){
        console.error(error); // Log the error for debugging purposes
        return res.status(500).json({
            error:true,
            message:"Internal server error"
        })
    }


 })

 app.get('/get-all-notes/',authenticatetoken,async(req,res)=>{
    const {user}=req.user
    try{
        const notes=await Note.find({ userId:user._id}).sort({isPinned:-1})
        return res.json({
            error:false,
            notes,
            message:"All notes retrieved"
        })

    }
    catch(error){
        return res.status(500).json({
            error:true,
            message:"Internal server error"
        })

    }
 })
app.listen(8000)
module.exports=app