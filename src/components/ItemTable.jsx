import React, { useState } from "react";

const ItemTable = ({ items, editItem, deleteItem }) => {
  const [editingId, setEditingId] = useState(null);
  const [editedItem, setEditedItem] = useState({ name: "", category: "", quantity: 0 });

  const startEditing = (item) => {
    setEditingId(item.id);
    setEditedItem(item); // Set the selected item as the current edited item
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedItem({ ...editedItem, [name]: value });
  };


  const saveEdit = () => {
    editItem(editingId, editedItem); // Update the item with new values
    setEditingId(null); // Exit edit mode
  };

  const cancelEdit = () => {
    setEditingId(null); // Exit edit mode without saving
  };

  return (
    <table border="1"className="w-screen mt-3">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) =>
          editingId === item.id ? (
            // Edit mode row
            <tr key={item.id} style={{ backgroundColor: "lightyellow" }}>
              <td>
                <input
                  type="text"
                  name="name"
                  value={editedItem.name}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="category"
                  value={editedItem.category}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="quantity"
                  value={editedItem.quantity}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <button id="Save" onClick={saveEdit}>Save</button>
                <button id="Cancel" onClick={cancelEdit}>Cancel</button>
              </td>
            </tr>
          ) : (
            // Default display mode row
            <tr
              key={item.id}
              style={{
                backgroundColor: item.quantity < 10 ? "lightcoral" : "white",
              }}
            >
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.quantity}</td>
              <td>
                <button id="Edit" className="mr-5 ml-2" onClick={() => startEditing(item)}>Edit</button>
                <button id="Delete" onClick={() => deleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default ItemTable;

