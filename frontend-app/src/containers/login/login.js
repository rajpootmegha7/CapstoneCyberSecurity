// javascript login file for login functionality.
import React, { Component, Fragment} from 'react'
import './style.css'

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default class Login extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: '',
            token:'',
        };
        this.clickSubmit = this.clickSubmit.bind(this);
        this.showSuccess = this.showSuccess.bind(this);
        this.showError = this.showError.bind(this);
    }

    // called when the user enters clicks the submit button
    clickSubmit(event) {

        event.preventDefault();

        var data = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        };
        console.log(data);
        this.verifyLogin(data);
    }

    // popup messages to inform the user of the status of their login attempt
    showSuccess(message) {
        this.toast.show({ severity: 'success', summary: 'Success Message', detail: message, life: 3000 });
    }
    showError(message) {
        this.toast.show({ severity: 'error', summary: 'Error Message', detail: message, life: 3000 });
    }

    verifyLogin(data) {
        // this method makes a request to the backend, specified by the address below, with the information that the user provided
        console.log('In Submit Login');
        var request = new Request('http://localhost:4000/auth/login', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(data)
        });

        console.log(request);
        var that = this;
        fetch(request)
            .then(function (response) {
                // check the response of the backend
                if (response.status === 401) throw new Error('Email or password not found');
                else if (response.status === 403) throw new Error('User is already exist');
                else if (response.status === 404) throw new Error('Not found');
                
                response.json().then(function (data) {
                    console.log(data)
                    localStorage.setItem('token', that.state.token);
                    // localStorage.setItem('isLogged', 'true');

                    that.showSuccess('Sucessfully Logged In.');
                    // now that the user is logged in, we want them to be able to access certain parts of the website they could not access before
                    that.props.history.push('/home');
                });
            })
            .catch(function (err) {
                console.log(err.message);
                that.showError(err.message);
            });
    }
    render(){
        return (
            <Fragment>
            <Toast ref={(el) => this.toast = el} />
            <div className="container">
                <div className='li_image_container'></div>
                <div id="login_container">
                    <div className="container_welcome">
                        <p id="welcome2">Deloitte </p><p id="welcome"> Cyber Attacks Map</p>
                    </div>
                    <h1 data-testid="sign-in-test" id="sign_in">Sign in </h1>
                    <span className="p_float_label">
                    <p id='label_text'>Email Address</p>   
                    <InputText
                        id="form_input"
                        placeholder='Email Address'
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                        required
                    />
                    </span>
                    <span className="p_float_label">
                    <p id='label_text'>Username</p>   
                    <InputText
                        id="form_input"
                        placeholder='Username'
                        value={this.state.username}
                        onChange={(e) => this.setState({ username: e.target.value })}
                        required
                    />
                    </span>
                    <p id='label_text'>Password</p>
                    <Password 
                        value={this.state.password}  
                        placeholder='Password'
                        onChange={(e) => this.setState({ password: e.target.value })} 
                        toggleMask 
                        required/>
                    
                    <div className='button_submit'>
                        <Button  label=" Submit" icon="pi pi-check" iconPos="right" onClick={this.clickSubmit} />
                    </div>
                    <div className='register_link'>
                         <span id="no_account">
                            <a className='l_btn' href="/Register"> Don't have an account? Register </a>
                    </span>
                    </div>
                   
                </div>
             
            </div>
   
        </Fragment>

          )
        }

    }

