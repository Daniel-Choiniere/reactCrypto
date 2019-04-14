import React, {Component} from "react";
import axios from "axios";
import '../App.css';

class Input extends Component{
  state={
    currencyFrom: null,
    currencyTo: null,
    currentPrice: null,
    dailyHigh: null,
    dailyLow: null,
    twentyfourVol: null
  }
  
  setCurrencyFrom = e => {
    this.setState({
      currencyFrom: e.target.value.toUpperCase()
    });
  }
  
  setCurrencyTo = e => {
    this.setState({
      currencyTo: e.target.value.toUpperCase()
    });
  }
  
  handleClick = () => {
    // console.log("currencyFrom:", this.state.currencyFrom, "currencyTo:", this.state.currencyTo
    // );
    const apiKey = "ca3b404dc625877be9cbb92a470e9dfdecafc2dc2a7a8ac6922bc3769e742df9";
    
    const url = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + this.state.currencyFrom + "&tsyms=" + this.state.currencyTo + "&api_key=" + apiKey;
    // console.log(url);
    
    axios(url)
    .then(response=>{
      console.log(response.data);
      this.setState({
        currentPrice: response.data.DISPLAY[this.state.currencyFrom][this.state.currencyTo].PRICE,
        dailyHigh: response.data.DISPLAY[this.state.currencyFrom][this.state.currencyTo].HIGHDAY,
        dailyLow: response.data.DISPLAY[this.state.currencyFrom][this.state.currencyTo].LOWDAY,
        twentyfourVol: response.data.DISPLAY[this.state.currencyFrom][this.state.currencyTo].VOLUMEHOURTO
      });
      // console.log(this.state);
      this.props.setCurrentPriceText(this.state.currentPrice);
      this.props.setHighPriceText(this.state.dailyHigh);
      this.props.setLowPriceText(this.state.dailyLow);
      this.props.setTwentyFourVol(this.state.twentyfourVol);
      this.props.setCurrencyFromName(this.state.currencyFrom);
      this.props.setCurrencyToName(this.state.currencyTo);
    });
  }
  
    render(){
      return(
        <div>
          <input id="curFrom" onChange={ this.setCurrencyFrom } placeholder="Currency From"/>
          <input id="curTo" onChange={ this.setCurrencyTo } placeholder="Currency To" />
          <br></br>
          <input onChange={ this.setCashToConvert } placeholder="Amount to convert"/>
          <button onClick={ this.handleClick } >GET EXCHANGE RATE </button>
        </div>
      );
    }
}

export default Input;