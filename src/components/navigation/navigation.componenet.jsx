import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import './navigation.styles.scss';
import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase/firebase.util";
import CartIcon from "../cart-icon/cart-icon.component";


const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const handleSignout = async() => {
        await signOut(auth);
        setCurrentUser(null);

    }

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
            </div>
            <Outlet /> 
        </Fragment>
        
    )
}

export default Navigation;