import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFlag, revealCell, selectGrid } from "./counterSlice";
import { mineColor } from "../../utils/mineColor";
import "../../App.css";
import Circle from "../../utils/Circle";

export default function Cell({ details }) {
  const dispatch = useDispatch();
  const cellstyle = {
    background: details.revealed
      ? details.value === "X"
        ? mineColor()
        : bombChexPattern(details.x, details.y)
      : chexPattern(details.x, details.y),
    color: numColorCode(details.value),
  };

  const rightClickProvider = (e, details) => {
    e.preventDefault();
    dispatch(updateFlag([details.x, details.y]));
    console.log(details);
  };

  return (
    <div
      className="cellStyle"
      style={cellstyle}
      onClick={() => {
        dispatch(revealCell([details.x, details.y]));
      }}
      onContextMenu={(e) => {
        rightClickProvider(e, details);
      }}
    >
      {!details.revealed && details.flagged ? (
        "🚩"
      ) : details.revealed && details.value !== 0 ? (
        details.value === "X" ? (
          <Circle />
        ) : (
          details.value
        )
      ) : (
        ""
      )}
    </div>
  );
}

const bombChexPattern = (x, y) => {
  if (x % 2 === 0 && y % 2 === 0) {
    return "#e5c29f";
  } else if (x % 2 === 0 && y % 2 !== 0) {
    return "#d7b899";
  } else if (x % 2 !== 0 && y % 2 === 0) {
    return "#d7b899";
  } else {
    return "#e5c29f";
  }
};

const chexPattern = (x, y) => {
  if (x % 2 === 0 && y % 2 === 0) {
    return "#aad751";
  } else if (x % 2 === 0 && y % 2 !== 0) {
    return "#a2d249";
  } else if (x % 2 !== 0 && y % 2 === 0) {
    return "#a2d249";
  } else {
    return "#aad751";
  }
};

const numColorCode = (num) => {
  if (num === 1) {
    return "#1976d2";
  } else if (num === 2) {
    return "#388d3c";
  } else if (num === 3) {
    return "#d33030";
  } else if (num === 4) {
    return "#7c21a2";
  } else if (num === 5) {
    return "#1976d2";
  } else if (num === 6) {
    return "#1976d2";
  } else {
    return "white";
  }
};
