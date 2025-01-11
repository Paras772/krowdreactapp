import React, { useState } from 'react';

const ItemListManager = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue(''); 
    }
  };

  return (
    <div
      style={{
        margin: '20px auto',
        padding: '20px',
        maxWidth: '500px',
        backgroundColor: '#f8f8f8',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ color: '#333', textAlign: 'left' }}>Item List</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Enter item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
        <button
          onClick={addItem}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          Add Item
        </button>
      </div>
      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              padding: '10px',
              backgroundColor: 'white',
              border: '1px solid #ccc',
              borderRadius: '5px',
              marginBottom: '10px',
              fontSize: '16px',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListManager;
