import React, {Component} from 'react';
import './app.less';
import './timer.less';
import {Link} from "react-router-dom";

class Timer extends Component {
    state ={
        time:0,
        btnDisable:false,
    }
    handleSetTimeChange = (e) => {
        this.setState({
            time: e.target.value,
        });
    }
    render() {
        let timeChange;
        let ti = this.state.time;
        //关键在于用ti取代time进行计算和判断，因为time在render里不断刷新，但在方法中不会进行刷新
        const clock =()=>{
            if (ti > 0) {
                //当ti>0时执行更新方法
                ti = ti - 1;
                this.setState({
                    time: ti,
                    btnContent: ti + "s之内不能再次发送验证码",
                });
                console.log(ti);
            }else{
                //当ti=0时执行终止循环方法
                clearInterval(timeChange);
                this.setState({
                    btnDisable: false,
                    time: this.state.time,
                });
            }
        };

        const sendCode = () =>{
            this.setState({
                btnDisable: true,
            });
            //每隔一秒执行一次clock方法
            timeChange = setInterval(clock,1000);
        };
        return (
            <div className="main">

                <div className="timer">
                    <h1>在线倒计时器</h1>
                    <div className="timer_control">
                        <span>设置时间</span>
                        <input type="text" placeholder="0" value={this.state.time} onChange={(e)=>this.handleSetTimeChange(e)}/>
                        <div className="submit_click">
                            <input className="submit" type="button" value = "Start"  onClick={sendCode} disabled={this.state.btnDisable}/>
                        </div>
                    </div>
                    <div className="timer_show">
                        <input type="text" placeholder="0" readOnly="readOnly"/>
                    </div>
                    <Link to="/" id="backHome" className="backHome">回到主页</Link>
                </div>

            </div>
        )
    }
}
export default Timer;