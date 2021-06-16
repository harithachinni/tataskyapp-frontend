import React, {Component } from "react";
import axios from 'axios';
import signup from '../../services/signup'
import SignupNavigationBar from './SignupNavigationBar';



/*function SignUp(props){
        
    let initialuser={username:'',password:'',firstName:'',lastName:''};
    let [user,setUser]=useState(initialuser);
    let [msg,setMsg]=useState('');
    let [id,setId]=useState(0);


    useEffect(() => {
        const URL='http://localhost:8088/user/add';
        axios.post(URL,user).then((response) => 
        {
            
            setMsg(response.data)
        }).catch(error => console.log(error.message))
    },[id])

    function handleBtnClick()
    {
        console.log(user)
        setId(1)
    }*/

    const validateForm = errors => {
        let valid = true;
        Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
        return valid;
    };

    class SignUp extends Component {
        constructor(props) {
            super(props)
    
            this.state = {
                
                        firstName: '',
                        lastName: '',
                        username:'',
                        password: '',
                        errors: {
                            firstName: '',
                            lastName: '',
                            username: '',
                            password: ''
                        }
            }
        }
    
        changeHandler = (event) => {

            const { name, value } = event.target;
            let errors = this.state.errors;
    
            switch (name) {
                case "firstName":
                    errors.firstName =
                        value.length < 4 ? "First Name must be greater than 4 characters" : "";
                    break;
                case "lastName":
                        errors.lastName =
                            value.length < 4 ? "Last Name must be greater than 4 characters" : "";
                        break;
                case "username":
                    errors.username =
                        value.length < 4 ? "Username must be greater than 4 characters" : "";
                    break;
                case "password":
                    errors.password =
                        value.length < 4 ? "Password must be greater than 4 characters" : "";
                    break;
                default:
                        break;
            }
            this.setState({ [event.target.name]: event.target.value })
        }
    
                
    
    
        submitHandler = (event) => {
            event.preventDefault()
            console.log(this.state)
            if (validateForm(this.state.errors)) {
                let customer = {
                    firstName: this.state.firstName,
                    lastName:this.state.lastName,
                    username: this.state.username,
                    password: this.state.password
                }
            
            signup.addUser(this.state)
                .then(response => {
                    console.log(response);
                    alert("User Added Successfully")
                })
                .catch(error => {
                    console.log(error);
                })
            }
        }
    
        login = (event) => {
            event.preventDefault();
            this.props.history.push("/sign-in");
            
          };


        render(){
            const {errors} = this.state;
            const {username, firstName, lastName, password } = this.state

    return(
        <div>
            <SignupNavigationBar/>
        
            
        <div className="outer">
            <div className="inner">
            <form onSubmit={this.submitHandler} noValidate>
                <h3>Sign Up</h3>
                
                <div className="form-group">
                    <div>
                    <label>First name</label>
                    <input type="text" 
                        className="form-control" 
                        placeholder="First name"
                        name="firstName"
                        value={firstName} onChange={this.changeHandler} required/>
                        {errors.firstName.length > 0 && (
                                <span className="text-danger">{errors.firstName}</span>
                                )}
                                </div>
                </div>
                
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" 
                        className="form-control" 
                        placeholder="Last name"
                        name="lastName"
                        value={lastName} onChange={this.changeHandler} />
                        {errors.lastName.length > 0 && (
                                <span className="text-danger">{errors.lastName}</span>
                                )}
                </div>
                
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" 
                        className="form-control" 
                        placeholder="Enter username" 
                        name="username"
                        value={username} onChange={this.changeHandler}/>
                        {errors.username.length > 0 && (
                                <span className="text-danger">{errors.username}</span>
                                )}
                </div>
                
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" 
                        className="form-control"
                        placeholder="Enter password" 
                        name="password"
                        value={password} onChange={this.changeHandler}/>
                        {errors.password.length > 0 && (
                                <span className="text-danger">{errors.password}</span>
                                )}
                </div>
                
                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign Up</button>
                <b className="text-danger" id="error"></b>
                

                <p className="forgot-password text-right">
                        Already Registered ?&nbsp;&nbsp;
                        <button
                          className="btn btn-outline-success mt-2"
                          onClick={this.login}
                        >
                          Login
                        </button>
                      </p>
            </form>
            </div>
            </div>
            </div>
            
        );
    }
}

export default SignUp;