import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/slices/productSlice';
import Product from '../components/Product';

function ProductsList() {
    const dispatch = useDispatch();
    const { products, loading } = useSelector((state) => state.product);
    console.log(products);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    if (loading) {
        return <div>Yükleniyor...</div>
    }

    return (
        <div className='flex-row' style={{flexWrap:'wrap',gap:'10px',display:'inline-block'}}>
         {
            products && products.map((product)=>(
                <Product key={product.id} product={product}/>
            ))
         }
        </div>
    )
}

export default ProductsList