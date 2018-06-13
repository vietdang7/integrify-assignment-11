import React from "react";

const CoinHeader = () => {
  return (
    <div className="coin-item-header">
      <div className="coinName-h">Name</div>
      <div className="coinSymbol-h">Symbol</div>
      <div className="coinRank-h">Rank</div>
      <div className="coinPrice-h">Price (USD)</div>
      <div className="percent_change_24h-h">Percent change 24h</div>
    </div>
  );
};
export default CoinHeader;
