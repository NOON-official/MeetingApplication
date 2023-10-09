import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Home from '../home';
import MeetingIntro from './MeetingIntro';

function Main() {
  const params = new URLSearchParams(window.location.search);
  const referralId = params.get('referralId');

  const { accessToken } = useSelector((state) => state.user);

  useEffect(() => {
    if (referralId !== null) {
      sessionStorage.setItem('referralId', referralId);
    }
  }, [referralId]);

  return accessToken ? <Home /> : <MeetingIntro />;
}

export default Main;
