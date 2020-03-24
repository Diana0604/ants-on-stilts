import React, {Component} from 'react';

import FormInput from '../../components/forminput/forminput.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './signin.styles.scss';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({username: '', password: ''});
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }
    
    render (){
        return(
            <div className="signin">
            <h2>Welcome Back Dear Ant</h2>
            <form onSubmit={this.handleSubmit}>
                <FormInput name="username" type="username" label="Username" value={this.state.username} handleChange={this.handleChange} required></FormInput>
                <FormInput name="password" type="password" label="Password" value={this.state.password} handleChange={this.handleChange} required></FormInput>
                <CustomButton type="submit">Submit Form</CustomButton>
            </form>
            </div>
        )
    }
}

export default Signin;