// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link,  Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';

import AdminHomeScreen from './screens/AdminScreen/AdminHomeScreen';
import VendeurHomeScreen from './screens/VendeurScreen/VendeurHomeScreen';
import SupperAdminHomeScreen from './screens/SupperAdminScreen/SupperAdminHomeScreen';
 
function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () =>{
    dispatch(signout());
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
            <div>
                <Link className="brand" to="/">marketplace</Link>
            </div>
            <div>
                <Link to="/cart">Cart
                {cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )}
                </Link>
                {
                  userInfo ? (
                    <div className="dropdown">
                      <Link to="#" >
                        {userInfo.name} <i className="fa fa-caret-down" ></i>{' '} 
                      </Link>
                      <ul className="dropdown-content" >
                        {/* <Link to="#signout" onClick={signoutHandler} > */}
                        <Link to="" onClick={signoutHandler} >
                          Sign Out
                        </Link>
                      </ul>
                    </div>
                  ) : 
                  (
                    <Link to="/signin">Sing In</Link>
                  )
                }
                
            </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>

          <Route path="/SupperAdmin" component={SupperAdminHomeScreen} ></Route>
          <Route path="/Admin" component={AdminHomeScreen} ></Route>
          <Route path="/Vendeur" component={VendeurHomeScreen} ></Route>

          <Route path="/" component={HomeScreen} exact ></Route>
        </main>
        <footer className="row center"> All right reserved </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
