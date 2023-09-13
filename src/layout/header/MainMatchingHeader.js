import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ReactComponent as MainDoc } from '../../asset/svg/MainDoc.svg';
import { ReactComponent as UniversityMarkDarkGray } from '../../asset/svg/UniversityMarkDarkGray.svg';

import { ReactComponent as UniversityMarkPink } from '../../asset/svg/UniversityMark.svg';
import MyTeamProfileModal from '../../components/Modal/Profile/MyTeamProfileModal';
import { ReactComponent as MainGroup } from '../../asset/svg/MainGroup.svg';
import { ReactComponent as TingImg } from '../../asset/svg/TingImg.svg';
import theme from '../../style/theme';
import {
  useGetMyInfoQuery,
  useGetTingCountQuery,
} from '../../features/api/userApi';

export default function MainMatchingHeader({ title }) {
  const { data: myinfo } = useGetMyInfoQuery();
  const { data: ting } = useGetTingCountQuery();

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
            <BtnMainTitlePink>학교 인증 완료</BtnMainTitlePink>
          </MainButton>
        ) : (
          <MainButton onClick={() => navigate('/myinfo/studentcard')}>
            <SUniversityMarkDarkGray />
            <BtnMainTitleGray>학교 인증 전</BtnMainTitleGray>
          </MainButton>
        )}
      </ButtonBox>
      <MainButton2 onClick={() => navigate('/myinfo/ting')}>
        <STingImg />
        <BtnMainTitle>보유 팅</BtnMainTitle>
        <TingCount>{ting < 0 ? 0 : ting}팅</TingCount>
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
  justify-content: flex-start;
  align-items: center;
  margin-top: 5%;
  width: 48%;
  height: 70px;
  padding: 5%;
  border: none;
  border-radius: 10px;
  background-color: #ffe8e8;
  cursor: pointer;
`;

const SMainGroup = styled(MainGroup)`
  margin-right: 10px;
`;

const SMainDoc = styled(MainDoc)`
  margin-right: 10px;
`;

const SUniversityMarkDarkGray = styled(UniversityMarkDarkGray)`
  margin-right: 10px;
`;

const BtnMainTitle = styled.span`
  color: ${theme.black};
  font-size: 16px;
  font-weight: 500;
`;

const BtnMainTitlePink = styled(BtnMainTitle)`
  margin-left: 10px;
  background: linear-gradient(90deg, #ccb5f3 0%, #ff9595 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const BtnMainTitleGray = styled(BtnMainTitle)`
  color: #777777;
`;

const MainButton2 = styled(MainButton)`
  width: 90%;
`;

const STingImg = styled(TingImg)`
  width: 20px;
  margin-right: 10px;
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
