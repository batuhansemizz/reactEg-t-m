import React from "react";
import "../css/product.css";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { id, price, image, title, description } = product;
  const navigate = useNavigate()
  return (
    <div className="card">
      <img className="image" src={image} alt={title} />
      <div className="product-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{price}</p>
        <div>
        <button type="button" onClick={()=>navigate(`/product-details/${id}`)} className="btn">Detaya Git</button>
      </div>
      </div>
    </div>
  );
}

export default Product;
