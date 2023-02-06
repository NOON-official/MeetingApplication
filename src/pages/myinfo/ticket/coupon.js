import styled from 'styled-components';
import { Button, Input } from 'antd';
import MyinfoLayout from '../../../layout/MyinfoLayout';
import Section, { SectionTitle } from '../../../components/Section';
import CouponItem from '../../../components/CouponItem';

export default function TicketCouponPage() {
  return (
    <MyinfoLayout title="보유 쿠폰">
      <Section>
        <SectionTitle>쿠폰 등록</SectionTitle>
        <CouponCodeBox>
          <CouponCodeTitle>쿠폰 코드</CouponCodeTitle>
          <CouponCodeInput placeholder="ABCD1234" />
          <RegisterButton>등록하기</RegisterButton>
        </CouponCodeBox>
      </Section>
      <Section my="24px">
        <SectionTitle>보유 쿠폰 2</SectionTitle>
        <CouponListBox>
          <CouponItem
            title="미팅학개론 1회 50% 할인 쿠폰"
            expireText="2023. 01. 31 까지"
          />
          <CouponItem
            title="미팅학개론 1회 무료 이용 쿠폰"
            expireText="2023. 01. 31 까지"
          />
        </CouponListBox>
      </Section>
    </MyinfoLayout>
  );
}

const CouponCodeBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 1px solid #f8f3f3;
  border-radius: 10px;
  padding: 12px;
  gap: 8px;
`;

const CouponCodeTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #777777;
  min-width: 52px;
  padding: 0 10px;
`;

const CouponCodeInput = styled(Input)`
  background: #f1ecec;
  font-weight: 600;

  ::placeholder {
    color: #c0c0c0;
  }
`;

const RegisterButton = styled(Button).attrs({ type: 'text' })`
  height: auto;
  font-family: 'Nanum JungHagSaeng';
  padding: 4px 12px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.pink};
  border: none;
  box-shadow: none;

  > span {
    font-weight: 400;
    font-size: 13px;
    color: white;
  }
`;

const CouponListBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid #f8f3f3;
  border-radius: 10px;
  padding: 22px 44px;
  gap: 8px;
`;
