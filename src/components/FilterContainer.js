import React from "react";

const FilterContainer = props => {
  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Search"
        value={props.inputValue}
        onChange={event => props.updateQuery(event.target.value)}
        id="filterInput"
      />
      <button
        type="button"
        name="sort-by-name"
        onClick={() => props.sortByName(props.showingCoins)}
        className="sort-btn"
      >
        Sort by Name
      </button>
      <button
        type="button"
        name="sort-by-price"
        onClick={() => props.sortByPrice(props.showingCoins)}
        className="sort-btn"
      >
        Sort by Price
      </button>
      <button
        type="button"
        name="sort-by-rank"
        onClick={() => props.sortByRank(props.showingCoins)}
        className="sort-btn"
      >
        Sort by Rank
      </button>
    </div>
  );
};
export default FilterContainer;
