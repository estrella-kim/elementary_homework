import React from 'react';
import '../../css/watch.css';

class Time extends React.Component{
    constructor() {
        super();
        this.state = {
            presentTime : new Date().toLocaleTimeString(),
            color : 'rgb('+ Math.ceil(Math.random() * 257) +',' + Math.ceil(Math.random() * 257) +','+ Math.ceil(Math.random() * 257)+')',
            play : false
        }
    }
    beginInerval() {
        this.continue = setInterval( () =>{
            this.setState((state) => {
                return{
                    presentTime : new Date().toLocaleTimeString(),
                    color : 'rgb('+ Math.ceil(Math.random() * 257) +',' + Math.ceil(Math.random() * 257) +','+ Math.ceil(Math.random() * 257)+')'
                }
            })
        }, 1000)
    }

    componentDidMount(){
        this.beginInerval();
    }

    watch() {
        this.setState((state) => {
            return{
                play : !this.state.play
            }
        })
        if(this.state.play){
           this.beginInerval();
        }else{
            clearInterval(this.continue);
        }

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

export default Time;