import React, { useContext } from "react";
import { FamilyContext } from "../context/FamilyContext";

const Child = () => {
  const stressesWord = {
    color: "red",
    fontWeigth: "900",
  };

  const { houseName, poketMoney } = useContext(FamilyContext);

  return (
    <div>
      나는 이 집안의 막내에요.
      <br />
      할아버지가 우리 집 이름은 <span style={stressesWord}>{houseName}</span>
      라고 하셨어요.
      <br />
      게다가 용돈도 <span style={stressesWord}>{poketMoney}</span>원 만큼이나
      주셨답니다.
    </div>
  );
};

export default Child;
