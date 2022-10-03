import client from '../api';

// 관리자 여부 확인
const IsAdmin = async () => {
  let id = window.localStorage.getItem('id'); // 유저 id

  const isAdmin = await client
    .get(`api/user/${id}`)
    .then((res) => {
      return res.data.data.user.isAdmin;
    })
    .catch((err) => console.log(err));

  // 관리자인 경우
  if (isAdmin === 1) {
    return true;
  }
  // 관리자가 아닌 경우
  else if (isAdmin === 0) {
    return false;
  } else {
    return false;
  }
};

export default IsAdmin;
