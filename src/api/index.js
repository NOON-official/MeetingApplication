import axios from 'axios';
import { useDispatch } from 'react-redux';
import {persistor} from '../index'

const client = axios.create({ withCredentials: true, baseURL: process.env.REACT_APP_SERVER_URL, timeout: 1000 * 10});
let count =0;

client.interceptors.response.use(
    
    response =>
    {   
        return response
    },
    err => {
       
       let uid = window.localStorage.getItem("id")
       
         if (parseInt(err.response.status, 10) === 401) {
            if (err.response.data.message == "액세스 토큰이 만료되었습니다") 
            {   
                client
                .post('api/auth/refresh',{grant_type: "refresh_token", userId:uid})
                //만약 id를 받아오는게 늦으면??
                .then((res)=> {
                 console.log("token refresh",res)   
                }
                )
                .catch(async(err)=>{
                   
                         
                          window.sessionStorage.clear();
                          window.localStorage.clear();
                          await persistor.purge();
                          window.location.reload();
                         })
                       
                        
                   
            }
            else{
              
                 window.sessionStorage.clear();
                 window.localStorage.clear();
                  persistor.purge();
                  alert("로그인 기간이 만료되었습니다. 다시 로그인 해주세요.")
                  window.location.reload()
                    
            }
        }
      
        
       
     
        return (Promise.reject(err));
    }
)

export default client;
