import React from 'react';
import { Route, Routes} from 'react-router-dom'
import Header from './Components/headers/Header';
import CartScreen from './Components/screen/CartSreen';
import HomeSreen from "./Components/screen/HomeSreen";
import PaymentMethodScreen from './Components/screen/PaymentMethodScreen';
import PlaceOrderScreen from './Components/screen/PlaceOrderScreen';
import ProductSreen from "./Components/screen/ProductSreen";
import ShippingAddressScreen from './Components/screen/ShippingAddressScreen';
import SigninScreen from './Components/screen/SigninScreen';
import SignupScreen from './Components/screen/SignupScreen';
import AdminProductScreen from './Components/screen/AdminProductSreen';
import AdminUserScreen from './Components/screen/AdminUserSreen';
import AdminOrderSreen from './Components/screen/AdminOrderSreen';
import UserEditScreen from './Components/screen/UserEditScreen';
import AdminDashboardScreen from './Components/screen/AdminDashboardSreen';
import AdminProductCreate from './Components/screen/AdminProductCreate';
import ProfileScreen from './Components/screen/ProfileScreen';
import { ToastContainer }  from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import OrderScreen from './Components/screen/OrderScreen';
import OrderHistoryScreen from './Components/screen/OrderHistoryScreen';
import SearchScreen from './Components/screen/SearchScreen';
import AdministratorSreen from './Components/screen/AdministratorSreen';

function App() {
    return (
      <>
      <div className='site-container'>
      <ToastContainer position="bottom-right" limit={1} /> 
     
      <Header />

      <main>
        <div className='mt-3'>
        <Routes>
        <Route path="/product/:slug" element={<ProductSreen />} />
        <Route path="/cart" element={<CartScreen />}  />
        <Route path="/" element={<HomeSreen />}  />
        <Route path="/profile" element={<ProfileScreen />}></Route>
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/admin" element={<AdministratorSreen />}>
        <Route path="/admin/dashboard" element={<AdminDashboardScreen />} />
        <Route path="/admin/products" element={<AdminProductScreen />} />
        <Route path="/admin/orders" element={<AdminOrderSreen />} />
        <Route path="/admin/users" element={<AdminUserScreen />}>
        </Route>
        </Route>
        <Route path="/signin"  element={<SigninScreen />} />
        <Route path="/shipping" element={<ShippingAddressScreen />}></Route>
        <Route path="/placeorder" element={<PlaceOrderScreen />}></Route>
        <Route path="/payment" element={<PaymentMethodScreen />}></Route>
        <Route path="/signup" element={<SignupScreen />} />
      
      
        <Route path="/createproduct" element={<AdminProductCreate />} />
        
        <Route path="/order/:id" element={<OrderScreen />} />
        <Route path="/orderhistory" element={<OrderHistoryScreen />} />

        <Route
                path="/admin/user/:id"
                element={
                    <UserEditScreen />
                }
              ></Route>
          </Routes>
          </div>
          </main>
          <footer>
            <div className='text-center'>All rights reserved</div>
          </footer>
          </div>
         
          </>
    )

  }

export default App
