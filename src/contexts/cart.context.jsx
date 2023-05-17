import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    //TODO - add cart count
    cartItems: [],
    setCartItems: () => {},
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartCount: 0,
    cartTotal: 0
});

export const addItemToCart = (cartItems, product) => {
    
    return cartItems;
}

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        console.log('UseEffect Trigerred 1');
        const newCartCount = cartItems.reduce(
            (count, cartItem) => count + cartItem.quantity, 0
        );
        setCartCount(newCartCount);
    }, [cartItems])

    useEffect(() => {
        console.log('UseEffect Trigerred 2');
        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.price * cartItem.quantity, 0
        );
        setCartTotal(newCartTotal);
    }, [cartItems])

    const value = {cartItems, setCartItems, isCartOpen, setIsCartOpen, cartCount, cartTotal, setCartCount};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}