import React, { useState, useEffect, useRef } from "react";
import Father from "./Father";
import { FamilyContext } from "../context/FamilyContext";

const GrandFather = () => {
  const houseName = "스파르타";
  const poketMoney = 10000;
  return (
    <FamilyContext.Provider value={{ houseName, poketMoney }}>
      <Father />
    </FamilyContext.Provider>
  );
};

export default GrandFather;
