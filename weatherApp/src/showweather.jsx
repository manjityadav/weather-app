import Searchbox from "./searchbox.jsx"
import Boxinfo from "./boxinfo.jsx"
import { useState } from "react"
export default function Showweather(){
    let [weatherinfo,setweatherinfo]=useState({
        name:"Delhi",
        country:"IN",
        temp:29,
        min:26,
        max:30,
        feel:"29",
        humidity:74,
        pressure:1010,
        wind:4.63,
        clouds:75,
        visibility:5000,
        sunrise:"6:45AM",
        time:"2:30PM",
        desc:"cloudy",
        icon:"02d"
    })

    let updateinfo=(result)=>{
        setweatherinfo(result);
    }
    return(
        <>
         <Searchbox updateinfo={updateinfo}></Searchbox>
            <Boxinfo weatherinfo={weatherinfo}></Boxinfo>
        </>
    )
}