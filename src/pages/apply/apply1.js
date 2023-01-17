import TopHeader from "../../layout/header/topHeader";
import styled from "styled-components";
import { Container } from "../../components/Container/BasicContainer";
import { theme } from "../../style/theme";
import { TextColorBinary } from "../../util/TextColorBinary";
import { useCallback, useMemo, useState } from "react";
import { BinaryButton } from "../../components/button";

const Apply1 = () => {
  const title = "우리 팀을 소개해주세요";
  const title2 = "우리 팀의 학교는?";
  const [gender, setGender] = useState(true);
  const [number, setNumber] = useState(true);
  const [searchKeyWord, setSearchKeyWord] = useState("0");
  const inputChange = (e) => {
    setSearchKeyWord(e.target.value);
  };
  function OnUniversityClick(university) {
    selectedUniversities.push(university);
  }
  const SearchedUniversities = useCallback(() => {
    let data;
    data = Universities.filter((c) => {
      return c["univ"].indexOf(searchKeyWord) > -1;
    });
    return data.map((c, index) => (
      <SearchedUniversity
        onClick={() => {
          OnUniversityClick(c);
        }}
        key={index}
      >
        {c["univ"]}
      </SearchedUniversity>
    ));
  }, [searchKeyWord, selectedUniversities]);
  const SelectedNumUniversity = (props) => {
    const width = useMemo(() => {
      if (selectedUniversities.length == 1) {
        return "45%";
      } else if (selectedUniversities.length == 2) {
        return "45%";
      } else if (selectedUniversities.length == 3) {
        return "30%";
      } else if (selectedUniversities.length == 4) {
        return "23%";
      }
    }, [selectedUniversities]);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: { width },
          color: "#FFFFFF",
          backgroundColor: "#EB8888",
          alignItems: "center",
          textAlign: "center",
          minHeight: "40px",
        }}
      >
        <div style={{ font: "Nanum JungHagSaeng" }}>{props.university}</div>
      </div>
    );
  };
  function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let mid;

    while (start <= end) {
      //점점 좁혀지다가 start와 end의 순서가 어긋나게 되면 반복을 종료한다

      mid = parseInt((start + end) / 2);

      if (target === arr[mid]["key"]) {
        return arr[mid]["univ"];
      } else {
        if (target < arr[mid]["key"]) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      }
    }
    return -1;
  }
  return (
    <Container>
      <TopHeader />
      <ScrollDiv>
        <TextColorBinary
          text={title}
          colorFirst={theme.pink}
          colorSecond={theme.black}
          num={8}
        />
        <ButtonDiv>
          <TitleOfButton>성별</TitleOfButton>
          <BinaryButton
            state={gender}
            condition1="남자"
            condition2="여자"
            onChange={(result) => setGender(result)}
          />
        </ButtonDiv>
        <ButtonDiv>
          <TitleOfButton>인원 수</TitleOfButton>
          <BinaryButton
            state={number}
            condition1="2:2"
            condition2="3:3"
            onChange={(result) => setNumber(result)}
          ></BinaryButton>
          <TextColorBinary
            text={title2}
            colorFirst={theme.pink}
            colorSecond={theme.black}
            num={8}
          />
          <SubTitle>팀원들의 모든 학교를 말해주세요</SubTitle>
        </ButtonDiv>
      </ScrollDiv>
    </BasicContainer>
  );
};

const SubTitle = styled.text`
  color: "#AAAAAA";
  font-size: 13px;
  font-weight: 500;
`;
const TitleOfButton = styled.text`
  color: #777777;
  font-size: 14px;
  font-family: ${theme.Prefont};
  font-weight: 500;
`;
const ButtonDiv = styled.div`
  height: 77px;

  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
`;

const ScrollDiv = styled.div`
  padding: 20px 10px 20px 10px;
  max-width: 400px;
  flex: 1 0 auto;
  width: 100%;
  align-items: flex-start;
  min-height: calc(100vh - 120px);
`;
const SearchedUniversity = styled.div`
  display: flex;
  min-height: 40px;
  height: 40px;
  width: 80%;
  align-items: center;
  justify-content: flex-start;
  color: #eb8888;
  font-size: 14px;
  margin-left: 50px;
  margin-right: 50px;
  border-bottom: 1px solid #f6eeee;
`;
export default Apply1;
