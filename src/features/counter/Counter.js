import React from "react";
import { useSelector } from "react-redux";
import { selectGrid, selectNonMinecount } from "./counterSlice";
import Cell from "./Cell";

export function Counter() {
  const grid = useSelector(selectGrid);
  const nonMinecount = useSelector(selectNonMinecount);
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
