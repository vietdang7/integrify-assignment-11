import React, { Component } from "react";
import "../css/coin-list.css";

class CoinList extends Component {
  render() {
    return (
      <div id="coinsList">
        {this.props.coins.map(coin => {
          let percentData = parseFloat(coin.percent_change_24h);
          let redOrGreen = percentData >= 0 ? "green-percent" : "red-percent";
          return (
            <div className="coin-item hvr-pulse" key={coin.id}>
              <div className="coinName">{coin.name}</div>
              <div className="coinSymbol">{coin.symbol}</div>
              <div className="coinRank">{coin.rank}</div>
              <div className="coinPrice">{coin.price_usd}</div>

              <div className={redOrGreen}>{coin.percent_change_24h}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

const coinList = () => {
  let percentData;
};

export default CoinList;
