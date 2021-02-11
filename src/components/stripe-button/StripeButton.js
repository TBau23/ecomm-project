import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import crownLogo from '../../assets/crownLogo.svg';

const StripeCheckoutButton = ({ price }) => {
    // stripe wants prices in cents
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IJhYEG72F6VmSjTgrqbgs0IyQnGvsegIO9op4mOsDHOJB3B6ChMJiwcJzCF3a2wGV996qSFCPZgDodnsBYcOKfD00rQPimnWq'
    const onToken = token => { // normally this is a callback that fires on success and is passed to backend  - we are just doing a test component
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
        label='Pay Now'
        name='Throne Apparel Ltd.'
        stripeKey={publishableKey}
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        image={crownLogo}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        />
    )
}

export default StripeCheckoutButton