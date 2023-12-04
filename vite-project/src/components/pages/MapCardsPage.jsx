import './MapCardsPage.css'
import React, { useState } from 'react'
// import AddCard from './components/addcard/AddCard'
import AddCard from "../addcard/AddCard"
import Card from '../card/Card'

function MapCardsPage() {
    const [card, setCard] = useState([]);

    function handleAddCard(newCard) {
        setCard([...card, newCard]);
    }
    return (
        <div className="map-cards">
            <h1>Map Card Page</h1>
            <AddCard handleAddCard={handleAddCard} />
            <section className='cardSec'>
            {card.map((card, index) => (
                <Card key={index} {...card} />
            ))}
            </section>
        </div>
    );
}
export default MapCardsPage;