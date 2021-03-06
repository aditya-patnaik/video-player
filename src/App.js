import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import VideoPlayer from "./components/VideoPlayer";
import VideoList from './components/VideoList';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route exact path="/watch" component={VideoPlayer} />
            <Route path="/" component={VideoList} />
        </div>
      </Router>
    );
  }
}

export default App;
