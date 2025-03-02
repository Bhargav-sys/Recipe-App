const User=require("../models/user")
const bcrypt =require("bcrypt")
const jwt=require("jsonwebtoken")

const userSignUp=async(req,res)=>{
    console.log("Received req at /register")
    const{email,password}=req.body
    if(!email || !password)
    {
        return res.status(400).json({message:"Email and password is required"})
    }
    let user = await User.findOne({email})
    if(user){
        return res.status(400).json({error:"User already exists"})
    }
     const hashPwd=await bcrypt.hash(password,10)
     const newUser=await User.create({
        email,password:hashPwd
     })

     let token=jwt.sign({email, id:newUser._id}, process.env.SECRET_KEY) // {expiresIN: '1hr'} 
     return res.status(200).json({token,user:newUser})

}
const userLogin=async(req,res)=>{
    const{email,password}=req.body
    console.log("Received login request:", { email, password });
    if(!email || !password)
    {
        return res.status(400).json({message:"Email and password is required"})
    }
    let user=await User.findOne({email})
    if(user && await bcrypt.compare(password,user.password)){
        let token=jwt.sign({email, id:user._id}, process.env.SECRET_KEY) // {expiresIN: '1hr'} 
        console.log("User found in DB:", user.email); // Debugging
        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Password match result:", isMatch);
        return res.status(200).json({token,user})
    }
    else{
        return res.status(400).json({error:"Invalid Credentials"})
    }   

}
const getUser=async(req,res)=>{
    const user=await User.findById(req.params.id)
    res.json({email:user.email})
}

module.exports={userLogin, userSignUp, getUser}