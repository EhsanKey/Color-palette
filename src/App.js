import React, { useEffect } from 'react'
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux/es/exports';

import store from './redux/store';

import Nav from './components/Nav';
import Colors from './components/Colors';
import Saved from './components/Saved';

import "./App.css"

const App = () => {

    return (
        <Provider store={store}>
            <Nav />
            <Routes>
                <Route path='/colors/*' element={<Colors />} /> 
                <Route path='/saved' element={<Saved /> } /> 
                <Route path='/' element={<Navigate to="/colors" /> } /> 
            </Routes>
        </Provider>
    )
}

export default App;