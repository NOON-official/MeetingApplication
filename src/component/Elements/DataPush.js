import client from '../../api';

async function DataPush() {
  const ourTeamInfo = JSON.parse(window.sessionStorage.getItem('ourTeam'));
  const prefferedTeamInfo = JSON.parse(window.sessionStorage.getItem('prefferedTeam'));
  const phonenumber = window.sessionStorage.getItem('phone');
  const id = window.sessionStorage.getItem('id');
  const finalOurTeamInfo = { ...ourTeamInfo, userId: parseInt(id) };
  const postPhonenunber = { userId: parseInt(id), phone: phonenumber };

  await client
    .post('api/auth/phone', postPhonenunber, {
      headers: { authorization: `Bearer ${window.sessionStorage.getItem('access')}` },
    })
    .then(async (res) => {
      await client
        .post('/api/user/ourteam', finalOurTeamInfo, {
          headers: { authorization: `Bearer ${window.sessionStorage.getItem('access')}` },
        })
        .then(async (res) => {
          const newBody = {
            ...prefferedTeamInfo,
            userId: parseInt(id),
            ourteamId: res.data.data.ourteamId,
          };

          await client
            .post('/api/user/preference', newBody, {
              headers: { authorization: `Bearer ${window.sessionStorage.getItem('access')}` },
            })
            .then((res) => {
              alert('완성');
            })
            .catch((err) => {
              alert(err.response.data.message);
            });
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    })
    .catch((err) => {});
}

export default DataPush;
