import { useMemo } from 'react';
import LoginMatchOk from '../../components/MatchingBox/LoginMatchOk';

import LoginNoStart from '../../components/MatchingBox/LoginNoStart';
import LoginWaitMatch from '../../components/MatchingBox/LoginWaitMatch';
import NoLogin from '../../components/MatchingBox/NoLogin';

import MainFooter from '../../layout/footer/MainFooter';
import MainLayout from '../../layout/MainLayout';

function Matching() {
  const state = 3;

  const MatchingBox = useMemo(() => {
    if (state === 0) {
      return <NoLogin />;
    }
    if (state === 1) {
      return <LoginNoStart />;
    }
    if (state === 2) {
      return <LoginWaitMatch />;
    }
    if (state === 3) {
      return <LoginMatchOk />;
    }
    return null;
  });

  return (
    <MainLayout>
      {MatchingBox}
      <MainFooter />
    </MainLayout>
  );
}

export default Matching;
