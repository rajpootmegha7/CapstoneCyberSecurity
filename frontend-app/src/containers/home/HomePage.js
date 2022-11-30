import React, { useState, useEffect, useRef, Fragment } from 'react';
import './style.css'
import { Button } from 'primereact/button';

import Hexa from '../../components/homeComponents/hexa';
import Header from '../header/Header';
import { Parallax } from 'react-parallax';
import global from '../../images/global-net.png'
import white from '../../images/white.jpg'
import lines from "../../images/line.png"

export default function HomePage() {
    const [token, setToken] = useState(null);
    const [supplyDataType, setSupplyDataType] = useState(null);

    useEffect(() => {
        // get the authorization token from ls
        setToken(localStorage.getItem('token'))
      });

    const setAutomotive = (e) =>{
        e.preventDefault();
        setSupplyDataType("automotive")
    }
    const setTechnology = (e) =>{
        e.preventDefault();
        setSupplyDataType("technology")
    }

  return (
    <Fragment>
        <Header />
        <div className='home-entry'> 
          <Parallax id="plx-1" bgImage={global} strength={500}>
              <p className='entry-label'>Cyber Security Supply Chain Interactive Map</p>
          </Parallax>
        </div>

        <div className='supply-select'>
          <Parallax bgImage={white} strength={500}> 
              <div className='supply-label'>Select Supply Chain Type</div>
          </Parallax>
        </div>

        <div className='HomeContainer'>
          <div className='TypeCard'>
                <Button id="type-btn" className="p-button-rounded p-button-outlined go-btn p-button-lg" 
                        aria-label="Submit"
                        label='Automotive' onClick={setAutomotive}/>
                <Button id="type-btn" className="p-button-rounded p-button-outlined go-btn p-button-lg" 
                        aria-label="Submit"
                        label='Technology' onClick={setTechnology}/>
            </div>

            <div className='MainContentCard'>
                <img className='line-img' src={lines} alt="no"></img>
                <Hexa pname='Planning' pimage = 'planning' ptype = {supplyDataType} step = "1" pcolor = {"#BAEFD6"}/>
                <Hexa pname='Supplying' pimage = 'supply'  ptype = {supplyDataType} step = "2" pcolor = {"#4C7D66"}/>
                <Hexa pname='Inventory Management' pimage = 'inventory' ptype = {supplyDataType} step = "3" pcolor = {"#CEF6FF"}/>
                <Hexa pname='Manufacturing' pimage = 'manufacturing' ptype = {supplyDataType} step = "4" pcolor = {"#55B1C6"}/>
                <Hexa pname='Delivery' pimage = 'delivery' ptype = {supplyDataType} step = "5" pcolor = {"#E8E4FF"}/>
                <Hexa pname='CustomerSupport' pimage = 'customer' ptype = {supplyDataType} step = "6" pcolor = {"#3C317D"}/>
            </div> 

            
        </div>
    </Fragment>
    
  )
}
