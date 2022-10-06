import * as React from 'react';
import { ReactComponent as PrivateInfo } from '../../Asset/page12/PrivateInfo.svg';
import { ReactComponent as ServiceUse } from '../../Asset/page12/ServiceUse.svg';
import { ReactComponent as CheckIcon } from '../../Asset/confirm/CheckIcon.svg';
import { useState, useEffect } from 'react';
import { Container, MobileBox, StyledDiv, StyledText, SubTitle } from '../Elements/StyledComponent';
import { useSelector, useDispatch } from 'react-redux';

const Body12 = () => {
  const [infoConfirm, setInfoConfirm] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'SET_PRIVATEINFOCONFIRM', payload: infoConfirm });
  }, [infoConfirm]);

  const buttonColor = React.useMemo(() => (infoConfirm ? '#EB8888' : '#EDEDED'), [infoConfirm]);
  const buttonFontColor = React.useMemo(() => (infoConfirm ? '#FFFFFF' : '#BBBBBB'), [infoConfirm]);

  const gender = useSelector((state) => state.gender);
  const num = useSelector((state) => state.num);
  const age = useSelector((state) => state.age);
  const jobs = useSelector((state) => state.jobs);
  const prefferedjobs = useSelector((state) => state.prefferedjobs);
  const prefferedage = useSelector((state) => state.prefferedage);
  const height = useSelector((state) => state.height);
  const drink = useSelector((state) => state.drink);
  const university = useSelector((state) => state.university);
  const characters = useSelector((state) => state.characters);
  const area = useSelector((state) => state.area);
  const day = useSelector((state) => state.day);
  const appearance = useSelector((state) => state.appearance);
  const mbti = useSelector((state) => state.mbti);
  const fashion = useSelector((state) => state.fashion);
  const intro = useSelector((state) => state.introduction);
  const vibe = useSelector((state) => state.prefferedthing);
  const prefferedheight = useSelector((state) => state.prefferedheight);
  const preffereduniversity = useSelector((state)=>state.preffereduniversity);
  let finalUniversity = []
  useEffect(()=>{
    university.map((c)=>{ if(typeof(c)=='number'){finalUniversity.push(c)} else finalUniversity.push(c["key"])})
  },[university])
 
  const body = {
    ourteam: {
      gender: gender,
      num: num,
      age: age,
      intro: intro,
      job: jobs,
      university: finalUniversity,
      role: characters,
      area: area,
      day: day,
      appearance: appearance,
      mbti: mbti,
      fashion: fashion,
      drink: drink,
      height: height,
    },
    ourteamPreference: {
      age: prefferedage,
      job: prefferedjobs,
      sameUniversity: preffereduniversity,
      vibe: vibe,
      height: prefferedheight,
    },
  };

  const saveState = (key, state) => {
    try {
      {
        /*const serializedState = JSON.stringify(state);
      sessionStorage.setItem(key, serializedState);
    */
      }
      const serializedState = JSON.stringify(state);

      dispatch({ type: `${key}`, payload: `${serializedState}` });
    } catch {
      console.log('error');
      alert('오류가 발생했습니다. 개발자에게 알려주세요!');
    }
  };
  // sessionstorage.setitem=> reux로 변경하기
  return (
    <Container>
      <MobileBox>
        <StyledDiv display="flex" direction="column" top="2%" width="90%" height="20%" left="50%">
          {/* HeaderBox*/}
          <StyledDiv
            position="static"
            display="flex"
            direction="column"
            transform="0"
            width="100%"
            margin="5px 0 0 10px"
          >
            <StyledDiv position="static" display="flex" direction="row" size="35px" transform="0" width="100%">
              <StyledText position=" static" size="0.8em">
                미팅학개론 이용을 위한
              </StyledText>
            </StyledDiv>
            <StyledDiv position="static" display="flex" direction="row" transform="0" width="100%">
              {/* TitleBox*/}
              <StyledDiv position="static" display="flex" direction="row" size="35px" transform="0">
                {/* TextTitle*/}

                <StyledText position=" static" size="0.8em" color="#F49393">
                  약관에 동의
                </StyledText>
                <StyledText position=" static" size="0.8em">
                  해주세요
                </StyledText>
              </StyledDiv>
            </StyledDiv>
          </StyledDiv>
        </StyledDiv>
        <StyledDiv
          display="flex"
          justify_content="center"
          align_item="center"
          top="20%"
          width="334px"
          height="50px"
          left="50%"
          bg={buttonColor}
          border="10px"
          onClick={() => {
            setInfoConfirm(!infoConfirm);
            saveState('SET_OURTEAMINFO', body);
          }}
        >
          {' '}
          <StyledText color={buttonFontColor} size="20px">
            네 모두 동의합니다
          </StyledText>
        </StyledDiv>
        <StyledDiv left="9%" top="30.5%">
          {infoConfirm ? <CheckIcon /> : <CheckIcon className="bright" />}
        </StyledDiv>
        <StyledDiv left="37%" top="31%">
          <PrivateInfo />
        </StyledDiv>
        <StyledDiv overflow="scroll" left="50%" top="36%" height="20%" width="90%" bg="white" border="10px">
          <StyledText
            font="Pretendard"
            size="12px"
            transform="translate(-50%, 0)"
            left="45%"
            width="90%"
            word_break="break-all"
            margin="5%"
            color="#AAAAAA"
            fontWeight="400"
          >
            제 1조(목적) <br />
            <br />
            미팅학개론이 제공하는 서비스를 이용해 주셔서 감사합니다. 미팅학개론에서는 회원님의 원할한 서비스 이용을
            위하여 미팅학개론 이용 약관(이하 `본 약관`)을 준비하였습니다. 본 약관은 회원님께서 미팅학개론 서비스를
            이용하는 데 필요한 권리, 의무 및 책임사항, 이용조건 및 절차 등 기본적인 사항을 규정하고 있으므로 주의 깊게
            읽어주시길 부탁드립니다.
            <br /> <br />제 2 조 (약관의 효력 및 변경) <br /> <br />① 본 약관의 내용은 미팅학개론 웹사이트를 비롯한
            미팅학개론에서 제공하는 서비스에 나타날 수 있습니다. ② 회사는 필요한 경우 관련법령을 위배하지 않는 범위
            내에서 본 약관을 변경할 수 있습니다. 본 약관이 변경되는 경우 회사는 변경사항을 시행일자 15일 전부터
            여러분에게 서비스 공지사항에서 공지 또는 통지하는 것을 원칙으로 하며, 피치 못하게 여러분에게 불리한 내용으로
            변경할 경우에는 그 시행일자 30일 전부터 공지하는 것을 원칙으로 합니다. ③ 회사가 전항에 따라 공지 또는 통지를
            하면서 공지 또는 통지일로부터 개정약관 시행일 7일 후까지 회원님께서 거부의사를 표시하지 아니하면 약관 변경에
            승인한 것으로 확인합니다. 개정약관에 동의하지 않을 경우 여려분은 이용계약을 해지할 수 있습니다.
            <br />
            <br />제 3 조 (약관 외 준칙) <br />
            <br />본 약관에 규정되지 않은 사항에 대해서는 관련법령 또는 회사가 정한 이용약관, 운영정책 및 규칙 등(이하
            ‘세부지침’)의 규정에 따릅니다.
            <br />
            <br />제 4 조 (계약의 성립)
            <br />
            <br />① 미팅학개론의 가입은 회원님께서 본 사에서 마련한 일정한 폼을 통하여 가입을 하셨을 경우 완료가 됩니다.
            ② 미팅학개론 이용계약은 회원님께서 본 약관의 내용에 동의한 후 일정한 인증을 거친 후 사용승인이 이루어집니다.
            <br /> <br />제 5 조 (계정 이용의 제한)
            <br />
            <br />① 회사는 아래 각 호의 경우에는 그 사유가 해소될 때까지 승낙을 유보하거나 승낙하지 않을 수 있습니다. 1.
            회사가 본 약관 또는 세부지침에 의해 회원님의 아이디를 삭제하였던 경우 2. 회원님이 다른 사람의 명의나 이메일
            주소 등 개인정보를 이용하여 카카오 계정을 생성하려 한 경우 3. 계정 생성 시 필요한 정보를 입력하지 않거나
            허위의 정보를 입력한 경우 4. 서비스 제공을 위한 기술적인 부분에 문제가 있다고 판단되는 경우 5. 기타 회사가
            재정적, 기술적으로 필요하다고 인정하는 경우 6. 회사로부터 회원자격정지 조치 등을 받은 회원이 그 조치기간에
            이용계약을 임의로 해지하고 재이용을 신청하는 경우 7. 기타 관련법령에 위배되거나 세부지침 등 회사가 정한
            기준에 반하는 경우
            <br />
            <br />제 6 조 (서비스 제공)
            <br />
            <br />① 미팅학개론의 가입시 아래와 같은 서비스가 제공이 됩니다. 유/무료 저작권 콘텐츠 다운로드, 유/무료
            저작권 콘텐츠 업로드, 기타 사이트에서 제공하는 정보 제공 ② 회사는 더 나은 서비스의 제공을 위하여 여러분에게
            서비스의 이용과 관련된 각종 고지, 관리 메시지 및 기타 광고를 비롯한 다양한 정보를 서비스화면 내에 표시하거나
            여러분의 이메일로 전송할 수 있습니다. 광고성 정보 전송의 경우에는 사전에 수신에 동의한 경우에만 전송합니다.
            <br />
            <br />제 7 조 (서비스의 변경 및 종료)
            <br />
            <br />① 회사는 최선을 다해 서비스 이용에 차질이 없도록 운영하나 아래와 같은 상황에는 서비스를 변경 종료 할
            수 있습니다. 1. 설비의 유지·보수 등을 위한 정기 또는 임시 점검의 경우 2. 정전, 제반 설비의 장애 또는
            이용량의 폭주 등으로 정상적인 이용에 지장이 있는 경우 3. 서비스를 유지할 수 없는 경우 4. 기타 천재지변,
            국가비상사태 등 불가항력적 사유가 있는 경우 ② 전항에 의한 서비스 중단의 경우에는 미리 제12조에서 정한
            방법으로 여러분에게 통지 내지 공지하겠습니다. 다만, 회사로서도 예측할 수 없거나 통제할 수 없는 사유(회사의
            과실이 없는 디스크 내지 서버 장애, 시스템 다운 등)로 인해 사전 통지 내지 공지가 불가능한 경우에는 그러하지
            아니합니다. 이러한 경우에도 회사가 상황을 파악하는 즉시 최대한 빠른 시일 내에 서비스를 복구하도록
            노력하겠습니다. ③ 여러분에게 중대한 영향을 미치는 서비스의 변경 사항이나 종료는 등록된 이메일 주소로
            발송하도록 하겠습니다.
            <br />
            <br />제 8 조 (회원계정 관리)
            <br />
            <br />① 계정은 회원님 본인만 이용할 수 있으며, 다른 사람이 여러분의 계정을 이용하도록 허락할 수 없습니다.
            그리고 여러분은 다른 사람이 여러분의 계정을 무단으로 사용할 수 없도록 직접 비밀번호를 관리하여야 합니다.
            회사는 다른 사람이 여러분의 계정을 무단으로 사용하는 것을 막기 위하여 비밀번호 입력 및 추가적인 본인 확인
            절차를 거치도록 할 수 있습니다. 만약 무단 사용이 발견된다면, 고객센터를 통하여 회사에게 알려주시기 바라며,
            회사는 무단 사용을 막기 위한 방법을 여러분에게 안내하도록 하겠습니다. ② 여러분은 웹사이트를 통하여 본인의
            정보를 수정할 수 있습니다. 허나 본인의 정보와 맞지 않는 정보로의 변경은 민/형사상의 문제가 생길 수 있음을
            인지하시길 바랍니다.
            <br />
            <br />제 9 조 (회원의 의무)
            <br />
            <br />① 회원님께서는 서비스를 이용할 때 아래 각 호의 행위는 하여서는 안 됩니다. 1.이용 신청 또는 변경 시
            허위 사실을 기재하거나, 다른 회원의 정보 및 비밀번호를 도용, 부정하게 사용하거나, 다른 사람의 명의를
            사용하거나 명의자의 허락 없이 인증을 하는 경우 2.타인의 명예를 손상시키거나 불이익을 주는 행위 3.회사 또는
            제3자의 저작권 등 기타 권리를 침해하는 행위 4.공공질서 및 미풍양속에 위반되는 내용의 정보, 문장, 도형, 음성
            등을 타인에게 유포하는 행위 5.자기 또는 타인에게 재산상의 이익을 주거나 타인에게 손해를 가할 목적으로 허위의
            정보를 유통시키는 행위 6.기타 불법한 행위 ② 서비스의 이용권한, 기타 이용계약상 지위를 타인에게 양도·증여할
            수 없으며, 담보로 제공할 수 없습니다. ③ 관련 법령, 회사의 모든 약관 또는 정책을 준수하지 않는다면, 회사는
            여러분의 위반행위 등을 조사할 수 있고, 여러분의 서비스 이용을 잠시 또는 계속하여 중단하거나, 재가입에 제한을
            둘 수도 있습니다.
            <br />
            <br />제 10 조 (개인정보의 보호)
            <br />
            <br />
            회원님의 개인정보는 서비스의 원활한 제공을 위하여 여러분이 동의한 목적과 범위 내에서만 이용됩니다. 법령에
            의하거나 여러분이 별도로 동의하지 아니하는 한 회사가 여러분의 개인정보를 제3자에게 제공하는 일은 결코
            없습니다, 자세한 사항은 개인정보처리방침을 참고하여 주십시오.
            <br />
            <br />제 11 조 (회원에 대한 통지 및 공지)
            <br />
            <br />
            회사는 여러분과의 의견 교환을 소중하게 생각합니다. 여러분은 언제든지 고객센터에 방문하여 의견을 개진할 수
            있습니다. 서비스 이용자 전체에 대한 공지는 칠(7)일 이상 서비스 공지사항란에 게시함으로써 효력이 발생합니다.
            여러분에게 중대한 영향을 미치는 사항의 경우에는 구글 계정에 등록된 이메일 주소로 이메일(이메일주소가 없는
            경우 서비스 내 전자쪽지 발송, 서비스 내 알림 메시지를 띄우는 등의 별도의 전자적 수단) 발송하는 방법 등으로
            개별적으로 알려 드리겠습니다.
            <br />
            <br />제 12 조 (이용계약 해지)
            <br />
            <br />① 여러분이 미팅학개론의 이용을 더 이상 원치 않는 때에는 언제든지 서비스 내 제공되는 메뉴를 이용하여
            이용계약의 해지 신청을 할 수 있으며, 회사는 법령이 정하는 바에 따라 신속히 처리 하겠습니다. ② 회사는
            법령에서 정하는 기간 동안 여러분이 서비스를 이용하기 위해 등록한 정보등을 분리 보관할 수 있습니다. ③
            이용계약이 해지되면 법령 및 개인정보 처리방침에 따라 여러분의 정보를 보유하는 경우를 제외하고는 개별 서비스
            데이터는 삭제됩니다. 다만, 결재내역등은 법률에 따릅니다. ④ 이용계약이 해지된 경우라도 여러분은 다시 회사에
            대하여 이용계약의 체결을 신청할 수 있습니다.
            <br />
            <br />제 13 조 (손해배상)
            <br />
            <br />① 회사는 법령상 허용되는 한도 내에서 서비스와 관련하여 본 약관에 명시되지 않은 어떠한 구체적인 사항에
            대한 약정이나 보증을 하지 않습니다. ② 회원의 컴퓨터 오류, 신상정보의 부정확한 기재, 비밀번호 관리의 소홀,
            일치하지 않는 계좌번호 입력, 가입 시 계좌번호 미확인 등 회원의 귀책사유로 인해 손해가 발생한 경우에 대하여
            회사는 책임을 지지 않습니다. ③ 회사는 회사의 과실로 인하여 여러분이 손해를 입게 될 경우 본 약관 및 관련
            법령에 따라 여러분의 손해를 배상하겠습니다. 다만 회사는 회사의 과실 없이 발생된 아래와 같은 손해에 대해서는
            책임을 부담하지 않습니다. 또한 회사는 법률상 허용되는 한도 내에서 간접 손해, 특별 손해, 결과적 손해, 징계적
            손해, 및 징벌적 손해에 대한 책임을 부담하지 않습니다. 1. 천재지변 또는 이에 준하는 불가항력의 상태에서
            발생한 손해 2. 회원님의 귀책사유로 서비스 이용에 장애가 발생한 경우 3. 서비스에 접속 또는 이용과정에서
            발생하는 개인적인 손해 4. 제3자가 불법적으로 회사의 서버에 접속하거나 서버를 이용함으로써 발생하는 손해 5.
            제3자가 회사 서버에 대한 전송 또는 회사 서버로부터의 전송을 방해함으로써 발생하는 손해 6. 제3자가 악성
            프로그램을 전송 또는 유포함으로써 발생하는 손해 7. 전송된 데이터의 생략, 누락, 파괴 등으로 발생한 손해,
            명예훼손 등 제3자가 서비스를 이용하는 과정에서 발생된 손해 8. 기타 회사의 고의 또는 과실이 없는 사유로 인해
            발생한 손해
            <br />
            <br />제 14 조 (분쟁의 해결)
            <br />
            <br />본 약관 또는 서비스는 대한민국법령에 의하여 규정되고 이행됩니다. 서비스 이용과 관련하여 회사와 여러분
            간에 분쟁이 발생하면 이의 해결을 위해 성실히 협의할 것입니다. 그럼에도 불구하고 해결되지 않으면
            민사소송법상의 관할법원에 소를 제기할 수 있습니다.
          </StyledText>
        </StyledDiv>
        <StyledDiv left="9%" top="59.5%">
          {infoConfirm ? <CheckIcon /> : <CheckIcon className="bright" />}
        </StyledDiv>
        <StyledDiv left="34%" top="60%">
          <ServiceUse />
        </StyledDiv>
        <StyledDiv overflow="scroll" left="50%" top="65%" height="20%" width="90%" bg="white" border="10px">
          <StyledText
            font="Pretendard"
            size="12px"
            transform="translate(-50%, 0)"
            left="45%"
            width="90%"
            word_break="break-all"
            margin="5%"
            color="#AAAAAA"
            fontWeight="400"
          >
            미팅학개론은 다음 목적으로 개인정보를 수집∙이용하며, 사용자의 개인정보를 보호함으로써 안심하고 서비스를
            이용할 수 있도록 최선을 다합니다. 내용을 자세히 읽으신 후 동의 여부를 결정해 주세요. <br /> <br />
            목적 : 미팅학개론 서비스 제공 <br />
            항목 : 성별, 나이, 전화번호, 카카오톡 ID, 학교 학과, 성격, 지역, 외모 특성 <br /> 기간 : 신청기간으로 부터
            1년
          </StyledText>
        </StyledDiv>
      </MobileBox>
    </Container>
  );
};

export default Body12;
