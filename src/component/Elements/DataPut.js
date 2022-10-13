import client from '../../api';

async function DataPut() {

  let ourTeamInfo 
  let ourTeamId 
  let object 
  let finalOurTeamInfo 
 async function callDataPush(){

    ourTeamInfo = JSON.parse(JSON.parse(window.localStorage.getItem('persist:root')).ourTeamInfo);
    ourTeamId = window.localStorage.getItem('ourteamId');
    object = { ourteamId: parseInt(ourTeamId) };
    finalOurTeamInfo = Object.assign(JSON.parse(ourTeamInfo), object);
  }
  await callDataPush()
  .then(async()=>{
    await client
    .put('/api/team', finalOurTeamInfo)
    //delete header
    .catch((err) => {
      if (err.response.data.status == 400) {
        alert(err.response.data.message);
        window.location.replace('/');
      }
      console.log(err);
    });
  })
   
}

export default DataPut;
