import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectGrid, selectNonMinecount } from "./counterSlice";
import styles from "./Counter.module.css";
import Cell from "./Cell";

export function Counter() {
  const grid = useSelector(selectGrid);
  const nonMinecount = useSelector(selectNonMinecount);
  const dispatch = useDispatch();
  // dispatch(create());
  // console.log(grid);
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = 5 || 0;

  const style = {
    display: "flex",
    flexDirection: "row",
  };

  return (
    <>
      <p>{(nonMinecount * 100) / (16 * 16 - 40)}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        {grid.map((singleRow) => {
          return (
            <div style={style}>
              {singleRow.map((singleBlock) => {
                return <Cell details={singleBlock}></Cell>;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
