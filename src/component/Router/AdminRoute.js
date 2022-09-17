import React from 'react';
import { Navigate } from 'react-router-dom';
import isLogin from '../../utils/isLogin';
import isAdmin from '../../utils/isAdmin';

// 로그인된 유저만 접근 가능
const AdminRoute = ({ children ,restricted}) => {
  // restricted = false (매칭중인 유저 접근 가능)
  // restricted = true (매칭중인 유저 접근 불가능)

  if(isLogin){
    //admin이 아니고 제한이 되어있으면
    return !isAdmin() && restricted ? <Navigate to="/" /> : children;
  }

  else
  {
    return children
  }
};

export default AdminRoute;
