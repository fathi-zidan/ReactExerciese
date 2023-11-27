import './TurtlesCard.css';
import React from 'react';
import Orders from './Orders'
import { useState } from 'react';

export default function TurtlesCard({ turtles }) {
    const [selectedPizzas, setSelectedPizzas] = useState([]);
  const [maxMessage, setMaxMessage] = useState('');
  const [duplicateMessage, setDuplicateMessage] = useState('');

  const handleOrders = (topping) => {
    if (selectedPizzas.length < 5 && !selectedPizzas.includes(topping)) {
      setSelectedPizzas([...selectedPizzas, topping]);
      setMaxMessage('');
      setDuplicateMessage('');
    } else if (selectedPizzas.length >= 5) {
      setMaxMessage('Maximum toppings reached. You cannot add more toppings.');
    } else {
      setDuplicateMessage('You already have this topping in your order.');
    }
  };
    return (
        <section className='ee'>
        <h1>Ninja Turtles</h1>
      <h1>Order with the turtles</h1>
        <div className="container">
            {turtles.map((turtle, i) => (
                <div key={i} className='turtlesCard'>
                    <img src={turtle.img} alt={turtle.name} />
                    <h2>{turtle.name}</h2>
                    <section className='btnSec'>
                        {turtle.pizzaToppings.map((topping, j) => (
                            <button key={j} onClick={()=>handleOrders(topping)}>{topping.name}</button>
                        ))}
                    </section>
                </div>
            ))}
           
        </div>
        <Orders selectedPizzas={selectedPizzas} maxMessage={maxMessage} duplicateMessage={duplicateMessage} />
        </section>
        
    );
}
