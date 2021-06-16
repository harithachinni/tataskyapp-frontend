import React, {useEffect,useState} from 'react'
import axios from 'axios'

function GetPack(props) {

    let initialCustomer={}
    let [pack,setPack]=useState(initialCustomer)
    let [id,setid]=useState(0)
    let [btnId,setBtnId]=useState(0)

    useEffect(() => 
    {
        const URL=`http://localhost:8080/pack/by/id/${id}`;
        axios.get(URL).then((response) =>{
            setPack(response.data)
            console.log(response.data)
        })
        .catch((error) => console.log(error.message));
    },[btnId]);

    function handleBtnClick(event)
    {
        event.preventDefault()
        setBtnId(id)
    }

    return (
        <div>
            <br/>
           <div className="container">
                <div className="row">
                   <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Get Pack</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Pack Id</label>
                                        <input className="form-control" placeholder="Enter Customer Id" name="Id"
                                        value={id} onChange={(e) => setid(e.target.value)}/>
                                    </div>
                                    <br/>
                                    <button onClick={handleBtnClick} className="btn btn-primary">Get Details</button>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
            {/* <hr/>
            <h5>Customer Id: {customer.id}</h5>
            <h5>Customer Name: {customer.name}</h5>
            <h5>Customer Email: {customer.email}</h5>
            <h5>Customer Mobile: {customer.contactNo}</h5>
            <h5>Customer Date of Birth: {customer.dob}</h5>
            <h5>Customer Address: {customer.address}</h5> */}
            <hr/>
                <div className="row m-2">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Pack ID</th>
                                <th>Pack Cost</th>
                                <th>Pack DaysValidity</th>
                                <th>Description</th>
                                <th>Plan Name</th>
                                <th>Channels</th>    
                            </tr>
                        </thead>
                        <tbody>
                            {
                                
                                <tr>
                                    <td>{pack.id}</td>
                                    <td>{pack.cost}</td>
                                    <td>{pack.daysValidity}</td>
                                    <td>{pack.description}</td>
                                    <td>{pack.planName}</td>
                                    <td>{pack.channels}</td>
                                </tr>
                            }

                        </tbody>
                    </table>
                </div>
        </div>
    );
}

export default GetPack;