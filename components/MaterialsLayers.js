import React from 'react';

let MaterialsLayers = ({activeLayers}) => {
    let layers = [];
    for(let [_, layer] of Object.entries(activeLayers)) {
        for(let [layerKey, layerValue] of Object.entries(layer)) {
            layers.push(
                <img className='absolute' key={layerKey} src={layerValue} />
            );    
        }
    }
    return (
        <div id='MaterialsLayers'>
            {layers}
        </div>
    );
}

export { MaterialsLayers };
