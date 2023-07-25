import React from 'react';
import { useEffect, useState } from "react";


export default function Profile() {


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
  

  return (
    <div>

      {user ? (
        <>
          <div style={{height:"575px", display:"flex",justifyContent:"center",alignItems:"center", height:"525px"}} >

          
            
            
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"400px", gap:"20px",alignItems:"center"}}>
                
                <h1 style={{display:"flex", justifyContent:"center", alignItems:'center', color:"white"}}>Welcome To Telecom Management Dashbaord</h1>
                
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between",width:"1000px", alignItems:"flex-start", gap:"20px"}}>
                    <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center" ,borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>Perfromance Parameters</h5>
                    </div>

                    <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center",borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>Month Start</h5>
                    </div>

                    <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center",borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>Month End</h5>
                    </div>
                </div>

                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between",width:"1000px", alignItems:"flex-start", gap:"20px"}}>
                    <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center" ,borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>Uptime</h5>
                    </div>

                    <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center",borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>{user.UptimeStart}</h5>
                    </div>

                    <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center",borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>{user.UptimeEnd}</h5>
                    </div>
                </div>

                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between",width:"1000px", alignItems:"flex-start", gap:"20px"}}>
                    <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center" ,borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>Bandwidth</h5>
                    </div>

                    <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center",borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>{user.BandwidthStart}</h5>
                    </div>

                    <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center",borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>{user.BandwidthEnd}</h5>
                    </div>
                </div>

                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between",width:"1000px", alignItems:"flex-start", gap:"20px"}}>
                    <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center" ,borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>Latency</h5>
                    </div>

                    <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center",borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>{user.LatencyStart}</h5>
                    </div>

                    <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center",borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>{user.LatencyEnd}</h5>
                    </div>
                </div>

                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between",width:"1000px", alignItems:"flex-start", gap:"20px"}}>
                    <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center" ,borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>Packet</h5>
                    </div>

                    <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center",borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>{user.PacketStart}</h5>
                    </div>

                    <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center",borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>{user.PacketEnd}</h5>
                    </div>
                </div>


                


                
                
                
                
                
                
            </div>

          </div>
        </>
      ): LocalUser ? (
        <>
          <div style={{height:"575px", display:"flex",justifyContent:"center",alignItems:"center", height:"525px"}} >

          
            
            
<div style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"400px", gap:"20px",alignItems:"center"}}>
    
    <h1 style={{display:"flex", justifyContent:"center", alignItems:'center', color:"white"}}>Welcome To Telecom Management Dashbaord</h1>
    
    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between",width:"1000px", alignItems:"flex-start", gap:"20px"}}>
        <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center" ,borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>Perfromance Parameters</h5>
        </div>

        <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center",borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>Month Start</h5>
        </div>

        <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center",borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>Month End</h5>
        </div>
    </div>

    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between",width:"1000px", alignItems:"flex-start", gap:"20px"}}>
        <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center" ,borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>Uptime</h5>
        </div>

        <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center",borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>{JSON.parse(LocalUser).UptimeStart}</h5>
        </div>

        <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center",borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>{JSON.parse(LocalUser).UptimeEnd}</h5>
        </div>
    </div>

    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between",width:"1000px", alignItems:"flex-start", gap:"20px"}}>
        <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center" ,borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>Bandwidth</h5>
        </div>

        <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center",borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>{JSON.parse(LocalUser).BandwidthStart}</h5>
        </div>

        <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center",borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>{JSON.parse(LocalUser).BandwidthEnd}</h5>
        </div>
    </div>

    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between",width:"1000px", alignItems:"flex-start", gap:"20px"}}>
        <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center" ,borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>Latency</h5>
        </div>

        <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center",borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>{JSON.parse(LocalUser).LatencyStart}</h5>
        </div>

        <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center",borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>{JSON.parse(LocalUser).LatencyEnd}</h5>
        </div>
    </div>

    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between",width:"1000px", alignItems:"flex-start", gap:"20px"}}>
        <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center" ,borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>Packet</h5>
        </div>

        <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center",borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>{JSON.parse(LocalUser).PacketStart}</h5>
        </div>

        <div style={{width:"500px", height:"50px",color:"black",backgroundColor:"#E7E7E7",textAlign:"center",borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h5 style={{fontWeight:"bolder",fontSize:"20px"}}>{JSON.parse(LocalUser).PacketEnd}</h5>
        </div>
    </div>


    


    
    
    
    
    
    
</div>

</div>
        </>
      ): (
        <>
          <h1>Loading User...</h1>
        </>
      )}

    </div>
  )
}
