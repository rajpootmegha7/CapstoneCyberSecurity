import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './style.css'

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
          <p data-testid="signout-test">Successfully Logged Out !</p>
            <Link className='planner-link' to={{
              pathname: '/Login',
            }}>Login
            </Link>

        </div>

      </div>

    )
  }
}