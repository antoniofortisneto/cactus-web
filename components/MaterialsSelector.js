import React, { Component } from 'react';

let MaterialsSelector = ({materialsObjs, toggleActiveLayers}) => {
    let materialElement = [];
    for(const [matKey, matValue] of Object.entries(materialsObjs)) {
        let matPreview = matValue.materialPreview;
        materialElement.push(
            <div
                key={matKey}
                className="relative flex items-center justify-center 
                    border-black bg-white
                    hover:w-20 md:hover:w-40
                    w-10 h-10 md:w-20 md:h-20"
                onClick={(e) => { toggleActiveLayers(matValue.points[0], matValue.layers) }}
            >
                <img className='absolute' src={matPreview} />
            </div>
        );
    };
    let selectorScale = materialElement.length == 0 ? "scale-0" : "scale-100";
    return (
        <div
            id="MaterialsSelector"
            className={`fixed
                top-5 left-5
                grid grid-flow-col grid-rows-1 grid-cols-${materialElement.lenght}
                gap-2 p-2 md:gap-4 md:p-4
                ${selectorScale}
                    bg-gray-400 shadow-lg`}
        >
            {materialElement}
        </div>
    )
}

export { MaterialsSelector }