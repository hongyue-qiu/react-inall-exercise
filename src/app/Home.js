import React from 'react';
import './home.less';
import Nav from "./Nav";
import Content from "./Content";

const Home = () => {
  return (<div className="home">
    <div className="main">
      <Nav/>
      <Content />
    </div>
  </div>);
};

export default Home;