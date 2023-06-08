import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Select } from 'antd';
import backend from '../../util/backend';
import ApplyLayout from '../../layout/ApplyLayout';
import ChannelTalk from '../../asset/ChannelTalk';
import BinaryButton from '../../components/BinaryButton';
import Age from '../../asset/Age';

function ApplyInformation() {
  const { Option } = Select;
  const [man, setMan] = useState('');
  const [selectAge, setSelectAge] = useState('');
  const navigate = useNavigate();

  const NextPage = useCallback(() => {
    backend.patch('/my-info', {
      birth: selectAge,
    });
    navigate('/apply/university');
  });

  const handleAge = (e) => {
    setSelectAge(e);
  };

  return (
    <ApplyLayout>
      <Title>
        <Maintitle>기본 정보를 입력해주세요.</Maintitle>
        <Subtitle>추후에 수정이 불가능하니 한 번 더 확인해 주세요!</Subtitle>
      </Title>
      <Content>
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
          <SelectTitle>출생년도</SelectTitle>
          <Info>
            <SSelect
              showSearch={false}
              bordered={false}
              optionFilterProp="children"
              onChange={handleAge}
            >
              {Age.map((x) => (
                <Option value={x.age} key={x.id}>
                  {x.age}
                </Option>
              ))}
            </SSelect>
          </Info>
        </ChooseBox>
        <Footer>
          <ButtonBox>
            <SubmitButton onClick={NextPage} disabled={!selectAge}>
              다음
            </SubmitButton>
          </ButtonBox>
        </Footer>
        <div>{ChannelTalk.hideChannelButton()}</div>
      </Content>
    </ApplyLayout>
  );
}

export default ApplyInformation;

const Title = styled.div`
  width: 90%;
  margin-top: 13%;
`;

const Maintitle = styled.div`
  width: 100%;
  margin-bottom: 5%;
  font-family: 'Nanum JungHagSaeng';
  font-weight: 400;
  font-size: 35px;
`;

const Subtitle = styled.label`
  color: #aaaaaa;
  font-weight: 400;
  font-size: 13px;
`;

const Content = styled.div`
  width: 90%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChooseBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 10%;
  margin-top: 10%;
`;

const ChooseTitle = styled.span`
  padding-bottom: 5%;
  color: #777777;
  font-size: 14px;
  font-weight: 500;
`;

const SelectTitle = styled.div`
  padding-bottom: 5%;
  color: #777777;
  font-size: 14px;
  font-weight: 500;
`;

const Info = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 2px;
  /* padding-left: 8px; */
  font-weight: 400;
  font-size: 20px;
  font-family: 'Nanum JungHagSaeng';
  width: 100%;
  max-width: 100%;
  height: 45px;
  border: 1px solid #eb8888;
  border-radius: 10px;
  background-color: white;
  text-align: center;
`;

const SSelect = styled(Select)`
  position: relative;
  width: 30%;
  margin: 0 auto;
  font-family: 'Nanum JungHagSaeng';
  .ant-select {
    touch-action: none;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 50%;
  padding-bottom: 5%;
`;

const ButtonBox = styled.div`
  width: 100%;
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
  &:disabled {
    cursor: auto;
  }
`;
