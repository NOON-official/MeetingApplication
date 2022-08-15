import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Line } from 'rc-progress';
import { useSelector, useDispatch } from 'react-redux';
import { PageNotCompleted } from './ErrorMessages/PageNotCompletedError';
import { authentication } from './Firebase/firebase';

const Container = styled.footer`
  position: fixed;
  bottom: 0%;
  left: 0;
  right: 0;
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f5f5f5;
`;

const BackAndFront = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50%;
  width: 100%;
  max-width: 350px;
`;
const BackButton = styled.button`
  background-color: transparent;
  color: #f2cbcb;
  margin-right: 5px;
  border-radius: 14px;
  height: 45px;
  width: ${(props) => props.width || '100%'};
  max-width: 162px;
  color: ${(props) => props.color};
  border-color: #f2cbcb;
  font-family: var(--font);
  font-size: var(--font-size-button);
  border: 1px solid;
`;
const FrontButton = styled.button`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  margin-right: 5px;
  border-radius: 14px;
  height: 45px;
  width: ${(props) => props.width || '100%'};
  max-width: 162px;
  color: ${(props) => props.color};
  border-color: transparent;
  font-family: var(--font);
  font-size: var(--font-size-button);
`;
const StyledBackLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  background-color: #f5f5f5;
`;
const StyledFrontLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  background-color: transparent;
`;

const Footer = () => {
  const [isDone, setIsDone] = useState(false);
  const frontButtonColor = React.useMemo(() => (isDone ? '#EB8888' : '#E9E9E9'), [isDone]);
  const fronButtonTextColor = React.useMemo(() => (isDone ? '#FFFFFF' : '#bbbbbb'), [isDone]);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const [nextPath, setNextPath] = useState('/');
  const [prevPath, setPrevPath] = useState('/');
  const location = useLocation().pathname;

  const jobs = useSelector((state) => state.jobs);
  const prefferedjobs = useSelector((state) => state.prefferedjobs);
  const prefferedage = useSelector((state) => state.prefferedage);
  const preffereduniversity = useSelector((state) => state.preffereduniversity);
  const prefferedthing = useSelector((state) => state.prefferedthing);
  const university = useSelector((state) => state.university);
  const characters = useSelector((state) => state.characters);
  const area = useSelector((state) => state.area);
  const kakaoid = useSelector((state) => state.kakaoid);
  const day = useSelector((state) => state.day);
  const appearance = useSelector((state) => state.appearance);
  const mbti = useSelector((state) => state.mbti);
  const fashion = useSelector((state) => state.fashion);
  const introduction = useSelector((state) => state.introduction);
  const privateinfoconfirm = useSelector((state) => state.privateinfoconfirm);
  const signin = useSelector((state) => state.signin);
  const MovingPath = () => {
    if (location === '/Meeting2') {
      setIsDone(false);
      if (jobs.length > 0) {
        setIsDone(true);
        setNextPath('/Meeting3');
      } else {
        setNextPath('/Meeting2');
      }
      setPrevPath('/');
    } else if (location === '/Meeting3') {
      setIsDone(false);
      if (university.length > 0) {
        setIsDone(true);
        setNextPath('/Meeting4');
      } else {
        setNextPath('/Meeting3');
      }

      setPrevPath('/Meeting2');
    } else if (location === '/Meeting4') {
      setIsDone(false);
      if (area.length > 0) {
        setIsDone(true);
        setNextPath('/Meeting5');
      } else {
        setNextPath('/Meeting4');
      }
      setPrevPath('/Meeting3');
    } else if (location === '/Meeting5') {
      setIsDone(false);
      if (day.length > 0) {
        setIsDone(true);
        setNextPath('/Meeting6');
      } else {
        setNextPath('/Meeting5');
      }

      setPrevPath('/Meeting4');
    } else if (location === '/Meeting6') {
      setIsDone(false);
      if (mbti.length > 0 && fashion.length > 0 && appearance.length > 0) {
        setIsDone(true);
        setNextPath('/Meeting7');
      } else {
        setNextPath('/Meeting6');
      }

      setPrevPath('/Meeting5');
    } else if (location === '/Meeting7') {
      setIsDone(false);
      if (characters.length > 0) {
        setIsDone(true);
        setNextPath('/Meeting8');
      } else {
        setNextPath('/Meeting7');
      }
      setPrevPath('/Meeting6');
    } else if (location === '/Meeting8') {
      setIsDone(false);
      if (prefferedage.length > 0 && prefferedjobs.length > 0 && preffereduniversity.length > 0) {
        setIsDone(true);
        setNextPath('/Meeting9');
      } else {
        setNextPath('/Meeting8');
      }
      setPrevPath('/Meeting7');
    } else if (location === '/Meeting9') {
      setIsDone(false);
      if (prefferedthing.length > 0) {
        setIsDone(true);
        setNextPath('/Meeting10');
      } else {
        setNextPath('/Meeting9');
      }

      setPrevPath('/Meeting8');
    } else if (location === '/Meeting10') {
      setPrevPath('/Meeting9');
      setNextPath('/Meeting11');
    } else if (location === '/Meeting11') {
      setIsDone(false);
      if (introduction.length > 0) {
        setIsDone(true);
        setNextPath('/Meeting12');
      } else {
        setNextPath('/Meeting11');
      }
      setPrevPath('/Meeting10');
    } else if (location === '/Meeting12') {
      setIsDone(false);
      if (privateinfoconfirm) {
        setIsDone(true);
        setNextPath('/Meeting13');
      } else {
        setNextPath('/Meeting12');
      }
      setPrevPath('/Meeting11');
    } else if (location === '/Meeting13') {
      setIsDone(false);
      if (signin) {
        setIsDone(true);
        setNextPath('/Meeting14');
      } else {
        setNextPath('/Meeting13');
      }
      setPrevPath('/Meeting12');
    } else if (location === '/Meeting14') {
      setPrevPath('/Meeting13');
    }
  };

  return (
    <Container>
      <PageNotCompleted
        open={modalOpen}
        close={closeModal}
        header="아직 완료하지 않은 답변이 있어요"
        children={'구체적인 답변이 매칭률을 높여줍니다!'}
      ></PageNotCompleted>
      <MovingPath />

      <BackAndFront>
        <StyledBackLink to={prevPath} style={{ textDecoration: 'none' }}>
          {' '}
          <BackButton> 뒤로가기</BackButton>
        </StyledBackLink>

        <StyledFrontLink
          onClick={() => {
            if (location === '/Meeting2' && jobs.length === 0) {
              openModal();
            } else if (location === '/Meeting3' && university.length === 0) {
              openModal();
            } else if (location === '/Meeting4' && area.length === 0) {
              openModal();
            } else if (location === '/Meeting5' && day.length === 0) {
              openModal();
            } else if (
              location === '/Meeting6' &&
              (appearance.length === 0 || mbti.length === 0 || fashion.length === 0)
            ) {
              openModal();
            } else if (location === '/Meeting7' && characters.length === 0) {
              openModal();
            } else if (
              location === '/Meeting8' &&
              (prefferedage.length === 0 || prefferedjobs.length === 0 || preffereduniversity.length === 0)
            ) {
              openModal();
            } else if (location === '/Meeting9' && prefferedthing.length === 0) {
              openModal();
            } else if (location === '/Meeting11' && introduction.length === 0) {
              openModal();
            }
          }}
          to={nextPath}
          style={{ textDecoration: 'none' }}
        >
          {' '}
          <FrontButton bg={frontButtonColor} color={fronButtonTextColor}>
            다음
          </FrontButton>{' '}
        </StyledFrontLink>
      </BackAndFront>
    </Container>
  );
};

export default Footer;
