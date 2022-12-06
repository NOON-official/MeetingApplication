import client from '../../api';
async function DataPush() {
  let ourTeamInfo;
  let phonenumber;
  let id;
  let object;
  let finalOurTeamInfo;
  let postPrivacyData;
  let privateinfconfirm;
  let serviceconfirm;
  let ageinfo;
  let marketingconfirm;
  let kakaoId;
  const callDataPush = async () => {
    ourTeamInfo = JSON.parse(JSON.parse(window.localStorage.getItem('persist:root')).ourTeamInfo);
    phonenumber = JSON.parse(JSON.parse(window.localStorage.getItem('persist:root')).phone);
    privateinfconfirm = JSON.parse(JSON.parse(window.localStorage.getItem('persist:root')).privateinfoconfirm);
    serviceconfirm = JSON.parse(JSON.parse(window.localStorage.getItem('persist:root')).serviceconfirm);
    ageinfo = JSON.parse(JSON.parse(window.localStorage.getItem('persist:root')).ageinfo);
    marketingconfirm = JSON.parse(JSON.parse(window.localStorage.getItem('persist:root')).marketingconfirm);
    kakaoId = JSON.parse(JSON.parse(window.localStorage.getItem('persist:root')).kakaoid);
    id = window.localStorage.getItem('id');
    object = { userId: parseInt(id) };
    finalOurTeamInfo = Object.assign(JSON.parse(ourTeamInfo), object);
    postPrivacyData = {
      userId: parseInt(id),
      phone: phonenumber,
      kakaoId: kakaoId,
      marketingConfirm: marketingconfirm,
      privateInfConfirm: privateinfconfirm,
      serviceConfirm: serviceconfirm,
      ageInfo: ageinfo,
    };
  };
  await callDataPush().then(async () => {
    console.log('data', postPrivacyData);
    await client
      .post('api/user/privacy', postPrivacyData)
      //delete header
      .then(async (res) => {
        await client
          .post('/api/team', finalOurTeamInfo)
          //delete header
          .then(async () => {
            await client
              .get(`api/team/ourteam-id/${id}`)
              //delete header
              .then(async (res) => {
                window.localStorage.setItem('ourteamId', res.data.data.ourteamId);
                await client
                  .get(`api/team/page/${res.data.data.ourteamId}`)
                  //delete header
                  .then((res) => {
                    window.localStorage.setItem('matchingStatus', res.data.data.pageNum);
                  })
                  .catch((err) => {});
              })
              .catch((err) => console.log(err));
          })
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
  });
}

export default DataPush;
