import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Header } from "../../asset/svg/Header.svg";
import { theme } from "../../style/theme";

const ApplyHeader = () => {

  return (
    <Container>
      <Logo>
        <Link to="/">
          <Header />
        </Link>
      </Logo>
    </Container>
  );
};

export default ApplyHeader;

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  border-bottom: 1px solid ${theme.pink};
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  padding-left: ${theme.width * 5}px;
`;

