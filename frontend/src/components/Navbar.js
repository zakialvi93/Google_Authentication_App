import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useState, useEffect} from "react"
export default function Navbar() {


  const [user, setUser] = useState(null);

  const getUser = () => {
    fetch("http://localhost:8080/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("authentication has been failed!");
      })
      .then((resObject) => {
        console.log(resObject)
        setUser(resObject.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  useEffect(() => {
    getUser();
  }, []);

  const LocalUser = localStorage.getItem("user");
  

  const naviagte = useNavigate();

  const SignOut = () =>{
    if(user)
    {
      window.open("http://localhost:8080/auth/logout", "_self");
    }
    else if(LocalUser)
    {
      localStorage.clear();
      naviagte("/");
    }
    
  }

  


  return (
    <div style={{backgroundColor: "#f1f1f1", borderRadius: "0 0 10px 10px", padding: "10px", display:"flex", alignItems:"center", justifyContent:"center"}}>
      

        {user || LocalUser?(
          <>
          <ul style={{display:"flex",justifyContent:"space-between",alignItems:"center",listStyle:"none", margin: 0, padding: 0, gap:"20px" }}>
            
          <li style={{width:"500px",height:"50px", background:"#187DEC", color:"white", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center"}}>
          
            {user ? <h3 style={{fontWeight:"bolder"}}>User Email: {user.email}</h3> 
            : LocalUser ? <h3 style={{fontWeight:"bolder"}}>User Email: {JSON.parse(LocalUser).email}</h3> 
            :<h3 style={{fontWeight:"bolder"}}>Loading User....</h3>}
      
          </li>

          <li style={{width:"300px",height:"50px", background:"#187DEC", color:"white", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center"}}>
          
          {user ? <h3 style={{fontWeight:"bolder"}}>User Name: {user.userName}</h3> 
            : LocalUser ? <h3 style={{fontWeight:"bolder"}}>User Name: {JSON.parse(LocalUser).userName}</h3> 
            :<h3 style={{fontWeight:"bolder"}}>Loading User....</h3>}

      
          </li>


          <li style={{width:"300px",height:"50px", background:"#187DEC", color:"white", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center"}}>
          
          {user ? <h3 style={{fontWeight:"bolder"}}>Signin Source: {user.source}</h3> 
            : LocalUser ? <h3 style={{fontWeight:"bolder"}}>Signin Source: {JSON.parse(LocalUser).source}</h3> 
            :<h3 style={{fontWeight:"bolder"}}>Loading User....</h3>}

      
          </li>
            
            
            <li>
              
              <button onClick={SignOut}
              style={{
                cursor: "pointer",
                fontWeight: "bolder",
                padding: "13px 25px",
                fontSize: "1rem",
                border: "none",
                color: "white",
                background:"#db183c",
                borderRadius: "15px",
                marginLeft: "20px",
                transition: "all 0.25s ease",
              }}>Sign Out</button>
              
            </li>
          </ul>
          </>
        ):(
          <>
          {/* <ul style={{display:"flex",justifyContent:"space-between",alignItems:"center",listStyle:"none", margin: 0, padding: 0}}>
            <li >
            <Link to="/signup">
                <button 
                style={{
                  cursor:"pointer",
                  fontWeight: "bolder",
                  padding: "13px 25px",
                  fontSize: "1rem",
                  border: "none",
                  color: "white",
                  background:"#187DEC",
                  borderRadius: "15px",
                  marginLeft: "20px",
                  transition: "all 0.25s ease",
                }}>Sign Up</button>
              </Link>

              
            </li>

            <li >
              <Link to="/">
                <button
                style={{
                  cursor: "pointer",
                  fontWeight: "bolder",
                  padding: "13px 25px",
                  fontSize: "1rem",
                  border: "none",
                  color: "white",
                  background:"#187DEC",
                  borderRadius: "15px",
                  marginLeft: "20px",
                  transition: "all 0.25s ease",
                }}>Sign In</button>
              </Link>
            </li>
          </ul> */}

                    <div 
                    style={{background:"#187DEC",display:"flex",alignItems:"center",  width:"800px", height:"45px", justifyContent:"center", borderRadius:"10px",color:"white",fontWeight:"bolder"}}
                                          >
                      
                      <h1>Welcome To Telecom Management System</h1>
                    </div>
          </>
        )}

        

        
      
    </div>
  )
}
