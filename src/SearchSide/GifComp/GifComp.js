import React,{useState} from 'react'
import './GifComp.css'
import Axios from 'axios'
import _ from 'lodash'
import GifShow from './GifShow/GifShow'

//questo componente mostrerà sia la barra di ricerca, che il logo, che la lista gif cercate attraverso giphy 
function UnsplashComp(){
    const [value, setValue]=useState('');
    const [result, setResult]=useState([]);
    const [bvalue, setBvalue]=useState(true);
    const [btnText, setBtnText]=useState('My Gif')
    const [gifForIteration, setgifForIteration]=useState(JSON.parse(localStorage.getItem('myGif')));
    const key = ''

//attraverso questa funzione avviene la ricerca dei valori all'interno dell'api 
//successuvamente si passano i valori all'array "result" che servirà poi nella funzione "result.map"
//in ultimo si impostano i valori del button e di setBvalue così da evitare errori tra la presentazione
//dei valori cercati e quelli salvati
    function handleSubmit(event){
        event.preventDefault();
        Axios.get("http://api.giphy.com/v1/gifs/search?q="+ value +"&api_key=" +key )
         .then(data =>{
          console.log(data.data.data);
          setResult(_.get(data,"data.data",[]))
          setBtnText('My Gif')
          setBvalue(true)
        }).catch(error =>{
          console.log(error);
        })
       }
//attraverso questa funzione tengo traccia dei valori digitati nell'input
    function handleChange(event){
        let valued = event.target.value;
        setValue(valued);
       }
//attraverso questa funzione passo i valori contenuti in localStorage all'interno dell'array
//result, in caso non ci siano valori o i valori siano già caricati nell'array, imposterà 
//result ugulae a "[]"
        function btnFunction(){
            if(bvalue&&gifForIteration!==null){
              setBvalue(!bvalue);
              setBtnText('Search');
              let gif = localStorage.getItem('myGif')
              gif=JSON.parse(gif)
              setResult(gif);
              console.log(gif);
            }else{
              setBvalue(!bvalue)
              setResult([])
              setBtnText('My Gif');
            }
          }
        
          //cancella ogni singolo valore contenuto in "myGif"
        function btnFunction1(){
             localStorage.removeItem("myGif"); 
             setResult([])
        }


    return(
        <div className="unsplashSearch">
            <img className='giphyLogo' src="images/giphy-3.gif"></img>
            <form onSubmit={handleSubmit} className="container row custom-form ">
                <div className="form-group custom-group">
                <input 
                    type="text"
                    onChange={handleChange}
                    className="form-control custom-control"
                    placeholder="gif search" />
                <button type="submit" className="btn btn-dark btn1">Search</button>
                </div>
            </form>
            <div className="gifBtnContainer">
              <button className='btn btn-light' onClick={btnFunction} >{btnText}</button> 
              <button className='btn btn-danger' onClick={btnFunction1} >Cancel All</button>
            </div>
            <div className="gifShow" >
            {/*qui mi assicuro che sia result che i valori contenuti in esso siano diversi da null,
            poi passo i valori al componente GifShow */}
                {((result!==null)?result.map((data, index)=>(
                    (data!==null)&&<GifShow key={index + _.get(data,"slug",Math.floor(Math.random()*100000)) } 
                            gifForIteration={gifForIteration}
                             data={data}
                             bvalue={bvalue}
                             setResult={setResult}
                     />)):null)}
            </div>
        </div>
    )
}

export default UnsplashComp