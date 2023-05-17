import Button from '../button/button.component';
import './product-card.styles.scss';
import { CartContext, addItemToCart } from '../../contexts/cart.context';
import { useContext } from 'react';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    const { cartItems, setCartItems, setCartCount, cartCount } = useContext(CartContext);

    const handleAddToCart = (product) => {
        //setCartCount(cartCount+1);

        const existingItem = cartItems.find(item => item.id === product.id);
        if(existingItem) {
            existingItem.quantity = existingItem.quantity + 1;
        } else {
            const item = {...product, quantity: 1};
            cartItems.push(item);
        }

        
        setCartItems([...cartItems]);
        console.log(cartItems);

    }

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType='inverted' onClick={ () => handleAddToCart(product) }>Add to Cart</Button>
        </div>
    );
};

export default ProductCard;