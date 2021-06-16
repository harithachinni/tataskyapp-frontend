import axios from 'axios';
const SERVICEREQUEST_API_BASE_URL = "http://localhost:8088/service"
class ServiceRequestService{
    
    createServiceRequest(request) {      
        return axios.post(SERVICEREQUEST_API_BASE_URL +"/addrequest", request);
    }
      
}
export default new ServiceRequestService()