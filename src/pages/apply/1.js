import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import theme from '../../style/theme';
import TextColorBinary from '../../util/TextColorBinary';
import BinaryButton from '../../components/BinaryButton';
import ApplyLayout from '../../layout/ApplyLayout';
import ApplyButton from '../../components/ApplyButton';
import ProgressBar from '../../components/ProgressBar';
import SelectedNumUniversity from '../../util/SelectedUniversity';
import { SearchedUniversities } from '../../util/SearchedUniversities';
import { ReactComponent as SearchIcon } from '../../asset/svg/SearchIcon.svg';
import { submitStep1 } from '../../features/apply';

export default function Apply1() {
  const title = '기본 정보를 알려주세요';
  const title2 = '우리 팀의 학교는?';
  const [selectedUniversities, setSelectedUniversities] = useState([]);
  const [gender, setGender] = useState(1);
  const [memberCount, setMemberCount] = useState(2);
  const [searchKeyWord, setSearchKeyWord] = useState('0');
  const inputChange = (e) => {
    setSearchKeyWord(e.target.value);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [openModal, setOpenModal] = useState(true);
  // const setModal = (bool) => {
  //   setOpenModal(bool);
  // };

  const handleSubmit = useCallback(() => {
    dispatch(
      submitStep1({
        gender,
        memberCount,
        universities: selectedUniversities,
      }),
    );
    navigate('/apply/2');
  });

  return (
    <ApplyLayout>
      {/* <IsPageCompleteModal open={openModal} setModal={setModal} /> */}

      <ScrollDiv>
        <TextColorBinary
          text={title}
          colorFirst={theme.pink}
          colorSecond={theme.black}
          num={5}
        />

        <ButtonDiv>
          <TitleOfButton>성별</TitleOfButton>
          <BinaryButton
            state={gender === 1}
            condition1="남자"
            condition2="여자"
            onChange={(result) => (result ? setGender(1) : setGender(2))}
          />
        </ButtonDiv>
        <ButtonDiv>
          <TitleOfButton>인원 수</TitleOfButton>
          <BinaryButton
            state={memberCount === 2}
            condition1="2:2"
            condition2="3:3"
            onChange={(result) =>
              result ? setMemberCount(2) : setMemberCount(3)
            }
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
                    onDelete={() => {
                      const deleteUniv = selectedUniversities.filter(
                        (value) => value !== data,
                      );
                      setSelectedUniversities(deleteUniv);
                    }}
                    key={data}
                    university={data.univ}
                    selectedUniversities={selectedUniversities}
                  />
                );
              })}
            </SelectedDiv>
          )}
          <SizedBox height="20px" />
          <SearchDiv>
            <SearchInput
              onChange={inputChange}
              name="universitySearch"
              placeholder="학교를 검색해주세요"
            />
            <SearchIcon />
          </SearchDiv>
          <SearchListDiv>
            <SearchedUniversities
              searchKeyWord={searchKeyWord}
              selectedUniversities={selectedUniversities}
              setSelectedUniversities={setSelectedUniversities}
            />
          </SearchListDiv>
        </UniversityDiv>
      </ScrollDiv>
      <Footer>
        <ProgressBar page={1} />
        <ButtonBox>
          <ApplyButton>
            <SLink to="/">이전</SLink>
          </ApplyButton>
          <ApplyButton onClick={handleSubmit}>다음</ApplyButton>
        </ButtonBox>
      </Footer>
    </ApplyLayout>
  );
}

const ButtonBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin-top: 5%;
`;
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 10%;
  padding-bottom: 5%;
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
const SubTitle = styled.span`
  display: flex;
  color: #aaaaaa;
  font-size: 13px;
  font-weight: 400;
`;
const TitleOfButton = styled.span`
  margin: 10px 10px 10px 10px;
  color: #777777;
  font-size: 14px;
  font-family: ${theme.Prefont};
  font-weight: 500;
`;
const ButtonDiv = styled.div`
  margin-top: 8%;
  width: 100%;
  height: 77px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ScrollDiv = styled.div`
  width: 90%;
  align-items: flex-start;
  margin-top: 8%;
`;
const SLink = styled(Link)`
  padding: 10px 58.6px;
  text-decoration: 'none';
  color: ${(props) => props.theme.lightPink};
`;
const SearchDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 90%;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: #eb8888;
  padding: 0 5px 0 5px;
  height: 44px;
`;
const SearchInput = styled.input`
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 20px;
  border: 0;
  outline: none;
  margin-left: 10px;
  background-color: transparent;
  color: #eb8888;
  font-family: Nanum JungHagSaeng;
`;
const SearchListDiv = styled.div`
  overflow-x: hidden;
  overflow: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 200px;
  width: 90%;
`;
