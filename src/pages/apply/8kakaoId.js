import styled from 'styled-components';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Input } from 'antd';
import theme from '../../style/theme';
import ApplyLayout from '../../layout/ApplyLayout';
import ApplyButton from '../../components/ApplyButton';
import ProgressBar from '../../components/ProgressBar';
import { submitStep8 } from '../../features/apply';
import IsPageCompleteModal from '../../components/Modal/IsPageCompleteModal';
import ChannelTalk from '../../asset/ChannelTalk';
import { ReactComponent as Bookmark } from '../../asset/svg/Bookmark.svg';
import { ReactComponent as Bottom } from '../../asset/svg/Baloon.svg';

export default function Apply8Page() {
  const [openModal, setOpenModal] = useState(false);
  const { finishedStep, kakaoId } = useSelector((store) => store.apply);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Id, setId] = useState(kakaoId);

  useEffect(() => {
    if (finishedStep < 7) {
      window.alert('잘못된 접근입니다');
      navigate(`/apply/${finishedStep + 1}`);
    }
  }, [finishedStep]);

  const setModal = (bool) => {
    setOpenModal(bool);
  };

  const handleBefore = useCallback(() => {
    navigate('/apply/7drink');
  });

  const handleSubmit = useCallback(() => {
    if (!Id) {
      setOpenModal(true);
      return;
    }
    dispatch(
      submitStep8({
        kakaoId: Id,
      }),
    );
    navigate('/myinfo/account/phone');
  }, [Id]);

  return (
    <ApplyLayout>
      <IsPageCompleteModal open={openModal} setModal={setModal} />
      <ProgressBar page={5} />
      <Title>
        <Maintitle>
          <Pink>카카오톡 ID나 전화번호</Pink>를 알려주세요
        </Maintitle>
        <Subtitle>둘 중 하나만 선택하여 알려주세요</Subtitle>
        <SInput
          value={Id}
          placeholder="meetingo_me"
          maxLength={20}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <Content>매칭 최종 성사 시 상대팀에게 전달되는 정보입니다!</Content>
      </Title>

      <Title2>
        <Maintitle2>
          <Bookmark />
          <Subtitle2>
            <Pink>내 카카오톡 ID를 모른다면?</Pink>
          </Subtitle2>
        </Maintitle2>
        <SubContent2>카카오톡의 내 프로필 → 환경설정 → 카카오톡 ID</SubContent2>
      </Title2>

      <Title2>
        <Maintitle2>
          <Bookmark />
          <Subtitle2>
            <Pink>카카오톡 ID 검색 허용</Pink>이 되어 있는지 꼭 확인해주세요!
          </Subtitle2>
        </Maintitle2>
        <SubContent2>
          내 카카오톡 ID를 클릭하면 설정 가능해요! <br /> 비허용되어 있을 경우,
          전화번호가 전달돼요.
        </SubContent2>
      </Title2>
      <SBottom />
      <Footer>
        <ButtonBox>
          <ApplyButton onClick={handleBefore}>이전</ApplyButton>
          <ApplyButton onClick={handleSubmit}>제출하기</ApplyButton>
        </ButtonBox>
      </Footer>
      <div>{ChannelTalk.hideChannelButton()}</div>
    </ApplyLayout>
  );
}

const Title = styled.div`
  width: 90%;
  margin-top: 20px;
`;

const Maintitle = styled.div`
  width: 100%;
  font-family: 'Nanum JungHagSaeng';
  font-weight: 400;
  font-size: 35px;
`;

const Pink = styled.span`
  color: ${theme.pink};
`;

const Subtitle = styled.p`
  margin-top: 4%;
  color: #aaaaaa;
  font-weight: 400;
  font-size: 15px;
`;

const SInput = styled(Input)`
  margin-top: 4%;
  text-align: center;
  width: 230px;
  min-height: 30px;
  border: 1px solid #f1ecec;
  background-color: white;
`;

const Content = styled.div`
  margin: 15px 0;
  font-weight: 600;
  font-size: 15px;
  width: 90%;
`;

const Title2 = styled.div`
  width: 90%;
  margin-top: 10px;
`;

const Maintitle2 = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 35px;
  display: flex;
  align-items: center;
`;

const Subtitle2 = styled.div`
  font-size: 15px;
  margin-left: 5px;
`;

const SubContent2 = styled.div`
  margin: 5px 0 8px 15px;
  font-size: 13px;
  color: #838383;
  line-height: 20px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* margin-top: 6%; */
  padding-bottom: 5%;
`;

const ButtonBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin-top: 5%;
`;

const SBottom = styled(Bottom)`
  margin-left: 57%;
  margin-top: 5%;
`;
