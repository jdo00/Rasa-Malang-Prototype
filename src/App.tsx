import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import AccessibleIcon from '@mui/icons-material/Accessible';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';



const theme = createTheme({
  palette: {
    primary: {
      main:"#C00000"
    },
    secondary: {
      main: '#E33E7F'
    }
  }
});

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      {/* <Route path="/help" element={<HelpPage/>}/> */}
    </Routes>
    </ThemeProvider>
  </BrowserRouter>
  );
}

export default App;
