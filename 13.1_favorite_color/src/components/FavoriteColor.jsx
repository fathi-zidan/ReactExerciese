import './FavoriteColor.css'
import React,{useState,useEffect} from 'react'

function FavoriteColor(){
    const [favoriteColor,setFavoriteColor] = useState('blue');
    useEffect(()=>{
        setTimeout(() => {
            setFavoriteColor("red");
        }, 1000);

    },[])

    return(
        <div className="container">
            <h1>My color is {favoriteColor}</h1>
            <div id='color' style={{backgroundColor:favoriteColor}}>
            </div>
        </div>
    );
}
export default FavoriteColor;