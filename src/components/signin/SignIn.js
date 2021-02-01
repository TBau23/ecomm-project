import React from 'react';
import './SignIn.styles.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: ''})
    };

    handleChange = event => {
        const {value, name} = event.target;
        
        this.setState({[name]: value});
        
    };

    render() {
        return(
            <div className='sign-in'>
                <h2>I have an account already</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput name='email' type='email' value={this.state.email} required handleChange={this.handleChange} label='email'/>
                    <FormInput name='password' type='password' value={this.state.password} required handleChange={this.handleChange} label='password'/>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn