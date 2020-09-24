import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './home.less';
import './calculator.less';
import Calculators from "./Calculators"

class Calculator extends Component{
    render(){
        return(
            <div className="main">
                <div className="calculator">
                    <h1>在线计算器</h1>
                    <Calculators/>
                    <Link to="/" className="backHome">回到主页</Link>
                </div>
            </div>
        )
    }
}

export default Calculator;