import React, {Component} from 'react';
import titleimg from "../images/hero-image.png";

export default class Nav extends Component{
    render() {
        return (
            <div className="title" style={{backgroundImage:`url(${titleimg})`}}>
                    在线实用工具
            </div>
        )
    }
}