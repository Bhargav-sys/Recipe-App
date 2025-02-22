import React from 'react'
import { useLoaderData } from 'react-router-dom'
import foodImg from '../assets/food.jpeg'
import { FaRegHeart } from "react-icons/fa";
import { PiTimer } from "react-icons/pi";

function RecipeItems() {
   const allRecipes =useLoaderData()
   console.log(allRecipes)
  return (
    <>
      <div className='card-container'>
        {
            allRecipes?.map((item,index)=>{
              return(
                <div key={index} className='card-items'>
                  <img src={foodImg} width="100%" height="250px" />  
                  <div className="card-body">
                  <div className="title">{item.title}</div>
                  <div className="icons" >
                      <FaRegHeart size={20}/>
                      <div className="timer"><PiTimer size={20} />{item.time}</div>
                  </div>
                </div>
                </div>
              )
            })
       }
      </div>
        
    
    </>
  )
}

export default RecipeItems
