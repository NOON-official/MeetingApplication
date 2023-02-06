export default function KakaoLoginLink({ children }) {
  return (
    <a href={`${process.env.REACT_APP_SERVER_URL}/auth/signin/kakao`}>
      {children}
    </a>
  );
}
