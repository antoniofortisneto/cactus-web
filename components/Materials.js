import React, { Component } from 'react';

import { MaterialsLayers } from './MaterialsLayers.js';
import { MaterialsSelector } from './MaterialsSelector.js';

let Materials = ({activePoint, activeLayers, toggleActiveLayers, dbMaterials}) => {
    let materialKeys = activePoint ? activePoint.materials : [];
    let materialsObjs = {};
    for(const key of materialKeys) {
        materialsObjs[key] = dbMaterials[key];
    };
    return (
        <div
            id="Materials"
            className='flex'
        >
            <MaterialsLayers activeLayers={activeLayers} />
            <MaterialsSelector
                materialsObjs={materialsObjs}
                toggleActiveLayers={toggleActiveLayers}
            />
        </div>
    );
};

export { Materials }