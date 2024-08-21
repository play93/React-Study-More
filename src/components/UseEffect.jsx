import React, { useState, useEffect, useRef } from "react";

const UseEffect = () => {
  //===========useEffect

  //의존성 배열
  //이 배열에 값을 넣으며 그 값이 바뀔 때만 useEffect를 실행
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);

  useEffect(
    () => {
      console.log("hello useEffect");
    },
    [count] /*<=의존성배열*/
  );

  return (
    //===========useEffect
    <div>
      <h1>useEffect</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        증가
      </button>
    </div>
  );
};

export default UseEffect;
