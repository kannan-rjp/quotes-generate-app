import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import ManinContent from './components/MainContent';
import { createTheme, ThemeProvider } from "@mui/material";
import { AuthProvider } from './service/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute';
import theme from './config/config';
import AppRoutes from './AppRoutes';

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
        // authType='cookie'
        // authName='_auth'
        // cookieDomain={window.location.hostname}
        // cookieSecure={false}
      >
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>

  );
}
export default App;
