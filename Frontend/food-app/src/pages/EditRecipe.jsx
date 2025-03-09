import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

// import { Navigate } from 'react-router-dom'

export default function EditRecipe() {
  const[recipeData,setRecipeData]=useState({})
  const navigate=useNavigate()
  const{id}=useParams()

  useEffect(()=>{
    const getData=async()=>{
      await axios.get(`http://localhost:5000/recipe/${id}`)
      .then(response=>{
        let res=response.data
        setRecipeData({
          title:res.title,
          ingredients:res.ingredients.join(","),
          instructions:res.instructions,
          time:res.time,
          cuisine:res.cuisine
        })
      })
    }
    getData()
  },[])

  const onHandleChange=(e)=>{
    // console.log(e.target.files[0])
    let val=(e.target.name === "ingredients") ? e.target.value.split(",") : (e.target.name === "file")? e.target.files[0] : e.target.value
    setRecipeData(pre=>({...pre,[e.target.name]:val}))
  }

  const onHandleSubmit=async(e)=>{
    e.preventDefault()
    await axios.put(`http://localhost:5000/recipe/${id}`,recipeData,{
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
            <h2 id='login_header'>Edit your Recipe</h2>
            <input id="ipMail" type="text"  name='title' onChange={onHandleChange} value={recipeData.title}/>
            <br />
            <textarea  id="ipMail" type="text" placeholder="Ingredients" name='ingredients' onChange={onHandleChange} value={recipeData.ingredients}/>
            <br/>
            <input  id="ipMail" type="text" placeholder="Cuisine" name='cuisine' onChange={onHandleChange} value={recipeData.cuisine}/>
            <br/>
            <textarea  id="ipMail" type="text" placeholder="Instructions" name='instructions' rows={'5'} onChange={onHandleChange} value={recipeData.instructions}/>
            <br/>
            <input  id="ipMail" type="text" placeholder="Time" name='time' onChange={onHandleChange} value={recipeData.time}/>
            <br/>
            <input  id="ipMail" type="file" placeholder="Time" name='file' onChange={onHandleChange}/>
            <br/>
                        
            
            
            <button id='loginBtn2' type='submit'>Edit Recipe</button>
            {/* <button id='loginBtn' onClick={userSignUp}>Register</button> */}
          </form>
        </center>
      </div>
        </div>
    </>
  )
}
