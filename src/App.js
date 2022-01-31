import React from 'react'
import './App.css';
import HomePage from './pages/HomePage'
import {createTheme, ThemeProvider} from '@material-ui/core'

const Theme = createTheme ({
        palette: {
          primary: {
            main: '#0D75ff'
          },
          secondary: {
            main: '#fff',
          }
        }
})

function App() {
  return (
    <ThemeProvider theme={Theme}>
    <div className="App">
        <HomePage/>
      
    </div>
    </ThemeProvider>
  );
}

export default App;
