import axios from 'axios';

const client = axios.create({ withCredentials: true, baseURL: process.env.REACT_APP_SERVER_URL, timeout: 1000 * 10});
let count =0;
client.interceptors.response.use(
    response =>
    {
        return response
    },
    err => {
        if (count<=5)
        {if (parseInt(err.response.status, 10) === 401) 
            {
                client
                .post('api/auth/refresh',{grant_type: "refresh_token", userId: window.sessionStorage.getItem("id")})
                .then(()=> {
                    return alert("로그인 유효기간이 만료되어 새로고침 해주시기 바랍니다.")
                }
                )
            }
        count+=1;
      
        }
     
        return (Promise.reject(err));
    }
)

export default client;
