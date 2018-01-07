import React from 'react';
import '../../css/watch.css';

class Time extends React.Component{
    constructor() {
        super();
        this.state = Time.setTime();
        this.continue = null; //뜬금없이 등장하면 당황스러우니 초기화해준다.
    }
    //this 가 찍는건 time 을 객체로 반환해주는데, {굳이 한 과정을 추가하는 것보다ㅏ} time파일에서 setTime을 선언.
    static setTime () {
        return{
            presentTime : new Date().toLocaleTimeString(),
            color : 'rgb('+ Math.ceil(Math.random() * 257) +',' + Math.ceil(Math.random() * 257) +','+ Math.ceil(Math.random() * 257)+')' //따로 빼기
        }
    }
    beginTime() {
        this.continue = setInterval( () =>{
            this.setState(Time.setTime()); //react는 새로운 객체가 계속 생성된다..  10분동안 한다면 600개의 관계없는 객체가 생성된다. 만일 더이상 react에서 더이상 참조하지 않으면 브라우저의 가비지 컬렉ㅌ터가 해당 객체를 삭제해줄것이다.
        }, 1000)
    }
    componentDidMount(){
        this.beginTime();
    }

    watch() {
        // state인자는 쓰일 때 넣어주는 게
        this.setState((state) => {
            return{
                play : !state.play
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