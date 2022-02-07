/* eslint-disable no-undef */
import React from 'react'
import './App.css';
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import PetDetails from './components/PetDetails'
import {createTheme, ThemeProvider} from '@material-ui/core'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'





function App() {

  
  

  const theme = createTheme ({
    palette: {
      primary: {
        main: '#0D75ff'
      },
      secondary: {
        main: '#fff',
      }
    },
    typography: {
       "fontFamily": [
        '"Inter", sans-serif'
       ].join(''),
       "fontWeightLight": 400,
       "fontWeightRegular": 500,
       "fontWeightBold": 600,
       allVariants: {
         color: ' #666879'
       }
    },
    
});

  
  return (
    <ThemeProvider theme={theme}>
      
    <Router className="App">
    <NavBar />
    

    <Routes>
      <Route exact path='/' element={<HomePage />}/>
      <Route path='/pets/:id' element={<PetDetails/>}/>
    </Routes>
       
      
    <Footer/>
    </Router>
    
    </ThemeProvider>
  );
}

export default App;
