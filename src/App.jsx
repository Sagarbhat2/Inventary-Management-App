import React, { useState } from "react";
import './App.css';
import ItemTable from "./components/ItemTable";
import ItemForm from "./components/ItemForm";
import FilterBar from "./components/FilterBar";
import Navbar from "./components/Navbar";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Laptop", category: "Electronics", quantity: 8 },
    { id: 2, name: "Notebook", category: "Stationery", quantity: 20 },
    { id: 3, name: "Pen", category: "Stationery", quantity: 5 },
  ]);

  const [filter, setFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Add a new item
  const addItem = (newItem) => {
    setItems([...items, { ...newItem, id: Date.now() }]);
  };

  // Edit an existing item
  const editItem = (id, updatedItem) => {
    setItems(items.map((item) => (item.id === id ? updatedItem : item)));
  };

  // Delete an item
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Filter items by category
  const filteredItems = items.filter((item) =>
    filter ? item.category === filter : true
  );

  // Sort items by quantity
  const sortedItems = filteredItems.sort((a, b) =>
    sortOrder === "asc" ? a.quantity - b.quantity : b.quantity - a.quantity
  );

  return (
    <div className="p-20">
      <Navbar/>
      <div className="relative left-65"> <ItemForm addItem={addItem} /><br />
      <FilterBar setFilter={setFilter} setSortOrder={setSortOrder} /><br />
      <ItemTable
        items={sortedItems}
        editItem={editItem}
        deleteItem={deleteItem}
      /></div>
     
    </div>
  );
};

export default App;
