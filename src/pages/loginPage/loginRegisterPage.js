import React from 'react';
import './loginPage.styles.scss';
import SignIn from '../../components/signin/SignIn'

const LoginRegisterPage = () => {
    // state will be kept on sign in and register individual components
    // this page is just formatting

    return(
        <div className='sign-in-and-sign-up' >
            <SignIn />
        </div>
    )
}

export default LoginRegisterPage;