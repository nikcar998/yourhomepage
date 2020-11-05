import React,{useState} from 'react'
import './UnsplashComp.css'
import Axios from 'axios'
import _ from 'lodash'
import ImagesShow from "./imagesShow/ImagesShow"

//questo componente mostrerà sia la barra di ricerca, che il logo, che la lista delle immagini
// cercate attraverso unsplash 
function UnsplashComp(){
    const [value, setValue]=useState('');
    const [result, setResult]=useState([])
    const [bvalue, setBvalue]=useState(true);
    const [btnText, setBtnText]=useState('My Images')

    const clientId = ''

    //attraverso questa funzione avviene la ricerca dei valori all'interno dell'api 
//successuvamente si passano i valori all'array "result" che servirà poi nella funzione "result.map"
//in ultimo si impostano i valori del button e di setBvalue così da evitare errori tra la presentazione
//dei valori cercati e quelli salvati
    function handleSubmit(event){
        event.preventDefault();
        Axios.get("https://api.unsplash.com/search/photos?per_page=100&query="+ value +"&client_id=" +clientId )
        .then(data =>{
          console.log(data.data);
          setResult(_.get(data,"data.results",[]))
          setBtnText('My images')
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
        if(bvalue){
          setBvalue(!bvalue);
          setBtnText('Search');
          let image = localStorage.getItem('myImages')
          image=JSON.parse(image)
          setResult(image);
          console.log(image);
        }else{
          setBvalue(!bvalue)
          setResult([])
          setBtnText('My Images');
        }
      }

 //cancella ogni singolo valore contenuto in "myImages"        
 function btnFunction1(){
         localStorage.removeItem("myImages"); 
         setResult([])
    }
    return(
        <div className="unsplashSearch">
            <img className='unsplashLogo' src="images/unsplashLogo.jpeg"></img>
            <form onSubmit={handleSubmit} className="container row custom-form ">
                <div className="form-group custom-group">
                <input 
                    type="text"
                    onChange={handleChange}
                    className="form-control custom-control"
                    placeholder="photo search" />
                <button type="submit" className="btn btn-dark btn1">Search</button> 
                </div>
            </form>
            <div className="gifBtnContainer">
                <button className='btn btn-light' onClick={btnFunction} >{btnText}</button> 
                <button className='btn btn-danger' onClick={btnFunction1} >Cancel all</button>
            </div>
            <div className="photoShow" >
                {((result!==null)?result.map((data, index)=>(
                    (data!==null)&&<ImagesShow key={index + _.get(data,"urls.small",Math.floor(Math.random()*100000)) } 
                             data={data}
                             bvalue={bvalue}
                             setResult={setResult}
                     />)):null)}
            </div>
        </div>
    )
}

export default UnsplashComp