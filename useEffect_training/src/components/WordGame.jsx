import './WordGame.css'
import React, { useState, useEffect, useRef } from 'react'
const url = 'https://random-word-api.herokuapp.com/word';

function WordGame() {
    const [word, setWord] = useState('');
    const [inputValue, setInputValue] = useState(Array(word.length).fill(''));
    const inputRefs = useRef([]);


    async function WordFetch() {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setWord(data[0]);
            // console.log(data);
            // console.log(word);
        }
    }

    useEffect(() => {
        WordFetch();
    }, []);
    console.log(inputRefs);

    function handleInput(index, value) {
        const newInputValues = [...inputValue];
        newInputValues[index] = value.toLowerCase();
        setInputValue(newInputValues);
        if (inputRefs.current[index + 1] && newInputValues[index] === word.charAt(index)) {

            inputRefs.current[index + 1].focus();
        }
    }
    console.log(inputValue);

    return (
        <section className='Game-container'>
            <h1>Word to Guess : {word}</h1>
            <section className='input-container'>
                {word.split('').map((char, index) => {
                    return <input key={index} type='text'
                        maxLength={1}
                        value={inputValue[index]}
                        ref={(el) => { inputRefs.current[index] = el }}
                        onChange={(e) => handleInput(index, e.target.value)}
                        style={{backgroundColor: inputValue[index] === word.charAt(index)? 'lightgreen' : 'lightcoral'}}
                    ></input>
                })}
            </section>

        </section>
    );

}
export default WordGame;