import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import '../App.css'
import Modal from './Modal';

export default function Navbar() {
  const[isOpen,setIsOpen] = useState(false)
  let token=localStorage.getItem("token")
  const [isLogin, setIsLogin]=useState((token) ? false : true)
  // console.log(token)
  const navigate = useNavigate()
  let user=JSON.parse(localStorage.getItem("user"))

  useEffect(()=>{
    setIsLogin(token ? false : true)
  },[token])

  const checkLogin=()=>{
    if(token)
    {
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      setIsLogin(true)
    }
    else{
      navigate('/login')
    }
    setIsOpen(true)
  }


  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#262626", color: "#e3f2fd", height: "75px"}} >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{color: "Yellow", fontFamily: "fantasy", fontSize: "45px",marginRight: "300px",marginLeft:"20px"}}>Food Wizard</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{backgroundColor: 'yellow'}}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item" >
          <Link className="nav-link active" aria-current="page" to="/" style={{color: "yellow",backgroundColor:"#262626", marginLeft:'20px', marginRight:'20px'}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link active' to={!isLogin ? "/myrecipe" : "/login"} style={{color: "yellow",backgroundColor:"#262626", marginLeft:'20px', marginRight:'20px'}}>My Recipes</Link>
        </li>
    
        <li className="nav-item">
          <Link className="nav-link active" to= {!isLogin ? '/foodmagic' : '/login' } style={{color: "yellow",backgroundColor:"#262626", marginLeft:'20px', marginRight:'20px'}}>Food Magic</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" to='/cuisines'style={{color: "yellow",backgroundColor:"#262626", marginLeft:'20px', marginRight:'20px'}}>Cuisines</Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link active" to={!isLogin ? '/favourites':'/login'}style={{color: "yellow",backgroundColor:"#262626", marginLeft:'20px', marginRight:'20px'}}>Favourites</Link>
        </li>

        <li className="nav-item" onClick={checkLogin}>
        {/* <Link className="nav-link active" to='/login' style={{color: "yellow",backgroundColor:"#262626", marginLeft:'20px', marginRight:'20px'}}>{(isLogin)? "Login" : "Logout"}</Link> */}
        <button className="nav-link active" to='/login' style={{color: "yellow",backgroundColor:"#262626", marginLeft:'20px', marginRight:'20px'}}>{(isLogin)? "Login" : "Logout"}</button>        
        </li>
        
      </ul>
      

       {/* <Link className="link-light bg-success p-2" to="/login" style={{textDecoration: "none"}}>Login</Link> */}

    </div>
  </div>

</nav>
    </div>
 
    </>
  )
  
}
