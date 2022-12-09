import { StyledDiv, StyledButton } from '../../Elements/StyledComponent';
import { ReactComponent as Character } from '../../../Asset/mainPage/Character.svg';
import { useState } from 'react';
import client from '../../../api';
import TeamInfo from './CounterTeamPageComponent/TeamInfo';
import PrefferedInfo from './CounterTeamPageComponent/PrefferedInfo';
import Vibe from './CounterTeamPageComponent/Vibe';
import Intro from './CounterTeamPageComponent/Intro';
import { ReactComponent as KakaoIdCopyText } from '../../../Asset/mainPage/KakaoIdCopyText.svg';
const MatchingSuccessPage = () => {
  const [Kakaoid, setKakaoId] = useState('');
  const doCopy = () => {
    if (navigator.clipboard) {
      // (IE는 사용 못하고, 크롬은 66버전 이상일때 사용 가능합니다.)
      navigator.clipboard
        .writeText(Kakaoid)
        .then(() => {
          alert('클립보드에 복사되었습니다.');
        })
        .catch(() => {
          alert('복사를 다시 시도해주세요.');
        });
    } else {
      // 흐름 2.
      if (!document.queryCommandSupported('copy')) {
        return alert('복사하기가 지원되지 않는 브라우저입니다.');
      }
    }
  };
  const [where, setWhere] = useState(0);
  let id;
  window.localStorage.getItem('ourteamId') ? (id = window.localStorage.getItem('ourteamId')) : null;
  const GetData = async () => {
    id = window.localStorage.getItem('ourteamId');
    //let accessToken = window.sessionStorage.getItem('access')
    let partnerTeamId;

    await client
      .get(`api/team/partner-team-id/${id}`)
      //delete header
      //상대팀아이디 조회
      .then((res) => {
        //res = 상대팀 아이디
        partnerTeamId = res.data.data.partnerTeamId;
      })
      .catch((err) => alert(err));
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
    await client
      .get(`api/team/result/${id}`)
      .then((res) => {
        setKakaoId(res.data.data.matchingResult.kakaoId);
      })
      .catch((err) => console.log(err));
  };
  const ResultPage = () => {
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
                여러분의 상대팀이 매칭 되었습니다.
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
              onClick={() => {
                GetData();
              }}
            >
              {/**link 수정 필요 */}

              <StyledButton position="static" left="0" height="45px" transform="0" width="180px" size="18px">
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
          justify_content="start"
          className="hello"
        >
          <StyledDiv
            transform="0"
            left="0"
            position="static"
            height="30%"
            bg="white"
            border="10px"
            margin="8% 0 0 0"
            display="flex"
            justify_content="center"
            align_item="center"
            direction="column"
          >
            <KakaoIdCopyText />
            <StyledDiv
              transform="0"
              left="0"
              position="static"
              height="30%"
              width="90%"
              border="10px"
              bg="#F1ECEC"
              display="flex"
              justify_content="space-evenly"
              align_item="center"
            >
              <StyledDiv
                transform="0"
                left="0"
                position="static"
                height="30%"
                width="70%"
                display="flex"
                justify_content="start"
                align_item="center"
                size="15px"
              >
                {Kakaoid}
              </StyledDiv>
              <StyledDiv
                transform="0"
                left="0"
                position="static"
                height="30%"
                width="15%"
                border="10px"
                bg="#D2D2D2"
                display="flex"
                justify_content="center"
                align_item="center"
                size="10px"
                onClick={() => {
                  doCopy();
                }}
              >
                복사하기
              </StyledDiv>
            </StyledDiv>
          </StyledDiv>
          <TeamInfo />
          <PrefferedInfo />
          <Vibe />
          <Intro />
        </StyledDiv>
      );
    }
  };
  return (
    <div>
      <ResultPage />
    </div>
  );
};

export default MatchingSuccessPage;
