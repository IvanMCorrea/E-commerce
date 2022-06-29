import React, { useState, createContext} from 'react'


export const cartContext = createContext();

export const CartProvider = ({ children }) =>{
    const [cart, setCart] = useState([]);
    //Verificar si esta en carrito
    const isInCartContext = (id) =>{
        return cart.some( item => item.id === id );
    }
    //Agregar al carrito
    const addToCart = (item, cant) =>{
        if(isInCartContext(item.id) === false){
            setCart([...cart, {...item, cant}]);
        }
    }
    
    //Limpiar carrito
    const clearCart = () =>{
        cart = [];
    }
    return <cartContext.Provider value={{cart, addToCart, isInCartContext}}>
        {children}
    </cartContext.Provider>
}

