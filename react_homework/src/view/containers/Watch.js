import React from 'react';
import '../../css/watch.css';

class Watch extends React.Component{
    constructor() {
        super();
        this.state = {
            presentTime : new Date().toLocaleTimeString(),
            color : 'rgb('+ Math.ceil(Math.random() * 257) +',' + Math.ceil(Math.random() * 257) +','+ Math.ceil(Math.random() * 257)+')',
            play : true
        }
        this.watch();
    }
    watch() {
        if(this.state.play){
            this.continue = setInterval( () =>{
                this.setState((state) => {
                    state.presentTime = new Date().toLocaleTimeString();
                    state.color = 'rgb('+ Math.ceil(Math.random() * 257) +',' + Math.ceil(Math.random() * 257) +','+ Math.ceil(Math.random() * 257)+')';
                    return state;
                })
            }, 1000)
        }else{
            clearInterval(this.continue);
        }
        this.setState((state) => {
            state.play = !state.play;
            return state.play;
        })
    }
    render() {
        return (
            <div className ="watch" style={{ color: this.state.color }}>
                <div className ="watch-view">
                    { this.state.presentTime }
                </div>
                <span className = "watch-controller">
                     <button type="button" className="play" onClick={() => this.watch()}>
                         { !!this.state.play ? 'begin' : 'stop'}
                     </button>
                </span>
            </div>
        )
    }
}

export default Watch;