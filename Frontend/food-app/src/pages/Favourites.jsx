import React from 'react'
import Navbar from '../components/Navbar'
export default function Favourites() {
  return (
    <>
        
            <Navbar/>
            <div style={{width:'1519px', backgroundColor:'black', height:'100vh',maxWidth:'100%', marginTop:'-100px'}}>
                <p className="content-of-fav" style={{color: 'white'}}>Your <br /> Favourite <br /> Recipes <br />will be <br />displayed here...</p>
            </div>
        
    </>
  )
}
