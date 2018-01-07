import React from 'react';
import '../../css/watch.css';

class Time extends React.Component{
    constructor() {
        super();
        this.state = this.setTime();
    }
    setTime () {
        return{
            presentTime : new Date().toLocaleTimeString(),
            color : 'rgb('+ Math.ceil(Math.random() * 257) +',' + Math.ceil(Math.random() * 257) +','+ Math.ceil(Math.random() * 257)+')'
        }
    }
    beginTime() {
        this.continue = setInterval( () =>{
            this.setState((state) => this.setTime())
        }, 1000)
    }
    componentDidMount(){
        this.beginTime();
    }

    watch() {
        this.setState((state) => {
            return{
                play : !this.state.play
            }
        })
        if(this.state.play){
           this.beginTime();
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