import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import isLogin from '../../utils/isLogin';
import isAlredyMatching from '../../utils/isAlredayMatching';
// 모든 유저 접근 가능
const PublicRoute = ({ children, restricted }) => {
  // restricted = false (로그인한 유저 접근 가능)
  // restricted = true (로그인한 유저 접근 불가능)
  const toApply15Condition = (isLogin() && isAlredyMatching() && restricted)
  return toApply15Condition ? <Navigate to="/apply/15" /> : children;
};

export default PublicRoute;
