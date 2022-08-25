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
export const WomanNotAllowed = (props) => {
  const { open, close } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <StyledDiv border="10px" height="50%" width="90%" left="50%" bg="white">
          <StyledDiv top="15%" left="50%">
            <Character />
          </StyledDiv>
          <StyledDiv
            display="flex"
            direction="row"
            justify_content="center"
            align_item="center"
            top="53%"
            width="240px"
            height="28px"
            left="50%"
          >
            <ErrorText size="24px" color>
              현재&nbsp;
            </ErrorText>

            <ErrorText size="24px" color="#F49393">
              여성팀의 신청은&nbsp;
            </ErrorText>
            <ErrorText size="24px" color>
              마감되었습니다.
            </ErrorText>
          </StyledDiv>

          <StyledDiv top="63%" width="213px" height="28px" left="50%">
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
