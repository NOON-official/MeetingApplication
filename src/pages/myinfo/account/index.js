import { Button, Card, Col, Row, Space } from 'antd';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PrimaryModal from '../../../components/Modal/PrimaryModal';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import Section from '../../../components/Section';
import { useGetMyInfoQuery } from '../../../features/backendApi';
import { logout } from '../../../features/user/asyncActions';
import MyinfoLayout from '../../../layout/MyinfoLayout';
import backend from '../../../util/backend';
import Universities from '../../../asset/Universities';
import { ReactComponent as UniversityMark } from '../../../asset/svg/UniversityMark.svg';

export default function Account() {
  const [resignModalOpened, setResignModalOpened] = useState(false);
  const { data: myInfo } = useGetMyInfoQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteAccount = useCallback(async () => {
    try {
      await backend.delete('/auth/account', {
        withCredentials: true,
      });
      window.alert('탈퇴되었습니다');
      dispatch(logout());
      localStorage.clear();
      navigate('/');
    } catch (e) {
      window.alert('탈퇴중 오류가 발생하였습니다');
    }
  }, []);

  console.log(myInfo);

  return (
    <MyinfoLayout title="내 정보">
      {myInfo && (
        <Section my="12px">
          <InfoCard>
            <Subtitle>내 정보</Subtitle>
            <Row>
              <Col span={4}>이름</Col>
              <Col span={15}>{myInfo.nickname}</Col>
            </Row>
            <Row>
              <Col span={4}>성별</Col>
              <Col span={15}>{myInfo.gender === 'male' ? '남성' : '여성'}</Col>
            </Row>
            <Row>
              <Col span={5}>대학교</Col>
              <Col span={18}>
                {Universities[myInfo.university - 1]?.name}
                {myInfo.approval && (
                  <>
                    <SUniversityMarkPink />
                    <Mark>학교 인증 완료</Mark>
                  </>
                )}
              </Col>
            </Row>
            <Row>
              <Col span={6}>전화번호</Col>
              <Col span={15}>
                {myInfo.phone}
                <PhoneChangeButton
                  onClick={() => navigate('/myinfo/account/phone')}
                >
                  변경
                </PhoneChangeButton>
              </Col>
            </Row>
          </InfoCard>
        </Section>
      )}
      <Section my="8px" style={{ textAlign: 'right' }}>
        <ResignButton type="text" onClick={() => setResignModalOpened(true)}>
          회원 탈퇴
        </ResignButton>
      </Section>
      <PrimaryModal
        title=" "
        open={resignModalOpened}
        onCancel={() => setResignModalOpened(false)}
        footer={null}
      >
        <Space
          direction="vertical"
          style={{ padding: '12px 0', textAlign: 'center' }}
        >
          <span>
            지금 탈퇴하시면 미팅학개론에서의 모든 기록이 사라져요. 그래도
            탈퇴하시겠어요?
          </span>
          <PrimaryButton onClick={deleteAccount}>탈퇴하기</PrimaryButton>
        </Space>
      </PrimaryModal>
    </MyinfoLayout>
  );
}

const Subtitle = styled.div`
  margin-bottom: 5%;
  font-size: 16px;
  color: ${(props) => props.theme.black};
  font-weight: 600;
`;

const InfoCard = styled(Card)`
  .ant-card-body {
    padding: 20px 0 10px 20px;
  }

  .ant-row {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 5%;
  }

  .ant-col {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    :first-child {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      color: #eb8888;
      background-color: #ffeded;
      font-size: 15px;
      text-align: center;
    }

    :last-child {
      padding-left: 15px;
      color: #777777;
      font-size: 14px;
    }
  }
`;

const SUniversityMarkPink = styled(UniversityMark)`
  margin: 0 5px 0 10px;
  width: 18px;
`;

const Mark = styled.div`
  color: #e8a4c0;
  font-weight: 400;
  font-size: 12px;
`;

const ResignButton = styled(Button)`
  > span {
    color: ${(props) => props.theme.grey};
  }
`;

const PhoneChangeButton = styled.button`
  margin-left: 7%;
  padding: 5px 8px;
  border-radius: 5px;
  background-color: #e6e6e6;
  border: none;
  font-weight: 400;
  font-size: 12px;
  color: #777777;
`;
