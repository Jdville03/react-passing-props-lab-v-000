import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props =>
  <div className="fruit-basket">
    <Filter
      filters={props.filters}
      handleChange={props.updateFilter}
    />
    <FilteredFruitList
      fruit={props.fruit}
      filter={props.currentFilter}
    />
  </div>;

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: function() {}
}

export default FruitBasket;
