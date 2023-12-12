import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { products } from '../../data';
import './ProductInfo.css'

const ProductInfo = () => {
    let { id } = useParams();
    const { state } = useLocation()
    console.log(state);

    return (
        <section className='ProInfo-container'>
            <div className='pro_info'>
                <img src={state.product.imageUrl} alt={state.product.title} />
                <h2>{state.product.title}</h2>
                <h3>Price: {state.product.price}</h3>
                <h3>Size: {state.product.size}</h3>
                {/* {products.map((product, index)=>(
             product.id === id && <div className='card' key={index}>
                
                {product.title}
                
            </div>
 
        ) */}
            </div>
        </section>
    )
}

export default ProductInfo
