import React, { Component } from 'react'
import axios from 'axios'

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
};

class AddPack3 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: null,
            cost: null,
            daysValidity: null,
            description: null,
            planName: null,
            errors: {
                id: '',
                cost: '',
                daysValidity: '',
                description: '',
                planName: '',
                
            }
        }
    }
    

    changeHandler = (event) => {

        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case "id":
                errors.id =
                    value < 0 ? "Id should not be negative" : "";
                break;

            case "cost":
                errors.cost =
                    value < 0 ? "Cost should not be negative" : "";
                break;
            case "daysValidity":
                errors.daysValidity =
                    value < 0 ? "daysVAlidity should not be negative" : "";
                break;
            case "description":
                errors.description =
                    value.length < 4 ? "Description must be greater than 4 characters" : "";
                break;

            case "planName":
                    errors.planName =
                        value.length < 4 ? "Plan Name must be greater than 4 characters" : "";
                    break;    

            

            default:
                break;
        }
        this.setState({ [event.target.name]: event.target.value })


    }

    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state);
        if (validateForm(this.state.errors)) {
            let pack = {
                id: this.state.id,
                cost: this.state.cost,
                daysValidity: this.state.daysValidity,
                description: this.state.description,
                planName: this.state.planName,
               
            }
            axios.post('http://localhost:8080/pack/addPack', this.state)
                .then(response => {
                    console.log(response);
                     alert("Details Updated Successfully");
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    render() {

        const {errors} = this.state;
        const { id,cost,daysValidity,description,planName } = this.state
        return (
            <div>
                <div className="container">
                    <div>
                        <div>
                        <h1 className="w4-padding w2-xlarge w3-text-black">Add Pack</h1>
                            {/* <h3 className="text-center w4-padding w3-xlarge w3-text-black">Add Customer</h3> */}
                            <div className="card-body"></div>
                            <form className="form-group col-6" onSubmit={this.submitHandler} noValidate>
                                <div>
                                    <div>
                                        <label style={{color:"black"}}>ID</label>
                                        <input className="form-control"
                                            type="text"
                                            name="id"
                                            value={id}
                                            onChange={this.changeHandler}
                                            placeholder="Enter Id"
                                            required
                                        ></input>
                                        {errors.id.length > 0 && (
                                <span className="text-danger">{errors.id}</span>
                                )}
                                    </div>
                                </div>
                                 {/* <br/> */}
                                <div className="row">
                                    <div className="col">
                                    <label style={{color:"black"}}>Cost</label>
                                        <input className="form-control mt-2"
                                            type="text"
                                            name="cost"
                                            value={cost}
                                            onChange={this.changeHandler}
                                            placeholder="Enter cost"
                                            required
                                        ></input>
                                        {errors.cost.length > 0 && (
                                <span className="text-danger">{errors.cost}</span>
                                )}
                                    </div>
                                     {/* <br/> */}
                                    <div className="col">
                                    <label style={{color:"black"}}>Days Validity</label>
                                        <input className="form-control mt-2"
                                            type="text"
                                            name="daysValidity"
                                            value={daysValidity}
                                            onChange={this.changeHandler}
                                            placeholder="Enter daysValidity"
                                            required
                                        ></input>
                                        {errors.daysValidity.length > 0 && (
                                <span className="text-danger">{errors.daysValidity}</span>
                                )}
                                    </div>
                                </div>
                                 {/* <br/> */}
                                <div>
                                <label style={{color:"black"}}>Description</label>
                                    <input className="form-control mt-2"
                                        type="text"
                                        name="description"
                                        value={description}
                                        onChange={this.changeHandler}
                                        placeholder="Enter Your description"
                                        required
                                    ></input>
                                    {errors.description.length > 0 && (
                                <span className="text-danger">{errors.description}</span>
                                )}
                                </div>
                                 {/* <br/> */}

    
                                <div>
                                <label style={{color:"black"}}>Plan Name</label>
                                    <input className="form-control mt-2"
                                        type="text"
                                        name="planName"
                                        value={planName}
                                        onChange={this.changeHandler}
                                        placeholder="Enter Your Pick Up planName"
                                        required
                                    ></input>
                                    {errors.planName.length > 0 && (
                                <span className="text-danger">{errors.planName}</span>
                                )}
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-primary mt-2" >Create New Pack</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddPack3;