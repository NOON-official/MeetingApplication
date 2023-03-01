import { API_URL, CLIENT_URL } from '../config/constants';

export default function KakaoLoginLink2({ children }) {
  return (
    <a
      href={`${API_URL}/auth/signin/kakao?redirectUrl=${CLIENT_URL}/apply/agree`}
    >
      {children}
    </a>
  );
}
