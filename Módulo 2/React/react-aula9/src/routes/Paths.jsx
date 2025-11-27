import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Product from '../pages/Product';
import PageLayout from '../layouts/PageLayout'
import NotFound from '../pages/NotFound';

const Paths = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<Home />}/>
                    <Route path="/products" element={<Products/>} />
                    <Route path="/product/:id/:name" element={<Product />} />
                </Route>
                    <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Paths; 