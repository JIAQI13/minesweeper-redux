import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateFlag,
  revealCell,
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  selectGrid,
  selectNonMinecount,
} from "./counterSlice";
import styles from "./Counter.module.css";
import Cell from "./Cell";

export function Counter() {
  const count = useSelector(selectCount);
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
    <div>
      <>
        <p>{nonMinecount}</p>
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

      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
