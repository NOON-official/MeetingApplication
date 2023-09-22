import React, { useEffect } from 'react';
import { useGetHashQuery } from '../../features/api/userApi';

export default function Certify() {
  const { data: hash } = useGetHashQuery();
  const dataToSend = {
    ...hash,
    Ret_URL: `http://localhost:5000/api/auth/hash`,
  };

  const queryString = Object.keys(dataToSend)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(dataToSend[key])}`,
    )
    .join('&');

  useEffect(() => {
    if (window.opener) {
      console.log(window.opener);
      window.opener.document.location = `https://cert.kcp.co.kr/kcp_cert/cert_view.jsp?${queryString}`;
      window.close();
      //   window.opener.document.location(
      //     `https://cert.kcp.co.kr/kcp_cert/cert_view.jsp?${queryString}`,
      //     'childwindow',
      //     'width=400,height=400',
      //   );
    }
  });

  return <div>dkdkdkdk</div>;
}
