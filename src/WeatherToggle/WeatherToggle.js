import React,{useState} from 'react';
import "./WeatherToggle.css";
import Weather from "./Weather/Weather"

//questo componente mostra l'immagine di un obrello che se cliccato fornisce il meteo locale attraverso
//il componente 'Weather'
function WeatherToggle() {
    const [opChange, setOpChange]=useState({opacity:0})
    function clickHandler(){
        if(opChange.opacity == 0){
            setOpChange({opacity:1})
            setTimeout(() => setOpChange({opacity:0.0}),5900 )
        }else{
            setOpChange({opacity:0}) 
        }
    }
    return (
        <div className="weatherToggle">
            <Weather opChange={opChange} />
             <img className='umbrellaToggler' src='/images/umbrella.svg' onClick={clickHandler}></img>
        </div>
    )
}

export default WeatherToggle