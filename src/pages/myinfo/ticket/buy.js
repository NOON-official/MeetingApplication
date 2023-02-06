import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import MenuBox, { MenuItem } from '../../../components/MenuBox';
import Section from '../../../components/Section';
import MyinfoLayout from '../../../layout/MyinfoLayout';
import { ReactComponent as Checkbox } from '../../../asset/svg/Checkbox.svg';
import { ReactComponent as CheckboxChecked } from '../../../asset/svg/CheckboxChecked.svg';
import Accordion from '../../../components/Accordion';
import { useGetPageDataQuery } from '../../../features/tickets/ticketApi';
import PrimaryButton from '../../../components/PrimaryButton';
import CouponItem from '../../../components/CouponItem';

export default function TicketBuyPage() {
  const [selectedProduct, setSelectedProduct] = useState(1);
  const [selectedCoupon, setSelectedCoupon] = useState();
  const { data } = useGetPageDataQuery();

  console.log(data);

  const toggleCoupon = useCallback((couponId) => {
    if (selectedCoupon === couponId) {
      setSelectedCoupon(undefined);
      return;
    }
    setSelectedCoupon(couponId);
  });

  return (
    <MyinfoLayout title="이용권 구매">
      <Section>
        <MenuBox>
          <MenuItem>
            <CheckboxButton onClick={() => setSelectedProduct(1)}>
              <ProductTitleBox>
                {selectedProduct === 1 ? <CheckboxChecked /> : <Checkbox />}
                <ProductTitleText>이용권 1장</ProductTitleText>
              </ProductTitleBox>
              <ProductPriceBox>
                <span className="price">5,000원</span>
              </ProductPriceBox>
            </CheckboxButton>
          </MenuItem>
          <MenuItem>
            <CheckboxButton onClick={() => setSelectedProduct(3)}>
              <ProductTitleBox>
                {selectedProduct === 3 ? <CheckboxChecked /> : <Checkbox />}
                <ProductTitleText>이용권 3장</ProductTitleText>
                <ProductDiscountText>10% 할인</ProductDiscountText>
              </ProductTitleBox>
              <ProductPriceBox>
                <span className="discount">10,000원</span>
                <span className="price">9,000원</span>
              </ProductPriceBox>
            </CheckboxButton>
          </MenuItem>
        </MenuBox>
      </Section>
      <Section my="24px">
        <Accordion
          title={<AccordionTitle>쿠폰 적용</AccordionTitle>}
          content={
            <CouponList>
              <CouponItem
                onClick={() => toggleCoupon(1)}
                checked={selectedCoupon === 1}
                disabled={false}
                title="미팅학개론 50% 할인 쿠폰"
                expireText="2023. 01. 31 까지"
                tipText="*이용권 1장에만 사용 가능"
              />
              <CouponItem
                onClick={() => toggleCoupon(2)}
                checked={selectedCoupon === 2}
                disabled
                title="미팅학개론 1회 무료 이용 쿠폰"
                expireText="2023. 01. 31 까지"
              />
            </CouponList>
          }
        />
      </Section>
      <Section>
        <TotalPriceBox>
          <span>최종 결제 금액</span>
          <span>5,000원</span>
        </TotalPriceBox>
      </Section>
      <Section my="20px" center>
        <PrimaryButton>구매하기</PrimaryButton>
      </Section>
      <Section my="68px">
        <WarningAccordion
          title={<AccordionTitle>유의사항</AccordionTitle>}
          content={
            <WarningDescription>
              <li>환불은 10일 이내 채널톡으로 문의 주시면 가능합니다.</li>
              <li>구매한 이용권은 매칭이 최종 성사되면 자동 차감됩니다.</li>
              <li>상대방이 거절할 경우 이용권은 자동으로 환급됩니다.</li>
            </WarningDescription>
          }
        />
      </Section>
    </MyinfoLayout>
  );
}

const CheckboxButton = styled(Button).attrs({
  type: 'text',
  block: true,
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 4px 8px;
`;

const ProductTitleBox = styled.div`
  display: flex;
  align-items: center;
`;
const ProductTitleText = styled.span`
  color: #777777;
  font-size: 14px;
  margin-left: 18px;
`;

const ProductDiscountText = styled.span`
  color: #eb8888;
  font-size: 10px;
  margin-left: 14px;
`;

const ProductPriceBox = styled.div`
  display: flex;
  flex-direction: column;

  > span.discount {
    color: #a0a0a0;
    text-decoration-line: line-through;
    font-size: 9px;
  }
  > span.price {
    font-weight: 500;
    font-size: 14px;
    color: #777777;
  }
`;

const AccordionTitle = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #777777;
`;

const CouponList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TotalPriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  border: 0.5px solid #777777;
  border-radius: 10px;
  padding: 16px 42px;
  font-weight: 700;
  font-size: 18px;
  color: #777777;
`;

const WarningDescription = styled.ul`
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: ${(props) => props.theme.grey};
  padding: 0 12px;

  > li {
    position: relative;
    :before {
      content: '·';
      position: absolute;
      top: 0;
      left: -8px;
    }
  }
`;

const WarningAccordion = styled(Accordion)`
  background-color: #ece9e9;
`;
