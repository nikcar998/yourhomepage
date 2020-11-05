import React from 'react'
//qui sono presenti le funzioni comuni a più componenti che non richiedono l'utilizzo di state.

//attraverso questa funzione salvo l'immagine, gif o news all'interno di localStorage
function clickHandler(x,y){
    const z = catchValue(y);
    z.push(x);
    localStorage.setItem(y, JSON.stringify(z))
    console.log(z)
}

//attraverso questa funzione cancello tutti gli elementi salvati che posseggono un determinato valore
function cancel(id,y){
  const z =catchValue(y)
    const finalArr = z.filter(element => {
        if(element!==null&&y!=='myNews'){
           return element.id !== id
        }else if(element!==null){
            return element.url!== id
        }});
    localStorage.setItem(y, JSON.stringify(finalArr))
    console.log(id)
    console.log(finalArr)
}
//attraverso questa funzione prelevo i valori necessari da localStorage e, dopo aver effettuato il "parsing",
//li unisco ad un array vuoto, permettendomi di utilizzare le funzioni utilizzabili sugli array indipendentemente
//dal numero di elementi salvati. 
function catchValue(y){
    let  el= localStorage.getItem(y)
    el= JSON.parse(el);
    const arr=[]
    var z = arr.concat(el);
    return z;
}
export default clickHandler
export {cancel, catchValue}