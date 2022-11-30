import React, { useState, useEffect, useRef } from 'react';
import './style.css'
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

import Hexa from '../../components/homeComponents/hexa';

export default function HomePage() {
    const [token, setToken] = useState(null);
    const [supplyDataType, setSupplyDataType] = useState(null);

    useEffect(() => {
        // get the authorization token from ls
        setToken(localStorage.getItem('token'))
      });

    // const onSupplyTypeChange = (e) => {
    //     e.preventDefault();
    //     setSupplyChainSelect(e.value)
    //     setSupplyDataType(supplyChainSelect.name)
    //     alert(supplyDataType)
        
    // }

    const setAutomotive = (e) =>{
        e.preventDefault();
        setSupplyDataType("automotive")
    }
    const setTechnology = (e) =>{
        e.preventDefault();
        setSupplyDataType("technology")
    }

  return (
    <div className='HomeContainer'>
        <div className='TypeCard'>
            <Button id="type-btn" className="p-button-rounded p-button-outlined go-btn" 
                    aria-label="Submit"
                    label='Automotive' onClick={setAutomotive}/>
            <Button id="type-btn" className="p-button-rounded p-button-outlined go-btn" 
                    aria-label="Submit"
                    label='Technology' onClick={setTechnology}/>
        </div>

        <div className='MainContentCard'>
            <Hexa pname='Planning' pimage = 'planning' ptype = {supplyDataType} step = "1"/>
            <Hexa pname='Supplying' pimage = 'supply'  ptype = {supplyDataType} step = "2"/>
            <Hexa pname='Inventory Management' pimage = 'inventory' ptype = {supplyDataType} step = "3"/>
            <Hexa pname='Manufacturing' pimage = 'manufacturing' ptype = {supplyDataType} step = "4"/>
            <Hexa pname='Delivery' pimage = 'delivery' ptype = {supplyDataType} step = "5"/>
            <Hexa pname='CustomerSupport' pimage = 'customer' ptype = {supplyDataType} step = "6"/>
        </div> 

        
    </div>
  )
}
