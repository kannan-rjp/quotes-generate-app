import { BrowserRouter, Routes, Router, Route } from 'react-router-dom'; 
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import ManinContent from './components/MainContent';
import { createTheme,ThemeProvider } from "@mui/material";
import theme from './config/config';
import Blog from './components/Blog';
import Error from './components/Error';
import Home from './components/Home';

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
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<Blog />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    
  );
}
export default App;
