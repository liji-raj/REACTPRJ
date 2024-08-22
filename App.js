// src/App.js
import React, { useState, useEffect } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

function App() {
  const [items, setItems] = useState([]);

  // Add a new item
  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  // Delete an item
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Edit an item
  const editItem = (updatedItem) => {
    setItems(items.map(item => (item.id === updatedItem.id ? updatedItem : item)));
  };

  useEffect(() => {
    // Simulate fetching data from an API on component mount
    const initialItems = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
    ];
    setItems(initialItems);
  }, []);

  return (
    <div className="App container mt-5">
      <h1 className='mb-3'>Electronic Products List</h1>
      <ItemForm addItem={addItem} />
      <ItemList items={items} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
}

export default App;