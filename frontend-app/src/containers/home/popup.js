import React, { Component, useEffect, useRef } from 'react' 
import "./popup-style.css"

export default class Popup extends Component{
    render(){
        return (
            <div class="popup-window">
                <nav class = "popup-nav">
                    <ul>
                        <li><a href="#risks">CYBER THREATS</a></li>
                        <li><a href="#mitigations">POTENTIAL MITIGATIONS</a></li>
                    </ul>
                    <button>X</button> {/*close function*/}
                </nav>
                <div class="popup-text">
                    <section id='risks'> 
                        <ul>
                            <li>testing this is a fact about the cyber threat</li>
                            <li>testing this is a fact about the cyber threat</li>
                            <li>testing this is a fact about the cyber threat</li>
                            <li>testing this is a fact about the cyber threat</li>
                            <li>testing this is a fact about the cyber threat</li>
                            <li>testing this is a fact about the cyber threat</li>
                        </ul>
                    </section>
                    <section id='mitigations'> 
                        <ul>
                            <li>testing this is a fact about the cyber threat</li>
                            <li>testing this is a fact about the cyber threat</li>
                            <li>testing this is a fact about the cyber threat</li>
                            <li>testing this is a fact about the cyber threat</li>
                            <li>testing this is a fact about the cyber threat</li>
                            <li>testing this is a fact about the cyber threat</li>
                        </ul>
                    </section>
                   
                </div>
            </div>
     )
        }
   

}