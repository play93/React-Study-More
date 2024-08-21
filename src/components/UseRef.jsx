import React, { useState, useEffect, useRef } from "react";

const UseRef = () => {
  const ref = useRef("초기값");
  console.log(ref);

  ref.current = "바꾼 값";
  console.log("current=>", ref);

  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const idRef = useRef("");

  const plusStateCountButtonHandler = () => {
    setCount(count + 1);
  };

  const plusRefCountButtonHandler = () => {
    countRef.current++;
  };

  //최초 렌더링 시에만 아이디부분이 포커싱되어야 함
  useEffect(() => {
    idRef.current.focus();
  });
  return (
    //===========useRef
    <div>
      <h1>useRef vs useState</h1>
      <div>
        state영역 입니다. {count}
        <br />
        <button onClick={plusStateCountButtonHandler}>state 증가</button>
      </div>
      <div>
        ref영역 입니다. {countRef.current}
        <br />
        <button onClick={plusRefCountButtonHandler}>ref 증가</button>
      </div>
      <br />
      <br />
      <div>
        아이디 : <input type="text " ref={idRef} />
      </div>
      <div>
        비밀번호 : <input type="password " />
      </div>
    </div>
  );
};

export default UseRef;
