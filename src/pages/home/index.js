import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Space } from 'antd';
import Timer from './timer';
import RecommendList from './recommendList';
import RecommendModal from '../../components/Modal/Matching/RecommendModal';
import MainMatchingHeader from '../../layout/header/MainMatchingHeader';
import {
  useGetHashQuery,
  useGetMyInfoQuery,
  useGetMyTeamIdQuery,
} from '../../features/api/userApi';
import { ReactComponent as Blur } from '../../asset/svg/RecommendBlur.svg';
import PrimaryModal from '../../components/Modal/PrimaryModal';
import PrimaryButton from '../../components/Button/PrimaryButton';
import { API_URL } from '../../config/constants';
import HeaderBottomLayout from '../../layout/HeaderBottomLayout';

export default function Home() {
  const navigate = useNavigate();
  const { data: myInfo, isSuccess: myInfoSuccess } = useGetMyInfoQuery();
  const { data: myTeamId, isSuccess: myTeamIdSuccess } = useGetMyTeamIdQuery();
  const { data: hash } = useGetHashQuery();

  if (myTeamIdSuccess && myInfoSuccess)
    return (
      <HeaderBottomLayout>
        <PrimaryModal
          title=" "
          open={!myInfo.university}
          footer={null}
          closeIcon
        >
          <Space
            direction="vertical"
            style={{
              textAlign: 'center',
              width: '100%',
              backgroundColor: '#fff',
            }}
          >
            <span style={{ fontSize: '16px' }}>
              잠깐!
              <br />
              새롭게 입력해야 하는 정보가 있어요
            </span>
            <PrimaryButton
              onClick={() => {
                const dataToSend = {
                  ...hash,
                  Ret_URL: `${API_URL}/auth/hash`,
                };

                const queryString = Object.keys(dataToSend)
                  .map(
                    (key) =>
                      `${encodeURIComponent(key)}=${encodeURIComponent(
                        dataToSend[key],
                      )}`,
                  )
                  .join('&');

                window.open(
                  `https://cert.kcp.co.kr/kcp_cert/cert_view.jsp?${queryString}`,
                  '_parent',
                );
              }}
            >
              입력하러 가기
            </PrimaryButton>
          </Space>
        </PrimaryModal>
        <RecommendModal />

        <Section>
          {myTeamId ? (
            <MainMatchingHeader title="프로필 조회" />
          ) : (
            <MainMatchingHeader title="프로필 만들기" />
          )}
        </Section>

        <Container>
          <Title>우리 팀 추천 매칭</Title>
          <Subtitle>
            우리 팀 프로필에 맞는 팀들을 추천해 드려요 <br /> 매일 밤 11시에
            추천 리스트가 업데이트 돼요!
          </Subtitle>
        </Container>

        <Timer />

        {myTeamId ? (
          <RecommendList />
        ) : (
          <Container2 onClick={() => navigate('/apply/1')}>
            <Blur />
          </Container2>
        )}
      </HeaderBottomLayout>
    );
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 425px;
  width: 100%;
  height: 200px;
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Title = styled.div`
  margin: 5% 0;
  font-size: 18px;
  font-weight: 500;
`;

const Subtitle = styled.div`
  margin: 5% 0;
  color: #777777;
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;
`;

const Container2 = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 90%;
`;
