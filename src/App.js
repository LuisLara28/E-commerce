import React from "react";

//router
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Layout
import MainLayout from "./Layout/MainLayout";

//Styles
import "./App.css";

//Pages
import Home from "./Pages/Home";
import Checkout from "./Pages/Checkout";
import Cart from "./Pages/Cart/Cart";
import PurchaseComplete from "./Pages/PurchaseComplete";

//Context
import {StoreProvider} from './Context/StoreContext'
function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/cart" exact>
              <Cart />
            </Route>
            <Route path="/checkout" exact>
              <Checkout />
            </Route>
            <Route path="/purchase_complete" exact>
              <PurchaseComplete />
            </Route>
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
