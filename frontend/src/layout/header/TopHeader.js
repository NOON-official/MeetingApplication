import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Header } from "../../asset/svg/Header.svg";

const TopHeader = () => {
  return (
    <Container>
      <Link to="/">
        <Header />
      </Link>
      <LoginBox>로그인</LoginBox>
    </Container>
  );
};

export default TopHeader;

const Container = styled.div`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.lightpink};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LoginBox = styled.div``;
