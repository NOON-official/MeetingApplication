import client from '../../api';
import { useSelector } from 'react-redux';
async function DataPush() {

  const ourTeamInfo = JSON.parse(useSelector((state)=>(state.ourTeamInfo)));
 
  const phonenumber = JSON.parse(useSelector((state)=>(state.phone)));
  const id = window.sessionStorage.getItem('id');
  const finalOurTeamInfo = { ...ourTeamInfo, userId: parseInt(id) };
  const postPhonenunber = { userId: parseInt(id), phone: phonenumber };

  await client
    .post('api/user/phone', postPhonenunber, {
      headers: { authorization: `Bearer ${window.sessionStorage.getItem('access')}` },
    })
    .then(async (res) => {
      await client
        .post('/api/team', finalOurTeamInfo, {
          headers: { authorization: `Bearer ${window.sessionStorage.getItem('access')}` },
        })
        .then(
          alert('완성')
              )
        .catch((err) => {
              alert(err.response.data.message);
            })
        })
    .catch((err) => {
          alert(err.response.data.message);
        });
    
    
}

export default DataPush;
