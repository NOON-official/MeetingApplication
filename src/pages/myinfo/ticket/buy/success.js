import { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  STORAGE_KEY_ORDER_DATA,
  STORAGE_KEY_PAYPLE_ORDER_DATA,
} from '../../../../config/constants';
import MyinfoLayout from '../../../../layout/MyinfoLayout';
import backend from '../../../../util/backend';

export default function TicketBuySuccessPage() {
  const [searchParams] = useSearchParams();

  const finishOrder = useCallback(async () => {
    const orderData = JSON.parse(
      sessionStorage.getItem(STORAGE_KEY_ORDER_DATA),
    );

    const paypleOrderData = JSON.parse(
      sessionStorage.getItem(STORAGE_KEY_PAYPLE_ORDER_DATA),
    );

    try {
      await backend.post('/orders', {
        ...orderData,
        payple: paypleOrderData,
      });

      window.alert('이용권이 구매되었습니다');
    } catch (e) {
      window.alert('오류가 발생하였습니다');
      console.error(e);
    }
  }, [searchParams]);

  useEffect(() => {
    finishOrder();
  }, [finishOrder]);

  return (
    <MyinfoLayout title="이용권 구매 성공페이지">
      {searchParams.get('paymentKey')} <br />
      {searchParams.get('orderId')} <br />
      {searchParams.get('amount')}
    </MyinfoLayout>
  );
}
