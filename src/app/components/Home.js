import React from 'react';
import './Home.less';
import {Link} from "react-router-dom";

const Home = () => {
  return (
  <div className="home">
    <div className="title">
      <p>在线使用工具</p>
    </div>
    <div className="content">
      <Link to="/caculator" className="link">计算器</Link>
      <Link to="/time" className="link">倒计时器</Link>
    </div>
  </div>
  );
};

export default Home;