import React,{Component} from 'react';
import axios from 'axios';

import CustomerServices from '../services/CustomerServices';

class GetAllPacks2 extends Component{
    constructor(props){
        super(props);

        this.state={
            packs:[]
        }
        this.addPack=this.addPack.bind(this);
        this.updatePack=this.updatePack.bind(this);
        this.handleDeletePack=this.handleDeletePack.bind(this);
    }
    addPack()
    {
        this.props.history.push('/addPack');
    }

    // updatePack(id)
    // {
    //     this.props.history.push(`/updatePack/${id}`);
    // }
    updatePack=(id)=>{
        console.log(id)
        sessionStorage.setItem('id',id)
        this.props.history.push(`/updatePack`)
    }
    
    handleDeletePack=(id)=>{
        CustomerServices.deletePack(id)
            .then(response => {
                // alert("1 Row Deleted");
                window.location.reload();
            })
    }

    componentDidMount()
    {
        this.getAllPacks();
    }

    getAllPacks()
    {
        const URL='http://localhost:8080/pack/by/cost';
        axios.get(URL).then(response=>{this.setState({packs:response.data})})
    }

    render(){
        return(
            <div>
                <h1 className='text-center' style={{color:'black'}}>Packs List</h1>
               <hr style={{color:'black'}}/>
                <div className="row m-2"  style={{backgroundColor:'white'}}>
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>Pack ID</th>
                            <th>Pack Cost</th>
                            <th>Pack Days Validity</th>
                            <th>Pack Description</th>
                            <th>Plan Name</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.packs.map (
                                    pack => 
                                    <tr key={pack.id}>
                                        <td>{pack.id}</td>
                                        <td>{pack.cost}</td>
                                        <td>{pack.daysValidity}</td>
                                        <td>{pack.description}</td>
                                        <td>{pack.planName}</td>
                                        
                                        <td>
                                            <button onClick={() =>this.updatePack(pack.id)} className="btn btn-info">Update</button>
                                            <button onClick={() =>this.handleDeletePack(pack.id)} className="btn btn-danger m-1">Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <br/>
                <div>
                    <button style={{marginLeft:'580px', marginBottom:'100px', backgroundColor:'',height:'50px',width:'200px' }} className="btn btn-primary" onClick={this.addPack}>Add Pack</button>
                </div>
            </div>
        )
    }
   
}

export default GetAllPacks2;