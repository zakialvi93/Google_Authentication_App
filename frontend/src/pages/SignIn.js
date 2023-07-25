import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import OK from "../images/ok.png";
import GoogleIcon from "../images/google.png";

export default function SignIn() {


  const navigate = useNavigate();

  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Toast Functions
    const notifyError=(msg)=> toast.error(msg);
    const notifySuccess=(msg)=> toast.success(msg);

    //Email Regex
    const emailRegex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    const postData=(e)=>{
        e.preventDefault();
      //Checking email and password
      if(!emailRegex.test(email))
      {
          notifyError("Invalid Email");
          return
      }
      

      //Sending Data To Server
      fetch("http://localhost:8080/auth/signin",{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({
              email: email,
              password: password

          })
      }).then(res=>res.json())
        .then(data=>{
          if(data.error)
          {
              notifyError(data.error)
          }
          else
          {
              //notifySuccess(data.message)
              notifySuccess("Signed In Successfully")
               console.log(data)
               localStorage.setItem("jwt", data.token)
               localStorage.setItem("user", JSON.stringify(data.user))
               //setUserLogin(true)
                navigate('/profile')
          }
          
          console.log(data)
      })
  }

  const google = () => {
    window.open("http://localhost:8080/auth/google", "_self");
    
  };

  return (
    
    <div style={{height:"575px", display:"flex",justifyContent:"center",alignItems:"center"}} >
       
       
       

        
            <div className="homie" style={{display:"flex", flexDirection:"row", justifyContent:"space-between",width:"1000px", alignItems:"flex-start", gap:"100px"}} >
                

                <div style={{width:"500px", height:"500px",textAlign:"center" ,borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <img  src={OK} />
                </div>

                <div style={{width:"500px", height:"500px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center",borderRadius:"20px", display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <h2>Sign In To Your Account</h2>
                    <br/>
                    <input type='email' value={email} name='email' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}
                    style={{width:"300px", height:"40px", borderRadius:"10px", fontSize:"20px"}}/>
                    <br/>
                    <input type='password' value={password} name='password' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}
                    style={{width:"300px", height:"40px", borderRadius:"10px", fontSize:"20px"}}/>
                    <br/>
                    <button onClick={postData} 
                      style={{cursor:"pointer", width:"300px", height:"45px", borderRadius:"10px", background:"#187DEC", color:"white", fontWeight:"bolder", fontSize:"20px"}}>
                      Sign In
                    </button>
                    <br/>
                    <span style={{fontWeight:"bolder"}}>OR</span>
                    <br/>
                    <div style={{background:"#df4930",display:"flex",alignItems:"center", gap:"10px", width:"300px", height:"45px", justifyContent:"center", borderRadius:"10px",color:"white",fontWeight:"bolder", cursor:"pointer", fontSize:"20px"}}
                      onClick={google}>
                      <img src={GoogleIcon}/>
                      Sign In With Google
                    </div>
                    
                    <br/> 
                    <hr style={{border: "1px solid gray", width:"350px"}}/>
                    <p style={{fontWeight:"bolder", fontSize:"20px"}}>Don't have an account? <Link to="/signup"><span style={{fontWeight:"bold", color:"blue"}}>Sign Up</span></Link></p>
                    
                    
                    
                </div>

           </div>
        

       

    </div>
    




        

      



    
  )
}
