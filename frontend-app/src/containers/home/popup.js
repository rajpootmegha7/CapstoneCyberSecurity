import React, { Component, useEffect, useRef, useState } from 'react' 
import "./popup-style.css"


// function useInitialState() {
//    
// }
function Popup() {
    const [show, setShow] = useState(true);
    if(show) {return (
      <div class="popup-window">
            <nav class = "popup-nav">
                <ul>
                    <li><a href="#risks">CYBER THREATS</a></li>
                    <li><a href="#mitigations">POTENTIAL MITIGATIONS</a></li>
                </ul>
                <button onClick= {() => setShow(!show)}>X</button> 
            </nav>
            <div class="popup-text">
                <section class='risks ' id='current' > {/*style link function*/}
                    <ul>
                        <li class="decoration-dotted">testing this is a fact about the cyber threat</li>
                        <li>testing this is a fact about the cyber threat</li>
                        <li>testing this is a fact about the cyber threat</li>
                        <li>testing this is a fact about the cyber threat</li>
                        <li>testing this is a fact about the cyber threat</li>
                        <li>testing this is a fact about the cyber threat</li>
                    </ul>
                </section>
                <section class='mitigations'> 
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

        )}
    
    
}
   



export default Popup;
