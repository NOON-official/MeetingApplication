import axios from 'axios';

const client = axios.create({ withCredentials: true, baseURL: process.env.REACT_APP_SERVER_URL, timeout: 1000 * 10});
let count =0;
client.interceptors.response.use(
    
    response =>
    {
        return response
    },
    err => {
       let uid = window.localStorage.getItem("id")
        if (count<1)
        {
            if (parseInt(err.response.status, 10) === 401) 
            {
                client
                .post('api/auth/refresh',{grant_type: "refresh_token", userId:uid})
                //만약 id를 받아오는게 늦으면??
                .then((res)=> {
                 console.log("token refresh",res)   
                }
                )
                .catch((err)=>{alert("로그인 기간이 만료되었습니다. 다시 로그인 해주세요.")})
            }
        count+=1;
      
        }
       
     
        return (Promise.reject(err));
    }
)

export default client;
