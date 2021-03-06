import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect } from 'react-redux';


import './cart-icon.styles.scss';
import { toggleCart } from '../redux/actions/cartAction';
import { selectCartItemsCount } from '../redux/selectors/cart.selector';


const CartIcon = ({toggleCartHidden, count}) =>{
    // console.log(count);
  return (
    <div  onClick={toggleCartHidden}  className="cart-icon">
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{count}</span>
    </div>
)};


const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCart())
});
// const mapStateToProps = ({cart})=>(
//     cart
// )
const mapStateToProps = (state)=>({
    count: selectCartItemsCount(state)
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);