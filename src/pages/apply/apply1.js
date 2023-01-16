import styled from 'styled-components';
import { useState } from 'react';
import TopHeader from '../../layout/header/topHeader';
import BasicContainer from '../../components/Container/BasicContainer';
import theme from '../../style/theme';
import TextColorBinary from '../../util/TextColorBinary';
import BinaryButton from '../../components/button';

function Apply1() {
  const title = '우리 팀을 소개해주세요';
  const title2 = '우리 팀의 학교는?';
  const [gender, setGender] = useState(true);
  const [number, setNumber] = useState(true);

  return (
    <BasicContainer>
      <TopHeader />
      <ScrollDiv>
        <TextColorBinary
          text={title}
          colorFirst={theme.pink}
          colorSecond={theme.black}
          num={8}
        />
        <ButtonDiv>
          <TitleOfButton>성별</TitleOfButton>
          <BinaryButton
            state={gender}
            condition1="남자"
            condition2="여자"
            onChange={(result) => setGender(result)}
          />
        </ButtonDiv>
        <ButtonDiv>
          <TitleOfButton>인원 수</TitleOfButton>
          <BinaryButton
            state={number}
            condition1="2:2"
            condition2="3:3"
            onChange={(result) => setNumber(result)}
          />
          <TextColorBinary
            text={title2}
            colorFirst={theme.pink}
            colorSecond={theme.black}
            num={8}
          />
          <SubTitle>팀원들의 모든 학교를 말해주세요</SubTitle>
        </ButtonDiv>
      </ScrollDiv>
    </BasicContainer>
  );
}

const SubTitle = styled.text`
  color: '#AAAAAA';
  font-size: 13px;
  font-weight: 500;
`;
const TitleOfButton = styled.text`
  color: #777777;
  font-size: 14px;
  font-family: ${theme.Prefont};
  font-weight: 500;
`;
const ButtonDiv = styled.div`
  height: 77px;

  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
`;

const ScrollDiv = styled.div`
  padding: 20px 10px 20px 10px;

  flex: 1 0 auto;
  width: 100%;
  align-items: center;
  min-height: calc(100vh - 120px);
`;

export default Apply1;
