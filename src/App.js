/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import React, { useState } from 'react'
import './App.css';
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import PetDetails from './components/PetDetails'
import {createTheme, ThemeProvider} from '@material-ui/core'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Paper from '@material-ui/core/Paper'





function App() {

 const [darkMode, setdarkMode] = useState(false);

const onToggleDark = () => {
  setdarkMode(true)
};
const onToggleLight = () => {
  setdarkMode(false)
}
  
const defaultTheme = createTheme();
  const theme = createTheme ({
    palette: {
      type: darkMode ? 'dark': 'light',
      primary: {
        main: '#0D75ff'
      },
      secondary: {
        main: darkMode ? '#212121' : '#fff', 
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
         color: darkMode ?  '#fff' :  '#666879'
       },
       h5: {
         [defaultTheme.breakpoints.down('md')]: {
           fontSize: 15
         },
         
       },
       'subtitle1': {
        [defaultTheme.breakpoints.down('md')]: {
          fontSize: 12
        },
        
      },
       'body1': {
        [defaultTheme.breakpoints.down('md')]: {
          fontSize: 13
        },
        
      }
    },
   
    
    
});


// theme.typography.h3: {
      
//   [theme.breakpoints.down('md')]: {
//     fontSize: '0.8rem',
//   },

// }





  
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{width:'100%', height:'auto', padding: 0, margin:0, overflowX: 'hidden'}}>
    <Router className="App">
    <NavBar darkMode={darkMode} toggleLight={onToggleLight}  toggleDark={onToggleDark}/>
    

    <Routes>
      <Route path='/' element={<HomePage  theme={theme} darkMode={darkMode} />}/>
      <Route path='/pets/:id' element={<PetDetails/>}/>
    </Routes>
       
      
    <Footer theme={theme} darkMode={darkMode}/>
    </Router>
    </Paper>
    </ThemeProvider>
  );
}

export default App;
