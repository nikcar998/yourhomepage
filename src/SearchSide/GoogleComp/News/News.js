import React, {useState, useEffect, useContext} from "react"
import "./News.css";
import ResultContext from '../../../ResultContext';
import Axios from "axios";
import _ from "lodash"
import ArticlesShow from "./ArticlesShow/ArticlesShow"
function News(){
  const [result, setResult] =useState([]);
  const [bvalue, setBvalue]=useState(true);
  const [textVar, setTextVar]=useState('My News')

    function getValues(){
        const selected='us'
        const key='';
        var url = 'http://newsapi.org/v2/top-headlines?' +
                'country=' + selected + '&' +
                'apiKey='+ key;
      Axios.get(url)
       .then(data=>{
         console.log(_.get(data,'data.articles',"not found"));
         const data1=_.get(data,'data.articles',"not found");
         setResult(data1);
       }).catch(error => {
         console.log(error)
       })
      }

      function btnFunction(){
        if(bvalue){
          let news = localStorage.getItem('myNews')
          news= JSON.parse(news);
          setResult(news);
          setTextVar('All News')
          setBvalue(!bvalue);
        }else{
          getValues()
          setTextVar('My News')
          setBvalue(!bvalue)
        }
      }

      useEffect(() => {
        getValues()
      }, [])
    return(
        <div className="newsSide">
            <div className="newsHeader">
            <button className='btn btn-light' onClick={btnFunction} >{textVar}</button>
                <p>News</p>
            </div>
            <div className="articlesMap">
            {result.map((article, index) => ( 
      _.get(article,'urlToImage',0) !== 0?<ArticlesShow
      key={index + _.get(article,'url',index)}
      article={article}
      /> : <p>An error has occured or the book has not been found, please try again</p> ))}
            </div>
        </div>
    )
}

export default News