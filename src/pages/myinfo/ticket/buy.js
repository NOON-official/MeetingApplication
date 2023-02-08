import { useCallback, useState, useMemo } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import dayjs from 'dayjs';
import MenuBox, { MenuItem } from '../../../components/MenuBox';
import Section from '../../../components/Section';
import MyinfoLayout from '../../../layout/MyinfoLayout';
import { ReactComponent as Checkbox } from '../../../asset/svg/Checkbox.svg';
import { ReactComponent as CheckboxChecked } from '../../../asset/svg/CheckboxChecked.svg';
import Accordion from '../../../components/Accordion';
import PrimaryButton from '../../../components/PrimaryButton';
import CouponItem from '../../../components/CouponItem';
import {
  useGetCouponsQuery,
  useGetOrdersPageDataQuery,
} from '../../../features/backendApi';

export default function TicketBuyPage() {
  const [selectedProductId, setSelectedProductId] = useState(1);
  const [selectedCouponId, setSelectedCouponId] = useState();
  const { data: pageData } = useGetOrdersPageDataQuery();
  const { data: couponData } = useGetCouponsQuery();

  const totalPrice = useMemo(() => {
    const product = pageData?.Products.find((p) => p.id === selectedProductId);
    let price = product ? product.price : 0;

    if (selectedCouponId) {
      const coupon = couponData?.coupons.find((p) => p.id === selectedCouponId);
      if (coupon) {
        price -= price * (coupon.discountRate / 100);
      }
    }
    return price;
  });

  const toggleCoupon = useCallback((couponId) => {
    if (selectedCouponId === couponId) {
      setSelectedCouponId(undefined);
      return;
    }
    setSelectedCouponId(couponId);
  });

  return (
    <MyinfoLayout title="이용권 구매">
      <Section>
        <MenuBox>
          {pageData?.Products.map((product) => (
            <MenuItem key={product.id}>
              <CheckboxButton onClick={() => setSelectedProductId(product.id)}>
                <ProductTitleBox>
                  {selectedProductId === product.id ? (
                    <CheckboxChecked />
                  ) : (
                    <Checkbox />
                  )}
                  <ProductTitleText>{product.name}</ProductTitleText>
                </ProductTitleBox>
                <ProductPriceBox>
                  {product.originalPrice !== product.price && (
                    <span className="discount">
                      {product.originalPrice.toLocaleString()}원
                    </span>
                  )}
                  <span className="price">
                    {product.price.toLocaleString()}원
                  </span>
                </ProductPriceBox>
              </CheckboxButton>
            </MenuItem>
          ))}
        </MenuBox>
      </Section>
      <Section my="24px">
        <Accordion
          title={<AccordionTitle>쿠폰 적용</AccordionTitle>}
          content={
            <CouponList>
              {couponData?.coupons.length === 0 && (
                <NoCouponText>사용 가능한 쿠폰이 없어요</NoCouponText>
              )}
              {couponData?.coupons.map((coupon) => (
                <CouponItem
                  onClick={() => toggleCoupon(coupon.id)}
                  checked={selectedCouponId === coupon.id}
                  disabled={false}
                  title="미팅학개론 50% 할인 쿠폰"
                  expireText={`${dayjs(coupon.expiresAt).format(
                    'YYYY. MM. DD',
                  )} 까지`}
                  tipText="*이용권 1장에만 사용 가능"
                />
              ))}
            </CouponList>
          }
        />
      </Section>
      <Section>
        <TotalPriceBox>
          <span>최종 결제 금액</span>
          <span>{totalPrice.toLocaleString()}원</span>
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

const NoCouponText = styled.span`
  font-size: 14px;
  color: #777777;
  padding: 12px 0;
`;
