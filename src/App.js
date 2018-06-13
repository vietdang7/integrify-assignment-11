import React, { Component } from "react";
import logo from "./logo.svg";
import "./css/main.css";

import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";

import CoinList from "./components/CoinList";

const url = "https://api.coinmarketcap.com/v1/ticker/?limit=2000";

class App extends Component {
  state = {
    coins: [],
    query: ""
  };

  componentDidMount() {
    // fetch(url)
    //   .then(response => response.json())
    //   .then(myJson => this.setState({ coins: myJson }));
    // console.log("coin list", this.state.coins);

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ coins: data }));
  }

  updateQuery = query => {
    this.setState({ query: query.trim() });
  };

  render() {
    let showingCoins;
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), "i");
      showingCoins = this.state.coins.filter(coin => match.test(coin.name));
    } else {
      showingCoins = this.state.coins;
    }

    const shortByName = () => {
      this.setState({ coins: showingCoins.sort(sortBy("name")) });
    };

    const shortByPrice = () => {
      this.setState({ coins: showingCoins.sort(sortBy("price_usd")) });
    };

    const shortByRank = () => {
      let sortedByRank = showingCoins.sort(function(a, b) {
        return a.rank - b.rank;
      });
      this.setState({ coins: sortedByRank });
    };

    return (
      <div className="App">
        <header>
          <h1>Cryptocurrency Coins</h1>
        </header>
        <section>
          <div className="filter-container">
            <input
              type="text"
              placeholder="Search"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
              id="filterInput"
            />
            <button
              type="button"
              name="sort-by-name"
              onClick={shortByName}
              className="sort-btn"
            >
              Sort by Name
            </button>
            <button
              type="button"
              name="sort-by-price"
              onClick={shortByPrice}
              className="sort-btn"
            >
              Sort by Price
            </button>
            <button
              type="button"
              name="sort-by-rank"
              onClick={shortByRank}
              className="sort-btn"
            >
              Sort by Rank
            </button>
          </div>
        </section>
        <section className="coins-container">
          <div className="coin-item-header">
            <div className="coinName-h">Name</div>
            <div className="coinSymbol-h">Symbol</div>
            <div className="coinRank-h">Rank</div>
            <div className="coinPrice-h">Price (USD)</div>
            <div className="percent_change_24h-h">Percent change 24h</div>
          </div>
          <CoinList coins={showingCoins} />
        </section>
      </div>
    );
  }
}

export default App;
