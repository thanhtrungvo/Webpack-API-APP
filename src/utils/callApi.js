import axios from 'axios'
var path = 'http://5c623be71325a2001497655a.mockapi.io'
const callApi = (endpoint,method, data)=>{
    var config={
        method:method,
        url : path + endpoint,
        data: data
    }
    
    return(
        axios(config).catch(err=>{
            console.log(err)
        })
    )
        
    
}

export default callApi;