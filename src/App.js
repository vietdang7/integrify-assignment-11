import React, { Component } from "react";
import logo from "./logo.svg";
import "./css/main.css";

import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";

import CoinList from "./components/CoinList";
import Header from "./components/Header";
import FilterContainer from "./components/FilterContainer";
import CoinContainer from "./components/CoinContainer";

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
    const url = "https://api.coinmarketcap.com/v1/ticker/?limit=2000";
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ coins: data }));
  }

  updateQuery = query => {
    this.setState({ query: query.trim() });
  };

  sortByName = array => {
    const copyCoins = [...array];

    this.setState({ coins: copyCoins.sort(sortBy("name")) });
  };

  sortByPrice = array => {
    const copyCoins = [...array];
    this.setState({ coins: copyCoins.sort(sortBy("price_usd")) });
  };

  sortByRank = array => {
    const copyCoins = [...array];
    let sortedByRank = copyCoins.sort(function(a, b) {
      return a.rank - b.rank;
    });
    this.setState({ coins: sortedByRank });
  };

  render() {
    let showingCoins;
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), "i");
      showingCoins = this.state.coins.filter(coin => match.test(coin.name));
    } else {
      showingCoins = this.state.coins;
    }

    return (
      <div className="App">
        <Header />
        <FilterContainer
          inputValue={this.state.query}
          showingCoins={showingCoins}
          updateQuery={this.updateQuery}
          sortByName={this.sortByName}
          sortByPrice={this.sortByPrice}
          sortByRank={this.sortByRank}
        />
        <CoinContainer showingCoins={showingCoins} />
      </div>
    );
  }
}

export default App;
