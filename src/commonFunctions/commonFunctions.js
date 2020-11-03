import React from 'react'
function clickHandler(x,y){
    const z = catchValue(y);
    z.push(x);
    localStorage.setItem(y, JSON.stringify(z))
    console.log(z)
}
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

function catchValue(y){
    let  el= localStorage.getItem(y)
    el= JSON.parse(el);
    const arr=[]
    var z = arr.concat(el);
    return z;
}
export default clickHandler
export {cancel, catchValue}