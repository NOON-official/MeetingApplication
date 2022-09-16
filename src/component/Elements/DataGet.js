import client from '../../api';

async function DataGet() {
  console.log('함수실행');
  const id = window.sessionStorage.getItem('id');
  const accessToken = window.sessionStorage.getItem('access');

  console.log(`Bearer ${accessToken}`);

  client
    .get(`api/team/ourteam-id/${id}`, { headers: { authorization: `Bearer ${accessToken}` } })

    .then((res) => {
      window.sessionStorage.setItem('ourteamId', res.data.data.ourteamId);
      if (res.data.data.ourteamId == -1) {
        alert('매칭진행중인 팀 정보가 없습니다.');
      } else {
        client
          .get(`api/team/status/${window.sessionStorage.getItem('ourteamId')}`, {
            headers: { authorization: `Bearer ${accessToken}` },
          })
          .then((res) => console.log(res.data.data.matchingStatus))
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
}
export default DataGet;
