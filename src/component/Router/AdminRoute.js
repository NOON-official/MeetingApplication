import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import isLogin from '../../utils/isLogin';
import isAdmin from '../../utils/isAdmin';

// 관리자만 접근 가능
const AdminRoute = ({ children }) => {
  const [IsAdmin, setIsAdmin] = useState('');

  // isAdmin 값을 동기적으로 불러오기 위한 함수
  const getIsAdmin = async () => {
    const data = await isAdmin();
    setIsAdmin(data);
  };

  getIsAdmin();

  // 로그인을 안 한 경우
  if (!isLogin()) {
    return <Navigate to="/" />;
  } else {
    // 관리자가 아닌 경우
    if (IsAdmin !== '' && !IsAdmin) {
      return <Navigate to="/" />;
    }
    // 관리자인 경우
    else if (IsAdmin === true) {
      return children;
    }
  }
};

export default AdminRoute;
