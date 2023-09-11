import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Space } from 'antd';
import MainLayout from '../../layout/MainLayout';
import PrimaryModal from '../../components/Modal/PrimaryModal';
import PrimaryButton from '../../components/Button/PrimaryButton';
import Home from '../home';
import MeetingIntro from './MeetingIntro';

function Main() {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const referralId = params.get('referralId');

  const { accessToken } = useSelector((state) => state.user);

  const needMoreInfo = localStorage.getItem('needMoreInfo');

  useEffect(() => {
    if (referralId !== null) {
      sessionStorage.setItem('referralId', referralId);
    }
  }, [referralId]);

  return (
    <MainLayout>
      <PrimaryModal
        title=" "
        open={needMoreInfo === 'true'}
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
              navigate('/apply/university');
            }}
          >
            입력하러 가기
          </PrimaryButton>
        </Space>
      </PrimaryModal>
      {accessToken ? <Home /> : <MeetingIntro />}
    </MainLayout>
  );
}

export default Main;
