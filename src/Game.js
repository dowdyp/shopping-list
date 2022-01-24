import React from 'react';
import Board from './Board';
import axios from 'axios';

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {message: '', length: 0, isActive: false};
        this.handleButtonOnClick = this.handleButtonOnClick.bind(this)
    }

    componentDidMount() {
        axios.get("https://catfact.ninja/fact")
            .then(res => this.setState({message: res.data.fact, length: res.data.length}))
            .catch(err => console.log(console.log(err)))
    }

    handleButtonOnClick() {
        this.setState({isActive: !this.state.isActive})
        console.log("click")
    }

    render() {
        const {message, length} = this.state;
        return (
            <div className="game">
                <h2>Is button active? {this.state.isActive.toString()}</h2>
                <br></br>
                {this.state.isActive ? <h1>"Button is active"</h1> : null}
                <button onClick={this.handleButtonOnClick}>toggle the text</button> 
                <br />
                <h6>{ message }</h6>
                <br />
                <h6>{ length }</h6>
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}
  
export default Game;