import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { ReactComponent as Header } from '../../asset/svg/Header.svg';
import { theme } from '../../style/theme';
import KakaoLoigin from '../../util/login/kakaoLogin';

function TopHeader() {
  const [login, setLogin] = useState(false);
  const loginHandler = useCallback(() => {
    setLogin((prev) => !prev);
  }, []);
  return (
    <Container>
      <Logo>
        <Link to="/">
          <Header />
        </Link>
      </Logo>
      <LoginBox onClick={loginHandler}>
        {login ? <KakaoLoigin /> : <Text>로그아웃</Text>}
      </LoginBox>
    </Container>
  );
}

export default TopHeader;

const Container = styled.div`
  width: 100%;
  padding: 0 30px;
  height: 70px;
  max-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LoginBox = styled.button`
  all: unset;
  padding-right: ${theme.width * 5}px;
  font-size: 15px;
  :hover {
    cursor: pointer;
  }
`;

const Logo = styled.div`
  padding-left: ${theme.width * 5}px;
`;

const Text = styled.div`
  font-weight: 400;
  font-size: 11px;
  color: #858585;
`;
