import React, {useState}from 'react';
import "./SearchSide.css"
import GoogleComp from './GoogleComp/GoogleComp'
import UnsplashComp from './UnsplashComp/UnsplashComp'
function SearchSide(){
    const [searchChosed, setSearchChosed]=useState(<GoogleComp />);
    
    function chooseSearchFunction(x){
        switch(x){
            case 'google':
                setSearchChosed(<GoogleComp />);
                break;  
            case 'unsplash':
                setSearchChosed(<UnsplashComp />)
                console.log('unsplash')
                break;
            case 'youtube':
                setSearchChosed(<UnsplashComp />)
                console.log('youtube')
                break;
        }
    }

    return(
        <div>
             <p className='searchChoser'>What you want to use?</p>
            <button onClick={() => {chooseSearchFunction('google')}} >google</button>
            <button onClick={() => {chooseSearchFunction('youtube')}}> youtube</button>
            <button onClick={() => {chooseSearchFunction('unsplash')}}>unsplash</button>
            {searchChosed}
        </div>
    )
}

export default SearchSide