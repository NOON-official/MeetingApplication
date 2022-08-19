import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PageNotCompleted } from './ErrorMessages/PageNotCompletedError';
import DataPush from './Elements/DataPush';
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
  max-width: ${(props) => props.max_width || '162px'};
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
  width: ${(props) => props.width || '50%'};
  height: 100%;
  background-color: transparent;
`;
const Footer = () => {
  const [isDone, setIsDone] = useState(false);
  const frontButtonColor = React.useMemo(() => (isDone ? '#EB8888' : '#E9E9E9'), [isDone]);
  const fronButtonTextColor = React.useMemo(() => (isDone ? '#FFFFFF' : '#bbbbbb'), [isDone]);
  const [modalOpen, setModalOpen] = useState(false);
  const [nextPath, setNextPath] = useState('/');
  const [prevPath, setPrevPath] = useState('/');
  const location = useLocation().pathname;
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const complete = () => {
    setIsDone(true);
  };
  const uncompleted = () => {
    setIsDone(false);
  };
  const nextPathSetting = (props) => {
    setNextPath(props);
  };
  const prevPathSetting = (props) => {
    setPrevPath(props);
  };

  const jobs = useSelector((state) => state.jobs);
  const prefferedjobs = useSelector((state) => state.prefferedjobs);
  const prefferedage = useSelector((state) => state.prefferedage);
  const preffereduniversity = useSelector((state) => state.preffereduniversity);
  const prefferedthing = useSelector((state) => state.prefferedthing);
  const university = useSelector((state) => state.university);
  const characters = useSelector((state) => state.characters);
  const area = useSelector((state) => state.area);
  const day = useSelector((state) => state.day);
  const appearance = useSelector((state) => state.appearance);
  const mbti = useSelector((state) => state.mbti);
  const fashion = useSelector((state) => state.fashion);
  const introduction = useSelector((state) => state.introduction);
  const privateinfoconfirm = useSelector((state) => state.privateinfoconfirm);
  const signin = useSelector((state) => state.signin);
  const MovingPath = () => {
    if (location === '/apply/2') {
      nextPathSetting('/apply/2');
      uncompleted();
      if (jobs.length > 0) {
        complete();
        nextPathSetting('/apply/3');
      } else {
        prevPathSetting('/apply/2');
      }
      prevPathSetting('/');
    } else if (location === '/apply/3') {
      uncompleted();
      if (university.length > 0) {
        complete();
        setNextPath('/apply/4');
      } else {
        setNextPath('/apply/3');
      }

      setPrevPath('/apply/2');
    } else if (location === '/apply/4') {
      uncompleted();
      if (area.length > 0) {
        complete();
        setNextPath('/apply/5');
      } else {
        setNextPath('/apply/4');
      }
      setPrevPath('/apply/3');
    } else if (location === '/apply/5') {
      uncompleted();
      if (day.length > 0) {
        complete();
        setNextPath('/apply/6');
      } else {
        setNextPath('/apply/5');
      }

      setPrevPath('/apply/4');
    } else if (location === '/apply/6') {
      uncompleted();
      if (mbti.length > 0 && fashion.length > 0 && appearance.length > 0) {
        complete();
        setNextPath('/apply/7');
      } else {
        setNextPath('/apply/6');
      }

      setPrevPath('/apply/5');
    } else if (location === '/apply/7') {
      uncompleted();
      if (characters.length > 0) {
        complete();
        setNextPath('/apply/8');
      } else {
        setNextPath('/apply/7');
      }
      setPrevPath('/apply/6');
    } else if (location === '/apply/8') {
      uncompleted();
      if (prefferedage.length > 0 && prefferedjobs.length > 0) {
        complete();
        setNextPath('/apply/9');
      } else {
        setNextPath('/apply/8');
      }
      setPrevPath('/apply/7');
    } else if (location === '/apply/9') {
      uncompleted();
      if (prefferedthing.length > 0) {
        complete();
        setNextPath('/apply/10');
      } else {
        setNextPath('/apply/9');
      }

      setPrevPath('/apply/8');
    } else if (location === '/apply/10') {
      setPrevPath('/apply/9');
      setNextPath('/apply/11');
    } else if (location === '/apply/11') {
      uncompleted();
      if (introduction.length > 0) {
        complete();
        setNextPath('/apply/12');
      } else {
        setNextPath('/apply/11');
      }
      setPrevPath('/apply/10');
    } else if (location === '/apply/12') {
      uncompleted();
      if (privateinfoconfirm) {
        complete();
        setNextPath('/apply/13');
      } else {
        setNextPath('/apply/12');
      }
    } else if (location === '/apply/13') {
      uncompleted();
      if (signin) {
        complete();
        setNextPath('/apply/14');
      } else {
        setNextPath('/apply/13');
      }
    } else if (location === '/apply/14') {
      uncompleted();
      if (window.sessionStorage.getItem('access') != null) {
        complete();
        setNextPath('/apply/15');
      } else {
        setNextPath('/apply/14');
      }
    } else if (location === '/apply/15') {
      complete();
      setNextPath('/');
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
      {location === '/apply/2' ||
      location === '/apply/3' ||
      location === '/apply/4' ||
      location === '/apply/5' ||
      location === '/apply/6' ||
      location === '/apply/7' ||
      location === '/apply/8' ||
      location === '/apply/9' ||
      location === '/apply/10' ||
      location === '/apply/11' ? (
        <BackAndFront>
          <StyledBackLink to={prevPath} style={{ textDecoration: 'none' }}>
            {' '}
            <BackButton> 뒤로가기</BackButton>
          </StyledBackLink>

          <StyledFrontLink
            onClick={() => {
              if (location === '/apply/2' && jobs.length === 0) {
                openModal();
              } else if (location === '/apply/3' && university.length === 0) {
                openModal();
              } else if (location === '/apply/4' && area.length === 0) {
                openModal();
              } else if (location === '/apply/5' && day.length === 0) {
                openModal();
              } else if (
                location === '/apply/6' &&
                (appearance.length === 0 || mbti.length === 0 || fashion.length === 0)
              ) {
                openModal();
              } else if (location === '/apply/7' && characters.length === 0) {
                openModal();
              } else if (location === '/apply/8' && (prefferedage.length === 0 || prefferedjobs.length === 0)) {
                openModal();
              } else if (location === '/apply/9' && prefferedthing.length === 0) {
                openModal();
              } else if (location === '/apply/11' && introduction.length === 0) {
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
      ) : location === '/apply/12' || location === '/apply/13' ? (
        <BackAndFront>
          <StyledFrontLink to={nextPath} width="100%" style={{ textDecoration: 'none' }}>
            <FrontButton max_width="350px" bg={frontButtonColor} color={fronButtonTextColor}>
              다음
            </FrontButton>{' '}
          </StyledFrontLink>
        </BackAndFront>
      ) : location === '/apply/14' ? (
        <></>
      ) : (
        <BackAndFront>
          <StyledFrontLink to={nextPath} width="100%" style={{ textDecoration: 'none' }}>
            <FrontButton max_width="350px" bg={frontButtonColor} color={fronButtonTextColor}>
              메인으로 가기
            </FrontButton>{' '}
          </StyledFrontLink>
        </BackAndFront>
      )}
    </Container>
  );
};

export default Footer;
