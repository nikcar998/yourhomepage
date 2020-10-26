import React, {useState} from 'react';
import "./GoogleComp.css"

function GoogleComp(){
    const [value, setValue]=useState('');
    const searchVar="https://www.google.com/search?q="+value

    function handleChange(event){
        let valued = event.target.value;
        setValue(valued);
       }
      

    return(<div className='SearchSideContainer'>
    <div className='searchText'>
        <p className='G1'>G</p>
        <p className='O1'>o</p>
        <p className='O2'>o</p>
        <p className='G2'>g</p>
        <p className='L'>l</p>
        <p className='E'>e</p>
    </div>
    <div className='inputContainer'>
        <input onChange={handleChange} type="text" placeholder="search here" className="serchInput"></input>
        <a href={searchVar} target='_blank' class="myButton">Search</a>
    </div>
    </div>
    )
}

export default GoogleComp  