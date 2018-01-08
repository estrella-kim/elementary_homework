import React from 'react';
import '../../css/watch.css';
import randomColor from '../../util/random_util/randomColor';

class Time extends React.Component{
    constructor () {
        super();
        this.state = Time.setTime();
        this.continue = null; //뜬금없이 등장하면 당황스러우니 초기화해준다.
    }

    componentDidMount () {
        this.beginTime();
    }
    //this 가 찍는건 time 을 객체로 반환해주는데, {굳이 한 과정을 추가하는 것보다ㅏ} time class에서 setTime을 선언.
    static setTime () {
        return {
            presentTime : new Date().toLocaleTimeString(),
            color : randomColor() //따로 빼기
        }
    }
    beginTime () {
        this.continue = setInterval( () => {
            this.setState(Time.setTime()); //react는 새로운 객체가0 계속 생성된다..  10분동안 한다면 600개의 관계없는 객체가 생성된다. 만일 더이상 react에서 더이상 참조하지 않으면 브라우저의 가비지 컬렉ㅌ터가 해당 객체를 삭제해줄것이다.
        }, 1000)
    }

    toggle() {
        // state인자는 쓰일 때 넣어주는 게
        this.setState((state) => {
            return {
                play : !state.play
            }
        })
        if(this.state.play) {
           this.beginTime();
        }else {
            clearInterval(this.continue);
        }

    }

    render() {
        return (
            <div className ="time" style={{ color: this.state.color }}>
                <div className ="time-view">
                    { this.state.presentTime }
                </div>
                <span className = "time-controller">
                     <button type="button" className="play" onClick={() => this.toggle()}>
                         { !!this.state.play ? 'begin' : 'stop'}
                     </button>
                </span>
            </div>
        )
    }
}

export default Time;