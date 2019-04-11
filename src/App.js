import React, { Component } from 'react';
import logo from './bitcoin.webp';
import './App.css';
import Input from "./Components/Input";
import Display from "./Components/Display";

class App extends Component {
   state = {
    currencyFrom: null,
    currencyTo: null,
    exchangeRate: null
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
  setExchange = rate => {
    this.setState({
      exchangeRate: rate
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
        <Input 
          setCurrencyFromName = {this.setCurrencyFrom}
          setCurrencyToName = {this.setCurrencyTo}
          setCurrencyText = {this.setExchange}
        />
        
        <Display 
          from={this.state.currencyFrom} 
          to= {this.state.currencyTo}
          exchange={this.state.exchangeRate} 
        />
      </div>
    );
  }
}

export default App;
