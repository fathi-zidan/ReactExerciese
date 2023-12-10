import './AnimalPage.css'
import React,{useEffect,useContext,useState} from 'react'
import { useNav } from '../context/NavigationContext';
const url = 'https://dog.ceo/api/breeds/image/random';
import Timer from '../Timer/Timer';
import { useTheme } from '../context/ThemeContext';


function AnimalPage(){
    const [animalImage,setAnimalImage] = useState('');
    const {currentPage, navigateTo} = useNav();
    const { themeToggle, isChecked } = useTheme();

    async function fetchAnimal(){
        try{
        const response = await fetch(url);
        if(response.ok){
            const data =await response.json();
            setAnimalImage(data.message)
            console.log(data);
            console.log(animalImage);

        }
        }catch(err){
            throw new Error("HTTP error " + response.status);
            console.log("Error");
        }
    }

    useEffect(()=>{
        fetchAnimal();

    },[]);

    return(
        <div className={isChecked?'Animal-container-dark' :"Animal-container"}>
            <Timer/>
            <img src={animalImage} alt="animal" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod incidunt architecto quis obcaecati odio rerum dolorem vel necessitatibus. Labore aliquam assumenda libero sapiente fuga natus! Doloribus tenetur sed mollitia voluptates!</p>
            <button className={isChecked ? 'button-dark' : ''} onClick={()=>navigateTo('contact')}>Go To Contact Page</button>

        </div>
    );


}
export default AnimalPage;