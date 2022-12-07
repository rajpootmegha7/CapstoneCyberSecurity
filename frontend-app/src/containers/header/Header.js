import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import logo_reference from '../../images/deloitte.png'
import './style.css'

export default class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            activeLink : this.props.pagename,
        }
    }

    // this functions allows each of the links of the header to be clicked 
    // when not on that part of the page and changes their color
    componentDidMount() {
        if(this.state.activeLink === 'Home'){
            let el = document.getElementById('0_btn')
            el.style.borderBottom = '1px solid green'
            el.style.color = 'green'
            el.style.height = 'inherit'
        }
        else if(this.state.activeLink === 'General Info'){
            let el = document.getElementById('1_btn')
            el.style.borderBottom = '1px solid green'
            el.style.color = 'green'
            el.style.height = 'inherit'
        }
    }
    
    render() {
        return (
            <div className='header_cont'>
                <div data-testid="header-test"><img src={logo_reference} alt="logo" width="100px" height="98px" /></div>
                <div className='menu_cont'>
                    <Link id='0_btn' to='/home'>Home</Link>
                    <Link id='1_btn' to='/general_info' >General Info</Link>
                    <Link to='Logout'>Logout</Link>
                </div>
                
            </div>
        )
    }
}