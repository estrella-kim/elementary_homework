import React from 'react';
import '../../css/watch.css';

class Watch extends React.Component{
    constructor() {
        super();
        this.state = {
            presentTime : new Date().toLocaleTimeString()
        }
        this.continue = setInterval( () =>{
            this.setState((state) => {
                state.presentTime =  new Date().toLocaleTimeString()
                return state.presentTime;
            })
        }, 1000)
    }
    play() {
        this.continue = setInterval( () =>{
            this.setState((state) => {
                state.presentTime =  new Date().toLocaleTimeString()
                return state.presentTime;
            })
        }, 1000)
    }
    stop() {
        clearInterval(this.continue)
    }

    render() {
        return (
            <div className ="watch">
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