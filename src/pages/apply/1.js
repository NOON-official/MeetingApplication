import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import theme from '../../style/theme';
import BinaryButton from '../../components/BinaryButton';
import ApplyLayout from '../../layout/ApplyLayout';
import ApplyButton from '../../components/ApplyButton';
import ProgressBar from '../../components/ProgressBar';
import SelectedNumUniversity from '../../util/SelectedUniversity';
import { SearchedUniversities } from '../../util/SearchedUniversities';
import { ReactComponent as SearchIcon } from '../../asset/svg/SearchIcon.svg';
import { ReactComponent as Bottom } from '../../asset/svg/B.svg';
import { submitStep1 } from '../../features/apply';
import IsPageCompleteModal from '../../components/Modal/IsPageCompleteModal';

export default function Apply1Page() {
  const [openModal, setOpenModal] = useState(false);
  const { finishedStep, gender, memberCount, universities } = useSelector(
    (store) => store.apply,
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedUniversities, setSelectedUniversities] =
    useState(universities);
  const [man, setMan] = useState(gender);
  const [meetingMember, setmeetingMember] = useState(memberCount);
  const [searchKeyWord, setSearchKeyWord] = useState('0');

  const inputChange = (e) => {
    setSearchKeyWord(e.target.value);
  };

  const setModal = (bool) => {
    setOpenModal(bool);
  };

  const handleBefore = useCallback(() => {
    navigate('/');
  });

  const handleSubmit = useCallback(() => {
    if (selectedUniversities.length < 1) {
      setOpenModal(true);
      return;
    }
    dispatch(
      submitStep1({
        gender: man,
        memberCount: meetingMember,
        universities: selectedUniversities,
      }),
    );
    navigate('/apply/2');
  });

  console.log(selectedUniversities);

  return (
    <ApplyLayout>
      <IsPageCompleteModal open={openModal} setModal={setModal} />
      <Title>
        <Maintitle>
          <Pink>기본 정보</Pink>를 알려주세요
        </Maintitle>
      </Title>
      <ChooseBox>
        <ChooseTitle>성별</ChooseTitle>
        <BinaryButton
          state={man === 1}
          condition1="남자"
          condition2="여자"
          onChange={(result) => (result ? setMan(1) : setMan(2))}
        />
      </ChooseBox>
      <ChooseBox>
        <ChooseTitle>인원 수</ChooseTitle>
        <BinaryButton
          state={meetingMember === 2}
          condition1="2:2"
          condition2="3:3"
          onChange={(result) =>
            result ? setmeetingMember(2) : setmeetingMember(3)
          }
        />
      </ChooseBox>
      <Title>
        <Maintitle>
          <Pink>우리 팀의 학교</Pink>를 알려주세요
        </Maintitle>
        <Subtitle>팀원들의 모든 학교를 말해주세요</Subtitle>
      </Title>
      <ScrollDiv>
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
          <SearchDiv>
            <SearchInput
              onChange={inputChange}
              name="universitySearch"
              placeholder="학교를 검색해주세요"
              autoComplete="off"
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
      <SBottom />
      <Footer>
        <ProgressBar page={1} />
        <ButtonBox>
          <ApplyButton onClick={handleBefore}>이전</ApplyButton>
          <ApplyButton onClick={handleSubmit}>다음</ApplyButton>
        </ButtonBox>
      </Footer>
    </ApplyLayout>
  );
}

const Title = styled.div`
  width: 90%;
  margin-top: 8%;
  height: 13%;
  min-height: 13%;
`;

const Maintitle = styled.div`
  width: 100%;
  font-family: 'Nanum JungHagSaeng';
  font-weight: 400;
  font-size: 35px;
`;

const Subtitle = styled.p`
  margin-top: 4%;
  color: #aaaaaa;
  font-weight: 400;
  font-size: 13px;
`;

const Pink = styled.span`
  color: ${theme.pink};
`;

const ChooseBox = styled.div`
  margin-top: 4%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 10%;
`;

const ChooseTitle = styled.span`
  padding-bottom: 5%;
  color: #777777;
  font-size: 14px;
  font-weight: 500;
`;

const SBottom = styled(Bottom)`
  margin-left: 57%;
  margin-top: 4%;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 6%;
  padding-bottom: 5%;
`;

const ButtonBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin-top: 5%;
`;

const SelectedDiv = styled.div`
  margin-bottom: 5%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: '0 0 0 5%';
  align-items: center;
  width: 92%;
`;
const UniversityDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
  width: 100%;
`;

const ScrollDiv = styled.div`
  height: 25%;
  width: 90%;
  align-items: flex-start;
  margin-top: 8%;
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
  height: 40px;
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
  margin-left: 2%;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  ::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
  overflow: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 200px;
  width: 90%;
  &:hover {
    cursor: pointer;
  }
`;
