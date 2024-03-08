import React from "react"
import ItemsList from "./ItemsList";
const Content = ({items, handleCheck, handleDelete}) => {

  
  // const numbers = [-2, -1, 0, 1, 2];
  // const it = numbers.map((n) => ({number:n}));
  // console.log(it);
  return (
    <main>
      {items.length ? (
       <ItemsList
       items = {items}
       handleCheck = {handleCheck}
       handleDelete = {handleDelete}
       /> 
      ) : (
        <p>list is empty</p>
      )
    }
    </main>
  )
}

export default Content