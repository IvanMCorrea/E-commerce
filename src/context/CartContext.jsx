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
        setCart([]);
    }
    //Total carrito
    const totalItemsInCart = () =>{
        let total = 0;
        cart.forEach((item)=> total = total + item.cant)
        return total;
    }
    //Valor Total carrito
    const totalValueInCart = () =>{
        let total = 0;
        cart.forEach((item)=> {
            let precio = item.cant * item.price;
            total = total + precio;
        })
        return total
    }
    //Borrar item
    const eraseItemFromCart = (id) =>{
        let newCart = cart.filter((item)=> item.id !== id)
        setCart(newCart)
    }
    return <cartContext.Provider value={{cart, addToCart, isInCartContext, clearCart, totalValueInCart, totalItemsInCart, eraseItemFromCart }}>
        {children}
    </cartContext.Provider>
}

