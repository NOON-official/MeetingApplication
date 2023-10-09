import { Button } from 'antd';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ReactComponent as BigO } from '../../asset/svg/BigO.svg';
import { ReactComponent as KakaoSignin } from '../../asset/svg/KakaoSignin.svg';
import { ReactComponent as Seconds } from '../../asset/svg/30seconds.svg';
import { setAccessToken } from '../../features/user';
import KakaoLoginLink from './KakaoLoginLink';
import HeaderBottomLayout from '../../layout/HeaderBottomLayout';

export default function SigninView() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const access = searchParams.get('access');

    if (access) {
      dispatch(setAccessToken(access));

      // query에 남아있는 access token 삭제
      searchParams.delete('access');
      setSearchParams(searchParams);
    }
  }, [searchParams]);

  return (
    <HeaderBottomLayout backgroundColor="#ffffff">
      <Container>
        <ImageContainer>
          <BigO />
        </ImageContainer>
        <SigninMainDescription>로그인 후 이용해 주세요</SigninMainDescription>
        <SigninSubDescription>
          미팅학개론을 이용하기 위해서는
          <br />
          카카오톡 로그인이 필요해요.
        </SigninSubDescription>
        <KakaoLink>
          <SSeconds />
          <KakaoButton icon={<KakaoSignin />} block>
            카카오 로그인
          </KakaoButton>
        </KakaoLink>
      </Container>
    </HeaderBottomLayout>
  );
}

const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px;
  margin-bottom: 30px;
`;

const SigninMainDescription = styled.div`
  margin-bottom: 30px;
  color: #1a1a1a;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;

const SigninSubDescription = styled.div`
  font-size: 15px;
  text-align: center;
  color: #1a1a1a;
  margin-bottom: 30px;
  line-height: 18px;
`;

const KakaoLink = styled(KakaoLoginLink)`
  display: block;
`;

const SSeconds = styled(Seconds)`
  margin-left: 22%;
`;

const KakaoButton = styled(Button)`
  background-color: #fee500;
  width: 90%;
  height: auto;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #fee500;
  &:not(:disabled):hover {
    color: #000000;
  }

  > svg {
    vertical-align: middle;
    margin-right: 12px;
  }
  > span {
    vertical-align: middle;
    font-weight: 600;
    font-size: 25px;
  }
`;
