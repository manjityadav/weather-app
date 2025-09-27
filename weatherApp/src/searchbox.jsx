
import SearchIcon from '@mui/icons-material/Search';
import "./search.css"
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
export default function Search({updateinfo}){
    let[city,setcity]=useState("");
    let[error,seterror]=useState(false);
    let handlechage=(e)=>{
        setcity(e.target.value);
    }
    let getdata= async ()=>{
        try{
        let API="98089f5c250f3d6321f78a907af9ada4";
        let geoapi=`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API }`;
        let geodata=await fetch(geoapi);
        let geodata2=await geodata.json();
        let lat=geodata2[0].lat;
        let lon=geodata2[0].lon;
        let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}`;
        let data=await fetch(url);
        let data2= await data.json();
        console.log(data2);
        let info={
            name:data2.name,
            desc:data2.weather[0].description,
            temp:Math.round(data2.main.temp-273.15),
            min:Math.round(data2.main.temp_min-273.15),
            max:Math.round(data2.main.temp_max-273.15),
            feel:Math.round(data2.main.feels_like-273.15),
            humidity:data2.main.humidity,
            pressure:data2.main.pressure,
            wind:data2.wind.speed,
            clouds:data2.clouds.all,
            visibility:data2.visibility,
            sunrise:new Date(data2.sys.sunrise*1000).toLocaleTimeString(),
            time:new Date().toLocaleTimeString(),
            country:data2.sys.country,
            icon:data2.weather[0].icon
        }
        return info;
    }catch(error){
        throw error;
    }
     }

     let submit=async (e)=>{
        try{
        e.preventDefault();
        console.log(city);
        setcity("");
        let result=await getdata();
        updateinfo(result);
        }catch(error){
           return seterror(true);
        }
        seterror(false);
    }
   
    return(
        <>
        <div className='search'>
             <Paper
      component="form" onSubmit={submit}
      sx={{ p: '2px 4px', display:'flex',alignItems:'center',width: 300 }}>
      <InputBase 
         onChange={handlechage} id="outlined-basic" value={city} required label="City name"
        sx={{ ml: 1, flex: 1 }}
        placeholder="Find weather in your city"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton onClick={getdata} variant="contained" type='submit'  sx={{ p: '10px' }} aria-label="search">
        < SearchIcon />
      </IconButton>
    </Paper>
     <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}> {error && <Paper sx={{background:"red",color:"white",padding:"5px",width:"230px",marginTop:"10px"}}>Please enter valid city name</Paper>}</div>
        </div>
        </>
    )
}
