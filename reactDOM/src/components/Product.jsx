import React from 'react'
import { useNavigate } from 'react-router-dom'
function Product({product}) {
    const { id , name, price} = product
    const navigate = useNavigate()
  return (
    <div>
       
        <h3>isim : {product.name}</h3>
        <p>fiuat :  {product.price}</p>
        //* detalara gitmek için 
        <button onClick={()=>navigate(`/products-details/${id}`)}>detay</button>
    </div>
  )
}

export default Product