// ode from PluralSight

import React, {useEffect, useRef} from 'react'
import * as d3 from 'd3'; 


// react hook for allowing d3 t interact with dm
  export const useD3 = (renderChartFn, dependencies) => {
    const ref = React.useRef();
    React.useEffect(() => {
        renderChartFn(d3.select(ref.current));
        return () => {};
    }, dependencies);
    return ref;
  }