import { useSelector } from "react-redux";
const isLogin = () => {
  const isLogin = window.localStorage.getItem('isLogin')
  if (isLogin)
    return true;
  else
    return false;
};

export default isLogin;
