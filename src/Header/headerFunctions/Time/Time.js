import React,{useState} from "react";
import "./Time.css"

function Time(){
const [time,setTime]=useState('')
const [date,setDate]=useState('')
    function seeTime(){
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        setDate(date);
        setTime(time)
    }
    setInterval(function(){ 
        seeTime()
    }, 1000);

    return(
        <div className="timeContainer">
        <p className="timeText"> {date}</p>
        <p>  {time}</p>
        </div>
    )
}

export default Time;