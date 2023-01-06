import React, { useState, useCallback, useEffect } from "react";
import { ReactComponent as DownArrow } from "../asset/svg/DownArrow.svg";
import { ReactComponent as UpArrow } from "../asset/svg/UpArrow.svg";
import styled from "styled-components";
const GuideBox = (props) => {
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
      </ArrowBox>
    </SubTitle>
  );
};

export default GuideBox;

const SubTitle = styled.div`
  margin-top: 10px;
  background-color: white;
`;

const ArrowBox = styled.div``;
