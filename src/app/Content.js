import React, {Component} from 'react';
import './home.less';
import {Link} from 'react-router-dom';
import calculatorimg from "../images/calculator.png";
import timerimg from "../images/timer.png";

export default class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="item">
                    <img src={calculatorimg}/>
                    <p className="option">
                        <Link to="/calculator">计算器</Link>
                    </p>

                </div>
                <div className="item">
                    <img src={timerimg}/>
                    <p className="option">
                        <Link to="/timer">倒计时器</Link>
                    </p>
                </div>
            </div>
        )
    }

}