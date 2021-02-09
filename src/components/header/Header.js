import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux'; // connect is a higher order function
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';


const Header = ({currentUser, hidden, cartItems}) => {

    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>SHOP</Link>
                <Link to='/contact' className='option'>CONTACT</Link>
                {
                    currentUser ?
                    <div className='option' onClick={() => auth.signOut()}> SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CartIcon />
                
            </div>
            {
                hidden ? null : <CartDropdown />    
            }
        </div>
    )
};

//first arg of connect is mapStateToProps
const mapStateToProps = createStructuredSelector({ // state refers to root reducer
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

// second arg is optional - mapDispatchToProps
// we use this pattern whenever we want a component to access the store

export default connect(mapStateToProps)(Header);
