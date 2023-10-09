import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Button, Carousel } from 'antd';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Matching1 from '../../asset/img/Matching1.png';
import Matching2 from '../../asset/img/Matching2.png';
import Matching3 from '../../asset/img/Matching3.png';
import Matching4 from '../../asset/img/Matching4.png';
import Matching5 from '../../asset/img/Matching5.png';
import { ReactComponent as KakaoSignin } from '../../asset/svg/KakaoSignin.svg';
import { ReactComponent as Seconds } from '../../asset/svg/30seconds.svg';
import { setAccessToken } from '../../features/user';
import KakaoLoginLink from '../../components/Auth/KakaoLoginLink';
import HeaderBottomLayout from '../../layout/HeaderBottomLayout';

export default function MatchingIntro() {
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

  const setting = {
    dots: true,
    dotPosition: 'top',
    autoplay: true,
  };

  return (
    <HeaderBottomLayout backgroundColor="#ffffff">
      <Slider>
        <SCarousel {...setting}>
          <SImg src={Matching1} />
          <SImg src={Matching2} />
          <SImg src={Matching3} />
          <SImg src={Matching4} />
          <div>
            <SImg src={Matching5} />
            <LastSlide>
              <KakaoLink>
                <SSeconds />
                <KakaoButton icon={<KakaoSignin />} block>
                  카카오 로그인
                </KakaoButton>
              </KakaoLink>
            </LastSlide>
          </div>
        </SCarousel>
      </Slider>
    </HeaderBottomLayout>
  );
}

const Slider = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const SCarousel = styled(Carousel)`
  width: 100vw;
  max-width: 425px;
  z-index: 1;

  .slick-dots-top {
    margin-top: 20px;
  }
  .slick-dots li button {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #d9d9d9;
  }
  .slick-dots li.slick-active button {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: #eb8888;
  }
`;

const SImg = styled.img`
  width: 100%;
  margin-top: 60px;
`;

const LastSlide = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const SSeconds = styled(Seconds)`
  margin-left: 22%;
`;

const KakaoLink = styled(KakaoLoginLink)`
  display: block;
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
