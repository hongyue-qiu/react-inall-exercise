import React, {Component} from 'react';
import './app.less';
import './timer.less';
import {Link} from "react-router-dom";

class Timer extends Component {
    render() {
        return (
            <div className="main">

                <div className="timer">
                    <h1>在线倒计时器</h1>

                    <Link to="/" className="backHome">回到主页</Link>
                </div>

            </div>
        )
    }
}
export default Timer;