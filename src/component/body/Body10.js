import styled from 'styled-components';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, MobileBox, StyledDiv, StyledText } from '../Elements/StyledComponent';

const MyTeamInfo = () => {
  const gender = useSelector((state) => state.gender);
  const num = useSelector((state) => state.num);
  const age = useSelector((state) => state.age);
  const universities = useSelector((state) => state.university);
  const area = useSelector((state) => state.area);
  const day = useSelector((state) => state.day);
  const appearance = useSelector((state) => state.appearance);
  const mbti = useSelector((state) => state.mbti);
  const fashion = useSelector((state) => state.fashion);

  return (
    <StyledDiv
      width="90%"
      border_width="1px"
      border="10px"
      border_style="solid"
      border_color="#F1ECEC"
      borderBottom="1px solid #F1ECEC"
      height="40%"
      minHeight="270px"
      left="50%"
      bg="white"
      id="MyTeamInfo"
    >
      <StyledDiv borderBottom="1px solid #F1ECEC" top="0" left="50%" height="50px" width="90%" id="title">
        <StyledText left="0%" top="40%" font="Pretendard" line="16.8px" size="14px" fontWeight="600" color="#777777">
          1.우리는 이런 팀이에요!
        </StyledText>
      </StyledDiv>
      <StyledDiv left="50%" top="50px" height="85%" width="90%" id="contents">
        <StyledText top="5%" left="5%" color="#BBBBBB" fontWeight={'400'}>
          {' '}
          성별
        </StyledText>
        <StyledText top="5%" left="25%" color="#777777" fontWeight={'400'}>
          {' '}
          {gender}
        </StyledText>
        <StyledText top="17%" left="5%" color="#BBBBBB" fontWeight={'400'}>
          {' '}
          인원수
        </StyledText>
        <StyledText top="17%" left="25%" color="#777777" fontWeight={'400'}>
          {num} 명
        </StyledText>
        <StyledText top="29%" left="5%" color="#BBBBBB" fontWeight={'400'}>
          {' '}
          나이
        </StyledText>
        <StyledText top="29%" left="25%" color="#777777" fontWeight={'400'}>
          평균 {age}살
        </StyledText>
        <StyledText top="41%" left="5%" color="#BBBBBB" fontWeight={'400'}>
          {' '}
          학교
        </StyledText>
        <StyledText top="41%" left="25%" color="#777777" fontWeight={'400'}>
          {universities.map((data) => ` ${data} ,`)}
        </StyledText>
        <StyledText top="53%" left="5%" color="#BBBBBB" fontWeight={'400'}>
          {' '}
          지역
        </StyledText>
        <StyledText top="53%" left="25%" color="#777777" fontWeight={'400'}>
          {area.map((data) => ` ${data} ,`)}
        </StyledText>
        <StyledText top="65%" left="5%" color="#BBBBBB" fontWeight={'400'}>
          {' '}
          요일
        </StyledText>
        <StyledText top="65%" left="25%" color="#777777" fontWeight={'400'}>
          {day.map((data) => ` ${data} ,`)}
        </StyledText>
        <StyledText top="77%" left="5%" color="#BBBBBB" fontWeight={'400'}>
          {' '}
          스타일
        </StyledText>
        <StyledText top="77%" left="25%" color="#777777" fontWeight={'400'}>
          {appearance.map((data) => ` ${data} ,`)}
        </StyledText>
        <StyledText top="85%" left="5%" color="#BBBBBB" fontWeight={'400'}>
          {' '}
          mbti
        </StyledText>
        <StyledText top="85%" left="25%" color="#777777" fontWeight={'400'}>
          {mbti.map((data) => ` ${data} ,`)}
        </StyledText>
      </StyledDiv>
    </StyledDiv>
  );
};
const PrefferedInfo = () => {
  const job = useSelector((state) => state.prefferedjobs);
  const age = useSelector((state) => state.prefferedage);
  const university = useSelector((state) => state.preffereduniversity);
  return (
    <StyledDiv
      width="90%"
      border_width="1px"
      border="10px"
      border_style="solid"
      border_color="#F1ECEC"
      borderBottom="1px solid #F1ECEC"
      height="20%"
      minHeight="156px"
      left="50%"
      bg="white"
      id="MyTeamInfo"
      top="50%"
    >
      <StyledDiv borderBottom="1px solid #F1ECEC" top="0" left="50%" height="50px" width="90%" id="title">
        <StyledText left="0%" top="40%" font="Pretendard" line="16.8px" size="14px" fontWeight="600" color="#777777">
          2.상대는 이런 팀을 원해요!
        </StyledText>
      </StyledDiv>
      <StyledDiv left="50%" top="50px" height="65%" width="90%" id="contents">
        <StyledText top="15%" left="5%" color="#BBBBBB" fontWeight={'400'}>
          {' '}
          직업
        </StyledText>
        <StyledText top="15%" left="25%" color="#777777" fontWeight={'400'}>
          {job.map((data) => ` ${data} ,`)}
        </StyledText>
        <StyledText top="45%" left="5%" color="#BBBBBB" fontWeight={'400'}>
          {' '}
          평균나이
        </StyledText>
        <StyledText top="45%" left="25%" color="#777777" fontWeight={'400'}>
          {age.map((data, index) => {
            if (index + 1 != age.length) {
              return `${data}살~`;
            } else return `${data}살`;
          })}
        </StyledText>
        <StyledText top="72%" left="5%" color="#BBBBBB" fontWeight={'400'}>
          {' '}
          기피학교
        </StyledText>
        <StyledText top="72%" left="25%" color="#777777" fontWeight={'400'}>
          {university == 0 ? '같은학교는 싫어요' : '상관없어요'}
        </StyledText>
      </StyledDiv>
    </StyledDiv>
  );
};
const WantInfo = () => {
  const want = useSelector((state) => state.prefferedthing);

  return (
    <StyledDiv
      width="90%"
      border_width="1px"
      border="10px"
      border_style="solid"
      border_color="#F1ECEC"
      borderBottom="1px solid #F1ECEC"
      height="auto"
      minHeight="100px"
      left="50%"
      bg="white"
      id="MyTeamInfo"
      top="80%"
    >
      <StyledDiv borderBottom="1px solid #F1ECEC" top="0" left="50%" height="50px" width="90%" id="title">
        <StyledText left="0%" top="40%" font="Pretendard" line="16.8px" size="14px" fontWeight="600" color="#777777">
          3. 그날의 분의기는 어땠으면 좋겠어요?
        </StyledText>
      </StyledDiv>
      <StyledDiv left="50%" top="50px" height="auto" width="90%" minHeight="40px" id="contents">
        <StyledText top="5%" left="5%" color="#BBBBBB" fontWeight={'400'}>
          {want.map((data) => ` ${data}, `)}
        </StyledText>
      </StyledDiv>
    </StyledDiv>
  );
};
const Body10 = () => {
  return (
    <Container>
      <MobileBox>
        <StyledDiv max_width="350px" top="5%" width="90%" height="20%" left="50%">
          <StyledText position=" absolute" size="35px" color="#F49393" left="10px">
            당신만의 미팅학개론
          </StyledText>
          <StyledText position="absolute" size="35px" left="195px">
            을
          </StyledText>
          <StyledText position="absolute" size="35px" left="10px" top="30px">
            정리해드립니다.
          </StyledText>
        </StyledDiv>{' '}
        <StyledDiv max_width="350px" left="50%" top="20%" height="80%" width="100%" id="scrollbox" overflow="scroll">
          <StyledDiv left="50%" height="600px" width="95%" id="InfoBox">
            <MyTeamInfo></MyTeamInfo>
            <PrefferedInfo />
            <WantInfo />
          </StyledDiv>
        </StyledDiv>
      </MobileBox>
    </Container>
  );
};

export default Body10;
