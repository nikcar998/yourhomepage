import React,{useEffect, useContext} from 'react';
import "./ArticlesShow.css";
import _ from "lodash"
function ArticlesShow(props){
      const article=props.article

      const titled=_.get(article,'title','not found')
      const urlToImage=article.urlToImage
      const dated=_.get(article,'publishedAt','notFound')
      const url=_.get(article,'url','not found')
    //qui modifico il formato della data ricevuto dall'api e lo rendo più leggibile
    const ts = new Date(dated);
    const dated1=ts.toDateString();

      function clickHandler(articles){
            let news = localStorage.getItem('myNews')
            news= JSON.parse(news);
            news.push(article)
            localStorage.setItem('myNews', JSON.stringify(news))
            console.log(news)
      }

   return ( 
      <div className="ArticlesCardsContainer" >
      <a href={url} target='_blank' rel="noopener noreferrer" style={{textDecoration:'none'}}>
            <img className="newsImage" src={urlToImage} />
            <hr className='hrTitle' />
            <p className="cardTitle">{titled}</p>
            </a>
      <button className='btn btn-secondary' onClick={()=>clickHandler(article)} >Save</button>
      </div>
   )}

   export default ArticlesShow