import { StyledDiv, StyledButton, StyledTextArea } from '../../Elements/StyledComponent';
import { ReactComponent as Character } from '../../../Asset/mainPage/Character.svg';
import client from '../../../api';
import { useEffect, useState } from 'react';
import TeamInfo from './CounterTeamPageComponent/TeamInfo';
import Vibe from './CounterTeamPageComponent/Vibe';
import Intro from './CounterTeamPageComponent/Intro';
import PrefferedInfo from './CounterTeamPageComponent/PrefferedInfo';
import React from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

const Done = () => {
  const dispatch = useDispatch();
  const reasontext = useSelector((state) => state.reasontext);
  const reasons = useSelector((state) => state.reasons);
  const StyledTextArea = styled.textarea`
    position: static;
    width: 90%;
    height: 80%;
    border: 0;
    margin: 5%;
    font-family: Pretendard;
    font-size: 12px;
    color: ${(props) => props.color};
    ::placeholder {
      justify-content: flex-start;
      text-align: start;
      font-size: 13px;
    }
    :focus {
      outline: none;
    }
  `;

  const [where, setWhere] = useState(0);
  let id;
  let partnerTeamId = window.localStorage.getItem('partnerTeamId')
    ? window.localStorage.getItem('partnerTeamId')
    : null;
  window.localStorage.getItem('ourteamId') ? (id = window.localStorage.getItem('ourteamId')) : null;
  const GetData = async () => {
    id = window.localStorage.getItem('ourteamId');
    //let accessToken = window.sessionStorage.getItem('access')

    await client
      .get(`api/team/partner-team-id/${id}`)
      //delete header
      //상대팀아이디 조회
      .then((res) => {
        //res = 상대팀 아이디
        partnerTeamId = res.data.data.partnerTeamId;
        window.localStorage.setItem('partnerTeamId', partnerTeamId);
      })
      .catch((err) => console.log(err));
    await client
      .get(`api/team/${partnerTeamId}`)
      //delete header
      .then((res) => {
        window.sessionStorage.setItem('partnerTeamInfo', JSON.stringify(res.data.data));
      })
      .then(() => {
        setWhere(1);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Accept = async () => {
    await client
      .post(`api/team/accept`, { ourteamId: id, partnerTeamId: partnerTeamId })

      .then((res) => {
        alert('수락되었습니다.');
      })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  const Refuse = async () => {
    await client
      .post(`api/team/refuse`, { ourteamId: id, partnerTeamId: partnerTeamId })

      .then((res) => {
        alert('상대팀을 거절하였습니다.');
      })
      .then(() => {
        setWhere(3);
      })
      .catch((err) => alert(err));
  };

  const Reasons = (props) => {
    const exist = React.useMemo(() => reasons.includes(props.meta), [reasons]);
    const bgcolor = React.useMemo(() => (exist ? '#EB8888' : '#F6EEEE'), [exist]);
    const fontColor = React.useMemo(() => (exist ? 'white' : '#B79292'), [exist]);

    const OnReasonlick = React.useCallback(() => {
      if (exist) {
        dispatch({ type: 'REASON_DELETE', payload: props.meta });
      } else {
        dispatch({ type: 'REASON', payload: props.meta });
      }
    }, [exist, props.meta]);
    return (
      <StyledDiv
        display="flex"
        direction="column"
        justify_content="space-around"
        align_item="center"
        position=" static"
        transform="0"
        left="0"
        height="15%"
        width="90%"
        border="10px"
        bg={bgcolor}
        color={fontColor}
        onClick={OnReasonlick}
      >
        {props.text}
      </StyledDiv>
    );
  };
  const ReasonsContainer = () => {
    const setReasonText = (e) => {
      dispatch({ type: 'SET_REASONTEXT', payload: e.target.value });
    };
    return (
      <StyledDiv
        display="flex"
        direction="column"
        justify_content="space-around"
        align_item="center"
        position=" static"
        transform="0"
        left="0"
        height="60%"
        bg="white"
        width="90%"
        border="10px"
        size="18px"
        font="var(--font-family)"
      >
        <Reasons text="나이가 마음에 들지 않아요" meta={1}></Reasons>
        <Reasons text="학교가 마음에 들지 않아요" meta={2}></Reasons>
        <Reasons text="자기소개가 마음에 지 않아요" meta={3}></Reasons>
        <Reasons text="팀 내부 사정으로 거절 했어요" meta={4}></Reasons>

        <StyledDiv
          display="flex"
          direction="column"
          justify_content="space-around"
          align_item="center"
          position=" static"
          transform="0"
          left="0"
          height="30%"
          width="90%"
          border="10px"
          bg="#FFF8F8"
        >
          {' '}
          <StyledTextArea
            id="textarea"
            onChange={setReasonText}
            maxLength={150}
            minLength={10}
            resize="none"
            placeholder={reasontext ? reasontext : '“기타 사유를 알려주세요”'}
          ></StyledTextArea>
        </StyledDiv>
      </StyledDiv>
    );
  };
  const sendResult = () => {
    console.log('click');

    let result = { ourteamId: id, reason: { id: reasons, other: reasontext } };
    client
      .post('api/team/refuse/reason', result)
      .then((res) => alert('정상적으로 저장되었습니다.'))
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };
  const DonePage = () => {
    if (where == 0) {
      return (
        <StyledDiv
          display="flex"
          direction="column"
          justify_content="space-around"
          align_item="center"
          position=" static"
          transform="0"
          left="0"
          height="80%"
          bg="white"
          width="90%"
          border="10px"
        >
          <StyledDiv
            position="static"
            transform="0"
            left="0"
            height="100%"
            width="100%"
            display="flex"
            direction="column"
            justify_content="space-between"
            align_item="center"
          >
            <StyledDiv top="20%" height="30%" left="50%" width="90%">
              <Character />
            </StyledDiv>
            <StyledDiv
              top="50%"
              height="13%"
              left="50%"
              width="90%"
              display="flex"
              direction="column"
              justify_content="space-between"
              align_item="center"
            >
              <StyledDiv position="static" transform="0" left="0" font="Nanum JungHagSaeng" color="1A1A1A" size="30px">
                여러분의 상대팀이 매칭되었습니다.
              </StyledDiv>
              <StyledDiv position="static" transform="0" left="0" font="Nanum JungHagSaeng" color="1A1A1A" size="30px">
                상대팀의 미팅학개론을 확인해 주세요!
              </StyledDiv>
            </StyledDiv>
            <StyledDiv
              top="70%"
              height="20%"
              left="50%"
              width="90%"
              display="flex"
              direction="column"
              justify_content="center"
              align_item="center"
            >
              {/**link 수정 필요 */}

              <StyledButton
                position="static"
                left="0"
                height="45px"
                transform="0"
                width="180px"
                size="18px"
                onClick={GetData}
              >
                결과 조회하기
              </StyledButton>
            </StyledDiv>
          </StyledDiv>
        </StyledDiv>
      );
    } else if (where == 1) {
      return (
        <StyledDiv
          left="50%"
          height="1000px"
          width="90%"
          id="InfoBox"
          display="flex"
          direction="column"
          justify_content="space-around"
          className="hello"
        >
          <TeamInfo />
          <PrefferedInfo />
          <Vibe />
          <Intro />
          <div style={{ fontFamily: 'var(--font-family)' }}>
            상대방의 정보를 스크린샷 찍어서 우리팀에게 공유해보세요!
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <StyledButton
              onClick={
                Accept //API call하기
              }
              position="static"
              left="0"
              height="45px"
              transform="0"
              width="120px"
              size="18px"
            >
              수락하기
            </StyledButton>
            <StyledButton
              onClick={
                Refuse //APT call하기
              }
              position="static"
              left="0"
              height="45px"
              transform="0"
              width="120px"
              size="18px"
            >
              거절하기
            </StyledButton>
          </div>
        </StyledDiv>
      );
    } else if (where == 3) {
      return (
        <StyledDiv
          display="flex"
          direction="column"
          justify_content="space-around"
          align_item="center"
          position=" static"
          transform="0"
          left="0"
          height="80%"
          bg="white"
          width="90%"
          border="10px"
        >
          <StyledDiv
            display="flex"
            direction="column"
            justify_content="space-around"
            align_item="center"
            position=" static"
            transform="0"
            left="0"
            height="25%"
            bg="white"
            width="90%"
            border="10px"
            size="28px"
            font="var(--font-family)"
          >
            거절하신 이유가 뭘까요?
          </StyledDiv>
          <ReasonsContainer></ReasonsContainer>

          <StyledDiv
            display="flex"
            direction="column"
            justify_content="space-around"
            align_item="center"
            position=" static"
            transform="0"
            left="0"
            height="15%"
            bg="white"
            width="90%"
            border="10px"
          >
            <StyledButton
              left="0"
              transform="0"
              position="static"
              width="60%"
              height="60%"
              max_height="50px"
              max_width="160px"
              onClick={sendResult}
            >
              결과 보내기
            </StyledButton>
          </StyledDiv>
        </StyledDiv>
      );
    }
    {
      /*else if (where == 2) {
      const [openChatLink, setOpenChatLink] = useState();
      useEffect(() => {
        client
          .get(`api/team/result/${id}`)
          .then(async (res) => {
            setOpenChatLink(res.data.data.matchingResult.chatLink);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

      return (
        <StyledDiv
          display="flex"
          direction="column"
          justify_content="space-around"
          align_item="center"
          position=" static"
          transform="0"
          left="0"
          height="80%"
          bg="white"
          width="90%"
          border="10px"
        >
          <StyledDiv
            position="static"
            transform="0"
            left="0"
            height="100%"
            width="100%"
            display="flex"
            direction="column"
            justify_content="space-between"
            align_item="center"
          >
            <StyledDiv top="20%" height="30%" left="50%" width="90%">
              <Character />
            </StyledDiv>
            <StyledDiv
              top="50%"
              height="13%"
              left="50%"
              width="90%"
              display="flex"
              direction="column"
              justify_content="space-between"
              align_item="center"
            >
              <StyledDiv position="static" transform="0" left="0" font="Nanum JungHagSaeng" color="1A1A1A" size="30px">
                상대팀이 기다리고 있어요
              </StyledDiv>
              <StyledDiv position="static" transform="0" left="0" font="Nanum JungHagSaeng" color="1A1A1A" size="30px">
                어서 빨리 오픈채팅으로 들어가보세요!!
              </StyledDiv>
            </StyledDiv>
            <StyledDiv
              top="70%"
              height="20%"
              left="50%"
              width="90%"
              display="flex"
              direction="column"
              justify_content="center"
              align_item="center"
            >
              <StyledDiv
                position="static"
                transform="0"
                left="0"
                height="60%"
                display="flex"
                direction="column"
                justify_content="space-around"
                align_item="center"
                width="80%"
                bg="#F1ECEC"
                border="10px"
              >
                <StyledDiv
                  position="static"
                  display="flex"
                  justify_content="center"
                  align_item="center"
                  transform="0"
                  left="0"
                  height="40%"
                  font="Pretendard"
                  color="#777777"
                  size="12px"
                >
                  오픈채팅방 링크는 다음과 같습니다.
                </StyledDiv>
                <StyledDiv
                  position="static"
                  display="flex"
                  justify_content="center"
                  align_item="center"
                  transform="0"
                  left="0"
                  height="50%"
                  color="#777777"
                  size="12px"
                >
                  <a href={openChatLink}>{openChatLink}</a>
                </StyledDiv>
                
              </StyledDiv>
            </StyledDiv>
          </StyledDiv>
        </StyledDiv>
      );
    }*/
    }
  };
  return (
    <div style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
      <DonePage />
    </div>
  );
};

export default Done;
