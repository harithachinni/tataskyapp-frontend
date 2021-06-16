import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './login-signup-app.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/UserComponent/login.component";
import SignUp from "./components/UserComponent/signup.component";
import AdminLogin from "./components/UserComponent/admin.login.component";
import Logout from "./components/UserComponent/Logout";

import HomePage from "./components/AccountComponent/HomePage";
import AdminHomePage from "./components/AccountComponent/AdminHomePage";
import UserProfile from "./components/AccountComponent/UserProfile";
import CountAccount from "./components/AccountComponent/CountAccount";
import GetAccountById from "./components/AccountComponent/GetAccountById";

import AllProducts from "./components/PackComponent/AllProducts";

import CreateRequest from "./components/ServiceRequest/CreateRequest";
import AboutUs from "./AboutUs";

import AddRecharge from "./components/RechargeComponent/AddRecharge";
import RechargeValidity from './components/RechargeComponent/RechargeValidity';
import AllRecharges from "./components/RechargeComponent/AllRecharges";
import RechargesCountOnPack from "./components/RechargeComponent/RechargesCountOnPack";
import GetRechargesByaccountId from "./components/RechargeComponent/GetRechargesByaccountId";
import RechargeCount from "./components/RechargeComponent/RechargeCount";

import Footer from "./components/Footer";

import HomeComponent from './components/ServiceRequest/HomeComponent';



function App() {
  return (
  
  <Router>
    
    <div>
      
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/admin" component={AdminLogin} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/logout" component={Logout} />

            <Route path="/homepage" component={HomePage} />
            <Route path="/adminhomepage" component={AdminHomePage} />
            <Route path="/userprofile" component={UserProfile} />
            <Route path="/countaccount" component={CountAccount} />
            <Route path="/getaccountbyid" component={GetAccountById} />

            <Route path="/allproducts" component={AllProducts} />

            <Route path="/request" component={CreateRequest} />
            <Route path="/AboutUs" component={AboutUs} />

            <Route path="/recharge" component={AddRecharge} />
            <Route path="/rechargevalidity" component={RechargeValidity} />
            <Route path="/allrecharges" component={AllRecharges} />
            <Route path="/rechargescountonpack" component={RechargesCountOnPack} />
            <Route path="/getrechargesbyaccount" component={GetRechargesByaccountId} />
            <Route path="/rechargescount" component={RechargeCount} />
            
            <Route path="/home" component={HomeComponent}/>

          </Switch>
          </div>
          <Footer/>
        </Router>
  );
}

export default App;