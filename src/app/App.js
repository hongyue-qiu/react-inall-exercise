import React, {Component} from 'react';
import './app.less';
import {Route,Switch,BrowserRouter,Link} from "react-router-dom";
import Home from "./Home";
import Calculator from "./Calculator";
import Timer from "./Timer";
import Nav from "./Nav.js"
import titleimg from "../images/hero-image.png";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
            <div className="header">
                <Link className="nav_link" to="/">HOME</Link>
                <Link className="nav_link" to="/calculator">在线计算器</Link>
                <Link className="nav_link" to="/timer">在线计时器</Link>
            </div>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/calculator' component={Calculator}/>
                <Route exact path='/timer' component={Timer}/>
            </Switch>


        </BrowserRouter>

      </div>
    );
  }
}

export default App;
