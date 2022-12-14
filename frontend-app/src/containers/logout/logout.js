import React, { Component } from 'react'
import { Link } from "react-router-dom";

import illustration from '../../images/analytics.svg'
import './style.css'

// class component for logout functionality.
export default class logout extends Component {
  componentDidMount() {
    localStorage.clear('token');
    localStorage.setItem('isLogged', false);
  }
  render() {
    return (

      <main>
      <div>
        <div className='logoff_container'>
        <img id="logout" src={illustration} role="presentation" alt=""/>

          <h1 data-testid="signout-test">You have successfully logged out.</h1>
          
            <Link className='planner-link-2' to={{
              pathname: '/Login',
            }}>Login
            </Link>

        </div>

      </div>
      </main>

    )
  }
}