import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import About from "./components/Home/About/About";
import Home from "./components/Home/Home/Home";
import Navbar from "./components/Shared/Navbar/Navbar";
import AuthProvider from "./context/AuthProvider";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Footer from './components/Shared/Footer/Footer'
import Booking from "./components/Booking/Booking/Booking";
import Services from "./components/Home/Services/Services";
import MyOrders from "./components/Dashboard/MyOrders/MyOrders";
import AddServices from "./components/Dashboard/AddServices/AddServices";
import ManageAllOrders from "./components/Dashboard/ManageAllOrders/ManageAllOrders";
import CompleteOrder from "./components/CompleteOrder/CompleteOrder";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <div>
        <Navbar></Navbar>
        <Switch>
          <PrivateRoute path="/about">
            <About />
          </PrivateRoute>
          <Route path="/service">
            <Services />
          </Route>
          <PrivateRoute path="/manageAllOrders">
            <ManageAllOrders />
          </PrivateRoute>
          <PrivateRoute path="/addServices">
            <AddServices />
          </PrivateRoute>
          <PrivateRoute path="/complete">
            <CompleteOrder />
          </PrivateRoute>
          <PrivateRoute path="/myOrders">
            <MyOrders />
          </PrivateRoute>
          <PrivateRoute path="/booking/:serviceId">
            <Booking />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
