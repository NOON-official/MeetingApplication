//관리자인지 확인
const IsAdmin = () => {

  const isAdmin = window.sessionStorage.getItem('isAdmin');
  console.log(isAdmin);
  if (isAdmin==0) return false;
  else return true;
};

export default IsAdmin;
