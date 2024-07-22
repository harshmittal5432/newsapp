import './App.css';
import React, {useState, Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "light"
    };
  }
  
   tooglemode=()=>{
    if(this.state.mode==="light"){
      this.setState({ mode: "dark" });
      document.body.style.backgroundColor="black";
    }
    else{
      this.setState({ mode: "light" });
      document.body.style.backgroundColor="white";
    }
  }
  pageSize=12
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
      <Navbar mode={this.state.mode} tooglemode={this.tooglemode}/>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      
      />
      
      <Routes>
            <Route path="/" element={<News setProgress={this.setProgress}key="general" mode={this.state.mode} pageSize={this.pageSize} country="in" category="general" />} />
            <Route path="/business" element={<News setProgress={this.setProgress}key="business" mode={this.state.mode} pageSize={this.pageSize} country="in" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress}key="entertainment" mode={this.state.mode} pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route path="/general" element={<News setProgress={this.setProgress}key="general" mode={this.state.mode} pageSize={this.pageSize} country="in" category="general" />} />
            <Route path="/health" element={<News setProgress={this.setProgress}key="health" mode={this.state.mode} pageSize={this.pageSize} country="in" category="health" />} />
            <Route path="/science" element={<News setProgress={this.setProgress}key="science" mode={this.state.mode} pageSize={this.pageSize} country="in" category="science" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress}key="sports" mode={this.state.mode} pageSize={this.pageSize} country="in" category="sports" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress}key="technology" mode={this.state.mode} pageSize={this.pageSize} country="in" category="technology" />} />
          </Routes>
      </Router>
      </div>
    )
  }
}
