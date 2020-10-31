import React,{useState} from 'react'
import './GifComp.css'
import Axios from 'axios'
import _ from 'lodash'

function UnsplashComp(){
    const [value, setValue]=useState('');
    const [result, setResult]=useState([]);
    const [bvalue, setBvalue]=useState(true);
    const key = ''
    let gifForIteration = localStorage.getItem('myGif')
    gifForIteration= JSON.parse(gifForIteration);
    console.log(gifForIteration)
    function handleSubmit(event){
        event.preventDefault();
        Axios.get("http://api.giphy.com/v1/gifs/search?q="+ value +"&api_key=" +key )
        .then(data =>{
          console.log(data.data.data);
          setResult(_.get(data,"data.data",[]))
        }).catch(error =>{
          console.log(error);
        })
       }

    function handleChange(event){
        let valued = event.target.value;
        setValue(valued);
       }

       function clickHandler(gifs){
        let gif = localStorage.getItem('myGif')
        gif= JSON.parse(gif);
        if(gif!==null){
            gif.push(gifs)
            localStorage.setItem('myGif', JSON.stringify(gif))
            console.log(gif)
        }else{
            localStorage.setItem('myGif', JSON.stringify(gifs))
            console.log(gif)
        }
       }
        function btnFunction(){
            if(bvalue){
              let gif = localStorage.getItem('myGif')
              gif= JSON.parse(gif);
              setResult(gif);
              setBvalue(!bvalue);
            }else{
              setBvalue(!bvalue)
            }
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
            <button className='btn btn-light' onClick={btnFunction} >My Gif</button> 
            <div className="gifShow" >
                {(result!==null)?(result.map((data, index)=>(
                    <div  key={index + _.get(data,"images.original.url","")} className='gifContainer'>
                    <img className="gif" src={_.get(data,"images.original.url","")} />
                    <div className="middle">
                        <button className="btn btn-success" onClick={()=>clickHandler(data)}>Save</button>
                    </div>
                    </div>))): null
                }
            </div>
        </div>
    )
}

export default UnsplashComp