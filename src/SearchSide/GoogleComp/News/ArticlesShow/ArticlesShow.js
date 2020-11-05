import React,{useEffect, useContext} from 'react';
import "./ArticlesShow.css";
import _ from "lodash";
import clickHandler,{cancel,catchValue} from '../../../../commonFunctions/commonFunctions'

//attraverso questo componente mostro le singole news
function ArticlesShow(props){
      const article=props.article

      const titled=_.get(article,'title','not found')
      const urlToImage=_.get(article,"urlToImage",'')
      const url=_.get(article,'url','not found')
      const y ='myNews'

    //questa funzione si integra con quella presente in commonFunctions per modificare lo state
    //dopo la cancellazione dell'elemento
    function cancel1(a,b){
      cancel(a,b);
      const setResult=props.setResult;
      var z = catchValue(b)
      setResult(z)
    }

   return ( 
      <div className="ArticlesCardsContainer" >
      <a href={url} target='_blank' rel="noopener noreferrer" style={{textDecoration:'none'}}>
           {(urlToImage!=='')&& <img className="newsImage" src={urlToImage} />}
            <hr className='hrTitle' />
            <p className="cardTitle">{titled}</p>
            </a>
            {(props.bvalue)?<button className="btn btn-success" onClick={()=>clickHandler(props.article,y)}>Save</button>
                :<button className="btn btn-danger" onClick={()=>cancel1(props.article.url,y)}>cancel</button>}
      </div>
   )}

   export default ArticlesShow