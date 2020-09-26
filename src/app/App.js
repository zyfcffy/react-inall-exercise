import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import Caculator from "./components/Caculator";
import Caculator from "./components/Time";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route exact path='/' component={Home}/>
          <Route exact path='/caculator' component={Caculator}/>
          <Route exact path='/time' component={Time}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
