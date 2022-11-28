// Java script file for interactive map on our home page.
import React, { useEffect, useRef, useState } from 'react'
// import * as d3 from 'd3'; 
import { select, hierarchy, tree, linkHorizontal } from 'd3';
import useResizeObserver from "../../useResizeObserver.js";
import Popup from "./popup";
import "./popup-style.css"
import "./style.css"

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
 
function Map({ data }){
    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions =  useResizeObserver(wrapperRef); // rray with width ad height
    
    const previouslyRenderedData = usePrevious(data);
    const [show, setShow] = useState(false);


    useEffect(() => {
        const svg = select(svgRef.current);
       
        // use dimensions from useResizeObserver,
    // but use getBoundingClientRect on initial render
    // (dimensions are null for the first render)
    const { width, height } =
    dimensions || wrapperRef.current.getBoundingClientRect();

        const root = hierarchy(data);

        const treeLayout = tree().size([height, width]);
     
        
        const linkGenerator = linkHorizontal()
            
                .x(link => link.y)
                .y(link => link.x);
        treeLayout(root);
        // nodes
        svg.selectAll('.node')
            .data(root.descendants())
            .join('circle')
            .attr('class','node')
            .attr('r', 4)
            .attr('fill', 'black')
            .attr("cx", node => node.y)
            .attr("cy", node => node.x);
          
      console.log(svg.selectAll('.node').attr('cx'));
        console.log(svg.selectAll('.node'));

        // links
        svg
            .selectAll('.link')
            .data(root.links())
            .join('path')
            .attr("class",'link')
            
            .attr('d', linkGenerator)
            .attr('fill', 'none')
            .attr('stroke', 'black')
            
        // labels
        svg
            .selectAll('.label')
            .data(root.descendants())
            .join('text')
            .attr("class",'label')
            .text(node => node.data.name)
            .attr('text-anchor', 'middle')
            .attr('font-size', 24)
            .attr("x", node => node.y)
            .attr("y", node => node.x-1);

/*           
            .attr("cx", node => node.x)
            .attr("cy", node => node.y); */
        
    }, [data, dimensions]);

    const handleClick = event => {
      setShow(!show)
    };
    
    return (
       
        <div id="test" ref={wrapperRef} style={{marginBottom:"2rem"}}>
             <svg ref={svgRef}></svg> 
            <svg class height="110" width="300" onClick={handleClick}>
              <polygon class="hex-step" points="300,150 225,280 75,280 0,150 75,20 225,20" fill='white' stroke="black"  stroke-width='5'></polygon>
           </svg>

           <svg class height="110" width="300" onClick={handleClick}>
              <polygon class="hex-step" points="300,150 225,280 75,280 0,150 75,20 225,20" fill='white' stroke="black"  stroke-width='5'></polygon>
           </svg>

             {/* show component on click*/}
            {show && <Popup></Popup>} */
        </div>
    );

    
}
/* function Step(props){
    return <svg height="110" width="300">
    <polygon points="50 3,100 28,100 75, 50 100,3 75,3 25" 
    stroke="black" 
   fill="white"strokeWidth="5" />
</svg>
} */


  // var steps = ["Planning", "Supplying"]; /*array to store main supply chain steps for geenrating hexagons for each step*/


export default Map;
