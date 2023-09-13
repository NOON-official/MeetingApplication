import { useEffect, useCallback, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'antd';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import { v4 as uuidv4 } from 'uuid';
import MenuBox, { MenuItem } from '../../../components/MenuBox';
import Section from '../../../components/Section';
import MyinfoLayout from '../../../layout/MyinfoLayout';
import { ReactComponent as FreindHalf } from '../../../asset/svg/FreindHalf.svg';
import { ReactComponent as Checkbox } from '../../../asset/svg/CheckboxUnfilled.svg';
import { ReactComponent as CheckboxChecked } from '../../../asset/svg/CheckboxFilled.svg';
import Accordion from '../../../components/Accordion';
import {
  useGetUserCouponsQuery,
  useGetCouponsPageDataQuery,
  useGetOrdersPageDataQuery,
} from '../../../features/backendApi';
import { CLIENT_URL, STORAGE_KEY_ORDER_DATA } from '../../../config/constants';
import backend from '../../../util/backend';
import { ReactComponent as TingImg } from '../../../asset/svg/TingImg.svg';
import { useGetMyInfoQuery } from '../../../features/api/userApi';

export default function ChargeTing() {
  const navigate = useNavigate();
  const [selectedProductId, setSelectedProductId] = useState(1);
  const [selectedCouponId, setSelectedCouponId] = useState(null);
  const { data: pageData } = useGetOrdersPageDataQuery();
  const { data: couponPageData } = useGetCouponsPageDataQuery();
  const { data: couponData, refetch } = useGetUserCouponsQuery();
  const { data: userData } = useGetMyInfoQuery();

  const handleRefetchCouponData = () => {
    refetch();
  };

  useEffect(() => {
    handleRefetchCouponData();
  }, [couponData]);

  const coupons = useMemo(() => {
    const couponTypes = couponPageData?.CouponTypes;
    return couponData
      ? couponData.coupons.map((coupon) => ({
          ...coupon,
          type: couponTypes?.find((type) => type.id === coupon.typeId),
        }))
      : [];
  });

  const selectedProduct = useMemo(() =>
    pageData?.Products.find((p) => p.id === selectedProductId),
  );
  const selectedCoupon = useMemo(() =>
    coupons.find((p) => p.id === selectedCouponId),
  );

  const price = useMemo(() => (selectedProduct ? selectedProduct.price : 0));
  const discountAmount = useMemo(() =>
    selectedCoupon ? price * (selectedCoupon.type.discountRate / 100) : 0,
  );

  const totalAmount = useMemo(() => price - discountAmount);

  useEffect(() => {
    if (selectedCoupon) {
      const isValidCoupon =
        selectedCoupon?.type?.applicableProducts?.includes(selectedProductId);

      // 적용 불가한 쿠폰인 경우 쿠폰 선택 해제
      if (!isValidCoupon) {
        setSelectedCouponId(undefined);
      }
    }
  }, [selectedProductId]);

  const toggleCoupon = useCallback((coupon) => {
    if (selectedCouponId === coupon.id) {
      setSelectedCouponId(undefined);
      return;
    }
    setSelectedCouponId(coupon.id);
  });

  const makePayment = useCallback(async () => {
    const tossPayments = await loadTossPayments(
      process.env.REACT_APP_TOSS_PAYMENT_CLIENT_KEY,
    );
    const orderId = uuidv4();
    const orderData = {
      productId: selectedProductId,
      price,
      discountAmount,
      totalAmount,
      couponId: selectedCouponId,
    };
    // 금액이 0원이면 바로결제
    if (totalAmount === 0) {
      try {
        await backend.post('/orders', orderData);
        window.alert('이용권이 구매되었습니다');
        navigate('../myinfo/ting', { replace: true });
      } catch (e) {
        window.alert('오류가 발생하였습니다');
      }
      return;
    }

    // 결제할 금액이 있다면
    // 임시 주문정보 세션스토리지에 저장
    sessionStorage.setItem(STORAGE_KEY_ORDER_DATA, JSON.stringify(orderData));
    try {
      await tossPayments.requestPayment('카드', {
        amount: totalAmount,
        orderId,
        orderName: selectedProduct?.name,
        customerName: userData?.nickname,
        successUrl: `${CLIENT_URL}/myinfo/ting/buy/success`,
        failUrl: `${CLIENT_URL}/myinfo/ting/buy/fail`,
      });
    } catch (error) {
      // 결제 고객이 결제창을 닫았을 경우 OR 사용자에 의해 취소된 경우
      if (
        error.code === 'USER_CANCEL' ||
        error.code === 'PAY_PROCESS_CANCELED'
      ) {
        // pass
      } else {
        window.alert('결제중 오류가 발생하였습니다.');
      }
    }
  });

  return (
    <MyinfoLayout title="팅 충전하기">
      <Section my="10px" mx="30px">
        <Title>
          얼만큼 충전할까요?&nbsp;&nbsp;
          <TingImg />
        </Title>
      </Section>
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
                  <STingImg />
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

      <Section my="20px" center>
        <ChargeBtn onClick={makePayment}>충전하기</ChargeBtn>
      </Section>
      <Section my="50px" mx="30px">
        <WarningAccordion
          title={<AccordionTitle>유의사항</AccordionTitle>}
          content={
            <WarningDescription>
              <li>
                환불은 결제 후 7일 이내에 &lt;1:1 채팅 문의&gt;를 통해
                가능합니다.
              </li>
              <li>결제 후 사용하지 않은 팅만 환불이 가능합니다.</li>
              <li>미팅 신청, 수락을 위해 사용한 팅은 환불이 어렵습니다.</li>
            </WarningDescription>
          }
        />
      </Section>
    </MyinfoLayout>
  );
}

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`;

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
  font-size: 16px;
  margin: 0 10px 0 18px;
`;

const ProductPriceBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 45%;

  > span.discount {
    color: #eb8888;
    text-decoration-line: line-through;
    font-size: 13px;
    font-weight: 400;
  }
  > span.price {
    margin-left: auto;
    font-weight: 500;
    font-size: 16px;
    color: #777777;
  }
`;

const STingImg = styled(TingImg)`
  width: 16px;
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
  border: 0.5px solid #eb8888;
  border-radius: 10px;
  padding: 16px 42px;
  font-weight: 700;
  font-size: 18px;
  color: #eb8888;
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

const SFreindHalf = styled(FreindHalf)`
  position: absolute;
  top: -7%;
  right: 1%;
`;

const ChargeBtn = styled(Button)`
  background-color: #eb8888;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  /* padding: 10px; */
  width: 80%;
  height: 40px;
  font-size: 16px;
  font-weight: 300;
`;
