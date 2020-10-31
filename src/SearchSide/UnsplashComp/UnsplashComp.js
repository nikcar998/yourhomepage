import React,{useState} from 'react'
import './UnsplashComp.css'
import Axios from 'axios'
import _ from 'lodash'

function UnsplashComp(){
    const [value, setValue]=useState('');
    const [result, setResult]=useState([])
    const clientId = ''
    function handleSubmit(event){
        event.preventDefault();
        Axios.get("https://api.unsplash.com/search/photos?per_page=100&query="+ value +"&client_id=" +clientId )
        .then(data =>{
          console.log(data.data);
          setResult(_.get(data,"data.results",'error'))
        }).catch(error =>{
          console.log(error);
        })
       }

    function handleChange(event){
        let valued = event.target.value;
        setValue(valued);
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
            <div className="photoShow" >
                {result.map((data)=>(
                    <img className="photo" src={data.urls.small} />
                ))}
            </div>
        </div>
    )
}

export default UnsplashComp