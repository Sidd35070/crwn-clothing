import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import './navigation.styles.scss';
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { signOut } from "firebase/auth";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { auth } from "../../utils/firebase/firebase.util";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";


const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const handleSignout = async() => {
        await signOut(auth);
        setCurrentUser(null);
    }

    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <div className="navigation">
                <div className="logo-container">
                    <Link to='/'><Logo /></Link>
                </div>
                <div className="nav-links-container">
                    <Link className="nav-link" to='shop'>Shop</Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={handleSignout}>Sign Out</span>
                        ) : (<Link className="nav-link" to='sign-in'>Sign In</Link>)
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet /> 
        </Fragment>
        
    )
}

export default Navigation;