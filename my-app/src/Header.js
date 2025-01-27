
import React, { useState } from 'react';

const Header = () => {
  const [title, setTitle] = useState('Library Management App');

  const changeTitle = () => {
    setTitle('Welcome to the Library App'); 
  };

  return (
    <header>
      <h1>{title}</h1>
      <button onClick={changeTitle}>Change Title</button>
    </header>
  );
};

export default Header;

