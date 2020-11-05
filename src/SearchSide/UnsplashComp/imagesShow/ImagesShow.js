import React,{useState} from 'react'
import _ from 'lodash'
import "./imagesShow.css"
import clickHandler,{cancel,catchValue} from '../../../commonFunctions/commonFunctions'

//attraverso questo componente mostro le singole immagini
function ImagesShow(props){
    const data = props.data;
    const y ='myImages'

    
    //questa funzione si integra con quella presente in commonFunctions per modificare lo state
    //dopo la cancellazione dell'elemento
    function cancel1(a,b){
        cancel(a,b);
        const setResult=props.setResult;
        var z = catchValue(b)
        setResult(z)
      }
   //all'interno di ogni immagine è contenuto un div "middle" che permette, quando il mouse va sopra la gif,
   //di mostare il tasto di salvataggio o cancellazione dell'elemento
    return(
    <div className='ImagesContainer'>
            <img className="photo" src={_.get(data,"urls.small","")} />
            <div className="middle">
            {(props.bvalue)?<button className="btn btn-success" onClick={()=>clickHandler(props.data,y)}>Save</button>
                :<button className="btn btn-danger" onClick={()=>cancel1(props.data.id,y)}>cancel</button>}
            </div>
        </div>
    )
}

export default ImagesShow