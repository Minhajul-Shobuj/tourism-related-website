import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import AuthProvider from './Component/context/AuthProvider';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import ManageOrders from './Component/ManageOrders/ManageOrders';
import MyOrders from './Component/MyOrders/MyOrders';
import NotFound from './Component/NotFound/NotFound';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Register from './Component/Register/Register';
import Packages from './Component/Packages/Packages';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Packages></Packages>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/orders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageOrder">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/register/:serviceId">
              <Register></Register>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
