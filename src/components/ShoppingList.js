import React from "react";
import { plantList } from "../datas/plantList";

const ShoppingList = () => {
  return (
    <ul>
      {plantList.map((plant, index) => (
        <li key={`${plant}-${index}`}>{plant}</li>
      ))}
    </ul>
  );
};

export default ShoppingList;
