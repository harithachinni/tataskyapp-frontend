import React, { Component } from 'react';
import ServiceRequestService from './ServiceRequestService';
import NavigationBar from '../RechargeComponent/NavigationBar';

class CreateRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {

            message: "",
            errors: {}
        }
        this.changeMessageHandler = this.changeMessageHandler.bind(this);
        this.saveRequest = this.saveRequest.bind(this);

    }

    changeMessageHandler = (event) => {
        this.setState({ message: event.target.value });

    }

    formValidation = () => {
        const { message } = this.state;
        let isValid = true;
        const errors = {};
        if (message === "") {
            errors.message = "This area should be fill with some text";
            isValid = false

        }
        this.setState({ errors });
        return isValid;

    }
    saveRequest = (e) => {
        e.preventDefault();
        const isValid = this.formValidation();
        if (isValid) {
            this.setState({ message: " " });
        }
        let request = { message: this.state.message };
        console.log('request =>' + JSON.stringify(request));
        ServiceRequestService.createServiceRequest(request).then(res => {
            this.props.history.push("/request");
        })
    }



    render() {
        const { errors } = this.state;
        return (
            <div>
                <NavigationBar />

                <div>
                    <br /><br />
                    <div className="container">
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3">
                                <h1 className="text-center">Add Request</h1>
                                <div className="card-body">
                                    <form >
                                        <div className="" >

                                            <textarea placeholder="Type your request here" name="message" rows="5" cols="50" className="form-control"
                                                value={this.state.message} onChange={this.changeMessageHandler}></textarea>
                                            <br />
                                            <button type="button" className="btn btn-success" onClick={this.saveRequest}>Submit</button>
                                        </div>
                                        {Object.keys(errors).map((key) => {
                                            return <div className="text-danger" key={key} >{errors[key]}</div>
                                        })}
                                    </form>
                                    <hr />
                                    <div className="spanspace">
                                        <h3 className="text-center">GET IN TOUCH WITH US</h3>
                                        <div className="div4">
                                            <span className="material-icons">CALL</span>
                                            <div className="bg">
                                                <h6> HelpLine  (040) 7877 9999</h6>
                                                <h6> Enquirie  (040) 7877 6666</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="spanspace">
                                        <div className="div4">
                                            <span className="material-icons">MAIL</span>
                                            <div className="bg">
                                                <h6>support@tatasky.com</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateRequest;