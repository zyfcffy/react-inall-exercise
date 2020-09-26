import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './Caculator.less'
import {Link} from 'react-router-dom';

class Caculator extends  Component {
    state = {
        data:'',
        buttonValue: [
            ["+", "-", "*"],
            ["7", "8", "9"],
            ["4", "5", "6"],
            ["1", "2", "3"],
            ["0"]
        ],
    }

    handleClick = (event) =>{
        this.setState({
            data : this.state.data + event.target.value, 
        })
    }

    handleCaculate = () =>{
        const data = this.state.data;
        let number1, number2, operation;
        for(let i = 0; i < data.length; i++){
            if(data[i]=="+" || data[i]=="-" || data[i]=="*"){
                operation = data[i];
                number1 = +data.substr(0,i);
                number2 = +data.substr(i+1,data.length);
            }
        }
        switch(operation) {
            case "+" :this.setState({data: number1 + number2});break;
            case "-" :this.setState({data: number1 - number2});break;
            case "*" :this.setState({data: number1 * number2});break;
        }
    }



    render(){
        return (
            <div className="container">
                <h2>在线计算器</h2>
                <div className = "caculator">
                    <textarea className="result" value={this.state.data} readOnly='readonly'></textarea>
                    <br/>
                    {this.state.buttonValue.map(group => group.map(value => 
                    <button className="btn btn-warning" type="button" value={value} onClick={this.handleClick}>{value}</button>
                        )).join((<br/>))}
                    <button className="btn btn-danger" type="button" onClick={()=>this.setState({data:''})}>Clear</button>
                    <button className="btn btn-success" type="button" onClick={this.handleCaculate}>=</button>
                </div>
                <Link to="/">返回主页</Link>
            </div>
        )
    }

}
export default Caculator;