import React, { useState, useRef, useEffect } from 'react';
const TestPage = () => {
  const [inputs, setInputs] = useState('');
  const [second, setSecond] = useState('');
  const firstInput = useRef();
  const lastInput = useRef();

  const onChange = (e) => {
    setInputs(e.target.value);
  };

  const onChange2 = (e) => {
    setSecond(e.target.value);
  };
  useEffect(() => {
    console.log(inputs);
    if (inputs.length >= 3) {
      lastInput.current.focus();
    }
  }, [inputs]);
  return (
    <div>
      <input maxLength={3} placeholder="이름" onChange={onChange} ref={firstInput} />
      <input maxLength={4} placeholder="닉네임" onChange={onChange2} ref={lastInput} />

      <div>
        <b>값: </b>
      </div>
    </div>
  );
};
export default TestPage;
