import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavigationBar from "../AccountComponent/AdminNavigationBar";

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
function RechargesCountOnPack() {
  let initialItem = 0;
  let [count, setCount] = useState(initialItem);
  let [msg,setMsg]=useState('');
  let [packId, setPackId] = useState("");
   let [btnrechargesBypackId,setBtnrechargesBypackId]=useState(0);
  
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
  useEffect(() => {
    
    const URL = `http://localhost:8088/recharge/rechargesCountOnPack/${packId}`;
    axios
      .get(URL)
      .then((response) => {
       setCount(response.data);
       if(count===0){
         setMsg("The select the pack")
       }else{
        setMsg("");
       }
        console.log(response.data);
      })
      .catch((error) => console.log(error.message));
  },[btnrechargesBypackId]);


  function handleBtnClick()
  {
    
    if(packId===''){
     alert("Select the pack")
    }
      setBtnrechargesBypackId(packId);
  }   
  
  
  
  
  
  return (
    <div>
      <AdminNavigationBar/>
    
    <div style={formStyle} >

<h1 style={mystyle} >Recharges Done For Pack</h1>
<div className="form-group">
        <label>Pack Id</label>
        
         <div className="form-group">
                                   <select class="form-control " name="packId" type="number"  value={packId} required      onChange={(e) =>setPackId(e.target.value)}>
                                     <option value=''>Select Pack Id</option>
                                    <option value="43">Telugu Pack</option>
                                        <option value="2">Hindi Pack</option>
                                       <option value="3">English Pack</option>
                                    </select>
                                       </div>
        <button onClick={handleBtnClick} className='btn btn-success mt-2'>Get Details</button>
      </div>
     <p>The No of Recharges of done on pack:{packId} is:{count}</p>
     <div>
     <p id="error" style={{backgroundColor:""}}>  </p>
     </div>
    </div>
    <br/><br/><br/>
    </div>
  );
}


export default RechargesCountOnPack;