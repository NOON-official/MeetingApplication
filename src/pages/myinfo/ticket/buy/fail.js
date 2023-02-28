import { useSearchParams, useNavigate } from 'react-router-dom';
import MyinfoLayout from '../../../../layout/MyinfoLayout';

export default function TicketBuyFailPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  navigate('../myinfo/ticket/buy', { replace: true });

  return (
    <MyinfoLayout title="이용권 구매 실패페이지">
      {searchParams.get('code')} <br />
      {searchParams.get('message')} <br />
      {searchParams.get('orderId')}
    </MyinfoLayout>
  );
}
