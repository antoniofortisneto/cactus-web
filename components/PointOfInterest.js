import { FingerPrintIcon } from "@heroicons/react/24/solid"
import React from 'react';

let PointOfInterest = ({effect, point, setActivePoint, dimensions}) => {
    if(!point) { return; }
    const coordinates = {
        left: `${point.coordX * dimensions.width / 100}px`,
        top: `${point.coordY * dimensions.height / 100}px`,
    };
    // didn't work :(
    // const coordinates_tailwindcss = `
    //     left-[${Math.floor(point.coordX * dimensions.width / 100)}px]
    //     top-[${Math.floor(point.coordY * dimensions.height / 100)}px]
    // `;
    // also didn't work with %
    let onClick = (_) => setActivePoint(point);
    return (
        <div
            className={`
                rounded-full
                absolute
                w-5 h-5 md:w-10 md:h-10                
                ${effect}
            `}
            onClick={onClick}
            style={coordinates}
        >
            <FingerPrintIcon className={`                
                w-full h-full
                fill-blue-600 stroke-blue-600 stroke-0
            `} />
        </div>
    );
}

export { PointOfInterest }