import React, { Component } from 'react';

class BackgroundImage extends Component {
    constructor() {
        super();
        this.imageRef = React.createRef();
        this.imageUrl = "https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/base.jpeg?alt=media&token=358ccdea-3cf9-4751-ae48-4631e4700554";
    }

    componentDidMount() {
        const img = this.imageRef.current;
        this.handleBackgroundLoaded(img);
    }

    handleBackgroundLoaded(img) {
        if (!img || !img.complete) { return; }
        let dimensions = {
            height: img.clientHeight,
            width: img.clientWidth,
        };
        this.props.setBackgroundDimensions(dimensions);    
    }
    
    render() {
        return (
            <img
                id="Background"
                className='absolute'
                ref={this.imageRef}
                onLoad={() => this.handleBackgroundLoaded(this.imageRef.current)}
                onChange={(e) => console.log(e)}
                src={this.imageUrl}
            />
        );
    }
}

export { BackgroundImage };