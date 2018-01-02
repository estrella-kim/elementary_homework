import React from 'react';
import '../../css/watch.css';

class Watch extends React.Component{
    constructor() {
        super();
        this.state = {
            presentTime : new Date().toLocaleTimeString()
        }
    }
    play() {
        this.setState((state) => {
            state.presentTime += 'PM';
            setInterval(function() {
                state.presentTime =  new Date().toLocaleTimeString()
            }, 1000)
        }, console.log('success'))
    }
    stop() {
        this.setState(() => {
            clearInterval(this.play);
        })
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