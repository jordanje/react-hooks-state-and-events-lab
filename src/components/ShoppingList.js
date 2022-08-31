import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterItems, setFilterItems] = useState("All")

  function handleSelect(event){
    setFilterItems(() => event.target.value)
  }

  const filteredItems =
    items.filter((item) => {
    if(filterItems === "All") {
      return item;
      
    } if(item.category === filterItems) {
      return item;
    }
  })
  






  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelect}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
