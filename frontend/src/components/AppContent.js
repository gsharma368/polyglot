import * as React from 'react';

import axios from 'axios';
import WelcomeContent from './WelcomeContent'
import AuthContent from './AuthContent';
import LoginForm from './LoginForm';
import Buttons from './Buttons';

export default class AppContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            componentToShow: "welcome"
        }
    };


    login = () => {
        this.setState({componentToShow: "login"})
    };

    logout = () => {
        this.setState({componentToShow: "welcome"})
        //setAuthHeader(null);
    };

    onLogin = (e, username, password) => {
        e.preventDefault();
        axios.post('http://localhost:8080/login', {
            login: username,
            password: password
        }).then(
            (response) => {
                //setAuthHeader(response.data.token);
                this.setState({componentToShow: "messages"});
            }).catch(
            (error) => {
                //setAuthHeader(null);
                this.setState({componentToShow: "welcome"})
            });
    };

    onRegister = (event, firstName, lastName, username, password) => {
        event.preventDefault();
        axios.post('http://localhost:8080/register',
            {
                firstName: firstName,
                lastName: lastName,
                login: username,
                password: password
            }).then(
            (response) => {
                //setAuthHeader(response.data.token);
                this.setState({componentToShow: "messages"});
            }).catch(
            (error) => {
                //setAuthHeader(null);
                this.setState({componentToShow: "welcome"})
            }
        );
    };

    render(){
        return (
            <div>

                <Buttons
                login={this.login}
                logout={this.logout}
                />
                <WelcomeContent/>
                <AuthContent/>
                <LoginForm/>
            </div>
        );
    }
}