import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Blog from './components/Blog';
import Error from './components/Error';
import Home from './components/Home';
import Login from './components/Login';
import ProtectedRoute from "./components/ProtectedRoute";


const AppRoutes = ({ children }) => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                } />
                <Route path='about' element={<Blog />} />
                <Route path='*' element={<Error />} />
            </Route>

        </Routes>
    );
}
export default AppRoutes;