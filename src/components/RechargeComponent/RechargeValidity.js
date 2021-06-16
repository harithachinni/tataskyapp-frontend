import React, {  useState ,useEffect} from 'react'


import axios from 'axios';
import NavigationBar from './NavigationBar';


function RechargeValidity(props) {
    
    let [accountId, setAccountId] = useState("");
    let [id, setId] = useState("");
      let [msg,setMsg]=useState('');
      let [submit,setSubmit]=useState(0);

    useEffect(() => {
        const URL=`http://localhost:8088/recharge/validity/${accountId}/${id}`;
        axios.get(URL).then((response) => 
        {
          setMsg(response.data)
        }).catch(error => console.log(error.message))
    },[submit])

    function handleBtnClick()
    {
        var error=document.getElementById("error")
        if(accountId===''&&id===''){
            error.innerHTML="Account Id and recharge Id Should not be null"
        }
      else  if(accountId===''){
            error.innerHTML="Account Id Should not be null"
        }
       
        else if(id===''){
            error.innerHTML="recharge Id Should not be null"
        }
      

    
        setSubmit(1)
        
        
    }

    return (
        <div>
            <NavigationBar/>
        
        <div>
            <br/>
           <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Check Validity</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        
                                        <input className="form-control" placeholder="Enter AccountId" name="accountId" required
                                        value={accountId}  onChange={(e) =>setAccountId(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        
                                        <input className="form-control" placeholder="Enter recharge Id" name="id" required
                                        value={id}  onChange={(e) =>setId(e.target.value)}/>
                                    </div>
                                   
                                    
                                    <br/>
                                    <button className="btn btn-success" onClick={handleBtnClick}>check Validity</button>
                                    <b className="text-danger" id="error"></b>
                                </form>
                                <div>
                                <p id="error" style={{backgroundColor:""}}>{msg}  </p>
                                </div>
                              
                               
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    );
}

export default RechargeValidity;