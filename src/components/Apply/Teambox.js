import styled from 'styled-components';
import { useCallback, useMemo, useState, useEffect } from 'react';

import { Select, Modal, Input } from 'antd';
import dayjs from 'dayjs';
import theme from '../../style/theme';
import Mbti from '../../asset/Mbti';
import Universities from '../../asset/Universities';
import { ReactComponent as Plus } from '../../asset/svg/Plus.svg';
import { ReactComponent as Question } from '../../asset/svg/Question.svg';
import { ReactComponent as Profile1 } from '../../asset/svg/Profile1.svg';
import { ReactComponent as Profile2 } from '../../asset/svg/Profile2.svg';
import { ReactComponent as Profile3 } from '../../asset/svg/Profile3.svg';
import { ReactComponent as Profile4 } from '../../asset/svg/Profile4.svg';
import { ReactComponent as SearchIcon } from '../../asset/svg/SearchIcon.svg';
import backend from '../../util/backend';

function Teambox({ member, setMember, name }) {
  const { Option } = Select;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);

  const [role, setRole] = useState(member.role);
  const [selectedUniversity, setSelectedUniversity] = useState(
    Universities[member.university - 1]?.name,
  );

  useEffect(() => {
    if (Object.keys(member).length === 0 && name === '대표자') {
      setRole(1);
      const fetchData = async () => {
        const userData = await backend.get('/users/my-info');
        setSelectedUniversity(Universities[userData.data.university - 1]?.name);
        setMember((prev) => ({
          ...prev,
          role: 1,
          age: dayjs().year() - userData.data.birth,
          university: userData.data.university,
        }));
      };
      fetchData();
    }
  }, [member, selectedUniversity]);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal2 = () => {
    setIsModalOpen2(true);
  };
  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

  const showModal3 = () => {
    setIsModalOpen3(true);
  };
  const handleCancel3 = () => {
    setIsModalOpen3(false);
  };

  const handleCancelPlus1 = useCallback(() => {
    setMember((prev) => ({ ...prev, role: 1 }));
    setRole(1);
  }, []);

  const handleCancelPlus2 = useCallback(() => {
    setMember((prev) => ({ ...prev, role: 2 }));
    setRole(2);
  }, []);

  const handleCancelPlus3 = useCallback(() => {
    setMember((prev) => ({ ...prev, role: 3 }));
    setRole(3);
  }, []);

  const handleCancelPlus4 = useCallback(() => {
    setMember((prev) => ({ ...prev, role: 4 }));
    setRole(4);
  }, []);

  const handleAgeChange = useCallback((value) => {
    setMember((prevMember) => ({ ...prevMember, age: parseInt(value) }));
  }, []);

  const handleMbtiChange = useCallback((value) => {
    setMember((prevMember) => ({ ...prevMember, mbti: parseInt(value) }));
  }, []);

  const handleUnivChange = useCallback((value) => {
    setMember((prevMember) => ({ ...prevMember, university: parseInt(value) }));
  });

  const [appearance, setAppearance] = useState(member.appearance);

  const handleSimilarChange = useCallback((e) => {
    setAppearance(e.target.value);
  }, []);

  const profileimg = useMemo(() => {
    if (role === 1) {
      return <Profile1 />;
    }
    if (role === 2) {
      return <Profile4 />;
    }
    if (role === 3) {
      return <Profile3 />;
    }
    if (role === 4) {
      return <Profile2 />;
    }
    return <Plus />;
  });

  const [searchKeyWord, setSearchKeyWord] = useState(0);
  const inputChange = (e) => {
    setSearchKeyWord(e.target.value);
  };

  const SearchedUniv = Universities.filter(
    (c) => c.name.indexOf(searchKeyWord) > -1,
  );

  return (
    <Container>
      <Title />
      <LeftBox>
        <Profile onClick={showModal}>{profileimg}</Profile>
        <SModal
          footer={null}
          title="포지션 선택"
          open={isModalOpen}
          onCancel={handleCancel}
        >
          <ModalTitle>나는 미팅에서 어떤 포지션?</ModalTitle>
          <Position>
            <WhiteBox
              onClick={() => {
                handleCancel();
                handleCancelPlus1();
              }}
            >
              <WhiteBoxPf>
                <Profile1 />
              </WhiteBoxPf>
              <Ttitle>존재만으로도 분위기를 녹이는 당신!</Ttitle>
              <Ttitle>바라만 보고 있어도 웃음이 나요</Ttitle>
            </WhiteBox>
            <BottomBox>
              <Btitle>주의!</Btitle>
              <BsubTitle>반드시 주위에 물어볼 것!</BsubTitle>
            </BottomBox>
          </Position>
          <Position>
            <WhiteBox
              onClick={() => {
                handleCancel();
                handleCancelPlus2();
              }}
            >
              <WhiteBoxPf>
                <Profile4 />
              </WhiteBoxPf>
              <Ttitle>어색한 분위기를 풀어주는 당신은 미팅의 유재석!</Ttitle>
              <Ttitle>당신이 없다면 미팅이 진행되지 않아요</Ttitle>
            </WhiteBox>
            <BottomBox>
              <Btitle>주의!</Btitle>
              <BsubTitle>진행만 하다가 숨겨진 인연을 놓칠 수 있어요!</BsubTitle>
            </BottomBox>
          </Position>
          <Position>
            <WhiteBox
              onClick={() => {
                handleCancel();
                handleCancelPlus3();
              }}
            >
              <WhiteBoxPf>
                <Profile3 />
              </WhiteBoxPf>
              <Ttitle>리액션과 개그맨 뺨치는 입담으로</Ttitle>
              <Ttitle>상대방을 홀리는 당신!</Ttitle>
            </WhiteBox>
            <BottomBox>
              <Btitle>주의!</Btitle>
              <BsubTitle>개그만 하다 집에 돌아올수도 있으니</BsubTitle>
              <BsubTitle>적절한 타이밍이 중요해요!</BsubTitle>
            </BottomBox>
          </Position>
          <Position>
            <WhiteBox
              onClick={() => {
                handleCancel();
                handleCancelPlus4();
              }}
            >
              <WhiteBoxPf>
                <Profile2 />
              </WhiteBoxPf>
              <Ttitle>수줍음이 많은 당신</Ttitle>
              <Ttitle>순수한 매력에 상대방이 반할지도?</Ttitle>
            </WhiteBox>
            <BottomBox>
              <Btitle>주의!</Btitle>
              <BsubTitle>좀더 자신감을 가지고 강하게 어필해봅시다!</BsubTitle>
            </BottomBox>
          </Position>
        </SModal>
        <ProfileTitle>{name}</ProfileTitle>
      </LeftBox>
      <RightBox>
        <Info>
          <BigTitle>나이</BigTitle>
          <SSelect
            value={member.age !== undefined ? `만 ${member.age}세` : null}
            showSearch={false}
            bordered={false}
            placeholder="(필수)"
            removeIcon
            showArrow={false}
            onChange={handleAgeChange}
          >
            <Option value="19">만 19세</Option>
            <Option value="20">만 20세</Option>
            <Option value="21">만 21세</Option>
            <Option value="22">만 22세</Option>
            <Option value="23">만 23세</Option>
            <Option value="24">만 24세</Option>
            <Option value="25">만 25세</Option>
            <Option value="26">만 26세</Option>
            <Option value="27">만 27세</Option>
            <Option value="28">만 28세</Option>
            <Option value="29">만 29세</Option>
          </SSelect>
        </Info>
        <Info>
          <BigTitle>대학교</BigTitle>
          <SInput
            value={selectedUniversity}
            placeholder="(필수)"
            autoComplete="off"
            required
            onClick={showModal3}
          />
          <SearchIcon onClick={showModal3} />
          <SModal
            footer={null}
            title="대학교 선택"
            open={isModalOpen3}
            onCancel={handleCancel3}
          >
            <ModalTitle>대학교를 검색하세요</ModalTitle>
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
                        setSelectedUniversity(a.name);
                        handleUnivChange(a.id);
                        handleCancel3();
                      }}
                    >
                      {a.name}
                    </SearchedUniversity>
                  ))}
            </SearchList>
          </SModal>
        </Info>
        <Info>
          <BigTitle>MBTI</BigTitle>
          <SSelect
            defaultValue={Mbti[member.mbti - 1]?.name}
            showSearch={false}
            bordered={false}
            placeholder="(선택)"
            optionFilterProp="children"
            suffixIcon=""
            maxLength={10}
            onChange={handleMbtiChange}
          >
            <Option value="17">잘 모름</Option>
            <Option value="1">ENFJ</Option>
            <Option value="2">ENFP</Option>
            <Option value="3">ENTJ</Option>
            <Option value="4">ENTP</Option>
            <Option value="5">ESFJ</Option>
            <Option value="6">ESFP</Option>
            <Option value="7">ESTJ</Option>
            <Option value="8">ESTP</Option>
            <Option value="9">INFJ</Option>
            <Option value="10">INFP</Option>
            <Option value="11">INTJ</Option>
            <Option value="12">INTP</Option>
            <Option value="13">ISFJ</Option>
            <Option value="14">ISFP</Option>
            <Option value="15">ISTJ</Option>
            <Option value="16">ISTP</Option>
          </SSelect>
        </Info>
        <Info>
          <BigTitle>닮은꼴</BigTitle>
          <SInput
            value={appearance}
            maxLength={5}
            onChange={handleSimilarChange}
            placeholder="(선택)"
            autoComplete="off"
            onBlur={() => {
              setMember({ ...member, appearance });
            }}
          />
          <SQuestion onClick={showModal2} />
          <Modal
            centered
            footer={null}
            open={isModalOpen2}
            onCancel={handleCancel2}
          >
            <Info2>
              <p>
                자신이 <Highlight>닮은 연예인</Highlight>이나{' '}
                <Highlight>동물</Highlight> 등을 적어주세요!
              </p>
              <Sp>생각해봐도 없다면 적지 않아도 괜찮아요.</Sp>
              <p>다만 닮은꼴을 입력하면 우리팀 구성원을 </p>
              <p>더 재미있게 소개할 수 있답니다!</p>
            </Info2>
          </Modal>
        </Info>
      </RightBox>
    </Container>
  );
}

export default Teambox;

const Container = styled.div`
  margin-top: 8%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.background};
  border: 1px solid #f1ecec;
  border-radius: 10px;
  width: 340px;
  height: 200px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Title = styled.div`
  width: 100%;
  min-width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #999999;
  font-weight: 400;
  font-size: 16px;
  width: 100%;
  height: 35px;
  background-color: ${theme.lightPink};
  font-family: 'Nanum JungHagSaeng';
`;

const LeftBox = styled.div`
  padding-left: 24px;
  width: 100px;
  height: calc(200px - 35px);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const Profile = styled.div`
  &:hover {
    cursor: pointer;
  }
  margin-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background: #ffffff;
  border: 1px solid #f1ecec;
  border-radius: 50%;
`;

const WhiteBoxPf = styled.div`
  padding-top: 20px;
`;

const ProfileTitle = styled.div`
  width: 59px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 200;
  font-size: 13px;
  border-radius: 7px;
  color: white;
  background-color: #eb8888;
  font-family: 'SCoreDream';
  margin-bottom: 15px;
`;

const RightBox = styled.div`
  padding-right: 20px;
  width: 169px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const Info = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 2px;
  padding-left: 8px;
  font-weight: 400;
  font-size: 20px;
  font-family: 'Nanum JungHagSaeng';
  color: ${theme.pink};
  width: 100%;
  max-width: 100%;
  border-bottom: 1px solid #eb8888;
`;

const BigTitle = styled.div`
  width: 40px;
  font-family: 'SCoreDream';
  font-size: 13px;
  font-weight: 200;
`;

const Ttitle = styled.div`
  text-align: center;
  width: 100%;
  height: 5px;
  font-weight: 400;
  font-size: 13px;
`;

const SSelect = styled(Select)`
  position: relative;
  margin-left: 20px;
  width: 80px;
  min-width: 100px;
  color: red;
  font-family: 'Nanum JungHagSaeng';
  .ant-select {
    touch-action: none;
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
  overflow: auto;
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

const SInput = styled(Input)`
  text-align: center;
  width: 100px;

  border: none;
  background-color: ${theme.background};
`;

const SModal = styled(Modal)`
  display: flex;
  justify-content: center;
`;

const Position = styled.div`
  padding-bottom: 2px;
  border: 1px solid #f1ecec;
  border-radius: 10px;
  margin-top: 20px;
  width: 334px;
  height: 257px;
  &:hover {
    border: 1px solid red;
    cursor: pointer;
  }
`;

const WhiteBox = styled.div`
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 160px;
  width: 100%;
`;

const BottomBox = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 100%;
  height: 68px;
  padding: 10px 0;
  background-color: ${theme.background};
`;

const Btitle = styled.p`
  margin-top: 6px;
  width: 100%;
  font-weight: 700;
  font-size: 13px;
  color: ${theme.pink};
`;

const BsubTitle = styled.p`
  width: 100%;
  font-weight: 700;
  font-size: 13px;
`;

const SQuestion = styled(Question)`
  &:hover {
    cursor: pointer;
  }
`;

const Info2 = styled.div`
  font-family: 'Pretendard';
  text-align: center;
  padding: 20px;
`;

const Sp = styled.p`
  margin-top: 10px;
`;

const Highlight = styled.span`
  color: ${theme.pink};
`;

const ModalTitle = styled.p`
  margin-top: 15px;
  font-family: 'Nanum JungHagSaeng';
  font-weight: 400;
  font-size: 35px;
`;
