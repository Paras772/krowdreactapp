import React from 'react';

const Header = () => {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      marginTop: '50px', 
      backgroundColor: '#292525', 
      padding: '20px' 
    }}>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/800px-HackerRank_Icon-1000px.png" 
        width="50" 
        height="50" 
        alt="HackerRank Icon" 
      />
      <span style={{ color: 'green', marginLeft: '10px', fontSize: '24px' }}>
        <b> Item Text Manager
          </b>
      </span>
    </div>
  );
};

export default Header;
