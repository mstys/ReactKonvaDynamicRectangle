import React, {Component} from 'react';
import {Layer, Stage} from 'react-konva';

class CanvasElements extends Component {

    render() {
        return (
            <Stage width={this.props.width} height={this.props.height}>
                <Layer>
                    {
                        this.props.children
                    }
                </Layer>
            </Stage>
        );
    }
}

export default CanvasElements;
