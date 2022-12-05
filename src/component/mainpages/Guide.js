import { Container } from '../Elements/StyledComponent';
import { MobileBox, StyledDiv, StyledButton } from '../Elements/StyledComponent';
import { ReactComponent as DownArrow } from '../../Asset/mainPage/DownArrow.svg';
import { ReactComponent as UpArrow } from '../../Asset/mainPage/UpArrow.svg';
import { useCallback, useState } from 'react';
import ChannelTalk from '../../utils/ChannelTalk';
const Guide = () => {
  const ServiceGuide = [
    {
      title: '미팅학개론은 어떤 서비스인가요?',
      content: `지인한테 아무나 소개 받아서 나가는 미팅은 이제 그만!🙅🏻‍♀️ \n풋풋한 대학생의 특권이자 젊음의 상징인 미팅, 좀 더 재밌게 즐길 수는 없을까요?\n 코로나 때문에 단절되어 버린 선후배 관계로 미팅 나가기는 점점 더 어렵죠🥲\n 새로운 친구들 만나고 싶은데, 그렇다고 소개팅을 나가자니 부담스럽다면?\n 미팅학개론은 우리 팀이 원하는 조건의 상대팀을 매칭 받을 수 있는,\n 대학생 맞춤 미팅 매칭 서비스입니다.\n 서비스에 대해 더 자세한 정보를 원한다면 아래 페이지를 참고해 주세요.\n`,
      link: 'https://furry-bank-197.notion.site/9c7eacd16070426fab83478adfd4c091',
    },
    {
      title: '미팅학개론은 어떻게 이용하나요?',
      content:
        '✔️STEP 1. 주변 지인과 팀을 만드신 후 팀의 대표자가 미팅학개론 서비스에 접속합니다.\n✔️STEP 2. ‘매칭 시작하기’를 클릭하여 우리 팀 소개를 작성합니다.\n✔️STEP 3. 원하는 상대팀 조건을 입력합니다.\n✔️STEP 4. 내가 원하는 미팅은 어떤 미팅?\n✔️STEP 5. 미팅학개론 정리 페이지를 확인합니다.\n✔️STEP 6. (🌟중요!) 우리 팀을 소개하는 마지막 한 줄 어필을 임팩트 있게 작성합니다!\n🍯꿀팁: 재밌고 정성스럽게 쓸수록 매칭 확률 UP!\n\n🚩FINISH! 미팅을 위한 모든 준비가 끝났어요!다음 날 혹은 다다음날 11시에 꼭 맞는 팀이 매칭될 때까지 두근두근 기다립니다!✨\n미팅학개론은 매일 11시 매칭을 진행합니다. 최대 2일 이내에 매칭 결과가 통보되니 꼭 맞는 팀이 매칭될 때까지 설레는 마음으로 기다립니다!✨',
      link: '',
    },
    {
      title: '미팅학개론 에티켓을 알려드릴게요.',
      content:
        '매칭후 단톡방을 개설한 뒤 첫 채팅은 예의 있고 매너 있게! 미팅 장소와 일정을 조율해 보아요.\n\n만약 미팅 진행에 있어 차질이 생긴다면 상대팀에게 정중하게 양해를 구하는 센스 잊지 않으셨죠?\n\n상대팀의 미팅학개론을 한 번 더 숙지하고 나가는 것도 좋아요!',
    },
  ];
  const GuideList = [
    {
      title: '매칭까지 얼마나 소요되나요?',
      content:
        '신청해 주시는 시간과 관계 없이 미팅학개론은 매일 밤 11시에 자동 미팅 매칭이 이루어집니다! \n최소 한 시간, 최대 2일 내에 매칭이 이루어집니다.\n2일 내에 매칭이 이루어지지 않을 경우 실패 처리 됩니다.',
      link: '',
    },
    {
      title: '2:2 / 3:3 미팅만 가능한가요??',
      content:
        '아쉽게도 현재 미팅학개론 내에서 <1:1 소개팅>과 <4:4 미팅 서비스>는 지원하고 있지 않습니다.🥲 친구들과 함께 대표자 한 분이 2:2 혹은 3:3 팀으로만 미팅 참여가 가능합니다. \n다양한 미팅 인원 구성은 추후 미팅학개론 서비스를 업데이트할 때 꼭 반영해 보도록 하겠습니다! 감사합니다.🙌🏻',
      link: '',
    },
    {
      title: '인증번호가 도착하지 않아요',
      content:
        '해외번호가 차단되어 있는 경우 인증번호가 도착하지 않을 수 있습니다. 혹은 간혹 서버 오류로유저에게 종종 인증번호 문자가 도착하지 않는 문제가 발생하고 있습니다.\n페이지를 새로고침 하였는데도 문제가 해결되지 않는다면, 번거로우시겠지만 함께 미팅 나가시는 친구분이 대표자로 대신 미팅 신청을 진행해 주시길 부탁드립니다.',
      link: '',
    },
    {
      title: '재매칭 프로세스가 뭔가요?',
      content:
        '매칭에 실패하셨다면 상단 ‘매칭 조회’에서 <재매칭 하기>를 눌러주시면 동일한 조건으로 미팅이 신청됩니다. 정보 수정이 필요하시다면 상단 <내정보>에서 수정해주세요! ',
      link: '',
    },
    {
      title: '매칭되었는데 매칭을 취소할 수 있나요?',
      content:
        '매칭 결과 확인 페이지에서 거절하지 않고 수락하신 이상 그 후에 매칭을 따로 취소할 수 있는 방법은 없습니다.🥲 상대팀과의 단톡방을 개설하신 뒤 미팅 진행 여부를 논의해 주시면 됩니다. ',
      link: '',
    },
    {
      title: '여러 번 신청해도 되나요?',
      content: '미팅 신청 후 매칭된 대표자의 경우, 매칭된 시점으로 7일 후에 다시 신청 가능합니다.',
      link: '',
    },
    {
      title: '재매칭까지의 소요 기간?',
      content:
        '아쉽게 이번에 매칭이 되지 않으셨나요? 신청해 주시는 시간과 관계 없이 미팅학개론은 매일 밤 11시에 자동 미팅 매칭이 이루어집니다! ‘매칭 조회’에서 <재매칭 하기>를 눌러주시면 최소 한 시간, 최대 2일 내에 매칭이 이루어집니다. 조금만 기다려 주세요!2일 내에 매칭이 이루어지지 않을 경우 실패 처리 됩니다.',
      link: '',
    },
    {
      title: '매칭 조회 페이지가 변하지 않아요.',
      content:
        '수락/거절/ 그만두기/ 재신청 후 매칭 조회 페이지가 바뀌지 않아 많이 당황하셨죠. 아직까지 작은 이슈로 적용이 되지않고 있어요. 다시 로그인/로그아웃하시면 매칭 조회페이지가 적용 될거에요.',
      link: '',
    },
  ];

  return (
    <Container height={'100%'} bg="#f8f3f3">
      <MobileBox overflow="scroll" justify_content=" start" height="auto">
        {/** white space box 
    <StyledDiv  display= "flex" direction="column" justify_content="space-around" align_item="center"position=" static" transform="0" left="0" height="80%" bg="white" width="90%" border="10px">
           from here each div is for paragraph 
            <StyledDiv width="80%" height="30%" display= "flex" direction="column" justify_content="space-around"position=" static" transform="0" left="0" >
                <StyledDiv margin="15px 0 0 0" weight="bold" text_align="start" font="Pretendard" size="23px" color="#777777" position="static" transform="0" left="0" >
                    미팅학개론은?
                </StyledDiv>
                <StyledDiv  height="50%" position="static" transform="0" left="0" display="flex" direction="column" justify_content=" space-around">
                    <StyledDiv weight="700" text_align="start" font="Pretendard" size="13px" color="#777777" position="static" transform="0" left="0" display="flex" direction="column">
                    - 설렘 반 재미 반. 여러분의 이상형에 맞는 상대팀을 매칭해드리고 채팅방까지 파드려요. 
                    </StyledDiv>
                    
                    <StyledDiv weight="700" text_align="start"font="Pretendard" size="13px" color="#777777" position="static" transform="0" left="0" display="flex" direction="column">
                    - 오픈채팅으로 서로 신원노출 위험까지 제로! 미팅을 쉽고 간편하게. 
                    </StyledDiv>
                </StyledDiv>
            </StyledDiv>
            <StyledDiv width="80%"  height="50%" display= "flex" direction="column" justify_content="space-around"  position=" static" transform="0" left="0" >
                
                    <StyledDiv  margin="15px 0 0 0" weight="bold"  text_align="start"font="Pretendard" size="23px" color="#777777" position="static" transform="0" left="0" >
                    미팅학개론 진행 방식
                    </StyledDiv>
               
                <StyledDiv  position="static" transform="0" height="70%" left="0" display="flex" direction="column" justify_content="space-around">
                <StyledDiv  weight="700" text_align="start"font="Pretendard" size="13px" color="#777777" position="static" transform="0" left="0" display="flex" >
                    0. 신청하기 전 팀을 구해주세요 (2:2 혹은 3:3)
                    </StyledDiv>
                    <StyledDiv  weight="700" text_align="start"font="Pretendard" size="13px" color="#777777" position="static" transform="0" left="0" display="flex" >
                    1. 팀 대표 혼자만! 매칭 시작버튼 누르고 정보입력하기! 
                    </StyledDiv>
                    <StyledDiv weight="700" text_align="start"font="Pretendard" size="13px" color="#777777" position="static" transform="0" left="0" display="flex" >
                    2. 회원가입까지 하면 이틀 이내로 매칭결과를 문자로 보내드려요. 
                    </StyledDiv>
                    <StyledDiv weight="700" text_align="start"font="Pretendard" size="13px" color="#777777" position="static" transform="0" left="0" display="flex" >
                    3. 보내드린 링크를 통해 오픈채팅방에 접속하면 매칭 완료!
                    </StyledDiv>
                </StyledDiv>
            </StyledDiv>
            <StyledDiv  height="20%" display= "flex" direction="column" justify_content="space-around" align_item="center" position=" static" transform="0" left="0" >
            <a href="https://furry-bank-197.notion.site/9c7eacd16070426fab83478adfd4c091"> 
                    <StyledButton position="static" left="0"height="45px" transform="0" width="180px" size="18px" >
                    자세히 알아보기
                    </StyledButton>
                </a>
            </StyledDiv>
            </StyledDiv>
        */}
        <StyledDiv
          position="static"
          height="13%"
          width="100%"
          left="0"
          transform="0"
          display="flex"
          justify_content="center"
          align_item="center"
          max_height="100px"
        >
          {' '}
          <StyledDiv position="static" left="0" transform="0" minHeight="30px"></StyledDiv>
          <StyledDiv
            position="static"
            height="60%"
            width="90%"
            bg="white"
            border="10px"
            left="0"
            transform="0"
            max_height="50px"
            align_item="center"
            justify_content="start"
            display="flex"
            font="'Nanum JungHagSaeng', normal;"
          ></StyledDiv>
        </StyledDiv>
        <StyledDiv
          position="static"
          height="8%"
          width="100%"
          left="0"
          transform="0"
          display="flex"
          justify_content="start"
          align_item="center"
          max_height="60px"
        >
          <StyledDiv
            position="static"
            width="25%"
            left="0"
            bg="#EB8888"
            border="10px"
            transform="0"
            display="flex"
            margin=" 10px 0 10px 5%"
            justify_content="center"
            align_item="center"
            color="white"
            font="'Nanum JungHagSaeng', normal;"
            minHeight="30px"
            size="1.3 em"
          >
            미팅학개론
          </StyledDiv>
        </StyledDiv>
        <StyledDiv
          position="static"
          height="auto"
          width="100%"
          left="0"
          transform="0"
          display="flex"
          justify_content="center"
          align_item="center"
          direction="column"
          font="'Nanum JungHagSaeng', normal;"
        >
          {ServiceGuide.map((list, index) => {
            return <GuideBox GuideList={list} key={index}></GuideBox>;
          })}
        </StyledDiv>
        <StyledDiv
          position="static"
          height="8%"
          width="100%"
          left="0"
          transform="0"
          display="flex"
          justify_content="start"
          align_item="center"
          max_height="60px"
        >
          <StyledDiv
            position="static"
            width="25%"
            left="0"
            bg="#EB8888"
            border="10px"
            transform="0"
            display="flex"
            margin=" 10px 0 10px 5%"
            justify_content="center"
            align_item="center"
            color="white"
            font="'Nanum JungHagSaeng', normal;"
            minHeight="30px"
            size="1.3 em"
          >
            자주 묻는 질문
          </StyledDiv>
        </StyledDiv>
        <StyledDiv
          position="static"
          height="auto"
          width="100%"
          left="0"
          transform="0"
          display="flex"
          justify_content="start"
          align_item="center"
          direction="column"
          font="'Nanum JungHagSaeng', normal;"
        >
          {GuideList.map((list, index) => {
            return <GuideBox GuideList={list} key={index}></GuideBox>;
          })}
        </StyledDiv>
        <StyledDiv
          position="static"
          height="100px"
          width="100%"
          left="0"
          transform="0"
          display="flex"
          justify_content="start"
          align_item="center"
          direction="column"
          font="'Nanum JungHagSaeng', normal;"
        ></StyledDiv>
      </MobileBox>
    </Container>
  );
};

const GuideBox = (props) => {
  const [isOpened, setIsOpened] = useState(false);
  let url = props.GuideList.link;
  let urltag = <p></p>;
  if (url) urltag = <a href={url}>자세히 보기</a>;
  return (
    <>
      <StyledDiv
        position="static"
        margin="5px 0 5px 0"
        height="auto"
        width="90%"
        bg="white"
        border="10px"
        left="0"
        transform="0"
        display="flex"
        direction="column"
        justify_content="start"
        align_item="center"
      >
        <StyledDiv
          position="static"
          height="50px"
          width="100%"
          bg="white"
          left="0"
          transform="0"
          display="flex"
          direction="row"
          justify_content="start"
          align_item="center"
        >
          <StyledDiv
            weight="500"
            position="static"
            size="23px"
            transform="0"
            width="80%"
            display="flex"
            justify_content="start"
            margin="5%"
          >
            {props.GuideList.title}
          </StyledDiv>
          <StyledDiv
            position="static"
            transform="0"
            width="20%"
            display="flex"
            justify_content="center"
            align_item="center"
            onClick={() => {
              setIsOpened(!isOpened);
            }}
          >
            {isOpened ? <UpArrow /> : <DownArrow />}
          </StyledDiv>
        </StyledDiv>
        {isOpened ? (
          <StyledDiv
            position="static"
            border_top=" 1px dotted grey"
            padding="10px 0 10px 0"
            height="auto"
            width="90%"
            bg="white"
            left="0"
            transform="0"
            display="flex"
            direction="column"
            justify_content="start"
            align_item="flex-start"
            space="pre-wrap"
            size="18px"
            text_align="start"
          >
            {props.GuideList.content.split('\n').map((txt) => (
              <>
                {txt}
                <br />
              </>
            ))}
            <div>{urltag}</div>
          </StyledDiv>
        ) : (
          <></>
        )}
      </StyledDiv>
    </>
  );
};

export default Guide;
