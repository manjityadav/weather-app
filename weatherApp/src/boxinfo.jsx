import { useState } from "react";
import"./boxinfo.css";
import Card from '@mui/material/Card';
export default function Boxinfo({weatherinfo}){
    const condition = weatherinfo.icon;
    const weatherimage =`https://openweathermap.org/img/wn/${condition}@2x.png`;

    return(
        <>
         <div style={{display:"flex",justifyContent:"center",marginTop:"30px",margin:"10px"}}>
         <Card   style={{width:"400px",padding:"20px",textAlign:"center"}} sx={{ maxWidth: 700 ,background: "rgba(255, 255, 255, 0.3)",backdropFilter:" blur(10px)",WebkitBackdropFilter:" blur(10px)",color:"white",borderRadius:"12px"}}>
          <div>
            <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}> 
                <h3 className="font-poppins">{weatherinfo.name}  {weatherinfo.country} </h3> <p className="font-poppins">{weatherinfo.time}</p> 
            </div>
            <div  style={{display:"flex"}}>
                <img  style={{height:"200px" ,marginTop:"0px"}} src={weatherimage} alt="" />
                <div className='order' >
                    <h2 className="sans-poppins" style={{fontSize:"40px",marginRight:"10px"}} >{weatherinfo.desc}</h2>
                    <h1 className="sans-poppins" style={{fontSize:"50px"}}>{weatherinfo.temp}&#176;C</h1>
                    <p className="sans-poppins" style={{fontSize:"20px"}}>Feels like {weatherinfo.feel}&#176;C</p>
                </div>
            </div>
          </div>
          <hr/>
            <div  style={{display:"flex",justifyContent:"space-around",fontSize:"20px"}}>
                <div>
                    <p className="sans-poppins">MIN {weatherinfo.min}&#176;C</p>
                    <p className="sans-poppins">Humidity {weatherinfo.humidity}%</p>
                    <p className="sans-poppins">Wind {weatherinfo.wind}m/s</p>
                </div>
                <div>
                    <p className="sans-poppins">Max {weatherinfo.max}&#176;C</p>
                    <p className="sans-poppins">Pressure {weatherinfo.pressure}</p>
                    <p className="sans-poppins">Clouds {weatherinfo.clouds}%</p>
                </div>
                </div>
                 <hr />
                <div style={{display:"flex",justifyContent:"space-around",fontSize:"20px"}}>
                    <p className="sans-poppins">Visibility {weatherinfo.visibility/1000}km</p>
                    <p className="sans-poppins">Sunrise {weatherinfo.sunrise}</p>
                </div>  
    </Card>
    </div>
        </>
    )
}