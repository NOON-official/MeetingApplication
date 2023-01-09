import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Header } from "../../asset/svg/Header.svg";
import { theme } from "../../Style/theme";
import { useCallback, useState } from "react";

const TopHeader = () => {
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
        {login ? <div>로그인</div> : <div>로그아웃</div>}
      </LoginBox>
    </Container>
  );
};

export default TopHeader;

const Container = styled.div`
  width: 100%;
  height: 70px;
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
