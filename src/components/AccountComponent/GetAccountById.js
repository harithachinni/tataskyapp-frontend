import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavigationBar from "./AdminNavigationBar";

function GetAccountById() {
 
  
  let [account, setAccount] = useState({});
  let [accountId, setAccountId] = useState(0);
  let [btnAccountId, setBtnAccountId] = useState(0)
  let [msg, setMsg] = useState("")

  useEffect(() => {
    //event.preventDefault();

    axios
      .get(`http://localhost:8080/accounts/find/id/${accountId}`)
      .then((response) => {
        setAccount(response.data);

        console.log(response.data)
      })
      .catch(err => {
        // setMsg(err.response.data.message)
      });
  }
    , [btnAccountId]);

  //  console.log(accountId)
  function handleBtnClick() {
    // event.preventDefault();
    setBtnAccountId(accountId)
  }


  return (
    <div>
      <AdminNavigationBar />
    <div>
      
      <br></br>
      <br></br><h4>Account Details</h4>
       <div class="row justify-content-top padding">
    <div class="col-md-8 ftco-animate fadeInUp ftco-animated">
        <form action="#" class="domain-form">
            <div class="form-group d-md-flex"> <input type="text" class="form-control px-4" value={accountId}  onChange={(e) => setAccountId(e.target.value)} placeholder="Enter your domain name..." /> 
            <button class="search-domain btn btn-primary px-5" onClick={handleBtnClick} >Search</button> </div>
        </form>
            </div><p>{account.accountId}</p>
</div>
    </div>
    </div>
  );
}

export default GetAccountById;