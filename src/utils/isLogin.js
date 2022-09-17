const isLogin = () => {
  const accessToken = window?.sessionStorage?.getItem('access');
  if (!accessToken)
    return false;
  else
    return true;
};

export default isLogin;
