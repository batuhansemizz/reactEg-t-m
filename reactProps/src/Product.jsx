import React from "react";
//* yada başka bir yöntem olarak da propsu alabiliriz
//* örnek 
function Product({productName, price}) { //* propsu burada alıyor
    //* normalde props yazması gerek yere productName ve price yazıyoruz bu da kısa bir yöntem
 //?   const {productName, price} = props;
    //* destructuring yapıyoruz
  return (
    <div>
      <div>Ürün bilgileri</div>
      <div>İsim: {productName}</div>
      <div>Fiyat: {price}</div>
    </div>
  );
}

export default Product;
