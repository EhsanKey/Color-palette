import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux/es/exports';

//Components
import store from './redux/store';
import Nav from './components/Nav';
import Colors from './components/Colors';
import Saved from './components/Saved';

//Styles
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