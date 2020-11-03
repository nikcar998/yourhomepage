import React,{useState} from 'react'
import './UnsplashComp.css'
import Axios from 'axios'
import _ from 'lodash'
import ImagesShow from "./imagesShow/ImagesShow"
function UnsplashComp(){
    const [value, setValue]=useState('');
    const [result, setResult]=useState([])
    const [bvalue, setBvalue]=useState(true);
    const [btnText, setBtnText]=useState('My Images')

    const clientId = ''
    function handleSubmit(event){
        event.preventDefault();
        Axios.get("https://api.unsplash.com/search/photos?per_page=100&query="+ value +"&client_id=" +clientId )
        .then(data =>{
          console.log(data.data);
          setResult(_.get(data,"data.results",'error'))
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
        if(bvalue){
          setBvalue(!bvalue);
          setBtnText('Search');
          let gif = localStorage.getItem('myImages')
          gif=JSON.parse(gif)
          setResult(gif);
          console.log(gif);
        }else{
          setBvalue(!bvalue)
          setResult([])
          setBtnText('My Images');
        }
      }
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