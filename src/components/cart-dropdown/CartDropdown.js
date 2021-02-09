import React from 'react';
import './cartDropdown.scss';
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


const cartDropdown = ({ cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >
            {
                cartItems.length ?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                : <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton 
        onClick={() => 
             {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }
        }
        >
            GO TO CHECKOUT
            </CustomButton>
    </div>
);



const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

// with router takes in the component from our connect call as its component
export default  withRouter(connect(mapStateToProps)(cartDropdown));
// if we don't pass dispatch into the connect, connect actually passes dispatch as a prop for the purpose of one off actions
