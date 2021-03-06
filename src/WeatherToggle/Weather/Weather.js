import React, {useState, useEffect} from "react"
import "./Weather.css";
import _ from "lodash";
import Axios from "axios";

//questo componente ricerca la posizione dell'utente, ne cerca il meteo attraverso l'api di openweather
//e poi fornisce un piccolo div in ritorno la cui 'opacity' è determinata dal componente 'weatherToggle'
function Weather(props){
    const [iconURL, setIconURL]=useState('');
    const [tempcontent, setTempcontent]=useState('')
function geoFindMe() {
 

    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
     //utilizzo la chiave e le coordinate per accedere all'api
      var key = '';
      const url='https://api.openweathermap.org/data/2.5/weather?lat='+ latitude +'&lon='+ longitude +'&appid='+ key
      Axios.get(url)  
        .then(function(data) {
            console.log(data);
           
            //def. meteo
            const iconCode= _.get(data,"data.weather[0].icon","not found"); 
            setIconURL("http://openweathermap.org/img/wn/"+iconCode+"@2x.png");

            //def. temp
             const temp1 =_.get(data,"data.main.temp","error")
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
      setIconURL('error');
      setTempcontent("error")
    }
    //codice che fa avviare la funzione richiedendo al browser se è accessibile la geolocalizzazione
    if(!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
      setIconURL('error');
      setTempcontent("error");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }
 
  useEffect(() => {
    geoFindMe()
  }, [])
  const opChange1=props.opChange
  return(
      <div style={opChange1} className="weatherContainer">
          <p className="weatherp" >Weather:{iconURL!=='error'?<img src={iconURL} alt="weather" className="weatherImage"/>:iconURL}</p>
          <p>Temp:{tempcontent}°C</p>    
      </div>
  )

}

export default Weather