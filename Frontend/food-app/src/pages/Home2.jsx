import React from 'react'
import Navbar from '../components/Navbar'
import '../App.css'
import RecipeItems from '../components/RecipeItems'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Home2() {
  const navigate=useNavigate()
  const [isOpen,setIsOpen]=useState(false)
  const addRecipe=()=>{
    let token=localStorage.getItem('token')
    if(token)
    navigate('/addRecipe')
  else{
    setIsOpen(true)
    navigate('/login')
  }
  }
  return (
    <>
    <div style={{backgroundColor: "black", height: "100%vh"}}>
      <Navbar></Navbar>
      <div className='bigi' >
        <p className="content" style={{color: 'white'}}>One Stop Destination to Search all your Delicacies.... </p>
        <svg xmlns='http://www.w3.org/2000/svg'  width='100%' height='100vh' viewBox='0 0 1000 120'><rect fill='#000000' width='1000' height='120' opacity={0}/><g  fill='none' stroke='#d6ba02' strokeWidth='1' strokeOpacity='0.75'><path d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/><path d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/><path d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/><path d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/><path d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/><path d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/></g></svg>
        {/* <hr style={{backgroundColor :'#d6ba02', width:'100%', height:'2px', marginBottom:'25px'}} /> */}
        <div className='img-cont'>
          <img className='image-1' src="biryani-removebg-preview.png" alt="" height={"200px"} style={{marginTop: "-697px", marginLeft:"30px"}} />
          <img className='image-2' src="pavb.png" alt="" height={"200px"} style={{marginTop: "-650px", marginLeft:"70px"}} />
          <img className='image-3' src="pasta.png" alt="" height={"200px"} style={{marginTop: "-820px", marginLeft:"190px"}} />
          <img className='image-4' src="noodles.png" alt="" height={"200px"} style={{marginTop: "-820px", marginLeft:"190px"}} />
        </div>
        
        <button className='share-btn' onClick={addRecipe}>Share Your Recipe</button>
      </div>
    </div>
      <div className='recipe' style={{height:'100vh'}}>
        <RecipeItems/>
        {/* <p className="content" style={{color: 'white'}}>Recipes will be displayed here after backend Integration</p> */}
      </div>
      </>
  )
}
