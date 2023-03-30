import { BrowserRouter, Routes, Router, Route } from 'react-router-dom'; 
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import ManinContent from './components/MainContent';
import { indigo,deepPurple, red } from '@mui/material/colors';
import { createTheme,ThemeProvider } from "@mui/material";
import Blog from './components/Blog';
import Error from './components/Error';
const theme = createTheme({
  palette: {
      primary:{
          main: '#2e4555',
          contrastText: '#fff' //white
      },
      secondary:{
        main: red[400],
        contrastText: '#fff'
      }
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: red[200],
      },
    },
  },
  components:{
    MuiTypography:{
        variants:[
            {
                props:  {
                    variant: 'footer-p'
                },
                style:{
                    fontSize:70,
                    color:'red',
                    textShadow: '2px 2px black'
                },   
            },
            {
              props:  {
                  variant: 'p'
              },
              style:{
                  fontSize:30,
              }
            },
            {
                props:  {
                    variant: 'pone'
                },
                style:{
                    fontSize:20,
                }
            },
            {
              props:  {
                  variant: 'link-p'
              },
              style:{
                   textDecoration: 'none',
              }
          }
        ]
    }
  }
})
function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='header' element={<Header />} />
    //     <Route path='maincontent' element={<ManinContent />} />
    //     <Route path='footer' element={<Footer />} />
    //   </Routes>
    // </BrowserRouter>
    
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<ManinContent />} />
            <Route path='about' element={<Blog />} />
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    
  );
}
export default App;
