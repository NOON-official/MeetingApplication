import client from '../../api';
async function DataPush() {
  
  const ourTeamInfo = JSON.parse(JSON.parse(window.localStorage.getItem('persist:root')).ourTeamInfo);
  const phonenumber = JSON.parse(JSON.parse(window.localStorage.getItem('persist:root')).phone);
  const id = window.sessionStorage.getItem('id');
  let object = { userId: parseInt(id) };
  const finalOurTeamInfo = Object.assign(JSON.parse(ourTeamInfo), object);
  const postPhonenunber = { userId: parseInt(id), phone: phonenumber };
  await client
    .post('api/user/phone', postPhonenunber)
    //delete header
    .then(async (res) => {
     await client
        .post('/api/team', finalOurTeamInfo)
        //delete header
        .then(
         await client
          .get(`api/team/ourteam-id/${id}`)
          //delete header
          .then(async (res)=>{
                window.sessionStorage.setItem('ourteamId', res.data.data.ourteamId);
               await client
                .get(`api/team/status/${window.sessionStorage.getItem('ourteamId')}`)
                //delete header
                .then((res) => {
                  window.localStorage.setItem('matchingStatus',res.data.data.matchingStatus)})
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
