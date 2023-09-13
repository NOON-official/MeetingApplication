import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Select } from 'antd';
import backend from '../../util/backend';
import ApplyLayout from '../../layout/ApplyLayout';
import ChannelTalk from '../../asset/ChannelTalk';
import BinaryButton from '../../components/Button/BinaryButton';
import Age from '../../asset/Age';

// pass 연동 후 삭제 예정!!!
function ApplyInformation() {
  const { Option } = Select;
  const [man, setMan] = useState('');
  const [selectAge, setSelectAge] = useState('');
  const navigate = useNavigate();

  const NextPage = useCallback(() => {
    try {
      backend.patch('/users/my-info', {
        birth: selectAge,
        gender: man === 1 ? 'male' : 'female',
      });
      navigate('/apply/university');
    } catch {
      alert('오류가 발생했습니다. 잠시 후에 시도해주세요.');
    }
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
      </Content>
      <Footer>
        <SubmitButton onClick={NextPage} disabled={!selectAge}>
          다음
        </SubmitButton>
        <div>{ChannelTalk.hideChannelButton()}</div>
      </Footer>
    </ApplyLayout>
  );
}

export default ApplyInformation;

const Title = styled.div`
  width: 90%;
  margin: 10% 0;
`;

const Maintitle = styled.div`
  width: 100%;
  margin-bottom: 5%;
  font-weight: 500;
  font-size: 22px;
`;

const Subtitle = styled.label`
  color: #aaaaaa;
  font-weight: 400;
  font-size: 15px;
`;

const Content = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  font-weight: 400;
  font-size: 20px;
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
  width: 90%;
  margin: auto 0 10%;
`;

const SubmitButton = styled(Button)`
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
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
