import React, {useState} from 'react'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'
import '../App.css'
import Navbar from '../components/Navbar'

const Login = ({setIsLoggedIn}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
          const res = await axios.post("http://localhost:5000/login", { email, password });
          localStorage.setItem("username", res.data.username);
          setIsLoggedIn(true);
          navigate("/home");
        } catch (error) {
          alert("Invalid Credentials");
        }
    }

  return (
    <>
      <Navbar></Navbar>
      <div className="cont">
        <center>
          <div id="login">
            <h2 id='login_header'>Hop back in Wizard</h2>
            <input id="ipMail" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input id='ipPwd' type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <br/>
            <button id='loginBtn' onClick={handleLogin}>Login</button>
            <p style={{color:"azure", fontSize: "12px"}}>New user? <Link style={{textDecoration:"none", fontSize:"12px", color:'whitesmoke'}} to="/register">Register</Link></p>
          </div>
        </center>
      </div>
    </>
  )
}

export default Login;