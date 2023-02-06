import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { setAccessToken } from '../../../../features/user';

export default function KakakoLoginSuccessPage() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const access = searchParams.get('access');
    if (access) {
      dispatch(setAccessToken(access));
      navigate('/');
    }
  }, [searchParams]);

  return null;
}
