import React from "react";
import CoinList from "./CoinList";
import CoinHeader from "./CoinHeader";

const CoinContainer = props => {
  return (
    <section className="coins-container">
      <CoinHeader />
      <CoinList coins={props.showingCoins} />
    </section>
  );
};

export default CoinContainer;
