import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../redux/selectors/cart.selector';
import { withRouter } from 'react-router-dom'
import {toggleCart} from '../redux/actions/cartAction'


import './cartDropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item= {cartItem}/>) :
                <span className="empty-message">Your Cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCart());
            }}>
             GO TO CHECKOUT
        </CustomButton>
    </div>
);
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});


export default withRouter( connect(mapStateToProps)(CartDropdown));

