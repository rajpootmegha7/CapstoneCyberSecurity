import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './logout-style.css'
import illustration from '../../images/analytics.svg'

// class component for logout functionality.
export default class logout extends Component {
  componentDidMount() {
    localStorage.clear('token');
    localStorage.setItem('isLogged', false);
  }
  render() {
    return (
      <div>
        <div className='logoff_container'>
        <img id="logout" src={illustration} alt=""/>
          <p data-testid="signout-test">You have successfully logged out.</p>
          
            <Link className='planner-link' to={{
              pathname: '/Login',
            }}>Login
            </Link>

        </div>

      </div>

    )
  }
}