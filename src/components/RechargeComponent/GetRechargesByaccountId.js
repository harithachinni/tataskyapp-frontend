import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactDOM from 'react-dom';  
import AdminNavigationBar from "../AccountComponent/AdminNavigationBar";

function GetRechargesByaccountId() {
  let initialItem = [];
  let [recharges, setRecharges] = useState(initialItem);
  let [msg,setMsg]=useState('');
  let [accountId, setAccountId] = useState("");
   let [btnrechargesByaccountId,setBtnrechargesByaccountId]=useState(0);
   const formStyle = {
    backgroundColor: "#FFFAFA",
    padding: "15px"
  };
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "20px",
    fontFamily: "Arial",
    
  };
  function handleBtnClick(event)
  {
    event.preventDefault();
      setBtnrechargesByaccountId(accountId);
  }  
  useEffect(() => {
    
    const URL = `http://localhost:8088/recharge/findByPurchaseDate/${accountId}`;
    axios
      .get(URL)
      .then((response) => {
       setRecharges(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error.message));
  },[btnrechargesByaccountId],[]);


  function handleBtnClick()
  {
    if(accountId===""){
      setMsg("AccountId shoud not be null")
    }
    
      setBtnrechargesByaccountId(accountId);
  }   
  
  
  
  
  
  return (
    <div>
      <AdminNavigationBar />
    
    <div style={formStyle} >

<h1 style={mystyle}>Recharges By Your Account</h1>
<div className="form-group">
        <label><b>Account Id</b></label>
        <input
          className="form-control"
          value={accountId}
          onChange={(e) =>setAccountId(e.target.value)}
        />
        <button onClick={handleBtnClick} className='btn btn-success mt-2'>Get Details</button>
      </div>
      <div>
        {msg}
      </div>
      <table  className="table table-hover table-striped border-dark">
        <thead>
          <tr className="table-dark">
        
            <th>Recharge ID</th>
            <th>Date</th>
            <th>Plan Name</th>
            <th>Plan Description</th>
            <th>Amount</th>
            
          </tr>
          </thead>
          <tbody>
            {recharges.map((item) => (
              <tr>
              
                <td>{item.id}</td>
                <td>{item.purchasedDate}</td>
                <td>{item.planName}</td>
                <td>{item.planDescription}</td>
                <td>{item.amount}</td>
               
                 </tr>
            ))}
          </tbody>
        
      </table>
    </div>
    <br/><br/><br/>
    </div>
  );
}

export default GetRechargesByaccountId;