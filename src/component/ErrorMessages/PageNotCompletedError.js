import React from 'react';
import { StyledButton, StyledDiv, StyledText } from '../Elements/StyledComponent';
import styled from 'styled-components';
import { ReactComponent as Character } from '../../Asset/ErrorMessage/ErrorMessageCharacter.svg';
const ErrorText = styled.text`
  font-family: var(--font-family);
  font-style: normal;
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
`;
export const PageNotCompleted = (props) => {
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <StyledDiv border="10px" height="50%" width="90%" left="50%" bg="white">
          <StyledDiv top="15%" left="50%">
            <Character />
          </StyledDiv>
          <StyledDiv top="47%" width="213px" height="28px" left="50%">
            <ErrorText size="24px" color>
              아직&nbsp;
            </ErrorText>

            <ErrorText size="24px" color="#F49393">
              완료하지 않은 답변
            </ErrorText>
            <ErrorText size="24px" color>
              이 있어요
            </ErrorText>
          </StyledDiv>

          <StyledDiv top="55%" width="213px" height="28px" left="50%">
            <ErrorText size="16px" color="#999999">
              {props.children}
            </ErrorText>
          </StyledDiv>
          <StyledButton position="absolute" top="80%" width="90%" height="15%" size="24px" onClick={close}>
            닫기
          </StyledButton>
        </StyledDiv>
      ) : null}
    </div>
  );
};
