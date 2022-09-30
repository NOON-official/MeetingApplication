import client from '../../api';

async function DataGet() {
  let   ourteamId;
  const id = window.localStorage.getItem('id');
  //const accessToken = window.sessionStorage.getItem('access');

  //console.log(`Bearer ${accessToken}`);

  await client
    .get(`api/team/ourteam-id/${id}`)
    // header delete
    .then((res) => {
      ourteamId = res?.data?.data?.ourteamId;
      window.localStorage.setItem('ourteamId', res.data.data.ourteamId);
    })
    .then(async () => {
          if (ourteamId == -1 || ourteamId === undefined) {
          	alert('매칭진행중인 팀 정보가 없습니다.');
          	window.location.replace('/');
        	}
        	else {
          	await client
            	.get(`api/team/status/${ourteamId}}`)
              //header delete
            	.then((res) => {
              	window.localStorage.setItem('matchingStatus',res.data.data.matchingStatus)})
      	}
    	}
    )
    .catch((err) => console.log(err));
}
export default DataGet;

   