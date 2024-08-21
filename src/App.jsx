import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Child from "./components/Child";

function App() {
  //==========useState
  //const [count, setCount] = useState(0);
  // const handleCountPlus = () => {
  //   //setCount(count + 1 /*이 안에 함수를 넣어도 됨! () => {} 이렇게!*/);
  //   setCount((현재값) => {
  //     return 현재값 + 1;
  //   });
  // };

  //===========useEffect

  // //의존성 배열
  // //이 배열에 값을 넣으며 그 값이 바뀔 때만 useEffect를 실행
  // const [value, setValue] = useState("");
  // const [count, setCount] = useState(0);

  // useEffect(
  //   () => {
  //     console.log("hello useEffect");
  //   },
  //   [count] /*<=의존성배열*/
  // );

  //===========useRef
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
    //==========useState
    // <div>
    //   {count}
    //   <br />
    //   <button
    //     onClick={() => {
    //       // setCount(count + 1);
    //       // setCount(count + 1);
    //       // setCount(count + 1);
    //       //=> 각각 실행되는 것이 아니라 set을 해야 하는걸 모아서 한꺼번에 처리하기 때문에 (렌더링 최적화를 위해서) 위 세줄을 동일 요청으로 판단하고 한번만 업데이트를 해주기 때문에 1이 더해짐 =>배치업데이트
    //       setCount((prev) => prev + 1);
    //       setCount((prev) => prev + 1);
    //       setCount((prev) => prev + 1);
    //       //함수형 업데이트 방식은 명령을 모아서 순차적으로 실행시킴 (prev인자로 다음 setCount에 들어감) 그래서 이 코드는 3이 더해짐
    //     }}
    //   >
    //     증가
    //   </button>
    // </div>

    // <div>
    //   <h1>여기는 부모컴포넌트입니다</h1>
    //   <span>현재 카운트 : {count}</span>
    //   <Child setCount={setCount} />
    // </div>
    //===========useEffect
    // <div>
    //   <h1>useEffect</h1>
    //   <input
    //     type="text"
    //     value={value}
    //     onChange={(e) => {
    //       setValue(e.target.value);
    //     }}
    //   />
    //   {count}
    //   <button
    //     onClick={() => {
    //       setCount(count + 1);
    //     }}
    //   >
    //     증가
    //   </button>
    // </div>
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
}

export default App;
