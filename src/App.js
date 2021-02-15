import React, {useEffect} from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import Pages
import Header from "./Header/Header";
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout"
import Login from "./Login/Login"
import {auth} from "./firebase"
import {useStateValue} from "./StateProvider/StateProvider"
import Payment from "./Payment/Payment"
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Orders from "./Orders/Orders";

const promise = loadStripe('pk_test_51IJbHpJeDirWYcnmCu6X7OaZecajaJV46c3XTNrnClqYbWxd2SJuzB1XZ0XYHe8tsoC2KpaTkaMtB7Glvydv1V07009BNe9GUR');

function App() {
  const [{user}, dispatch] = useStateValue();
  
  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>',authUser);

      if (authUser){
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      } else{
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    //BEM
    <Router>
    <div className="App">
      
        <Switch>
        <Route path='/orders'>
        <Header/>
        <Orders/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>  
          <Route path="/checkout">
            <Header/>
            <Checkout/>
            </Route>
            <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
          <Route path="/">
          <Header/>
          <Home/>
          </Route>
        </Switch>
    </div>
  </Router>
  );
}

export default App;
