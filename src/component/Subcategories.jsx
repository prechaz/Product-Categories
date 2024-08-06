import React, { useState, useEffect } from "react";
import data from '../data';
import Product from "./Product";

function Subcategories({ category }) {
  const[selectedSubcategory,setselectedSubcategory] = useState()
  function handleClick(category){
    setselectedSubcategory(category)
    console.log(category)
  }
  useEffect(() => {
    setselectedSubcategory(category[0]); // Reset to the first category on initial load
  }, [category]);
    const subcategories = data.categories.find((cat) => cat.name === category).subcategories;
  return (
    <>
    <h1>Subcategories for {category}</h1>
    <ul>
      {subcategories.map((subcategory) => (
        <li key={subcategory} onClick={()=> handleClick(subcategory)}>{subcategory}</li>
      ))}
    </ul>
    {selectedSubcategory && (<Product subcategory={selectedSubcategory}/>)}
  </>
);
};

export default Subcategories;