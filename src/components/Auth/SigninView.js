import { Button } from 'antd';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ReactComponent as BigO } from '../../asset/svg/BigO.svg';
import { ReactComponent as KakaoSignin } from '../../asset/svg/KakaoSignin.svg';
import KakaoLoginLink from '../KakaoLoginLink';
import KakaoLoginLink2 from '../KakaoLoginLink2';
import { setAccessToken } from '../../features/user';

export default function SigninView() {
  const agreements = localStorage.getItem('agree');
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

  console.log(agreements);

  return (
    <Container>
      <ImageContainer>
        <BigO />
      </ImageContainer>

      <SigninDescription>
        미팅학개론을 이용하기 위해서는
        <br />
        카카오톡 로그인이 필요해요.
      </SigninDescription>
      {agreements === null ? (
        <KakaoLink2>
          <KakaoButton icon={<KakaoSignin />} block>
            카카오 로그인
          </KakaoButton>
        </KakaoLink2>
      ) : (
        <KakaoLink>
          <KakaoButton icon={<KakaoSignin />} block>
            카카오 로그인
          </KakaoButton>
        </KakaoLink>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 53px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px;
  margin-top: 60px;
  margin-bottom: 100px;
`;

const SigninDescription = styled.div`
  font-family: 'Nanum JungHagSaeng';
  font-size: 25px;
  text-align: center;
  color: #1a1a1a;
  margin-bottom: 52px;
`;

const KakaoLink = styled(KakaoLoginLink)`
  display: block;
`;

const KakaoLink2 = styled(KakaoLoginLink2)`
  display: block;
`;

const KakaoButton = styled(Button)`
  background-color: #fee500;
  height: auto;
  padding: 16px;
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
