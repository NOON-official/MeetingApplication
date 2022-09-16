import client from '../../api';
import { useSelector } from 'react-redux';
async function DataPush() {
  
  const ourTeamInfo = JSON.parse(JSON.parse(window.localStorage.getItem('persist:root')).ourTeamInfo);
  const phonenumber = JSON.parse(JSON.parse(window.localStorage.getItem('persist:root')).phone);
  const id = window.sessionStorage.getItem('id');
  let object = { userId: parseInt(id) };
  const finalOurTeamInfo = Object.assign(JSON.parse(ourTeamInfo), object);
  const postPhonenunber = { userId: parseInt(id), phone: phonenumber };
  await client
    .post('api/user/phone', postPhonenunber, {
      headers: { authorization: `Bearer ${window.sessionStorage.getItem('access')}` },
    })
    .then(async (res) => {
     await client
        .post('/api/team', finalOurTeamInfo, {
          headers: { authorization: `Bearer ${window.sessionStorage.getItem('access')}` },
        })
        .then(
         await client
          .get(`api/team/ourteam-id/${id}`,  {headers:{ authorization: `Bearer ${window.sessionStorage.getItem('access')}` }})
          .then(async (res)=>{
            setTimeout(()=>{},1000);
            window.sessionStorage.setItem('ourteamId', res.data.data.ourteamId);
            setTimeout(()=>{},1000);
            
               await client
                .get(`api/team/status/${window.sessionStorage.getItem('ourteamId')}`, {
                  headers: { authorization: `Bearer ${window.sessionStorage.getItem('access')}` },
                })
                .then((res) => {
                  
                  window.sessionStorage.setItem('matchingStatus',res.data.data.matchingStatus)})
                .catch((err) => alert(err));
            


          })
          .catch((err)=>console.log(err))

        )
        .catch((err) => {
          if (err.response.data.status == 400) {
            alert(err.response.data.message);
            window.location.replace('/');
          }
        });
    })
    .catch((err) => {
      console.log('1번 오류', err.response.data.message);
    });
}

export default DataPush;
