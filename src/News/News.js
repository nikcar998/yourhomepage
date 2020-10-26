import React, {useState, useEffect} from "react"
import "./News.css";
import Axios from "axios";
import _ from "lodash"
import ArticlesShow from "./ArticlesShow/ArticlesShow"
function News(){
    const [result, setResult]=useState([])
    function getValues(){
        const selected='us'
        const key='d2eb5fc8741647b3b0be376ab59c7d69';
        var url = 'http://newsapi.org/v2/top-headlines?' +
                'country=' + selected + '&' +
                'apiKey='+ key;
      Axios.get(url)
       .then(data=>{
         console.log(_.get(data,'status','news not found'));
         const data1=_.get(data,'data.articles',"not found");
         setResult(data1);
       }).catch(error => {
         console.log(error)
       })
      }
      useEffect(() => {
        getValues()
      }, [])
    return(
        <div className="newsSide">
            <div className="newsHeader">
                <p>News</p>
            </div>
            <div className="articlesMap">
            {result.map((article, index) => ( 
      _.get(article,'urlToImage',0) !== 0?<ArticlesShow
      key={_.get(article,'url',index)}
      titled={_.get(article,'title','not found')} 
      urlToImage={article.urlToImage} 
      source={_.get(article,'source.name','not found')} 
      dated={_.get(article,'publishedAt','notFound')}
      author={_.get(article,'author','not found')}
      description={_.get(article,'description','not found')}
      url={_.get(article,'url','not found')} /> : <p>An error has occured or the book has not been found, please try again</p> ))}
            </div>
        </div>
    )
}

export default News