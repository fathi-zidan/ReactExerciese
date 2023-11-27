import './Orders.css';
import React, { useState } from 'react';

export default function PizzaOrders({ selectedPizzas, maxMessage, duplicateMessage }) {
  return (
      <section className='all'>
      <h1>Pizza Orders</h1>
    <div className='orderContainer'>
      {selectedPizzas.map((ele, i) => (
        <section key={i} className='orderCard'>
          <h2>{ele.name}</h2>
          <img src={ele.img} alt={ele.name} />
        </section>
      ))}

      {maxMessage && <h1 className='max'>{maxMessage}</h1>}
      {duplicateMessage && <h1 className='reached'>{duplicateMessage}</h1>}
    </div>
    </section>
  );
}
