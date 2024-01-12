import { useEffect, useRef, useState } from "react";

const Calculator = () => {
  const [num, setNum] = useState(0);
  const num1 = useRef();
  const num2 = useRef();

  const addNumbers = () => {
    let sum = +num1.current.value + +num2.current.value;
    setNum(sum);
    num2.current.value = num1.current.value = "";
  };

  useEffect(() => num1.current.focus(), []);

  return (
    <>
      <input type="number" ref={num1} />
      <input type="number" ref={num2} />
      <input type="button" onClick={addNumbers} value="Add+" />
      <p>{num}</p>
    </>
  );
};

export default Calculator;
