
import react, { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import NavigationBar from '../RechargeComponent/NavigationBar';
import homephoto from './home5.png';



function HomePage() {
    let initialState= {
        
        firstName: "",
        lastName:"",
        accountTo1:{
            accountId:""
        
        }

       
    }
    const [userInfo, setUserInfo] = useState(initialState)


 useEffect(() => {
    axios
        .get(`http://localhost:8088/user/by/username/${sessionStorage.getItem("username")}`)
        .then((response) => {

            setUserInfo(response.data)
            console.log(response.data)
        })
        .catch((error) => {


        });

 }, [])


 return (
     <>
     <div>
     <NavigationBar/>  
         <div>
          
    <br/>
    <br/>
    <br/>
    <h1><center>
        Welcome {userInfo.firstName} {userInfo.lastName} To the TATA SKY
        </center>
    </h1>

    <br/>
    <h3> <center>Account ID: {userInfo.accountTo1.accountId}</center></h3>
    <br/>



    <img src={homephoto} 
        width="100%"
        height="500px"
        
      />
    </div>
    </div>
    </>
 )
 





 }
 

export default HomePage