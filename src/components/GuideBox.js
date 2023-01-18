import React, { useState, useCallback } from 'react';

import styled from 'styled-components';
import { ReactComponent as DownArrow } from '../asset/svg/DownArrow.svg';
import { ReactComponent as UpArrow } from '../asset/svg/UpArrow.svg';

const SubTitle = styled.div`
  margin-top: 10px;
  background-color: white;
`;

const ArrowBox = styled.div`
  :hover {
    cursor: pointer;
  }
`;

export default function GuideBox(props) {
  const [commentOpened, setCommentOpened] = useState(false);
  const onToggleComment = useCallback(() => {
    setCommentOpened((prev) => !prev);
  }, []);

  return (
    <SubTitle key={props.title}>
      {props.title}
      <ArrowBox onClick={onToggleComment}>
        {commentOpened ? <UpArrow /> : <DownArrow />}
        {commentOpened && <div>{props.content}</div>}
        {commentOpened && props.link && <a href={props.link}>자세히보기</a>}
      </ArrowBox>
    </SubTitle>
  );
}
