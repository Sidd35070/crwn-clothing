import { useContext } from 'react';
import './checkout-item.styles.scss';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({cartItem}) => {
    const{ id, imageUrl, name, quantity, price } = cartItem;

    const { cartItems, setCartItems } = useContext(CartContext);

    const handleQuantityIncrement = (id) => {
        const existingItem = cartItems.find(item => item.id === id);
        existingItem.quantity = existingItem.quantity + 1;
        setCartItems([...cartItems]); 
    }
    const handleQuantityDecrement = (id) => {
        const existingItem = cartItems.find(item => item.id === id);
        existingItem.quantity = existingItem.quantity - 1;
        setCartItems([...cartItems]);

        if(!existingItem.quantity) handleRemoveProduct(id);

    }
    const handleRemoveProduct = (id) => {
        const updatedItems = cartItems.filter(cartItem => cartItem.id !== id)
        setCartItems(updatedItems);

    }

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => handleQuantityDecrement(id)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => handleQuantityIncrement(id)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => handleRemoveProduct(id)}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;