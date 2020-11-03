import React,{useState} from 'react'
import _ from 'lodash'
import "./GifShow.css"
import clickHandler,{cancel,catchValue} from '../../../commonFunctions/commonFunctions'

function GifShow(props){
    const data = props.data;
    const y ='myGif'

    function cancel1(a,b){
        cancel(a,b);
        const setResult=props.setResult;
        var z = catchValue(b)
        setResult(z)
      }
   
    return(
    <div className='gifContainer'>
            <img className="gif" src={_.get(props,"data.images.original.url","")} />
            <div className="middle">
               {(props.bvalue)?<button className="btn btn-success" onClick={()=>clickHandler(props.data,y)}>Save</button>
                :<button className="btn btn-danger" onClick={()=>cancel1(props.data.id,y)}>cancel</button>}
            </div>
        </div>
    )
}

export default GifShow