import { useSelector } from "react-redux";
const isLogin = () => {
  const isLogin = useSelector((state)=> state.userLogin)
  if (isLogin)
    return true;
  else
    return false;
};

export default isLogin;
