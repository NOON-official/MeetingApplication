import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HeaderIcon } from '../Asset/Header/Header.svg';
const HeaderContainer = styled.header`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 5%;
  background-color: #F8F3F3;
  
  border-bottom: 1px solid #FFB9B9;
`;
const HeaderLeft = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: black;
  font-family: 'Single Day', cursive;
  margin: 10px 0 0 10px
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <HeaderIcon/>
        </Link>
      </HeaderLeft>
    </HeaderContainer>
  );
};

export default Header;
