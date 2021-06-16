import React, { Component } from 'react';
import CustomerServices from '../services/CustomerServices';

class UpdatePack2 extends Component {
    constructor(props){
        super(props);

        this.state={
            id:sessionStorage.getItem('id'),
            cost:'',
            daysValidity:'',
            description:'',
            planName:'',
        }
        this.changeidHandler=this.changeidHandler.bind(this);
        this.changeCostHandler=this.changeCostHandler.bind(this);
        this.changeDaysValidityHandler=this.changeDaysValidityHandler.bind(this);
        this.changeDescriptionHandler=this.changeDescriptionHandler.bind(this);
        this.changePlanNameHandler=this.changePlanNameHandler.bind(this);
    
        this.updatePack=this.updatePack.bind(this);
    }

    // cancel(){
    //     this.props.history.push('/updatePack')
    // }

    componentDidMount(){
       CustomerServices.getPack(this.state.id).then((response) =>{
           let packs=response.data;
           this.setState({
               id:packs.id,
               cost:packs.cost,
               daysValidity:packs.daysValidity,
               description:packs.description,
               planName:packs.planName,
              
           })   
       }
       )
    }
    updatePack =(e)=>
    {
        // e.preventDefault();
        let pack={id:this.state.id, cost:this.state.cost, daysValidity:this.state.daysValidity, description:this.state.description, planName:this.state.planName};
        console.log('Pack=>'+JSON.stringify(pack));
        CustomerServices.updatePack(pack,this.state.id).then(
            response=>
            {
                this.props.history.push('/')
            }
        )
    }

    changeidHandler=(event)=>
    {
        this.setState({id:event.target.value});
    }
    changeCostHandler=(event)=>
    {
        this.setState({cost:event.target.value});
    }
    changeDaysValidityHandler=(event)=>
    {
        this.setState({daysValidity:event.target.value});
    }
    changeDescriptionHandler=(event)=>
    {
        this.setState({description:event.target.value})
    }
    changePlanNameHandler=(event)=>
    {
        this.setState({planName:event.target.value})
    }
   
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center w4-padding w3-xlarge w3-text-black">Update Pack</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label className="w4-padding w2-xlarge w3-text-black">Pack Id</label>
                                        <input className="form-control" placeholder="Enter Pack Id" name="id"
                                        value={this.state.id} onChange={this.changeidHandler} disabled />
                                    </div>
                                    {/* <br/> */}
                                    <div className="form-group">
                                        <label className="w4-padding w2-xlarge w3-text-black">Cost</label>
                                        <input className="form-control" placeholder="Enter Cost" name="cost"
                                         value={this.state.cost} onChange={this.changeCostHandler}/>
                                    </div>
                                    {/* <br/> */}
                                    <div className="form-group">
                                        <label className="w4-padding w2-xlarge w3-text-black">DaysValidity</label>
                                        <input className="form-control" placeholder="Enter DaysValidity" name="daysValidity"
                                          value={this.state.daysValidity} onChange={this.changeDaysValidityHandler}/>
                                    </div>
                                    {/* <br/> */}
                                    <div className="form-group">
                                        <label className="w4-padding w2-xlarge w3-text-black">Description</label>
                                        <input className="form-control" placeholder="Enter Description" name="description"
                                         value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                    </div>
                                    {/* <br/> */}
                                    <div className="form-group">
                                        <label className="w4-padding w2-xlarge w3-text-black">Plan Name</label>
                                        <input className="form-control" placeholder="Enter Plan Name" name="planName"
                                         value={this.state.planName} onChange={this.changePlanNameHandler}/>
                                    </div>
                                   
                                    <button  className="btn btn-success" onClick={this.updatePack} style={{ marginBottom:'50px'}}>Update</button>
                                    {/* <button  className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginBottom:'50px', marginLeft:"10px"}}>Cancel</button> */}
                                    <a style={{marginBottom: "50px"}} className="btn btn-danger" href="getAllCustomers">Cancel</a>
                                </form>
                                {/* <h6 className='alert alert-success'>{msg}</h6> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdatePack2;