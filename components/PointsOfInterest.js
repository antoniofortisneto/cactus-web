import React from 'react';

import { PointOfInterest } from './PointOfInterest.js';

let PointsOfInterest = ({dbPoints = {}, activePoint, setActivePoint, dimensions}) => {
    let pointList = [];
    Object.keys(dbPoints).forEach(serialKey => {
        let point = dbPoints[serialKey];
        let effect = (point === activePoint) ? "bg-sky-100" : "";
        pointList.push(
            <PointOfInterest
                key={serialKey}
                effect={effect}                
                point={point}
                setActivePoint={setActivePoint}
                dimensions={dimensions}
            />
        )
    });
        
    return (
        <div
            id="PointsOfInterest"
            className='relative'
        >
            {pointList}
        </div>
    );   
}

export { PointsOfInterest }
