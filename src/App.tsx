import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import AccessibleIcon from '@mui/icons-material/Accessible';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RestaurantInformationForm from './pages/restaurantInformation/RestaurantInformationForm';
import { RestaurantInfoCompleted } from './pages/restaurantInformation/RestaurantInfoCompleted';
import RestaurantHomePage from './pages/RestaurantHomePage';
import { ItineraryInsights } from './pages/restaurantInformation/RestaurantItineraryInsights';
import { CreateItineraryPage } from './pages/createItinerary/CreateItineraryPage';
import { ItineraryCreatedPage } from './pages/createItinerary/ItineraryCreatedPage';



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
      <Route path="/restaurant" element={<RestaurantHomePage/>}/>
      {/* <Route path="/help" element={<HelpPage/>}/> */}
      <Route path="/restaurantsetup" element={<RestaurantInformationForm/>}/>
      <Route path="/restaurantsetupcompleted" element={<RestaurantInfoCompleted/>}/>
      <Route path="/itineraryinsights" element={<ItineraryInsights/>}/>
      <Route path="/createitinerary" element={<CreateItineraryPage/>}/>
      <Route path="/itinerarycreated" element={<ItineraryCreatedPage/>}/>
    </Routes>
    </ThemeProvider>
  </BrowserRouter>
  );
}

export default App;
