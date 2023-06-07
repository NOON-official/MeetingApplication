import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import ApplyLayout from '../../layout/ApplyLayout';
import { ReactComponent as SearchIcon } from '../../asset/svg/SearchIcon.svg';
import { ReactComponent as Bottom } from '../../asset/svg/B.svg';
import { ReactComponent as Xbutton } from '../../asset/svg/Xbutton.svg';
import Universities from '../../asset/Universities';
import ChannelTalk from '../../asset/ChannelTalk';
import backend from '../../util/backend';

export default function ApplyUniversity() {
  const navigate = useNavigate();

  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [searchKeyWord, setSearchKeyWord] = useState(0);

  const NextPage = useCallback(() => {
    backend.patch('/university', {
      university: selectedUniversity,
    });
    navigate('/apply/invite');
  });

  const SearchedUniv = Universities.filter(
    (c) => c.name.indexOf(searchKeyWord) > -1,
  );

  const inputChange = (e) => {
    setSearchKeyWord(e.target.value);
  };

  return (
    <ApplyLayout>
      <Title>
        <Maintitle>본인 학교를 확인해주세요.</Maintitle>
        <Subtitle>추후에 수정이 불가능하니 한 번 더 확인해 주세요!</Subtitle>
      </Title>
      <CollegeBox>
        <SelectedBox>
          {selectedUniversity
            ? selectedUniversity.map((a) => (
                <SelectedUniversity key={a}>
                  {Universities[a - 1].name}
                  <SXbutton
                    onClick={() => {
                      setSelectedUniversity('');
                    }}
                  />
                </SelectedUniversity>
              ))
            : null}
        </SelectedBox>
        <SearchBox>
          <SearchInput
            onChange={inputChange}
            name="universitySearch"
            placeholder="학교를 검색해주세요"
            autoComplete="off"
          />
          <SearchIcon />
        </SearchBox>
        <SearchList>
          {SearchedUniv.length === 415
            ? null
            : SearchedUniv.map((a) => (
                <SearchedUniversity
                  key={a.id}
                  onClick={() => {
                    if (
                      !selectedUniversity.includes(a.id) &&
                      selectedUniversity.length < 1
                    )
                      setSelectedUniversity([a.id, ...selectedUniversity]);
                  }}
                >
                  {a.name}
                </SearchedUniversity>
              ))}
        </SearchList>
      </CollegeBox>
      <SBottom />
      <Footer>
        <ButtonBox>
          <SubmitButton onClick={NextPage} disabled={!selectedUniversity}>
            다음
          </SubmitButton>
        </ButtonBox>
      </Footer>
      <div>{ChannelTalk.hideChannelButton()}</div>
    </ApplyLayout>
  );
}

const Title = styled.div`
  width: 90%;
  margin-top: 13%;
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

const CollegeBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const SelectedBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

const SelectedUniversity = styled.div`
  margin-top: 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 13px;
  color: #ffffff;
  width: 40%;
  height: 45px;
  background: #eb8888;
  border-radius: 10px;
  padding: 0 3%;
`;

const SXbutton = styled(Xbutton)`
  &:hover {
    cursor: pointer;
  }
`;

const SearchBox = styled.div`
  margin-top: 5%;
  width: 95%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #eb8888;
  padding: 0 5px 0 5px;
  height: 40px;
  background-color: white;
`;

const SearchInput = styled.input`
  display: flex;
  width: 90%;
  height: 100%;
  font-size: 20px;
  border: 0;
  outline: none;
  margin-left: 10px;
  background-color: transparent;
  color: #eb8888;
  font-family: Nanum JungHagSaeng;
`;

const SearchList = styled.div`
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
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;

const SearchedUniversity = styled.div`
  display: flex;
  min-height: 40px;
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  color: #eb8888;
  font-size: 14px;
  border-bottom: 1px solid #f6eeee;
  overflow-x: hidden;
`;

const SBottom = styled(Bottom)`
  margin-left: 57%;
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

const SubmitButton = styled(Button)`
  font-family: 'Nanum JungHagSaeng';
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  border: none;
  width: 100%;
  height: 50px;
  background: #eb8888;
  border-radius: 10px;
`;
