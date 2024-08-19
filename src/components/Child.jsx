import React from "react";

export const Child = ({ count, setCount }) => {
  return (
    <div>
      <h3>여기는 자식 컴포넌트입니다.</h3>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          //함수형 업데이트 => 굳이 count까지 가져오지 않아도 됨
          //count값을 가져와 (count + 1)을 해줄 수 있지만 이전값을 참조해서 이전값에 +1하는 방식으로
        }}
      >
        증가
      </button>
    </div>
  );
};
export default Child;
