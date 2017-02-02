/**
 * Created by michal.stys on 24.01.2017.
 */
import React, {Component} from 'react';
import Konva from 'konva';
import {Rect} from 'react-konva';
import '../../styles/App.css';

class MyRectangle extends Component {

    constructor() {

        super();

        this.state = {
            color: '',
            x: 0,
            y: 0
        };
    }

    componentDidMount() {
        this.setState({
            color: this.props.color,
            x: this.props.x,
            y: this.props.y
        })
    }

    handleDrag(id) {

        // get new position of dragged element
        const x = this.refs[id].attrs.x;
        const y = this.refs[id].attrs.y;

        this.setState({
            x,
            y
        })
    }

    handleClick() {
        this.setState({
            color: Konva.Util.getRandomColor()
        });
    }

    render() {
        return (
            <Rect
                key={`rect-${this.props.id}`}
                ref={this.props.id}
                width={this.props.width}
                height={this.props.height}
                x={this.state.x}
                y={this.state.y}
                fill={this.state.color}
                draggable="true"
                onDragEnd={()=>this.handleDrag(this.props.id)}
                onClick={()=>this.handleClick()}
            />
        );
    }
}
export default MyRectangle;
