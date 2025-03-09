import React from "react";
import "./App.css"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Login from "./pages/Login";
import FoodMagic from "./pages/FoodMagic";
import Favourites from "./pages/Favourites";
import Cuisines from "./pages/Cuisines";
import CRecipes from "./pages/CRecipes";
import EditRecipe from "./pages/EditRecipe";
import RecipeDetails from "./pages/RecipeDetails";

import axios from 'axios'
import AddFoodRecipes from "./pages/AddFoodRecipes";

const getAllRecipes=async()=>{
  let allRecipes=[]
  await axios.get('http://localhost:5000/recipe').then(res=>{
      allRecipes=res.data
  })
  return allRecipes
}

// , loader: getAllRecipes

const getMyRecipe=async()=>{
   let user=JSON.parse(localStorage.getItem("user"))
   let allRecipes=await getAllRecipes()
   return allRecipes.filter(item=>item.createdBy===user._id)
}


const getFavRecipes=()=>{
  return JSON.parse(localStorage.getItem("fav"))
}


const getRecipe=async({params})=>{
  let recipe;
  await axios.get(`http://localhost:5000/recipe/${params.id}`)
  .then(res=>recipe=res.data)

  await axios.get(`http://localhost:5000/user/${recipe.createdBy}`)
  .then(res=>{
    recipe={...recipe,email:res.data.email}
  })

  return recipe
}


const router=createBrowserRouter([
  {path:'/',element:<Home2/>, loader: getAllRecipes},
  {path:'/login',element: <Login/>},
  // {path:'/register',element: <Login/>},
  {path:'/myrecipe',element: <Home2/>,loader:getMyRecipe},
  {path:'/foodmagic',element: <FoodMagic/>},
  {path:'/favourites',element: <Home2/>, loader:getFavRecipes},
  {path:'/cuisines',element: <Cuisines/>},
  {path:'/recipes',element: <CRecipes/>},
  {path:'/addRecipe',element: <AddFoodRecipes/>},
  {path:'/editRecipe/:id',element: <EditRecipe/>},
  {path:"/recipe/:id",element:<RecipeDetails/>,loader:getRecipe}
  
  

  
  
  // {path:'/myrecipe',element: <MyRecipe/>}
])

export default function App(){
  return(
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}
