
import react, { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import AdminNavigationBar from './AdminNavigationBar';

function CountAccount() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        axios
            .get( "http://localhost:8080/accounts/count/accounts")
            .then((response) => {
    
                setCount(response.data)
                console.log(response.data)
            })
            .catch((error) => {
    
    
            });
    
     }, [])
    
    
     
     
  
    return (
        <div>
            <AdminNavigationBar/>
       
        <div>
            
<p>print counts {count}</p>
        </div>
        </div> 
    );
    
}

export default CountAccount;