import {CssBaseline} from '@mui/material'
import {ThemeProvider, createTheme} from '@mui/material/styles'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
const theme = createTheme({
  palette: {
    primary: {
      dark: '#232347',
      main: '#001439',
      light: '#0E4B80',
      contrastText:'#041318'
    },
    info: {
      dark: '#1E66FF',
      main: '#1D65FF',
      light: 'rgba(32, 98, 255, 0.4)',
    },
    secondary: {
      main: '#F0F0F0',
      light:'#F4F4F4',
      dark:'#262626',
      contrastText:'#3E4348'
    },
    warning: {
      main: '#ed6c02',
      light: '#FF4516',
    },
    darkGreen:{
      main:'#223E3F',
      light:'#475E68',
    },
    muted:{
      main:'#6C6C6C',
      dark:'#585858',
      light:'#8D8D8D',
      contrastText:'#5F5F5F'
    },
    mateBlack:{
      main:'#3B3849',
      dark:'#000002',
      light:'#171717',
      contrastText:'#2B2B2B',
    }
  },
  typography: {
    fontFamily: ['Poppins', 'Spectral', 'Roboto','Inter'].join(),
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
)
