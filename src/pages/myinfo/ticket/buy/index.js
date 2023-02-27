import { useEffect, useCallback, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'antd';
import dayjs from 'dayjs';
// import { loadTossPayments } from '@tosspayments/payment-sdk';
import { v4 as uuidv4 } from 'uuid';
import MenuBox, { MenuItem } from '../../../../components/MenuBox';
import Section from '../../../../components/Section';
import MyinfoLayout from '../../../../layout/MyinfoLayout';
import { ReactComponent as Checkbox } from '../../../../asset/svg/Checkbox.svg';
import { ReactComponent as CheckboxChecked } from '../../../../asset/svg/CheckboxChecked.svg';
import Accordion from '../../../../components/Accordion';
import PrimaryButton from '../../../../components/PrimaryButton';
import CouponItem from '../../../../components/CouponItem';
import {
  useGetUserCouponsQuery,
  useGetCouponsPageDataQuery,
  useGetOrdersPageDataQuery,
  useGetMyInfoQuery,
} from '../../../../features/backendApi';
import {
  // CLIENT_URL,
  STORAGE_KEY_ORDER_DATA,
  STORAGE_KEY_PAYPLE_ORDER_DATA,
} from '../../../../config/constants';
import backend from '../../../../util/backend';

export default function TicketBuyPage() {
  const navigate = useNavigate();
  const [selectedProductId, setSelectedProductId] = useState(1);
  const [selectedCouponId, setSelectedCouponId] = useState(null);
  const [selectedPayMethodId, setSelectedPayMethodId] = useState(1);
  const { data: pageData } = useGetOrdersPageDataQuery();
  const { data: couponPageData } = useGetCouponsPageDataQuery();
  const { data: couponData, refetch } = useGetUserCouponsQuery();
  const { data: userData } = useGetMyInfoQuery();
  const payMethods = [
    {
      id: 1,
      name: '신용/체크카드',
      payplePcdPayType: 'card',
      payplePcdCardVer: '02', // 앱카드 결제
    },
    {
      id: 2,
      name: '계좌이체',
      payplePcdPayType: 'transfer',
      payplePcdCardVer: '01', // 간편 결제
    },
  ];

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
        selectedCoupon.type.applicableProducts.includes(selectedProductId);

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

  // const makePayment = useCallback(async () => {
  //   const tossPayments = await loadTossPayments(
  //     process.env.REACT_APP_TOSS_PAYMENT_CLIENT_KEY,
  //   );
  //   const orderId = uuidv4();
  //   const orderData = {
  //     productId: selectedProductId,
  //     price,
  //     discountAmount,
  //     totalAmount,
  //     couponId: selectedCouponId,
  //   };
  //   // 금액이 0원이면 바로결제
  //   if (totalAmount === 0) {
  //     try {
  //       await backend.post('/orders', orderData);
  //       window.alert('이용권이 구매되었습니다');
  //     } catch (e) {
  //       window.alert('오류가 발생하였습니다');
  //       console.error(e);
  //     }
  //     return;
  //   }

  //   // 결제할 금액이 있다면
  //   // 임시 주문정보 세션스토리지에 저장
  //   sessionStorage.setItem(STORAGE_KEY_ORDER_DATA, JSON.stringify(orderData));
  //   try {
  //     await tossPayments.requestPayment('카드', {
  //       amount: totalAmount,
  //       orderId,
  //       orderName: selectedProduct?.name,
  //       customerName: userData?.nickname,
  //       successUrl: `${CLIENT_URL}/myinfo/ticket/buy/success`,
  //       failUrl: `${CLIENT_URL}/myinfo/ticket/buy/fail`,
  //     });
  //   } catch (error) {
  //     if (error.code === 'USER_CANCEL') {
  //       // 결제 고객이 결제창을 닫았을 때 에러 처리
  //     } else if (error.code === 'INVALID_CARD_COMPANY') {
  //       // 유효하지 않은 카드 코드에 대한 에러 처리
  //       window.alert('유효하지 않은 카드 코드입니다');
  //     }
  //   }
  // });

  // 페이플 결제 요청 결과 콜백 함수
  const getPaypleResult = (res) => {
    const {
      PCD_PAY_RST,
      PCD_PAY_CODE,
      PCD_PAY_MSG,
      PCD_AUTH_KEY,
      PCD_PAY_REQKEY,
      PCD_PAYER_ID,
      PCD_PAY_TOTAL,
    } = res;

    // 결제 요청 성공 로직
    if (PCD_PAY_RST === 'success' && PCD_PAY_CODE.includes('0000')) {
      const paypleOrderData = {
        authKey: PCD_AUTH_KEY,
        payReqKey: PCD_PAY_REQKEY,
        payerId: PCD_PAYER_ID,
        amount: PCD_PAY_TOTAL,
      };

      sessionStorage.setItem(
        STORAGE_KEY_PAYPLE_ORDER_DATA,
        JSON.stringify(paypleOrderData),
      );

      // 서버에서 결제요청 재컨펌
      navigate('/myinfo/ticket/buy/success');
    }
    // 결제 실패 로직
    else {
      window.alert(PCD_PAY_MSG);
    }
  };

  const makePayment = useCallback(async () => {
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
        navigate('../myinfo/ticket', { replace: true });
      } catch (e) {
        window.alert('오류가 발생하였습니다');
        navigate('../myinfo/ticket', { replace: true });
      }
      return;
    }

    // 결제할 금액이 있다면
    // 임시 주문정보 세션스토리지에 저장
    sessionStorage.setItem(STORAGE_KEY_ORDER_DATA, JSON.stringify(orderData));

    // 페이플 파트너 인증 요청
    const { data } = await backend.get('/orders/payple/auth');

    // 페이플 결제 요청
    const paypleOrderData = {
      PCD_PAY_TYPE: payMethods?.find(
        (payMethod) => payMethod.id === selectedPayMethodId,
      ).payplePcdPayType,
      PCD_PAY_WORK: 'CERT',
      PCD_CARD_VER: payMethods?.find(
        (payMethod) => payMethod.id === selectedPayMethodId,
      ).payplePcdCardVer,
      PCD_PAYER_NAME: userData?.nickname,
      PCD_PAY_GOODS: selectedProduct?.name, // 필수
      PCD_PAY_TOTAL: totalAmount, // 필수
      PCD_AUTH_KEY: data.AuthKey, // 파트너 인증시 받은 AuthKey 값
      PCD_PAY_OID: orderId,
      PCD_PAY_URL: data.return_url, // 파트너 인증시 받은 return_url 값
      callbackFunction: getPaypleResult, // 결제요청 결과 수신 callback 함수
    };

    // 페이플 결제 요청
    window.PaypleCpayAuthCheck(paypleOrderData);
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
              {coupons.length === 0 && (
                <NoCouponText>사용 가능한 쿠폰이 없어요</NoCouponText>
              )}
              {coupons.map((coupon) => (
                <CouponItem
                  onClick={() => toggleCoupon(coupon)}
                  checked={selectedCouponId === coupon.id}
                  disabled={
                    !coupon.type.applicableProducts.includes(selectedProductId)
                  }
                  title={coupon.type.name}
                  expireText={
                    coupon.expiresAt
                      ? `${dayjs(coupon.expiresAt).format('YYYY. MM. DD')} 까지`
                      : ' '
                  }
                  tipText={`*${coupon.type.condition}`}
                />
              ))}
            </CouponList>
          }
        />
      </Section>
      <Section my="20px">
        <PayMethodContainer>
          <PayMethodTitleBox>
            <PayMethodTitle>결제 방법</PayMethodTitle>
          </PayMethodTitleBox>
          <PayMethodContentBox>
            {payMethods?.map((payMethod) => (
              <MenuItem key={payMethod.id}>
                <CheckboxButton
                  onClick={() => setSelectedPayMethodId(payMethod.id)}
                >
                  <PayMethodTitleBox>
                    {selectedPayMethodId === payMethod.id ? (
                      <CheckboxChecked />
                    ) : (
                      <Checkbox />
                    )}
                    <ProductTitleText>{payMethod.name}</ProductTitleText>
                  </PayMethodTitleBox>
                </CheckboxButton>
              </MenuItem>
            ))}
          </PayMethodContentBox>
        </PayMethodContainer>
      </Section>
      <Section my="20px" center>
        <TotalPriceBox>
          <span>최종 결제 금액</span>
          <span>{totalAmount.toLocaleString()}원</span>
        </TotalPriceBox>
      </Section>
      <Section my="20px" center>
        <PrimaryButton onClick={makePayment}>구매하기</PrimaryButton>
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

const PayMethodContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #f1ecec;
  border-radius: 10px;
  padding: 0 22px;
`;

const PayMethodTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;

const PayMethodTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #777777;
`;

const PayMethodContentBox = styled.div`
  border-top: 1px solid #f1ecec;
  font-size: 11px;
  line-height: 13px;
  padding: 15px 0;

  > p {
    margin: 8px 0;
  }
`;
