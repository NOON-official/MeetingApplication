import { StyledDiv, StyledButton } from '../../Elements/StyledComponent';
import { ReactComponent as Character } from '../../../Asset/mainPage/FailCharacter.svg';

import client from '../../../api';
const RejectedByCounterTeam = () => {
  let userId = window.localStorage.getItem('id');
  const Rematch = async () => {
    let ourteamId = window.localStorage.getItem('ourteamId');
    await client
      .put('api/team/reapply', { ourteamId: ourteamId })
      .then((res) => {
        alert(
          '현재 입력하신 정보로 재매칭 합니다. \n 매칭 정보 수정이 필요하시다면 내정보 \n 수정하기 버튼을 클릭해주세요.',
          // 팀 아이디 새로 저장 후 이걸로 pageState 다시 불러야됨
        );
      })
      .then(() => {
        client
          .get(`api/team/ourteam-id/${userId}`)
          .then((res) => {
            window.localStorage.setItem('ourteamId', res.data.data.ourteamId);
          })
          .catch((err) => console.log(err));
      })

      .catch((err) => {
        console.log(err);
        alert('fail');
      });
    window.location.reload();
  };
  const Quit = async () => {
    let ourteamId = window.localStorage.getItem('ourteamId');
    await client
      .put('api/team/quit', { ourteamId: ourteamId })
      .then((res) => {
        alert(
          '매칭을 그만둡니다.',
          // 팀 아이디 새로 저장 후 이걸로 pageState 다시 불러야됨
        );
      })
      .then(async () => {
        await client
          .get(`api/team/ourteam-id/${userId}`)
          .then((res) => {
            window.localStorage.setItem('ourteamId', res.data.data.ourteamId);
          })
          .then(() => window.location.reload())

          .catch((err) => console.log(err));
      })

      .catch((err) => {
        console.log(err);
      });
    window.location.reload();
  };

  return (
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
      <StyledDiv top="25%" height="25%" left="50%" width="90%">
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
          상대팀이 거절했어요.
        </StyledDiv>
        <StyledDiv position="static" transform="0" left="0" font="Nanum JungHagSaeng" color="1A1A1A" size="30px">
          다음에는 분명히 꼭 맞는 분을
        </StyledDiv>
        <StyledDiv position="static" transform="0" left="0" font="Nanum JungHagSaeng" color="1A1A1A" size="30px">
          찾을 수 있을 거에요.
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
        <StyledButton
          position="static"
          left="0"
          height="45px"
          transform="0"
          width="180px"
          size="18px"
          onClick={Rematch}
        >
          한번 더 진행하기
        </StyledButton>
        <StyledDiv position="static" left="0" height="10px" transform="0"></StyledDiv>
        <StyledDiv
          position="static"
          left="0"
          height="45px"
          transform="0"
          width="180px"
          size="18px"
          font=" var(--font-family)"
          onClick={Quit}
        >
          그만두기
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  );
};
export default RejectedByCounterTeam;
