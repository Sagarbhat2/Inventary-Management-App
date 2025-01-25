import React from "react";

const FilterBar = ({ setFilter, setSortOrder }) => {
  return (
    <div className="mb-5">
      <select className="border-2 border-gray-400 mr-10 font-bold" onChange={(e) => setFilter(e.target.value)}>
        <option  value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Stationery">Stationery</option>
      </select>
      <select className="border-2 border-gray-400 font-bold" onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">Sort by Quantity (Ascending)</option>
        <option value="desc">Sort by Quantity (Descending)</option>
      </select>
    </div>
  );    
};

export default FilterBar;
