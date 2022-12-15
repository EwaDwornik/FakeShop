import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./components/Home";
import ProductList from "./components/CRUD/productList";
import {routes} from "./services/routes";
import Navigation from "./components/Navigation";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <App>
            <Navigation/>
            <Routes>
                <Route path={routes.home} element={<Home/>}/>
                <Route path={routes.addProduct} element={<ProductList/>}/>
                <Route path={routes.shop} element={<Shop/>}/>
                <Route path={routes.login} element={<Login/>}/>
                <Route path={routes.register} element={<Register/>}/>
                <Route path={routes.reset} element={<Reset/>}/>
                <Route path={routes.contact} element={<Contact/>}/>
            </Routes>
        </App>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
