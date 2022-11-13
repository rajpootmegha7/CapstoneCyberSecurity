// javascript login file for login functionality.
import React, { Component } from 'react'
import ReactDOM from 'react-dom'



class LoginForm extends React.Component {
  constructor(props){
    super(props);
    
  }

  render() {
    return (
      <div className="login">
        <form action=""> {/*attach function here*/}
          {/* placeholder for potential hero image */}
          <img src="" alt="" /> 
        
          <div id="usernameGroup">
            <label>Username</label>
            <input type="username" placeholder="Enter username"  />
          </div>
         
          <div id="emailGroup"> 
            <label for="email">Email address</label>
            <input id="email" type="email" placeholder="Enter email address"  />
          </div>
          <div id="passwordGroup">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder = "Enter password" />    
            <a class="sp-underline"href="!putendpointhere">Forgot password?</a>
          </div>
          <button class="login-register">Log In</button>
        </form>
        <p>Don't have an account?</p><a href="!putendpointhere">Register</a>
      </div>
    )
  }
}

export default class Login extends Component {
  render() {
    return (
        <div className="login">
          <h1> Cyber Attacks Map </h1>
          <LoginForm />
        </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Login/>);
