import React, { useState } from 'react';

const ItemListManager = () => {
  // State to manage the list of items
  const [items, setItems] = useState([]);
  // State to manage the input value
  const [inputValue, setInputValue] = useState('');

  // Function to handle the addition of a new item
  const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue(''); // Clear the input field
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Item List Manager</h1>
      <input
        type="text"
        placeholder="Enter item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update input value
        style={{ padding: '10px', width: '300px', fontSize: '16px' }}
      />
      <button
        onClick={addItem}
        style={{
          padding: '10px 20px',
          marginLeft: '10px',
          fontSize: '16px',
          backgroundColor: 'green',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Add Item
      </button>
      <ul style={{ listStyleType: 'none', marginTop: '20px' }}>
        {items.map((item, index) => (
          <li key={index} style={{ fontSize: '18px', textAlign: 'left' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListManager;
