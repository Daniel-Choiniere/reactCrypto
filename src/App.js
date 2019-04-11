import React, { Component } from 'react';
import logo from './bitcoin.webp';
import './App.css';
import Input from "./Components/Input";
import Display from "./Components/Display";

class App extends Component {
  state = {
    currencyFrom: null,
    currencyTo: null,
    currentPrice: null,
    dailyHigh: null,
    dailyLow: null
  }

  setCurrencyFrom = name => {
    this.setState({
      currencyFrom: name
    })
  }
  setCurrencyTo = name => {
    this.setState({
      currencyTo: name
    })
  }
  setCurrentPrice = rate => {
    this.setState({
      currentPrice: rate
    })
  }
  setDailyHigh = rate => {
    this.setState({
      dailyHigh: rate
    })
  }
  setDailyLow = rate => {
    this.setState({
      dailyLow: rate
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Cryptocurrency Conversion</h1>
          <img src={ logo } className="App-logo" alt="logo" />
        
        <Input 
          setCurrencyFromName = { this.setCurrencyFrom }
          setCurrencyToName = { this.setCurrencyTo }
          setCurrentPriceText = { this.setCurrentPrice }
          setHighPriceText = { this.setDailyHigh }
          setLowPriceText = { this.setDailyLow }
        />
        
        <Display 
          from={ this.state.currencyFrom } 
          to= { this.state.currencyTo }
          currentPrice={ this.state.currentPrice } 
          dailyHigh = { this.state.dailyHigh }
          dailyLow = { this.state.dailyLow }
        />
        </header>
      </div>
    );
  }
}

export default App;
