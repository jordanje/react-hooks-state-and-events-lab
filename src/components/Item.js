import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart ] = useState(false)

  const cartClass = inCart ? "in-cart" : "";

  function cartBtnHandler(){
    setInCart(!inCart)
  }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={cartBtnHandler} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
