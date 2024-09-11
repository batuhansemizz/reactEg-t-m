import React, { useState, useEffect } from 'react'
import '../css/header.css'
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";

function Header() {
    
    const [theme, setTheme] = useState(false);

    const toggleTheme = () => {
        const root = document.documentElement; // Bu satır değiştirildi
        setTheme(!theme);
        if(!theme){ // Bu koşul tersine çevrildi
            root.style.backgroundColor = '#fff';
            root.style.color = 'black';
        }else{
            root.style.backgroundColor = '#000';
            root.style.color = 'white';
        }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' , marginTop: '20px'}}>
            <div className='flex-row'>
                <img className='logo' src=".\src\img\images.png" alt="logo" />
                <p className='logo-text'>E-Ticaret Web</p>
            </div>
            <div>
                <div className='flex-row'>
                    <input className='search-input' type="text" name="" id="" placeholder='Ürün arama...' />
                    {theme ? <FaMoon className='icon' onClick={toggleTheme}/> : <CiLight className='icon' onClick={toggleTheme}/>}
                    <CiShoppingBasket className='icon' />
                </div>
            </div>
        </div>
    )
}

export default Header