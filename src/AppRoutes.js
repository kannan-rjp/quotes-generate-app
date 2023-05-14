import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Blog from './components/Blog';
import Error from './components/Error';
import Home from './components/Home';
import Login from './components/Login';
import ProtectedRoute from "./components/ProtectedRoute";
import Dynamic from './components/Dynamic';
import Material from "./components/Material";
import DynamicForm from "./components/DynamicForm";
import SampleUse from "./components/SampleUse";



const AppRoutes = ({ children }) => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path="/" element={<Layout />}>
                <Route path='/home' element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                } />
                <Route path='about' element={<Blog />} />
                <Route path='dynamic' element={<Dynamic />} />
                <Route path='material' element={<Material />} />
                <Route path='dynamic-form' element={<DynamicForm />} />
                <Route path='sample' element={<SampleUse />} />
                <Route path='*' element={<Error />} />
            </Route>

        </Routes>
    );
}
export default AppRoutes;