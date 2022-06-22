import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from "./App";
import Header from "./components/Header/header";
import ProductListing from "./components/ProductListing/productlisting";
import store from "./state/store";
import { Provider } from "react-redux";
import Footer from "./components/Footer/footer";
import ProductDetail from "./components/ProductDetail/productdetail";
import Cart from "./components/Cart/cart";


const Router = () => (
  
  <Provider store={store}>
    <BrowserRouter>
    <App>
        <Header />
        {/* <ProductListing /> */}
        <Routes>
          <Route path="/" element={<ProductListing />}></Route>
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
        <Footer />
    </App>
    </BrowserRouter>
   
  </Provider>
);

export default Router;
