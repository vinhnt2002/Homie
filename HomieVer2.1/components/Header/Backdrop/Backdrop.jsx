import React from 'react'
import style from './Backdrop.module.css'

const Backdrop = ( {handleCartClose, isCartOpen, handleWishlistClose, isWishListDropdown} ) => {

    const backdropClass = isCartOpen || isWishListDropdown ? `${style.backDrop} ${style.active}` : style.backDrop;


    return <>
    
    {isCartOpen && (<div className={backdropClass} onClick={handleCartClose}></div>)}
    
    {isWishListDropdown && (<div className={backdropClass} onClick={handleWishlistClose}></div>)}
    </>

}

export default Backdrop
