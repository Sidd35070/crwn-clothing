import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import './navigation.styles.scss';
import { Fragment } from "react";
const Navigation = () => {

    return (
        <Fragment>
            <div className="navigation">
                <div className="logo-container">
                    <Link to='/'><Logo /></Link>
                </div>
                <div className="nav-links-container">
                    <Link className="nav-link" to='shop'>Shop</Link>
                </div>
            </div>
            <Outlet /> 
        </Fragment>
        
    )
}

export default Navigation;