import React, { Component } from 'react';
import RegistrationService from '../services/RegistrationService';


class Registration extends Component {

    componentDidMount(){
        RegistrationService.postRegistration().then()
    }
    
    render() {

        return (
            <div>
                
            </div>
        );
    }
}

export default Registration;