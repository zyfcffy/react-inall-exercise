import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import Caculator from "./components/Caculator";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route exact path='/' component={Home}/>
          <Route exact path='/caculator' component={Caculator}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
