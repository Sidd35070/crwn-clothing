import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = () => {
    const cartCount = 0;

    return (
        <div className="cart-icon-container">
            <ShoppingIcon className='shopping-icon' />
            <span className="item-count">{cartCount}</span>
        </div>
    )
}

export default CartIcon;