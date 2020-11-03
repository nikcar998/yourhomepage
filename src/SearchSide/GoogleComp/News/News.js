import React, {useState, useEffect, useContext} from "react"
import "./News.css";
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
      function btnFunction1(){
        localStorage.removeItem("myNews"); 
        let news = localStorage.getItem('myNews')
        news= JSON.parse(news);
        if(result===news){
        setResult([])
      }
   }

      useEffect(() => {
        getValues()
      }, [])
    return(
        <div className="newsSide">
            <div className="newsHeader">
            <button className='btn btn-light' onClick={btnFunction} >{textVar}</button>
            <button className='btn btn-danger' onClick={btnFunction1} >Cancel All</button>
                <p>News</p>
            </div>
            <div className="articlesMap">
            {(result!==null)?result.map((article, index) => ( 
              _.get(article,'urlToImage',0) !== 0?<ArticlesShow
              key={index + _.get(article,'url',index)}
              article={article}
              bvalue={bvalue}
              setResult={setResult}
              />:null)):null}
            </div>
        </div>
    )
}

export default News