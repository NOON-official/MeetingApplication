import client from '../../api';

async function DataGet() {
  console.log('함수실행');
  const id = window.sessionStorage.getItem('id');
  const accessToken = window.sessionStorage.getItem('access');

  console.log(`Bearer ${accessToken}`);

  await client
    .get(`api/team/ourteam-id/${id}`, { headers: { authorization: `Bearer ${accessToken}` } })

    .then((res) => {
      setTimeout(()=>{},1000);
      window.sessionStorage.setItem('ourteamId', res.data.data.ourteamId);
      setTimeout(()=>{},1000);
      if (res.data.data.ourteamId == -1) {
        alert('매칭진행중인 팀 정보가 없습니다.');
        window.location.replace('/');
        
      } else {
         client
          .get(`api/team/status/${window.sessionStorage.getItem('ourteamId')}`, {
            headers: { authorization: `Bearer ${accessToken}` },
          })
          .then((res) => {
            
            window.sessionStorage.setItem('matchingStatus',res.data.data.matchingStatus)})
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
}
export default DataGet;
