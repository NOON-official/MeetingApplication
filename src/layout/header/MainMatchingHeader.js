import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ReactComponent as MainDoc } from '../../asset/svg/MainDoc.svg';
import { ReactComponent as UniversityMarkDarkGray } from '../../asset/svg/UniversityMarkDarkGray.svg';

import { ReactComponent as UniversityMarkPink } from '../../asset/svg/UniversityMark.svg';
import MyTeamProfileModal from '../../components/MainRecommend/MyTeamProfileModal';
import { ReactComponent as MainGroup } from '../../asset/svg/MainGroup.svg';
import { ReactComponent as TingImg } from '../../asset/svg/TingImg.svg';
import {
  useGetMyInfoQuery,
  useGetUserTingCountQuery,
} from '../../features/backendApi';

export default function MainMatchingHeader({ title }) {
  const { data: ting } = useGetUserTingCountQuery();
  const { data: myinfo } = useGetMyInfoQuery();

  const [openMyTeamProfile, setOpenMyTeamProfile] = useState(false);
  const navigate = useNavigate();

  const setModal = (bool) => {
    setOpenMyTeamProfile(bool);
  };

  return (
    <>
      <MyTeamProfileModal open={openMyTeamProfile} setModal={setModal} />
      <ButtonBox>
        <MainButton
          onClick={() =>
            title === '프로필 조회'
              ? setOpenMyTeamProfile(true)
              : navigate('/apply/1')
          }
        >
          {title === '프로필 조회' ? <SMainDoc /> : <SMainGroup />}
          <BtnMainTitle>{title}</BtnMainTitle>
        </MainButton>

        {myinfo?.approval ? (
          <MainButton>
            <UniversityMarkPink />
            <BtnTitle>
              <BtnMainTitlePink>학교 인증 완료</BtnMainTitlePink>
            </BtnTitle>
          </MainButton>
        ) : (
          <MainButton>
            <SUniversityMarkDarkGray />
            <BtnTitle onClick={() => navigate('/myinfo/studentcard')}>
              <BtnMainTitle>학교 인증하기</BtnMainTitle>
              <BtnSubtitle>학교 인증 전</BtnSubtitle>
            </BtnTitle>
          </MainButton>
        )}
      </ButtonBox>
      <MainButton2 onClick={() => navigate('/myinfo/ting')}>
        <STingImg />
        <BtnMainTitle>보유 팅</BtnMainTitle>
        <TingCount>{ting?.tingCount}팅</TingCount>
        <SeeMoreBtn>자세히 보기</SeeMoreBtn>
      </MainButton2>
    </>
  );
}

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const MainButton = styled.button`
  display: flex;
  align-items: center;
  margin-top: 5%;
  width: 48%;
  height: 70px;
  padding: 30px;
  border: none;
  border-radius: 10px;
  background-color: #ffe8e8;
  cursor: pointer;
`;

const MainButton2 = styled.button`
  display: flex;
  align-items: center;
  margin-top: 5%;
  width: 90%;
  height: 70px;
  padding: 30px;
  border: none;
  border-radius: 10px;
  background-color: #ffe8e8;
  cursor: pointer;
`;

const SMainGroup = styled(MainGroup)`
  margin-right: 15px;
`;

const SMainDoc = styled(MainDoc)`
  margin-right: 15px;
`;

const SUniversityMarkDarkGray = styled(UniversityMarkDarkGray)`
  margin-right: 15px;
`;

const BtnTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const BtnMainTitlePink = styled.div`
  margin-left: 15px;
  background: linear-gradient(90deg, #ccb5f3 0%, #ff9595 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const BtnMainTitle = styled.div`
  font-weight: 500;
`;

const BtnSubtitle = styled.div`
  margin-top: 4%;
  color: #777777;
  font-size: 12px;
  font-weight: 300;
`;

const STingImg = styled(TingImg)`
  width: 20px;
  margin-right: 15px;
`;

const TingCount = styled.span`
  margin-left: 5%;
  color: #eb8888;
  font-size: 16px;
  font-weight: 500;
`;

const SeeMoreBtn = styled.div`
  margin-left: auto;
  padding: 5px 10px;
  border: none;
  border-radius: 7px;
  color: #eb8888;
  background-color: #ffd2d2;
`;
