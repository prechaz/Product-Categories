import React from 'react'
import data from '../data';
import Card from './Card';

function Product({subcategory}) {
    const products = data.products.filter((cat) => cat.categories[1] === subcategory)
    
    return (
        <>
         <h1>product</h1>  
         <ul>
         {products.map((product)=>(
            <li key={product.id}>{<Card product={product}/>}</li>
         ))} 
         </ul>
        </>
    )
}

export default Product
