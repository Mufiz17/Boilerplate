import React from 'react';
import { CounterProvider } from './CounterContext';
import CounterComponent from './CounterComponent';
import { ThemeProvider } from './ThemeContext';
import ThemedComponent from './ThemedComponent';

function App() {
  return (
    // Menggunakan ThemeProvider untuk menyediakan context
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}

export default App;