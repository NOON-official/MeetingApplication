import React from 'react';
import styled from 'styled-components';

export default function Guidelines() {
  return (
    <>
      <GrayText>유의사항</GrayText>
      <GrayText2>
        <List>∙ 실물 학생증 사진, 모바일 학생증 캡쳐본 모두 가능해요</List>
        <List>∙ 대학교, 학과, 학번, 이름이 모두 보여야 승인돼요</List>
        <List>∙ 미팅 신청자와 학생증에 기재된 이름이 일치해야 해요</List>
      </GrayText2>
    </>
  );
}

const GrayText = styled.div`
  font-size: 15px;
  font-weight: 300;
  line-height: 18px;
`;

const GrayText2 = styled.ul`
  margin: 3% 0;
  font-size: 13px;
  font-weight: 300;
  line-height: 18px;
`;

const List = styled.li``;
