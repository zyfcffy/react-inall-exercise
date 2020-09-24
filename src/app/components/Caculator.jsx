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
                    <button className="btn btn-warning" type="button" value="+" onClick={this.handleClick}>+</button>
                    <button className="btn btn-warning" type="button" value="-" onClick={this.handleClick}>-</button>
                    <button className="btn btn-warning" type="button" value="*" onClick={this.handleClick}>*</button>
                    <br/>
                    <button className="btn btn-primary" type="button" value="7" onClick={this.handleClick}>7</button>
                    <button className="btn btn-primary" type="button" value="8" onClick={this.handleClick}>8</button>
                    <button className="btn btn-primary" type="button" value="9" onClick={this.handleClick}>9</button>
                    <br/>
                    <button className="btn btn-primary" type="button" value="4" onClick={this.handleClick}>4</button>
                    <button className="btn btn-primary" type="button" value="5" onClick={this.handleClick}>5</button>
                    <button className="btn btn-primary" type="button" value="6" onClick={this.handleClick}>6</button>
                    <br/>
                    <button className="btn btn-primary" type="button" value="1" onClick={this.handleClick}>1</button>
                    <button className="btn btn-primary" type="button" value="2" onClick={this.handleClick}>2</button>
                    <button className="btn btn-primary" type="button" value="3" onClick={this.handleClick}>3</button>
                    <br/>
                    <button className="btn btn-primary" type="button" value="0" onClick={this.handleClick}>0</button>
                    <button className="btn btn-danger" type="button" onClick={()=>this.setState({data:''})}>Clear</button>
                    <button className="btn btn-success" type="button" onClick={this.handleCaculate}>=</button>
                </div>
                <Link to="/">返回主页</Link>
            </div>
        )
    }

}
export default Caculator;