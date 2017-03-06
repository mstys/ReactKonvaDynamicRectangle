/**
 * Created by michal.stys on 31.01.2017.
 */
import React, {Component} from 'react';
import CanvasElements from '../CanvasElements/CanvasElements';
import MyRectangle from '../MyRectangle/MyRectangle';

const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 500;

class Canvas extends Component {
    constructor() {
        super();

        this.state = {
            rectangle: [{
                key: 0,
                width: 10,
                height: 30,
                x: 10,
                y: 0,
                color: 'red'
            }]
        }
    }

    createRectangle() {
        let newRectangle = {};

        //rand number Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        newRectangle.width = Math.floor(Math.random() * (100 - 25 + 1)) + 25;
        newRectangle.height = Math.floor(Math.random() * (100 - 25 + 1)) + 25;
        newRectangle.x = Math.floor(Math.random() * (CANVAS_WIDTH - 10 + 1)) + 10;
        newRectangle.y = Math.floor(Math.random() * (CANVAS_HEIGHT - 10 + 1)) + 10;
        newRectangle.color = 'red';

        let rectangleFromState = [...this.state.rectangle];
        rectangleFromState.push(newRectangle);

        this.setState({
            rectangle: rectangleFromState
        });
    }


    draw() {
        return this.state.rectangle.map((rect, key) => (
                <MyRectangle
                    key={`myRect-${key}`}
                    id={key}
                    height={rect.height}
                    width={rect.width}
                    x={rect.x}
                    y={rect.y}
                    color={rect.color}
                />
            )
        )
    }

    render() {
        return (
            <div>
                <CanvasElements width={CANVAS_WIDTH} height={CANVAS_HEIGHT}>
                    {
                        this.draw()
                    }
                </CanvasElements>
                <button onClick={() => this.createRectangle()}>Create rectangle</button>
            </div>
        )
    }
}

export default Canvas
