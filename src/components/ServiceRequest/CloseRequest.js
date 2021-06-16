import React, { Component } from 'react';
import ServiceRequestService from './ServiceRequestService';

class CloseRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ""
        }
        this.changeMessageHandler = this.changeMessageHandler.bind(this);
        //this.saveRequest = this.saveRequest.bind(this);
        this.closeRequest = this.closeRequest.bind(this);
    }

    changeMessageHandler = (event) => {
        //this.setState({ message: event.target.value });
        this.setState({ id: event.target.value });
    }

    closeRequest =(e) =>{
        e.preventDefault();
        let id={id : this.state.id}
        console.log('id =>'+JSON.value);
        ServiceRequestService.close(id).then(res => {
            this.props.history.push("")
        });
    }
    render() {
        return (
            <div className="container">

                <button variant="info" className="btn btn-primary float-right mx-1" onClick={() => this.props.history.push("/home")}>
                <i className="fa fa-home"></i> Back to Home
                </button>
                <hr></hr>
                
                <div className="container col-sm-9">
                <button variant="info" className="btn btn-primary mb-1" onClick={() => this.props.history.push("/addrequest")}><i className="fa fa-plus"></i> Add</button>
                
                </div>

            </div>



        );
    }
}

export default CloseRequest;