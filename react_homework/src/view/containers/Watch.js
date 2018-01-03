import React from 'react';
import '../../css/watch.css';

class Watch extends React.Component{
    constructor() {
        super();
        this.state = {
            presentTime : new Date().toLocaleTimeString(),
            color : 'rgb('+ Math.ceil(Math.random() * 257) +',' + Math.ceil(Math.random() * 257) +','+ Math.ceil(Math.random() * 257)+')'
        }
        this.continue = setInterval( () =>{
            this.setState((state) => {
                state.presentTime =  new Date().toLocaleTimeString();
                state.color = 'rgb('+ Math.ceil(Math.random() * 257) +',' + Math.ceil(Math.random() * 257) +','+ Math.ceil(Math.random() * 257)+')';
                return state;
            })
        }, 1000)
        console.log(this.state.test)
    }
    play() {
        this.continue = setInterval( () =>{
            this.setState((state) => {
                state.presentTime =  new Date().toLocaleTimeString()
                state.color = 'rgb('+ Math.ceil(Math.random() * 257) +',' + Math.ceil(Math.random() * 257) +','+ Math.ceil(Math.random() * 257)+')'
                return state;
            })
        }, 1000)
    }
    stop() {
        clearInterval(this.continue)
    }

    render() {
        return (
            <div className ="watch" style={{ backgroundColor: this.state.color }}>
                <div className ="watch-view">
                    { this.state.presentTime }
                </div>
                <span className = "watch-controller">
                    <button type="button" className="play" onClick={() => this.play()} >play</button>
                    <button type="button" className="stop" onClick={() => this.stop()}>stop</button>
                </span>
            </div>
        )
    }
}

export default Watch;