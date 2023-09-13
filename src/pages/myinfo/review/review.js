import React, { useRef } from 'react';
import styled from 'styled-components';
import { Carousel } from 'antd';
import { ReactComponent as SliderLArrow } from '../../../asset/svg/SliderLArrow.svg';
import { ReactComponent as WriteReview } from '../../../asset/svg/WriteReview.svg';
import { ReactComponent as SliderRArrow } from '../../../asset/svg/SliderRArrow.svg';
import SliderBox from '../../../components/Slider/SliderBox';

export default function Review() {
  const slider1 = useRef(null);

  return (
    <>
      <Content>
        미팅 후기
        <SWriteReview
          onClick={() => {
            window.open('https://forms.gle/Yk6tNrXkLbKseSqc9');
          }}
        />
      </Content>
      <Slider>
        <SliderLArrow onClick={() => slider1.current.prev()} />
        <SCarousel dots={false} ref={slider1} autoplay={4}>
          <SliderBox
            gender="여성"
            member="3:3"
            age="초반"
            star="5"
            text={
              '하루에 여러팀 매칭되니까 고를 수 있어서\n너무 좋은 것 같아요. 저는 좋은 분 만나서\n탈퇴합니다… 총총'
            }
          />
          <SliderBox
            gender="여성"
            member="3:3"
            age="중반"
            star="4"
            text={
              '여대라 평소에 미팅 잡기가 좀 그랬는데\n잡을 수 있어서 너무 좋았어요!'
            }
          />
          <SliderBox
            gender="남성"
            member="2:2"
            age="중반"
            star="5"
            text={
              '전역하고 복학하니까 아는 사람들도 없고\n심심했는데 미팅학개론 덕분에 미팅\n많이 나갑니다. 큰일났네요 공부해야\n되는데ㅠㅠ'
            }
          />
          <SliderBox
            gender="남성"
            member="3:3"
            age="초반"
            star="5"
            text={
              '미팅학개론으로 총 3번 미팅해봤는데\n다른 학교 친구들 많이 만났습니다\n아쉽게도 인연으로는 못 이어졌지만\nㅋㅋㅋㅋㅠㅠ'
            }
          />
          <SliderBox
            gender="여성"
            member="3:3"
            age="초반"
            star="5"
            text={
              '우와아앙 버전 1도 좋았는데 버전2도 짱\n좋아요!!! 대박나세요!!!!!'
            }
          />
          <SliderBox
            gender="여성"
            member="3:3"
            age="중반"
            star="4"
            text={
              '여기서 남친도 만들었어요 팀추천만 조금\n더 빨라졌으면 좋겠어요'
            }
          />
          <SliderBox
            gender="여성"
            member="3:3"
            age="후반"
            star="5"
            text={
              '대학원생 할미들 간만에 새내기 기분내서\n좋았습니다.. 감사합니다'
            }
          />
        </SCarousel>
        <SliderRArrow onClick={() => slider1.current.next()} />
      </Slider>
    </>
  );
}

const Content = styled.div`
  padding-left: 15%;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 15px;
  color: #000000;
`;

const Slider = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const SCarousel = styled(Carousel)`
  width: 270px;
  height: 180px;
`;

const SWriteReview = styled(WriteReview)`
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`;
