import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import ManinContent from './components/MainContent';
import { createTheme, ThemeProvider } from "@mui/material";
import { AuthProvider } from './service/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute';
import theme from './config/config';
import Blog from './components/Blog';
import Error from './components/Error';
import Home from './components/Home';
import Login from './components/Login';

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
      <AuthProvider
        authType='cookie'
        authName='_auth'
        cookieDomain={window.location.hostname}
        cookieSecure={false}
      >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            <Route path='about' element={<Blog />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>

  );
}
export default App;
