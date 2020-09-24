import React, {Component} from 'react';

import './calculator.less';

class Calculators extends Component{
    state = {
        value:" ",
        result:0,
        buttonValue:[1,2,3,4,5,6,7,8,9,0],
    }
    handleClick = (e)=>{
        //
        // if (!Number.isNaN(Number(e.target.value))) {
        //     this.setState(
        //         {value: e.target.value}
        //     )
        // }
        if ((e.target.value == "x")) e.target.value = "*";
        this.setState(
            {value:this.state.value +e.target.value}
        )
        console.log(this.state.value +e.target.value);
    }
    handleCalculate = () => {
        const result = eval(this.state.value)
        this.setState(
            {result:result}
        )
        console.log(eval(this.state.value))
    }
    handleClear = () => {
        this.setState(
            {result:0,
            value:" "}
        )
    }
    render(){
        return(
            <div className="calculators">
                <div className="results">
                    <input id="result" type="text" placeholder="0" readOnly="readOnly" value={this.state.result}/>
                </div>
                <input className="calItems operate" onClick={(e)=>this.handleClick(e)} value="+" type="button"/>
                <input className="calItems operate" onClick={(e)=>this.handleClick(e)} value="-" type="button"/>
                <input className="calItems operate" onClick={(e)=>this.handleClick(e)} id="X" value="x" type="button"/>
                {this.state.buttonValue.map(item => (
                    <input key={item} value={item} onClick={(e)=>this.handleClick(e)}  className="calItems" type="button"/>
                ))}
                <input className="calItems clear" onClick={this.handleClear} value="Clear" type="button"/>
                <input className="calItems equal" onClick={this.handleCalculate} value="=" type="button"/>
            </div>
        )
    }
}

export default Calculators;