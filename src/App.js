
import './App.css';
import HomePage from './pages/HomePage'
import {createTheme, ThemeProvider} from '@material-ui/core'

const theme = createTheme ({
        palette: {
          primary: {
            main: '#0D75ff'
          },
          secondary: {
            main: '#fff'
          }
        }
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
