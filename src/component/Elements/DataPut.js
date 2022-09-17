import client from '../../api';

async function DataPut() {
  console.log("put start")
  const ourTeamInfo = JSON.parse(JSON.parse(window.localStorage.getItem('persist:root')).ourTeamInfo);
  const ourTeamId = window.sessionStorage.getItem('ourteamId')
  let object = { ourteamId: parseInt(ourTeamId) };
  const finalOurTeamInfo = Object.assign(JSON.parse(ourTeamInfo), object);
 
    await client
       .put('/api/team', finalOurTeamInfo, {
         headers: { authorization: `Bearer ${window.sessionStorage.getItem('access')}` },
       })
       .catch((err) => {
         if (err.response.data.status == 400) {
           alert(err.response.data.message);
           window.location.replace('/');
         }
         console.log(err);
       });
}

export default DataPut;
