import styled from "styled-components";

import { ReactComponent as MainImg } from "../../asset/svg/MainImg.svg";
import MainLayOut from "../../layout/mainlayout";

const Main = () => {
  return (
    <>
      <MainLayOut>
        <ImgBox>
          <MainImg />
        </ImgBox>
        <div>매칭박스</div>
      </MainLayOut>
    </>
  );
};

export default Main;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  font-family: var(--font-family);
`;
