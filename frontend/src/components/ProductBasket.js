import React, { useState } from 'react';
import './ProductBasket.css';

function ProductBasket({ id, image, title, price, setBasket, setBasketPrice, setBasketQty }) {

  const [qty, setQty] = useState(1)

  function deleteBasket() {
    setBasket(current => current.filter(product => product.id !== id))
    setBasketPrice(current => current - (price * qty))
    setBasketQty(current => current - qty)
  }

  function plus() {
    setQty(current => current + 1)
    setBasketPrice(current => current + price)
    setBasketQty(current => current + 1)
  }

  function minus() {
    if (qty > 1) {
      setQty(current => current - 1)
      setBasketPrice(current => current - price)
      setBasketQty(current => current - 1)
    }
  }

  return (
    <div className="ProductBasket">
<img width="200px" src="https://cdn.nonton.ru/resize_cache/2430800/9b198b03fb7fb87137cfd873d1b3a69c/iblock/c0f/DSC04341.jpeg" alt='Изображение товара' />
      <h1>{title}</h1>
      <p>{price} рублей</p>
      
      <div className='basketQty'>
        <button className='minus' onClick={() => minus()}>-</button>
        <p className='qty'>{qty}</p>
        <button className='plus' onClick={() => plus()}>+</button>
      </div>
      <button className='del' onClick={() => deleteBasket()}>Удалить</button>
    </div>
  );
}

export default ProductBasket;