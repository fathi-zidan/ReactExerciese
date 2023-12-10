import React, {useState,useContext,useEffect}from 'react'
import './Products.css'
import {useParams,Link,Route} from 'react-router-dom'
import { products } from '../../data'


const Products = () => {
  return (
    <div className='products'>
        <h1>Products</h1>
        <section className='pro_title'>
        {products.map((product)=>(
            <Link to={`${product.id}`} key={product.id} state={{product}} className='p_link'>{product.title}</Link>
        ))}
        </section>
      
    </div>
  )
}

export default Products
