import { API_URL } from '../config/constants';

export default function KakaoLoginLink({ children }) {
  return (
    <a
      href={`${API_URL}/auth/signin/kakao?redirectUrl=${encodeURIComponent(
        window.location.href,
      )}`}
    >
      {children}
    </a>
  );
}
