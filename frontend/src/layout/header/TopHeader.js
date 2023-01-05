import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Header } from "../../asset/svg/Header.svg";
import { theme } from "../../Style/theme";

const TopHeader = () => {
  return (
    <Container>
      <Logo>
        <Link to="/">
          <Header />
        </Link>
      </Logo>
      <LoginBox>로그인</LoginBox>
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

const LoginBox = styled.div`
  padding-right: ${theme.width * 5}px;
  font-size: 15px;
`;

const Logo = styled.div`
  padding-left: ${theme.width * 5}px;
`;
