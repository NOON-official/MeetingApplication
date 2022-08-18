import { useSelector } from 'react-redux';

const IsMatching = () => {
  const isMatching = useSelector((state) => state.isMatching);
  if (!isMatching) return false;
  else return true;
};

export default IsMatching;
