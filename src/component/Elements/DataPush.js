import client from '../../api';
function DataPush() {
  const ourTeamInfo = JSON.parse(window.localStorage.getItem('ourTeam'));
  const prefferedTeamInfo = JSON.parse(window.localStorage.getItem('prefferedTeam'));
  const finalOurTeamInfo = { ...ourTeamInfo, userId: window.localStorage.getItem('id') };
  console.log(finalOurTeamInfo);
  client
    .post('/api/user/ourteam', finalOurTeamInfo, {
      headers: { authorization: `Bearer ${window.localStorage.getItem('access')}` },
    })
    .then((res) => {
      console.log('response', res);
      const newBody = {
        ...prefferedTeamInfo,
        userId: window.localStorage.getItem('id'),
        ourteamId: res.data.data.ourteamId,
      };

      client
        .post('/api/user/preference', newBody, {
          headers: { authorization: `Bearer ${window.localStorage.getItem('access')}` },
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
}
export default DataPush();
