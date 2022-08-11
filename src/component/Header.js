import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  height: 15%;
`;
const HeaderLeft = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: black;
  font-family: 'Single Day', cursive;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          미팅학개론{' '}
        </Link>
      </HeaderLeft>
    </HeaderContainer>
  );
};

export default Header;
