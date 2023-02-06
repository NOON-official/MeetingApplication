import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Bulb } from '../../Asset/page1/Bulb.svg';
import { ReactComponent as CatchPhrase } from '../../Asset/page1/Text.svg';
import { ReactComponent as Title } from '../../Asset/page1/Title.svg';
import { ReactComponent as Logo } from '../../Asset/page1/Logo.svg';
import { ReactComponent as Star } from '../../Asset/page1/Star.svg';
import { ReactComponent as Season3Text } from '../../Asset/mainPage/Season3Text.svg';
import { ReactComponent as MainText } from '../../Asset/page1/MainText.svg';
import { ReactComponent as Christmascharacter } from '../../Asset/mainPage/ChristmasCharacter.svg';
import { ReactComponent as KakaoLogo } from '../../Asset/mainPage/KakaoLogo.svg';
import { ReactComponent as InstagramLogo } from '../../Asset/mainPage/InstagramLog.svg';
import ChannelTalk from '../../utils/ChannelTalk';

import { StyledDiv, StyledText, Container, MobileBox, StyledButton } from '../Elements/StyledComponent';
import client from '../../api';
import Counter from '../Elements/CountAnimation';

const Main = () => {
  let matchingStatus = JSON.parse(window.localStorage.getItem('matchingStatus'));
  let setting = {
    pluginKey: process.env.REACT_APP_CHANNEL_TALK_PLUGIN, //please fill with your plugin key
    memberId: window.localStorage.id,
    profile: {
      name: window.localStorage.nickname,
      email: '',
      id: window.localStorage.id,
    },
  };

  const [num, setNum] = useState(0);
  const [modalOpen, setModalOpen] = useState(true);
  const [statusMale, setStatusMale] = useState();
  const [statusFeale, setStatusFeale] = useState();
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  {
    React.useEffect(() => {
      const loadCount = async () => {
        await client
          .get('api/service/count/team')
          .then((res) => {
            setNum(res.data.data.waitingTeam);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      loadCount();
      {
        /*client
    .get('api/service/apply/status')
    .then((res)=>{
      setStatusMale(res.data.data.maleIsFulled);
      setStatusFemale(res.data.data.femaleIsFulled)
    })
    .catch((err)=>{console.log(err)});
  */
      }
    }, [num]);
  }
  return (
    <Container height={'100%'} bg="#f8f3f3">
      {/** 여성 참가자 제한 modal */}
      {/*
        statusFemale&&
        <WomanNotAllowed
        open={modalOpen}
        close={closeModal}
        children={'9월 초에 시작되는 다음 시즌에 이용해주세요'}
      ></WomanNotAllowed>
  */}
      {/** 남성 참가자 제한 modal */}
      {/*
      statusMale&&
      <ManNotAllowed
        open={modalOpen}
        close={closeModal}
        children={'9월 초에 시작되는 다음 시즌에 이용해주세요'}
      ></ManNotAllowed>
      */}
      <MobileBox overflow="auto">
        <StyledDiv top="5.5%" left="17%" transform=" translate(-50%, 0)">
          <Bulb />
        </StyledDiv>
        <StyledDiv top="7%" left="52%" transform="translate(-50%, 0)">
          <CatchPhrase />
        </StyledDiv>
        <StyledDiv top="15%" left="52%" transform="translate(-50%, 0)">
          <Title />
        </StyledDiv>
        {/** <StyledDiv top="23%" left="80%" transform="translate(-50%, 0)"><Star /></StyledDiv>*/}

        <StyledDiv top="30%" left="50%" transform="translate(-50%, 0)">
          {/*/<Logo />*/}
          <Christmascharacter />
        </StyledDiv>

        {/*
        matchingStatus==1 ||matchingStatus==2?
          matchingStatus==1?
            <StyledDiv font="Pretendard" size="15px"weight="300"left="50%"height="45px" width="250px" top="65%" >
              매칭이 완료되었습니다. <br/>매칭 조회를 통해 상대방을 확인해보세요.
            </StyledDiv>
          :<div>
             <StyledDiv font="Pretendard" size="15px"weight="300"left="50%"height="45px" width="250px" top="60%" >
              아쉽게도 이번에는 원하는 <br/>상대팀이 매칭이 되지 않았어요.
            </StyledDiv>
            <StyledDiv weight="bold"font="Pretendard" size="15px"left="50%"height="45px" width="250px" top="70%" >
              매칭조회 페이지에서 
            </StyledDiv>
            <StyledDiv weight="300"font="Pretendard" size="15px"left="50%"height="45px" width="250px" top="75%" >
              다시 한 번 도전해보세요!
            </StyledDiv>
          </div>
    */}

        <div>
          <StyledDiv top="70%" left="50%" transform="translate(-50%, 0)">
            {/*} <MainText />*/}
            <Season3Text />
          </StyledDiv>
          {/*<Link to="/apply/2" style={{ textDecoration: 'none' }}>
          <StyledButton height="45px" width="180px" top="70%" size="18px">
            매칭 시작하기
          </StyledButton>
        </Link>
        */}
        </div>
        <StyledDiv
          top="85%"
          width="100%"
          height="5%"
          left="50%"
          display="flex"
          justify_content="center"
          align_item="center"
          transform="translate(-50%, 0)"
        >
          <a href="http://pf.kakao.com/_Whxjqxj">
            <KakaoLogo />
          </a>

          <a href="https://www.instagram.com/meetingo_me/">
            <InstagramLogo />
          </a>
        </StyledDiv>

        {/*<Counter end={num} />*/}
        <StyledDiv
          border_top="1px solid #D6D6D6"
          top="93%"
          left="50%"
          height="20%"
          width="100%"
          transform="translate(-50%, 0)"
          display="flex"
          flex-direction="column"
          justify_content="space-around"
          align_item="center"
        >
          <StyledDiv
            top="5%"
            left="50%"
            height="20%"
            width="100%"
            transform="translate(-50%, 0)"
            display="flex"
            flex-direction="row"
            justify_content="space-around"
            align_item="center"
          >
            <StyledText position="static" font="Pretendard" color="#515151">
              {' '}
              <a href="https://furry-bank-197.notion.site/4e3c4d1f8306494b9a54fc2226e9a3b7"> 이용약관</a>
            </StyledText>
            <StyledText font="Pretendard" position="static" color="#515151">
              <a href="https://furry-bank-197.notion.site/c83f4127e3c54b7080c333aa31a4cc03"> 개인정보처리방침</a>
            </StyledText>
            <StyledText font="Pretendard" color="#515151" position="static">
              <a href="https://furry-bank-197.notion.site/303cd8bbdefc41a3bf088b30a4c98f84"> 공지사항</a>
            </StyledText>
            <StyledText font="Pretendard" color="#515151" position="static">
              <a href="https://furry-bank-197.notion.site/aaa47097d9b24192a739a3f7aafa8556"> 문의사항</a>
            </StyledText>
          </StyledDiv>
          <StyledDiv
            margin="0 0 5% 5%"
            top="40%"
            left="50%"
            height="70%"
            width="100%"
            transform="translate(-50%, 0)"
            display="flex"
            direction="column"
            justify_content="flex-start"
            align_item="start"
          >
            <StyledText size="5px" position="static" font="Pretendard" color="#515151">
              미팅학개론
            </StyledText>
            <StyledText size="5px" position="static" font="Pretendard" color="#515151">
              대표자 금아름 사업자등록번호 : 172-20-01807
            </StyledText>
            <StyledText size="5px" position="static" font="Pretendard" color="#515151">
              통신판매번호 : 2023-서울동대문-0225
            </StyledText>
            <StyledText size="5px" position="static" font="Pretendard" color="#515151">
              연락처 : 010-2802-0270 / noon.official.info@gmail.com
            </StyledText>
            <StyledText size="5px" position="static" font="Pretendard" color="#515151">
              주소지 : 서울시 동대문구 휘경로 20, 3층
            </StyledText>
          </StyledDiv>
        </StyledDiv>
        <div>{ChannelTalk.boot(setting)}</div>
      </MobileBox>
    </Container>
  );
};

export default Main;
