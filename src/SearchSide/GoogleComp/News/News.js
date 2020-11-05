import React, {useState, useEffect, useContext} from "react"
import "./News.css";
import Axios from "axios";
import _ from "lodash"
import ArticlesShow from "./ArticlesShow/ArticlesShow"

//questo componente sarà il contenitore delle varie news
function News(){
  const [result, setResult] =useState([]);
  const [bvalue, setBvalue]=useState(true);
  const [textVar, setTextVar]=useState('My News')

  
//attraverso questa funzione avviene la ricerca dei valori all'interno dell'api 
//successuvamente si passano i valori all'array "result" che servirà poi nella funzione "result.map"
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
//attraverso questa funzione passo i valori contenuti in localStorage all'interno dell'array
//result, nel caso in cui i valori siano già stati caricati nell'array utilizzo la funzione "getValues"
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
        //cancella ogni singolo valore contenuto in "myNews"
      function btnFunction1(){
        localStorage.removeItem("myNews"); 
        getValues()
        setBvalue(true)
   }

      useEffect(() => {
        getValues()
      }, [])
    return(
        <div className="newsSide">
            <div className="newsHeader">
            <button className='btn btn-light' onClick={btnFunction} >{textVar}</button>
            <button className='btn btn-danger' onClick={btnFunction1} >Cancel All</button>
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