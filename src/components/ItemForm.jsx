import React, { useState } from "react";

const ItemForm = ({ addItem }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    quantity: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.category && formData.quantity > 0) {
      addItem(formData);
      setFormData({ name: "", category: "", quantity: 0 });
    } else {
      alert("Please fill all fields properly!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-20">
      <div></div>
      <input className="border-2 border-gray-400"
        type="text"
        name="name"
        placeholder="Item Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input className="border-2 border-gray-400"
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <input className="border-2 border-gray-400"
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleChange}
        required
        min="1"
      />
      <button className=" bg-blue-300 hover:bg-blue-800 transition-colors duration-300" type="submit" id="AddItem">Add Item</button>
    </form>
  );
};

export default ItemForm;

  