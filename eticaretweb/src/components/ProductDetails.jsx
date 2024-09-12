import React from 'react'
import { useSelector, useDispatch } from 'react-redux' // useDispatch eklenmeli
import { useParams } from 'react-router-dom'
import { useEffect } from 'react' // useEffect eklenmeli
import { setSelectedProduct } from '../redux/slices/productSlice'


function ProductDetails() {
    const {id} = useParams()
    const {products, selectedProduct} = useSelector((store)=>store.product)
    const dispatch = useDispatch()

    useEffect(() => {
        const product = products.find(product => product.id === id);
        if (product) {
            dispatch(setSelectedProduct(product));
        }
    }, [id, products, dispatch]); // Bağımlılıklar listesine 'products' ve 'dispatch' eklenmeli

    return (
        <div>
            <h1>{selectedProduct.title}</h1>
        </div>
    )
}

export default ProductDetails