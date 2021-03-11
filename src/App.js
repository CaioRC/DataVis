import "./App.css";
import React, { Component } from "react";
import Header from "./components/header/Header";
import StoryPieChart from "./components/storypiechart/StoryPieChart";
import StoryPieInfo from "./components/storypieinfo/StoryPieInfo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      revealPieChart : false,
      revealPieInfo : false,
    };
  }

  handleScroll() {
    if (document.documentElement.scrollTop > 430) {
      this.setState({
        revealPieChart: true,
      });
    }
    if(document.documentElement.scrollTop > 830){
      this.setState({
        revealPieInfo: true,
      });
    }
  }

  componentDidMount() {
    window.onscroll = () => this.handleScroll();
    console.log(document.documentElement.scrollTop)
  }

  componentWillUnmount(){ window.onscroll = undefined; }

  render() {
    return (<div className="App">
      <Header/>
      <StoryPieChart className={this.state.revealPieChart ? 'showPieChart' : 'hidden'}/>
      <StoryPieInfo className={this.state.revealPieInfo ? 'showPieInfo' : 'hidden'}/>
    </div>)
  }
}

export default App;
