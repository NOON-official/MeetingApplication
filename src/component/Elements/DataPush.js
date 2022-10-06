import client from '../../api';
async function DataPush() {
  let ourTeamInfo 
  let phonenumber 
  let id 
  let object 
  let finalOurTeamInfo
  let postPhonenunber 
  const callDataPush = async()=>{
ourTeamInfo=JSON.parse(JSON.parse(window.localStorage.getItem('persist:root')).ourTeamInfo);
phonenumber =JSON.parse(JSON.parse(window.localStorage.getItem('persist:root')).phone);
id = window.localStorage.getItem('id');
object = { userId: parseInt(id) };
finalOurTeamInfo  = Object.assign(JSON.parse(ourTeamInfo), object);
postPhonenunber = { userId: parseInt(id), phone: phonenumber };
  }
  await callDataPush().then(async ()=>{
    await client
    .post('api/user/phone', postPhonenunber)
    //delete header
    .then(async (res) => {
      
     await client
        .post('/api/team', finalOurTeamInfo)
        //delete header
        .then(async()=>{
         await client
          .get(`api/team/ourteam-id/${id}`)
          //delete header
          .then(async (res)=>{
                window.localStorage.setItem('ourteamId', res.data.data.ourteamId);
               await client
                .get(`api/team/status/${res.data.data.ourteamId}`)
                //delete header
                .then((res) => {
                  window.localStorage.setItem('matchingStatus',res.data.data.matchingStatus)})
                .catch((err) => {});
            


          })
          .catch((err)=>console.log(err))
        }
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
  })
  
}

export default DataPush;
