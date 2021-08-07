import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectGrid, selectNonMinecount } from "./Minesweeper";
import Cell from "./Cell";

export function Board() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://192.168.1.65:5000/score")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  }, []);
  const grid = useSelector(selectGrid);
  const nonMinecount = useSelector(selectNonMinecount);
  const style = {
    display: "flex",
    flexDirection: "row",
  };

  return (
    <>
      <h1>scoreboard</h1>
      <h1>{JSON.stringify(items)}</h1>
      <p>{Math.floor(((216 - nonMinecount) / 216) * 100)}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        {grid.map((singleRow, i) => {
          return (
            <div key={i} style={style}>
              {singleRow.map((singleBlock, i) => {
                return <Cell key={i} details={singleBlock}></Cell>;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
