/*
@Desc : javascript file for register functionality.
@Author : Megha Rajpoot, Rachel Wang
*/

import React, { Component, Fragment} from 'react'
import './style.css'
import logo_refernce from '../../images/deloitte.png'
import login_background from '../../images/login-2.png'

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import register_background from '../../images/analytics.svg'

export default class register extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: '',
            password2: '',
        };
        this.clickSubmit = this.clickSubmit.bind(this);
        this.showSuccess = this.showSuccess.bind(this);
        this.showError = this.showError.bind(this);
    }

    // called when the user enters clicks the submit button
    clickSubmit(event) {

        event.preventDefault();
        // Field level validations
        if (!this.state.email) {
            this.showError('Email address is blank');
            return;
        } else if (!/\S+@\S+\.\S+/.test(this.state.email)) {
            this.showError('Email address is invalid');
            return;
        }
        if (!this.state.username.trim()) {
            this.showError('Username is Blank');
            return;
        }
        if (!this.state.password) {
            this.showError('Password is required');
            return;
        }
        if (!this.state.password2) {
            this.showError('Confirm Password is required');
            return;
        } else if (this.state.password2 !== this.state.password) {
            this.showError('Passwords do not match');
            return;
        }
        var data = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        };
        console.log(data);
        this.verifyRegister(data);
    }

    // popup messages to inform the user of the status of their login attempt
    showSuccess(message) {
        this.toast.show({ severity: 'success', summary: 'Success Message', detail: message, life: 3000 });
    }
    showError(message) {
        this.toast.show({ severity: 'error', summary: 'Error Message', detail: message, life: 3000 });
    }

    verifyRegister(data) {
        // this method makes a request to the backend, specified by the address below, with the information that the user provided
        console.log('In Submit Register');
        var request = new Request('http://localhost:4000/auth/register', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(data)
        });

        console.log(request);
        var that = this;
        fetch(request)
            .then(function (response) {
                // check the response of the backend error code
                if (response.status === 401) throw new Error('Email or password not found');
                else if (response.status === 403) throw new Error('User is already exist');
                else if (response.status === 404) throw new Error('Not found');
                
                response.json().then(function (data) {

                    // Following success message will be sent in the response.
                    that.showSuccess('Registration is successfull');

                    // Once user is registered we will forward them back to the login page.
                    that.props.history.push('/Login');
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
                <div className='li_image_container'>
                    <img src={logo_refernce} alt="CS Logo" width="100px" height="98px" />
                </div>
                <div className='main_card'>
                    <div id="register_container">
                        <div className="container_welcome">
                            <p id="welcome"> Cyber Attacks Map</p>
                        </div>
                        <h1 data-testid="sign-in-test" id="sign_in">Register </h1>
                         <div class="register_item" >
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
                        </div>
                        <div class="register_item" >
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
                        </div>
                        <div class="register_item" >
                        <p id='label_text'>Password</p>
                        <Password 
                            value={this.state.password}  
                            placeholder='Password'
                            onChange={(e) => this.setState({ password: e.target.value })} 
                            toggleMask 
                            required/>
                        </div>

                        <div class="register_item" >
                        <p id='label_text'> Confirm Password</p>
                        <Password value={this.state.password2}
                            placeholder='Confirm your password'
                            onChange={(e) => this.setState({ password2: e.target.value })} toggleMask
                            required
                        />
                        </div>
                        
                        <div className='button_submit'>
                            <Button  label=" Submit " icon="pi pi-check" iconPos="right" onClick={this.clickSubmit} />
                        </div>
                        <div className='register_link'>
                            <span id="no_account">
                            Already have an account? <a className='l_btn' href="/Login">Sign in </a>
                        </span>
                        </div>
                    
                    </div>
                   
                </div>
                <div className='register_back' >
                        <img id='register-image' src={register_background} alt="" />

                    </div>

            </div>
   
        </Fragment>

          )
        }

    }


