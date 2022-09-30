import React from 'react';
import { StyledButton, StyledDiv } from '../Elements/StyledComponent';
import styled from 'styled-components';
import { ReactComponent as X } from '../../Asset/ErrorMessage/X.svg';
import { Link } from 'react-router-dom';
const ErrorText = styled.text`
  font-family: "Pretendard";
  font-style: normal;
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
`;
export const ReMatchingMessage = (props) => {
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <StyledDiv border="10px" height="30%" width="90%" left="50%" bg="white">
          <StyledDiv top="5%" width="90%" height="25%" left="50%" display ="flex" justify_content="end" align_item="start">
            <X onClick={close}/>
           
          </StyledDiv>
          <StyledDiv top="25%" width="100%" height="35%" left="50%">
            <ErrorText size="12px" color="#858585">
             지금 수정하시면 매칭기간이 늘어나요. <br/> 그레도 수정하시겠어요?
            </ErrorText>

          </StyledDiv> 
          <Link to='/apply/2'  style={{ textDecoration: 'none' }}>
          <StyledButton position="absolute" top="60%" width="50%" height="22%" size="20px" >
            확인
          </StyledButton>
          </Link>
        </StyledDiv>
      ) : null}
    </div>
  );
};
