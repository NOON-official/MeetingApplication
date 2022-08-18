import { useState } from 'react';
import { useDispatch } from 'react-redux';
import client from '../../api';

function DataPush() {
  const dispatch = useDispatch();
  const ourTeamInfo = JSON.parse(window.sessionStorage.getItem('ourTeam'));
  const prefferedTeamInfo = JSON.parse(window.sessionStorage.getItem('prefferedTeam'));
  const phonenumber = window.sessionStorage.getItem('phone');
  const id = window.sessionStorage.getItem('id');
  const finalOurTeamInfo = { ...ourTeamInfo, userId: parseInt(id) };
  const postPhonenunber = { userId: parseInt(id), phone: phonenumber };
  const [IsMatching, setIsMatching] = useState(false);

  client
    .post('api/auth/phone', postPhonenunber, {
      headers: { authorization: `Bearer ${window.sessionStorage.getItem('access')}` },
    })
    .then((res) => {
      client
        .post('/api/user/ourteam', finalOurTeamInfo, {
          headers: { authorization: `Bearer ${window.sessionStorage.getItem('access')}` },
        })
        .then((res) => {
          const newBody = {
            ...prefferedTeamInfo,
            userId: parseInt(id),
            ourteamId: res.data.data.ourteamId,
          };

          client
            .post('/api/user/preference', newBody, {
              headers: { authorization: `Bearer ${window.sessionStorage.getItem('access')}` },
            })
            .then((res) => {
              setIsMatching(true);
              if (IsMatching) dispatch({ type: 'SET_IS_MATCHING', payload: props.IsMatching });
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
