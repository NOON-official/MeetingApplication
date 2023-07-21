import React from 'react';
import styled from 'styled-components';
import Area from '../../asset/Area';

export default function AreaText({ areaProps }) {
  const AreaContent = {
    1: '강남',
    2: '건대',
    3: '수원',
    4: '신촌',
    5: '인천',
    6: '홍대',
    7: '경대 북문',
    8: '계대 앞',
    9: '동성로',
    10: '영대역',
    11: '경대 앞',
    12: '부산대 앞',
    13: '서면',
    14: '해운대',
  };

  return (
    <div>
      <AreaCity>
        {
          Area.find((x) => x.content.some((item) => item.id === areaProps[0]))
            .title
        }
      </AreaCity>
      <SubContent>
        {areaProps.map((x) => {
          return <span key={x}>{AreaContent[x]}&nbsp;&nbsp;</span>;
        })}
      </SubContent>
    </div>
  );
}

const AreaCity = styled.div`
  margin-bottom: 5px;
  color: #777777;
  font-weight: 400;
  font-size: 14px;
`;

const SubContent = styled.div`
  font-size: 14px;
  font-weight: 500;
`;
