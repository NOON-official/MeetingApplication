import MainLayOut from "../../layout/mainlayout";
import styled from "styled-components";
import { ReactComponent as MainImg } from "../../asset/svg/MainImg.svg";

const Main = () => {
  return (
    <MainLayOut>
      <ImgBox>
        <MainImg />
      </ImgBox>
    </MainLayOut>
  );
};

export default Main;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
`;
