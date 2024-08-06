import React from "react";
import pic from "../assets/image/ham.jpeg";
function Card({product}) {
  return (
    <>
      <div className="cards">
        <img src={product.image} alt="ham" />
        <div className="cardBottom">
          <h3>{product.categories[0]}</h3>
          <h3>availabilty</h3>
        </div>
        <h1 className="title">{product.product}</h1>
      </div>
    </>
  );
}

export default Card;
