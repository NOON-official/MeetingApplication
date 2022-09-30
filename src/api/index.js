import axios from 'axios';
import { useDispatch } from 'react-redux';
import {persistor} from '../index'
const dispatch = useDispatch()
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
                   
                         await client.
                         get(`api/auth/signout/${uid}`)
                         .then(async (res)=>{
                            dispatch({type:'SET_LOGIN', payload:false})
                          window.sessionStorage.clear();
                          window.localStorage.clear();
                          await persistor.purge();
                          
                         })
                         .then(()=>{
                            alert("비정상적인 로그인 접근입니다. 다시 로그인 해주세요.")
                         })
                         .then(()=>{
                         window.location.reload()
                         })
                         .catch((err)=>{console.log(err)})       
                        })
                   
            }
            else{
                client.
                get(`api/auth/signout/${uid}`)
                .then(async (res)=>{
                dispatch({type:'SET_LOGIN', payload:false})
                 window.sessionStorage.clear();
                 window.localStorage.clear();
                 await persistor.purge();
                 
                })
                .then(()=>{
                   alert("로그인 기간이 만료되었습니다. 다시 로그인 해주세요.")
                })
                .then(()=>{
                window.location.reload()
                })
                .catch((err)=>{console.log(err)})       
            }
        }
      
        
       
     
        return (Promise.reject(err));
    }
)

export default client;
