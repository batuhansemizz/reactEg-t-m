import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/slices/productSlice';

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
        <div>
          
        </div>
    )
}

export default ProductsList