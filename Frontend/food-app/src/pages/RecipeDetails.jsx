import React from 'react'
// import profileImg from '../assets/profile.png'
// import food from '../assets/foodRecipe.png'
import { useLoaderData } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function RecipeDetails() {
    const recipe=useLoaderData()
    console.log(recipe)
  return (
   <>
   <Navbar/>
    
    <div style={{width:'1521px', backgroundColor:'black', height:'100vh',maxWidth:'100%', marginTop:'0px',display:'flex', justifyContent:"center", gap:'20px', overflowY:'auto'}}>
    <center>
    <div className='outer-container'>
        
        <h3 className='title'>{recipe.title}</h3>
        <img src={`http://localhost:5000/images/${recipe.coverImage}`} width="550px" height="450px"></img>
        <div className='recipe-details'>
            <div className='ingredients'><h4>Ingredients</h4><ul>{recipe.ingredients.map(item=>(<li>{item}</li>))}</ul></div>
            <div className='instructions'><h4>Instructions</h4><span>{recipe.instructions}</span></div>
        </div>
        <div className='profile'>
            <h6>Contributed by: {recipe.email}</h6>
        </div>
    </div>
    </center>
    </div>
   </>
  )
}