import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// import { Navigate } from 'react-router-dom'

export default function AddFoodRecipes() {
  const[recipeData,setRecipeData]=useState({})
  const navigate=useNavigate()
  const onHandleChange=(e)=>{
    // console.log(e.target.files[0])
    let val=(e.target.name === "ingredients") ? e.target.value.split(",") : (e.target.name === "file")? e.target.files[0] : e.target.value
    setRecipeData(pre=>({...pre,[e.target.name]:val}))
  }

  const onHandleSubmit=async(e)=>{
    e.preventDefault()
    await axios.post("http://localhost:5000/recipe",recipeData,{
      headers:{
        'Content-Type':'multipart/form-data',
        'authorization' : 'bearer '+localStorage.getItem("token")
      }
    })
    .then(()=>navigate('/'))
  }
  return (
    <>
        <Navbar/>
        <div style={{width:'1519px', backgroundColor:'black', height:'100vh',maxWidth:'100%', marginTop:'0px',display:'flex', justifyContent:"center", gap:'20px', overflowY:'auto'}}>
        <div className="cont">
        <center>
          <form id="recipe-form" onSubmit={onHandleSubmit}>
            <h2 id='login_header'>Share Your Recipe</h2>
            <input id="ipMail" type="text" placeholder="Title" name='title' onChange={onHandleChange}/>
            <br />
            <textarea  id="ipMail" type="text" placeholder="Ingredients" name='ingredients' onChange={onHandleChange}/>
            <br/>
            <input  id="ipMail" type="text" placeholder="Cuisine" name='cuisine' onChange={onHandleChange}/>
            <br/>
            <textarea  id="ipMail" type="text" placeholder="Instructions" name='instructions' rows={'5'} onChange={onHandleChange}/>
            <br/>
            <input  id="ipMail" type="text" placeholder="Time" name='time' onChange={onHandleChange}/>
            <br/>
            <input  id="ipMail" type="file" placeholder="Time" name='file' onChange={onHandleChange}/>
            <br/>
                        
            
            
            <button id='loginBtn2' type='submit'>Submit</button>
            {/* <button id='loginBtn' onClick={userSignUp}>Register</button> */}
          </form>
        </center>
      </div>
        </div>
    </>
  )
}
