import React from 'react';
import '../../css/watch.css';

class Watch extends React.Component{
    constructor() {
        super();
        this.state = {
            presentTime : new Date().toLocaleTimeString(),
            color : 'rgb('+ Math.ceil(Math.random() * 257) +',' + Math.ceil(Math.random() * 257) +','+ Math.ceil(Math.random() * 257)+')'
        }
        this.play();
        this.clicked = true;
    }
    play() {
        if(!this.clicked){
            this.continue = setInterval( () =>{
                this.setState((state) => {
                    state.presentTime =  new Date().toLocaleTimeString();
                    state.color = 'rgba('+ Math.ceil(Math.random() * 257) +',' + Math.ceil(Math.random() * 257) +','+ Math.ceil(Math.random() * 257)+','+ Math.random()+')';
                    return state;
                })
            }, 1000)
            this.clicked = true;
        }
        return;
    }
    stop() {
        if(!!this.clicked){
            clearInterval(this.continue);
            this.clicked = false;
        }
    }

    render() {
        return (
            <div className ="watch" style={{ backgroundColor: this.state.color }}>
                <div className ="watch-view">
                    { this.state.presentTime }
                </div>
                <span className = "watch-controller">
                    <button type="button" className="play" onClick={() => this.play()}>play</button>
                    <button type="button" className="stop" onClick={() => this.stop()}>stop</button>
                </span>
            </div>
        )
    }
}

export default Watch;