import React, { createContext, useState } from 'react';

// Membuat dan mengekspor ThemeContext
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('Sudah');

  // Fungsi untuk mengganti tema
  const toggleTheme = () => {
    setTheme(theme === 'Sudah' ? 'Belum' : 'Sudah');
  };

  return (
    // Menggunakan ThemeContext.Provider untuk menyediakan nilai context
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;