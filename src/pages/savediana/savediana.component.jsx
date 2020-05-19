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
        if(this.state.password === "10964"){
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
                
                <div className="savediana">
                <iframe src="https://drive.google.com/file/d/13QCxj70QOGcZ9OA1AB6vypJlgF-oSHRu/preview" width="640" height="480"></iframe>
                <p><bold>NOTE:</bold> This should be a live stream but didn't have time to connect/test it</p>
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