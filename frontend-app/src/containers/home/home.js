// Java script file for interactive map on our home page.
import React, { Component, useState, useEffect, useRef } from "react";
import Map from "./map";
import * as d3 from "d3";
import "./style.css";
import Popup from "./popup";
import "./popup-style.css"
import Navbar from "../navbar/navbar";



const initialData = {
  name: "Automotive",
  children: [
    {
      name: "Planning",
      
    },
    {
      name: "Supply",
    },
    {
      name: "Delivery",
    },
    {
      name: "Customer Service",
    },
  ],
  
};

function Home() {
  const [data, setData] = useState(initialData);

  return (
    <React.Fragment>
    <Navbar></Navbar>
      <Map data={data} />
      <button onClick={() => setData(initialData.children[0])}>
        update data
      </button>
    
    </React.Fragment>
  );
}

export default Home;
