import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavigationBar from '../AccountComponent/AdminNavigationBar';
 
function GetRechargesByaccountId() {
  let initialItem = [];
  let [recharges, setRecharges] = useState(initialItem);
  let [msg,setMsg]=useState('');
   let [btnrechargesByaccountId,setBtnrechargesByaccountId]=useState(0);

   const formStyle = {
    backgroundColor: "#FFFAFA",
    padding: "20px"
  };
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };
  
  useEffect(() => {
    
    const URL = `http://localhost:8088/recharge/totalRecharges`;
    axios
      .get(URL)
      .then((response) => {
      
       setRecharges(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error.message));
  },[]);


  // function handleBtnClick()
  // {
    
  //     setBtnrechargesByaccountId(1);
  // }   
  
  
  
  
  
  return (
    <div>
      <AdminNavigationBar/>
    
    <div style={formStyle} >

<h1 style={mystyle}>All Recharges</h1>
<div className="form-group">
       
      
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
    </div>
  );
}

export default GetRechargesByaccountId;