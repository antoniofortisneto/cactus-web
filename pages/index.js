import React, { Component } from 'react';

import { loadData } from '../components/loadDatabase.js'
import { BackgroundImage } from '../components/BackgroundImage.js';
import { PointsOfInterest } from "../components/PointsOfInterest.js"
import { Materials } from "../components/Materials.js"

class Home extends Component {
    constructor() {
        super();
        this.state = {
            /// Object that contains the points of interest in the main picture
            dbPoints: undefined,
            /// Object that contains the materials available for overlapping the main picture
            dbMaterials: undefined,
            /// User selected point
            activePoint: null,
            /// Materials activated (only one per point of interest)
            activeLayers: {},
            /// Indicated when the background image has been loaded.
            /// @see https://stackoverflow.com/q/39777833
            backgroundDimensions: undefined
        };
    }

    async componentDidMount() {
        const [dbPoints, dbMaterials] = await loadData();
        let newState = this.state;
        newState.dbPoints = dbPoints;
        newState.dbMaterials = dbMaterials;
        // console.log(dbPoints);
        // console.log(dbMaterials);
        this.setState(newState);
    }

    setActivePoint(point) {
        let newState = this.state;
        newState.activePoint = (newState.activePoint !== point) ? point : null;
        this.setState(newState);
    }

    toggleActiveLayers(pointKey, newLayer) {
        let newState = this.state;
        let activeLayers = newState.activeLayers;
        if(!Object.keys(activeLayers).includes(pointKey)) {
            activeLayers[pointKey] = newLayer;
        } else {
            let activeLayer = activeLayers[pointKey];
            if(activeLayer == newLayer) {
                delete activeLayers[pointKey];
            } else {
                activeLayers[pointKey] = newLayer;
            }
        }
        this.setState(newState);
    }

    setBackgroundDimensions(dimensions) {
        if(this.state.backgroundDimensions || !dimensions) { return; }
        this.state.backgroundDimensions = dimensions;
        this.setState(this.state);
    }

    render() {
        let setBackgroundDimensionsBind = (dimensions) => this.setBackgroundDimensions(dimensions);    
        let toggleActiveLayersBind = (pointKey, layer) => this.toggleActiveLayers(pointKey, layer);
        let setActivePointBind = (point) => this.setActivePoint(point);
        
        return (
            <div className='h-screen w-screen'>
                <BackgroundImage setBackgroundDimensions={setBackgroundDimensionsBind} />
                <Materials
                    activePoint={this.state.activePoint}
                    activeLayers={this.state.activeLayers}
                    toggleActiveLayers={toggleActiveLayersBind}
                    dbMaterials={this.state.dbMaterials}
                />
                <PointsOfInterest
                    dbPoints={this.state.dbPoints}
                    activePoint={this.state.activePoint}
                    setActivePoint={setActivePointBind}
                    dimensions={this.state.backgroundDimensions}
                />
            </div>      
        );
    }
}

//<Layers activeLayers={this.state.activeLayers}>

export default Home;
