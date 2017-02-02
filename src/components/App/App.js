import React, {Component} from 'react';
import Canvas from '../Canvas/Canvas';
import logo from '../../logo.svg';
import '../../styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Draw rectangles on canvas</h2>
                </div>
                <div className="Canvas">
                    <Canvas />
                </div>
            </div>
        );
    }
}

export default App;
