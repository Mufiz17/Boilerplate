import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemedComponent() {
  // Menggunakan useContext untuk mengakses nilai context
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Menentukan gaya berdasarkan nilai context
  const style = {
    backgroundColor: theme === 'Sudah' ? '#fff' : '#333',
    color: theme === 'Sudah' ? '#000' : '#fff',
    padding: '10px',
    textAlign: 'center'
  };

  return (
    <div style={style}>
      Status saat ini: {theme}
      {/* Tombol untuk mengganti tema */}
      <button onClick={toggleTheme}>Login</button>
    </div>
  );
}

export default ThemedComponent;