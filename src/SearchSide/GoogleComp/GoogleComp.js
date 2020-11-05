import React, {useState} from 'react';
import "./GoogleComp.css"
import News from "./News/News"

//questo componente mostra la scritta google e la barra per effettuare ricerche
function GoogleComp(){
    const [value, setValue]=useState('');
    const searchVar="https://www.google.com/search?q="+value

    //attraverso questa funzione tengo traccia dei valori digitati nell'input
    function handleChange(event){
        let valued = event.target.value;
        setValue(valued);
       }
    //successivamente al submit dei valori nell'input verra aperto un nuovo tab
    //con la relativa ricerca effettuata da google
    function handleSubmit(){
        window.open(searchVar, '_blank');
    }

    return(
    <div className='SearchSideContainer'>
        <div className='searchText'>
            <p className='G1'>G</p>
            <p className='O1'>o</p>
            <p className='O2'>o</p>
            <p className='G2'>g</p>
            <p className='L'>l</p>
            <p className='E'>e</p>
        </div>
        <form onSubmit={handleSubmit} className='form-group inputContainer'>
            <input onChange={handleChange} type="text" placeholder="search here" className="serchInput"></input>
            <button type="submit" className="btn btn-dark btn1">Search</button> 
        </form>
        <News />
    </div>
    )
}

export default GoogleComp  