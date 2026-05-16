import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/Main";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Product from './pages/Product';
import Dashboard from "./dashboard/Dashboard";


import DashboardHome from "./dashboard/DashboardHome";
import DashboardProducts from "./dashboard/DashboardProducts";
import DashboardOrders from "./dashboard/DashboardOrders";
import DashboardUsers from "./dashboard/DashboardUsers";
import CreateProduct from "./dashboard/CreateProduct";
import UpdateProduct from "./dashboard/UpdateProduct";




function App() {

  return (

    <Routes>
        <Route path='/login'  element={<Login />}/>
        <Route path='/register'  element={<Register/>}/>
        <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="about" element={<About />} />
        <Route path="products" element={<Product />} />
        <Route path="cart" element={<Cart />} />
       

         {/* this is dashboard routes */}
       <Route
        path='/dashboard/*'
        element={<Dashboard />}
      >

        <Route
          index
          element={<DashboardHome />}
        />

        <Route
          path='products'
          element={<DashboardProducts />}
        />

        <Route
          path='orders'
          element={<DashboardOrders />}
        />

        <Route
          path='users'
          element={<DashboardUsers />}
        />

        <Route
          path='create-product'
          element={<CreateProduct />}
        />

        <Route
          path='update-product/:id'
          element={<UpdateProduct />}
        />

      </Route>
        

      </Route>


     

    </Routes>

  );
}

export default App;