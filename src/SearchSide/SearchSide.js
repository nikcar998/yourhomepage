import React, {useState}from 'react';
import "./SearchSide.css"
import GoogleComp from './GoogleComp/GoogleComp'
import UnsplashComp from './UnsplashComp/UnsplashComp'
import GifComp from './GifComp/GifComp'
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
            case 'giphy':
                setSearchChosed(<GifComp />)
                console.log('youtube')
                break;
        }
    }

    return(
        <div className="btn2Container">
            <button onClick={() => {chooseSearchFunction('giphy')}} className='btn btn-dark btn2'> giphy</button>
            <button onClick={() => {chooseSearchFunction('google')}}  className='btn btn-primary btn2'>google</button>
            <button onClick={() => {chooseSearchFunction('unsplash')}} className='btn btn-dark btn2'>unsplash</button>
            {searchChosed}
        </div>
    )
}

export default SearchSide