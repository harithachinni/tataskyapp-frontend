import React, {  useState ,useEffect} from 'react';

import axios from 'axios';
import NavigationBar from './NavigationBar';


function AddRecharge(props) {
    
    let initialRequest={
        accountId:"",
         packId:""
    };
      let [request,setRequest]=useState(initialRequest);
      let [msg,setMsg]=useState('');
      let [submit,setSubmit]=useState(0);

    useEffect(() => {
        const URL='http://localhost:8088/recharge/add';
        axios.post(URL,request).then((response) => 
        {
            if (response.data.msg === 'success') {
                alert("Message sent successfully.");
            }
        }).catch(error => console.log(error.message))
    },[submit])

    function handleBtnClick()
    {

        var error=document.getElementById("error")
      //  var error1=document.getElementById("error")
        if(request.accountId===''&&request.packId===''){
            error.innerHTML="Account Id and Pack Id Should not be null"
        }
      else  if(request.accountId===''){
            error.innerHTML="Account Id Should not be null"
        }
       
        else if(request.packId===''){
            error.innerHTML="Pack Id Should not be null"
        }
        
        else {
            
            alert("Recharge done succesfully")
        
            setSubmit(1)

        }
    }

    return (
       
        <div>
            <NavigationBar />
            <div>
        <br/>
       <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Recharge</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    
                                    <input className="form-control" type="number" placeholder="Enter AccountId" name="accountId" required
                                    value={request.accountId} onChange={e=>setRequest({...request,accountId:e.target.value})}/>
                                </div>
                                <div className="form-group">
                               <select class="form-control " name="packId" type="number" value={request.packId} required   oninvalid="this.setCustomValidity('User ID is a must')"  onChange={e=>setRequest({...request,packId:e.target.value})}>
                                 <option value=''>Select Pack Id</option>
                                <option value="43">Telugu Pack</option>
                                    <option value="2">Hindi Pack</option>
                                   <option value="3">English Pack</option>
                                </select>
                                   </div>
                               
                                
                                <br/>
                                <button className="btn btn-success" onClick={handleBtnClick}>Recharge</button>
                                <b className="text-danger" id="error"></b>
                            </form>
                            <div>
                            <p id="error" style={{backgroundColor:""}}>  </p>
                            </div>
                           <p>{msg}</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>  <br/><br/><br/>
    
    
    </div>



    );
}
export default AddRecharge;