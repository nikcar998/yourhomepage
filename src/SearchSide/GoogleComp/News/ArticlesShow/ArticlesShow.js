import React,{useEffect, useContext} from 'react';
import "./ArticlesShow.css";
import _ from "lodash";
import clickHandler,{cancel,catchValue} from '../../../../commonFunctions/commonFunctions'
function ArticlesShow(props){
      const article=props.article

      const titled=_.get(article,'title','not found')
      const urlToImage=article.urlToImage
      const url=_.get(article,'url','not found')
      const y ='myNews'
    //qui modifico il formato della data ricevuto dall'api e lo rendo più leggibile

    function cancel1(a,b){
      cancel(a,b);
      const setResult=props.setResult;
      var z = catchValue(b)
      setResult(z)
    }

   return ( 
      <div className="ArticlesCardsContainer" >
      <a href={url} target='_blank' rel="noopener noreferrer" style={{textDecoration:'none'}}>
            <img className="newsImage" src={urlToImage} />
            <hr className='hrTitle' />
            <p className="cardTitle">{titled}</p>
            </a>
            {(props.bvalue)?<button className="btn btn-success" onClick={()=>clickHandler(props.article,y)}>Save</button>
                :<button className="btn btn-danger" onClick={()=>cancel1(props.article.url,y)}>cancel</button>}
      </div>
   )}

   export default ArticlesShow