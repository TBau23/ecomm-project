import React from 'react';
import './SignIn.styles.scss';
import FormInput from '../FormInput/FormInput';

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
                    <input type='submit' value='Submit Form' />
                </form>
            </div>
        )
    }
}

export default SignIn