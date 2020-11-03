import React,{useState} from 'react'
import './GifComp.css'
import Axios from 'axios'
import _ from 'lodash'
import GifShow from './GifShow/GifShow'
function UnsplashComp(){
    const [value, setValue]=useState('');
    const [result, setResult]=useState([]);
    const [bvalue, setBvalue]=useState(true);
    const [btnText, setBtnText]=useState('My Gif')
    const [gifForIteration, setgifForIteration]=useState(JSON.parse(localStorage.getItem('myGif')));
    const key = ''
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

    function handleChange(event){
        let valued = event.target.value;
        setValue(valued);
       }

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