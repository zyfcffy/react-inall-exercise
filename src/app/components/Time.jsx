import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Time extends  Component {
    state= {
        event: "Start",
        time: 0,
    }

    changeTime = (event) => {
        this.setState({ 
            time:event.target.value,
         });
        
    }

    startTime = () => {
        this.setState({ 
            value: `${this.state.time}Seonds`
         });
         let interval = setInterval(() => {
             this.setState({ 
                 time:this.state.time-1,
                 value: `${this.state.time-1}Seonds`
             })
             if(time === 0){
                 clearInterval(interval)
                 this.setState({ 
                     value: `END`
                 })
             }
         },1000)     
    }

    render() {
        return (
            <section className="time">
                <h1 className="timeTitle">在线计时器</h1>
                <section className = 'timeBody'>
                    <span>设置时间</span>
                    <input type="text" onChange={this.changeTime} />
                </section>
                <button className="timeButton" onClick={()=>this.startTime()}>Start</button>
                <div className="timeScreen">
                    <input type="text" value={this.state.value} />
                </div>
                <Link to="/">返回主页</Link>
            </section>
        )
    }
}

export default Time;