import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavigationBar from "../AccountComponent/AdminNavigationBar"

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
function RechargeCount() {
  let initialItem = 0;
  let [count, setCount] = useState(initialItem);
  let [msg,setMsg]=useState('');
  let [accountId, setAccountId] = useState("");
   let [btnrechargesByaccountId,setBtnrechargesByaccountId]=useState(0);
  
   
  useEffect(() => {
    
    const URL = `http://localhost:8088/recharge/rechargeCount/${accountId}`;
    axios
      .get(URL)
      .then((response) => {
        if(response.data=="AccountId should not be null"){
          setMsg("AccountId Does Not Exits")
        }else{
             setCount(response.data);
        }
        console.log(response.data);
      })
      .catch((error) => console.log(error.message));
  },[btnrechargesByaccountId]);


  function handleBtnClick()
  {
   
    if(accountId.length<=0){
     alert("AccountId should not be null")

    }
    
      setBtnrechargesByaccountId(accountId);
  }   
  
  
  
  
  
  return (
    <div>
      <AdminNavigationBar/>
    
    <div  style={formStyle}>

<h1 style={mystyle}>Total Recharges Done</h1>
<div className="form-group">
        <label><b>Account Id</b></label>
        <input
          className="form-control"
          value={accountId}
          onChange={(e) =>setAccountId(e.target.value)}
        />
        <button onClick={handleBtnClick} className='btn btn-success mt-2'>Get Details</button>
      </div>
     <p ><b>The No of Recharges of Account Id {accountId} is:{count}</b></p>
     <div>
       {msg}
     </div>
    </div>
    <br/><br/><br/><br/>
    </div>
  );
}

export default RechargeCount;