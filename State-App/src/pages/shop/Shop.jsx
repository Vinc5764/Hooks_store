import React from 'react'
import {PRODUCTS} from '../../products';

const Shop = () => {
  return (
    <div className='shop'>
        <div className='shop-title'>
            <h1>Vinny Shop</h1>
        </div>
        <div className='products'>
            {PRODUCTS.map((product) => {
                return (
                    <div className='product'>
                        <img src={product.productImage} alt={product.productName} />
                        <h3>{product.productName}</h3>
                        <h3>${product.price}</h3>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Shop