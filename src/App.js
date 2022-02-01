import React from 'react'
import './App.css';
import HomePage from './pages/HomePage'
import {createTheme, ThemeProvider} from '@material-ui/core'

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
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
        <HomePage/>
      
    </div>
    </ThemeProvider>
  );
}

export default App;
