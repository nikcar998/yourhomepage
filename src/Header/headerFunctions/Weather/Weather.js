import React, {useState, useEffect} from "react"
import "./Weather.css";
import axios from "axios";
import _ from "lodash";
function Weather(){
    const [iconURL, setIconURL]=useState('');
    const [tempcontent, setTempcontent]=useState('')
function geoFindMe() {
 

    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
     //utilizzo la chiave e le coordinate per accedere all'api
      var key = '';
      fetch('https://api.openweathermap.org/data/2.5/weather?lat='+ latitude +'&lon='+ longitude +'&appid='+ key)  
        .then(function(resp) { return resp.json() }) // Convert data to json
          .then(function(data) {
            console.log(data);
           
            //def. meteo
            const iconCode= _.get(data,"weather[0].icon","not found"); 
            setIconURL("http://openweathermap.org/img/wn/"+iconCode+"@2x.png");

            //def. temp
             const temp1 =_.get(data,"main.temp","not found")
             if(temp1!=="not found"){
            const temp2=(Number(temp1)- 273.15).toFixed(2);
            setTempcontent(temp2)
             }else{
              setTempcontent(temp1)
             }
          })//def. risposta  all'errore durante l'operazione di fetch
        .catch(function(err) {
          console.log(err + " 1");
      });
    }
  //def. risposta all'errore di geolocalizzazione
    function error() {
      console.log('Unable to retrieve your location');
      setIconURL('disabled');
      setTempcontent("disabled")
    }
    //codice che fa avviare la funzione richiedendo al browser se è accessibile la geolocalizzazione
    if(!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
      setIconURL('not supported');
      setTempcontent("not supported")
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }
 
  useEffect(() => {
    geoFindMe()
  }, [])
  
  return(
      <div className="weatherContainer">
          <p className="weatherp" >Weather:{iconURL!=='not supported'||iconURL!=='disabled'?<img src={iconURL} alt="weather" className="weatherImage"/>:iconURL}</p>
          <p>Temp:{tempcontent} </p>
          
      </div>
  )

}

export default Weather