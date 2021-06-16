import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginService from '../../services/login'
import { UncontrolledAlert } from 'reactstrap';
import AdminNavigationBar from './AdminNavigationBar';

const validateForm = (errors) => {
    let valid = true;
    //Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

class LoginPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loginres: "",
        username: "",
        password: "",
        rememberMe: false,
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
      this.loginUser = this.loginUser.bind(this);
    }

  
    handleChange(e) {
      e.preventDefault();
      const { name, value } = e.target;
      let errors = this.state.errors;
      this.setState({ errors, [name]: value });
    }
  
    handleCheckBoxChange = (event) => {
      const input = event.target;
      const value = input.type === "checkbox" ? input.checked : input.value;
      this.setState({ [input.name]: value });
    };
  
    componentDidMount() {
      const rememberMe = localStorage.getItem("rememberMe") === "true";
      const id = rememberMe ? localStorage.getItem("id") : "";
      this.setState({ id, rememberMe });
    }
  
    loginUser = (e) => {
      e.preventDefault();
  
      if(validateForm(this.state.errors)){
        sessionStorage.setItem("username", this.state.username);
        localStorage.setItem("rememberMe", this.state.rememberMe);
        localStorage.setItem("username", this.state.rememberMe ? this.state.username : "");
    

          LoginService.loginUser(this.state.username, this.state.password).then(
            (res) => { 
              //if(1){
              this.setState({ loginres: res.data });
              if (this.state.loginres === "Admin") {
                this.props.history.push('/adminhomepage');
              }
              else{
                alert("You are Not an Admin")
              }
          }
            /*else{
              alert("please enter correct credentials")
          }*/
          //}
          );
      }
    };

    login = (event) => {
      event.preventDefault();
      this.props.history.push("/sign-in");
      
    };
  
    
    changeIdHandler = (event) => {
      this.setState({ id: event.target.value });
    };
  
    changePasswordHandler = (event) => {
      // this.showErrorPW();
      this.setState({ password: event.target.value });
    };
    changeChoiceHandler = (event) => {
      this.setState({ choice: event.target.value });
    };

   
    render() {
        const {errors} = this.state;
        return (

          <div>
            <AdminNavigationBar/>
          
          <div className="outer">
            <div className="inner">
            <form onSubmit={this.loginUser} noValidate>

                <h3>Welcome to Admin Log In</h3>
                <br/>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter username" 
                       required={true}
                        name="username"
                    value={this.state.username}
                    onChange={this.handleChange} />
                    
                </div>
                <br/>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                        required={true}
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange} />
                    
                </div>
                <br/>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" 
                        name="rememberMe"
                        checked={this.state.rememberMe}
                        onChange={this.handleCheckBoxChange}/>
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <br/>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>

                <p className="forgot-password text-right">
                        Not Admin?&nbsp;&nbsp;
                        <button
                          className="btn btn-outline-success mt-2"
                          onClick={this.login}
                        >
                          Login as User
                        </button>
                </p>


            </form>
            </div>
            </div>
            </div>
            );
        }
    }

    export default LoginPage;