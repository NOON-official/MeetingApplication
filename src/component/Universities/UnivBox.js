import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { StyledDiv } from '../Elements/StyledComponent';
import * as React from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 62%;
  left: 50%;
  transform: translate(-50%, 0);
  position: absolute;
  top: 20%;
  width: 95%;
  max-width: 375px;
  overflow-y: scroll;
  overflow-x: hidden;
`;
const UniversitiesBox = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 2%;
  min-height: 35px;
`;
const UniversitiesDivide = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 5%;
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 11px;
  color: #1a1a1a;
`;
const Uni = styled.button`
  width: ${(props) => props.width || '24%'};
  height: 100%;
  border: 0.2px solid var(--color-lightblue);
  border-radius: var(--round-borderradious);
  margin: 10px;

  font-family: var(--font-family);
  font-size: ${(props) => props.size || '16px'};
  color: ${(props) => props.color || 'black'};
  background-color: ${(props) => props.background_color || 'transparent'};
`;
const University = (props) => {
  const dispatch = useDispatch();
  const universities = useSelector((state) => state.university);
  const num = useSelector((state) => state.num);
  const exist = React.useMemo(() => universities.includes(props.university), [universities]);
  const bgcolor = React.useMemo(() => (exist ? '#EB8888' : '#F6EEEE;'), [exist]);
  const fontColor = React.useMemo(() => (exist ? 'white' : '#B79292'), [exist]);

  const OnUniversityClick = React.useCallback(() => {
    if (exist) {
      dispatch({ type: 'UNIVERSITIES_DELETE', payload: props.university });
    } else {
      if (universities.length < num) dispatch({ type: 'UNIVERSITIES', payload: props.university });
    }
  }, [exist, props.university, universities]);
  return (
    <Uni size={props.size} color={fontColor} background_color={bgcolor} onClick={OnUniversityClick} width={props.width}>
      {props.university}
    </Uni>
  );
};

const UnivBox = () => {
  return (
    <Container>
      <UniversitiesDivide>가 ~ 바</UniversitiesDivide>
      <UniversitiesBox>
        <University university={'가톨릭대'}></University>
        <University university={'건국대'}></University>
        <University university={'경인여대'}></University>
        <University university={'경희대'}></University>
      </UniversitiesBox>
      <UniversitiesBox>
        <University university={'고려대'}></University>
        <University university={'광운대'}></University>
        <University university={'국민대'}></University>
        <University university={'덕성여대'}></University>
      </UniversitiesBox>
      <UniversitiesBox>
        <University university={'동국대'}></University>
        <University university={'동덕여대'}></University>
        <University university={'명지대'}></University>
        <University size="14px" university={'배화여대'}></University>
      </UniversitiesBox>
      <UniversitiesDivide>사 ~ 아</UniversitiesDivide>
      <UniversitiesBox>
        <University university={'삼육대'}></University>
        <University university={'상명대'}></University>
        <University university={'서강대'}></University>
        <University university={'서경대'}></University>
      </UniversitiesBox>
      <UniversitiesBox>
        <University university={'서울대'}></University>
        <University size="14px" university={'서울과기대'}></University>
        <University university={'서울여대'}></University>
        <University size="14px" university={'서울시립대'}></University>
      </UniversitiesBox>
      <UniversitiesBox>
        <University university={'성균관대'}></University>
        <University university={'성신여대'}></University>
        <University university={'세종대'}></University>
        <University university={'숙명여대'}></University>
      </UniversitiesBox>
      <UniversitiesBox>
        <University university={'숭의여대'}></University>
        <University university={'숭실대'}></University>
        <University university={'연세대'}></University>
        <University university={'이화여대'}></University>
      </UniversitiesBox>
      <UniversitiesDivide>자 ~ 하</UniversitiesDivide>
      <UniversitiesBox>
        <University university={'중앙대'}></University>
        <University university={'한국외대'}></University>
        <University university={'한체대'}></University>
        <University university={'한성대'}></University>
      </UniversitiesBox>
      <UniversitiesBox>
        <University university={'한양대'}></University>
        <University size="14px" university={'한양여대'}></University>
        <University university={'홍익대'}></University>
        <University size="14px" university={'다른 대학'}></University>
      </UniversitiesBox>
    </Container>
  );
};

export default UnivBox;
