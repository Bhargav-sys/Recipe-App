import React, {useState} from 'react'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'
import '../App.css'
import Navbar from '../components/Navbar'
// import { userLogin } from '../../../../Backend/controllers/user'


const Login = ({setIsOpen}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false)
    const [error, setError] = useState("")

    const handleLogin= async(e)=>{
      e.preventDefault()
      alert("Login succesful")


      let endpoint = (isSignUp) ? 'register' : 'login'
      await axios.post(`http://localhost:5000/${endpoint}`,{email,password})
      .then((res)=>{
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("user", JSON.stringify(res.data.user))
        // localStorage.setItem("token", res.data.token)
        setIsOpen()
        
        
      })
      .catch(data=>setError(data.response?.data?.error))
    }




    // const handleLogin = async () => {
    //     try {
    //       const res = await axios.post("http://localhost:5000/login", { email, password });
    //       localStorage.setItem("username", res.data.username);
    //       setIsLoggedIn(true);
    //       navigate("/home");
    //     } catch (error) {
    //       alert("Invalid Credentials");
    //     }
    // };


  //   const handleLogin = async () => {
  //     try {
  //         // Call the backend API where userLogin function is executed
  //         const res = await axios.post("http://localhost:5000/login", { email, password });

  //         // Store token and user info
  //         localStorage.setItem("token", res.data.token);
  //         localStorage.setItem("userEmail", res.data.user.email);

  //         // Update state
  //         setIsLoggedIn(true);

  //         // Redirect to home
  //         navigate("/home");
  //     } catch (error) {
  //         alert(error.response?.data?.error || "Invalid Credentials");
  //     }
  // }


//   const handleLogin = async () => {
//     try {
//       console.log("Sending request with:", { email, password });
//         const res = await axios.post("http://localhost:5000/login", { email, password }); // Corrected API endpoint
//         console.log("Login successful:", res.data); // Debugging
//         if (res.data.token){
//         localStorage.setItem("token", res.data.token); // Store token
//         localStorage.setItem("userEmail", res.data.user.email);
//         setIsLoggedIn(true);
//         navigate("/home");
//         }else{
//           alert("Login failed: No token received");
//         }
//     } catch (error) {
//         alert(error.response?.data?.error || "POPOPOPOp");
//     }
// };


  return (
    <>
      <Navbar></Navbar>
      <div className="cont">
        <center>
          <form id="login" onSubmit={handleLogin}>
            <h2 id='login_header'>Hop back in Wizard</h2>
            <input id="ipMail" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input id='ipPwd' type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <br/>
            {(error!="") && <h6 style={{color:"yellow"}}>{error}</h6>}
            <button id='loginBtn' type='submit'> {(isSignUp) ? "Register" : "Log In"}</button>
            {/* <button id='loginBtn' onClick={userSignUp}>Register</button> */}
            <p onClick={()=>setIsSignUp(pre=>!pre)} style={{color:"azure", fontSize: "12px", cursor:'pointer'} }> {(isSignUp) ? "Already have an account?" : "New user? "} Click here </p>
          </form>
        </center>
      </div>
    </>
  )
}

export default Login;