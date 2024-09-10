import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Product from './product.jsx'

createRoot(document.getElementById('root')).render(
    <>
        <App />
        <Product />
    </>
)
