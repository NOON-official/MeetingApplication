import React from 'react';
import { Navigate } from 'react-router-dom';
import isLogin from '../../utils/isLogin';
import isMatching from '../../utils/isMatching';

// 로그인된 유저만 접근 가능
const PrivateRoute = ({ children, restricted }) => {
  // restricted = false (매칭중인 유저 접근 가능)
  // restricted = true (매칭중인 유저 접근 불가능)

  if (isLogin()) {
    // 매칭중인 유저 접근 불가능
    if (isMatching() && restricted) {
      return <Navigate to="/apply/15" />;
    }
    // 매칭중인 유저 접근 가능
    else {
      return children;
    }
  } // 로그인 안 된 경우
  else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
