import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import foodImg from '../assets/food.jpeg'
import { FaRegHeart } from "react-icons/fa";
import { PiTimer } from "react-icons/pi";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function RecipeItems() {
   const recipes =useLoaderData()
   const [allRecipes,setAllRecipes]=useState()
   let path=window.location.pathname==="/myrecipe" ? true:false
   let favItems=JSON.parse(localStorage.getItem("fav")) ?? []
   const [isFavRecipe, setIsFavRecipe]=useState(false)
   const navigate=useNavigate()

   console.log(allRecipes)

   useEffect(()=>{
      setAllRecipes(recipes)
   },[recipes])


   const onDelete=async(id)=>{
      await axios.delete(`http://localhost:5000/recipe/${id}`)
      .then((res)=>console.log(res))
      setAllRecipes(recipes=>recipes.filter(recipe=>recipe._id !== id))
      let filterItem=favItems.filter(recipe => recipe._id !== id)
      localStorage.setItem("fav",JSON.stringify(filterItem))
   }

   const favRecipe=(item)=>{
    let filterItem=favItems.filter(recipe=>recipe._id !== item._id)
    favItems=favItems.filter(recipe=>recipe._id === item._id).length===0 ?[...favItems, item] : filterItem
    localStorage.setItem("fav",JSON.stringify(favItems))
    setIsFavRecipe(pre=>!pre)
  }


  return (
    <>
      <div className='card-container'>
        {
            allRecipes?.map((item,index)=>{
              return(
                <div key={index} className='card-items' onDoubleClick={()=>navigate(`/recipe/${item._id}`)}>
                  <img src={`http://localhost:5000/images/${item.coverImage}`} width="100%" height="250px" />  
                  <div className="card-body">
                  <div className="title">{item.title}</div>
                  <div className="icons" >
                     {(!path) ? <FaRegHeart size={20} onClick={()=>favRecipe(item)} style={{color:(favItems.some(res=>res._id=== item._id))? "red" : ""}}/> :
                      <div className="action">
                      <Link to={`/editRecipe/${item._id}`}><FiEdit style={{marginLeft: '5px'}} size={20}/></Link>
                      <AiOutlineDelete onClick={()=>onDelete(item._id)} style={{marginLeft: '25px'}} size={20} color='red'/>
                      </div>}
                      <div className="timer" style={{color:'yellow'}}><PiTimer size={20} />{item.time}</div>
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
