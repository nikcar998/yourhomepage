import React from 'react';
import "./ArticlesShow.css";
function ArticlesShow(props){
             
    //qui modifico il formato della data ricevuto dall'api e lo rendo più leggibile
    const ts = new Date(props.dated);
    const dated=ts.toDateString();
   return ( 
   <div className="ArticlesCardsContainer" >
      <div className="leftContainer">
         <img className="newsImage" src={props.urlToImage} />
         <p className="cardDescription">Author: {props.author}</p>
      </div>
      <div className="rightContainer">
         <p className="cardTitle">{props.titled}</p>
         <hr className='hrTitle' />
         <p className="cardDescription">{props.description}</p>
      </div>
   </div>
   )}

   export default ArticlesShow