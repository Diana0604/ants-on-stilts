import React, {Component} from 'react';

import FormInput from '../../components/forminput/forminput.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './savediana.styles.scss';

class SaveDiana extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        if(this.state.password === "savediana"){
            this.setState({saved: true});
        }
        this.setState({ password: ''});
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }
    
    render (){
        if(this.state.saved){
            return(
                <div className="signin">
                    <h2>YOU HAVE SAVED DIANA</h2>
                </div>
            )
        }
        return(
            <div className="signin">
            <h2>ENTER PASSWORD TO SAVE DIANA</h2>
            <form onSubmit={this.handleSubmit}>
                <FormInput name="password" type="password" label="Password" value={this.state.password} handleChange={this.handleChange} required></FormInput>
                <CustomButton type="submit">Submit Form</CustomButton>
            </form>
            </div>
        )
    }
}

export default SaveDiana;