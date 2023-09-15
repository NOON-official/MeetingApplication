import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import MainLayout from '../../layout/MainLayout';
import Home from '../home';
import MeetingIntro from './MeetingIntro';
import ServiceErrModal from '../../components/Modal/ServiceErrModal';

function Main() {
  const params = new URLSearchParams(window.location.search);
  const referralId = params.get('referralId');

  const { accessToken } = useSelector((state) => state.user);

  useEffect(() => {
    if (referralId !== null) {
      sessionStorage.setItem('referralId', referralId);
    }
  }, [referralId]);

  return (
    <MainLayout>
      <ServiceErrModal />
      {accessToken ? <Home /> : <MeetingIntro />}
    </MainLayout>
  );
}

export default Main;
