import React, { useRef } from 'react';
import styled from 'styled-components';
import { Carousel } from 'antd';
import { ReactComponent as SliderLArrow } from '../../../asset/svg/SliderLArrow.svg';
import { ReactComponent as WriteReview } from '../../../asset/svg/WriteReview.svg';
import { ReactComponent as SliderRArrow } from '../../../asset/svg/SliderRArrow.svg';
import SliderBox from '../../../components/SliderBox';

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
            age="초반"
            star="5"
            text={
              '처음 해본 미팅이었는데 되게 괜찮은 분들이\n나오셨어요!! 너무 재밌었고 그런 분들만\n나오시면 정말 자주 나갈것 같아요 ㅋㅋㅋ\n매칭 시스템도 깔끔하고 좋은것 같아요'
            }
          />
          <SliderBox
            gender="남성"
            age="중반"
            star="5"
            text={
              '재밌었고 좋았어요! 거기서 마음에 드는\n분을 만나 이번주 주말에 애프터로 만나기로\n했어요! 이용료도 부담스럽진 않았어서 더욱\n괜찮았습니다 시간도 오래 안걸리고요👍'
            }
          />
          <SliderBox
            gender="여성"
            age="초반"
            star="4"
            text={
              '지인추천이 아니라 처음에는 살짝 걱정\n되더라구요 그런데 실제로 만나보니 정말\n유쾌하고 좋은 분들이 나오셔서 좋은 시간\n보내고 왔어요! 감사합니다'
            }
          />
          <SliderBox
            gender="남성"
            age="후반"
            star="4"
            text={
              '주변에 미팅 잡아달라고 할 사람 없으면\n쓰기 좋은 듯 소개팅도 해줬으면 좋겠다'
            }
          />
          <SliderBox
            gender="여성"
            age="중반"
            star="5"
            text={
              '미팅 잡히는 속도가 빨라서 좋았습니다.\n가기 전에 어느정도 상대방의 정보를\n미리 알 수 있어서 좋았습니다. 이걸로 미팅\n초반에 어색할 때 얘기하기도 재밌었어요ㅎ'
            }
          />
          <SliderBox
            gender="남성"
            age="중반"
            star="5"
            text={
              '좋은 인연들을 만났고 이후에도 또 약속을\n잡고 연락을 하며 이어나가고 있습니다.\n장소, 날짜, 성향 등을 미리 알고 미팅하니\n더 조율하기도 좋고 편했던 것 같습니다.'
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
