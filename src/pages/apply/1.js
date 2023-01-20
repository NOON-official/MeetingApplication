import { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import TopHeader from '../../layout/header/TopHeader';
import BasicContainer from '../../components/Container/BasicContainer';
import theme from '../../style/theme';
import TextColorBinary from '../../util/TextColorBinary';
import BinaryButton from '../../components/BinaryButton';
import Universities from '../../asset/Universities';
import IsPageCompleteModal from '../../components/Modal/IsPageCompleteModal';
import { ReactComponent as Xbutton } from '../../asset/svg/Xbutton.svg';
import { ReactComponent as SearchIcon } from '../../asset/svg/SearchIcon.svg';

export default function Apply1() {
  const title = '기본 정보를 알려주세요';
  const title2 = '우리 팀의 학교는?';
  const [openModal, setOpenModal] = useState(false);
  const [selectedUniversities, setSelectedUniversities] = useState([]);

  const [gender, setGender] = useState(true);
  const [number, setNumber] = useState(true);
  const [searchKeyWord, setSearchKeyWord] = useState('0');

  const setModal = (bool) => {
    setOpenModal(bool);
  };
  const inputChange = (e) => {
    setSearchKeyWord(e.target.value);
  };
  function OnUniversityClick(university) {
    // eslint-disable-next-line no-shadow
    setSelectedUniversities((selectedUniversities) => [
      ...selectedUniversities,
      university,
    ]);
  }
  const SearchedUniversities = useCallback(() => {
    const data = Universities.filter((c) => {
      return c.univ.indexOf(searchKeyWord) > -1;
    });
    return data.map((c, index) => (
      <SearchedUniversity
        onClick={() => {
          OnUniversityClick(c);
        }}
        // eslint-disable-next-line react/no-array-index-key
        key={index}
      >
        {c.univ}
      </SearchedUniversity>
    ));
  }, [searchKeyWord, selectedUniversities]);
  function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let mid;

    while (start <= end) {
      // 점점 좁혀지다가 start와 end의 순서가 어긋나게 되면 반복을 종료한다

      mid = parseInt((start + end) / 2);

      if (target === arr[mid]['key']) {
        return arr[mid]['univ'];
      }
      if (target < arr[mid]['key']) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
  }
  return (
    <BasicContainer>
      <IsPageCompleteModal open={openModal} setModal={setModal} />
      <TopHeader />
      <ScrollDiv>
        <TextColorBinary
          text={title}
          colorFirst={theme.pink}
          colorSecond={theme.black}
          num={5}
        />
        <SizedBox />
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
          />
        </ButtonDiv>
        <SizedBox height="50px" />
        <TextColorBinary
          text={title2}
          colorFirst={theme.pink}
          colorSecond={theme.black}
          num={8}
        />
        <SizedBox />
        <SubTitle>팀원들의 모든 학교를 말해주세요</SubTitle>
        <SizedBox height="20px" />
        <UniversityDiv>
          {selectedUniversities.length === 0 ? null : (
            <SelectedDiv>
              {selectedUniversities.map((data) => {
                // eslint-disable-next-line prefer-const
                // let univ = binarySearch(Universities, data);

                return (
                  <SelectedNumUniversity
                    key={data}
                    university={data.univ}
                    selectedUniversities={selectedUniversities}
                  />
                );
              })}
            </SelectedDiv>
          )}
          <SizedBox height="20px" />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '90%',
              borderRadius: '10px',
              borderStyle: 'solid',
              borderWidth: '1px',
              borderColor: '#EB8888',

              height: '44px',
            }}
          >
            <input
              onChange={inputChange}
              name="universitySearch"
              style={{
                display: 'flex',
                width: '100%',
                height: '100%',
                fontSize: '18px',
                border: '0',
                textAlign: 'center',
                outline: 'none',
                marginLeft: '10px',
                backgroundColor: 'transparent',
              }}
              placeholder="학교를 검색해주세요"
            />
            <SearchIcon />
          </div>
          <div
            style={{
              overflowX: 'hidden',
              overflow: 'scroll',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              height: '200px',
              width: '90%',
            }}
          >
            <SearchedUniversities />
          </div>
        </UniversityDiv>
        <button
          type="button"
          onClick={() => {
            setOpenModal(true);
          }}
        />
      </ScrollDiv>
    </BasicContainer>
  );
}
function SelectedNumUniversity(props) {
  const { selectedUniversities } = props;
  const width = useMemo(() => {
    if (selectedUniversities.length === 1) {
      return '45%';
    }
    if (selectedUniversities.length === 2) {
      return '45%';
    }
    if (selectedUniversities.length === 3) {
      return '30%';
    }
    if (selectedUniversities.length === 4) {
      return '22%';
    }
    return '45%';
  }, [selectedUniversities]);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: `${width}`,
        color: '#FFFFFF',
        backgroundColor: '#EB8888',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '40px',
        borderRadius: '10px',
        padding: ' 5px 5px 5px 5px',
      }}
      onClick={() => {}}
    >
      <UniversityText style={{ size: '15px' }}>
        {props.university}
      </UniversityText>
      <Xbutton />
    </div>
  );
}

const UniversityText = styled.text`
  font-size: 10px;
`;
const SizedBox = styled.div`
  height: ${(props) => props.height || '10px'};
`;
const SelectedDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: '0 0 0 5%';
  align-items: center;
  width: 100%;
  height: 50px;
`;
const UniversityDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
  width: 100%;
`;
const SubTitle = styled.text`
  display: flex;
  color: '#AAAAAA';
  font-size: 13px;
  font-weight: 500;
`;
const TitleOfButton = styled.text`
  margin: 10px 10px 10px 10px;
  color: #777777;
  font-size: 14px;
  font-family: ${theme.Prefont};
  font-weight: 500;
`;
const ButtonDiv = styled.div`
  width: 100%;
  max-width: 375px;
  height: 77px;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ScrollDiv = styled.div`
  max-width: 400px;
  flex: 1 0 auto;
  width: 90%;
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
  overflow-x: hidden;
`;
