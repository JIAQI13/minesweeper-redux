import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFlag, revealCell, selectGrid } from "./counterSlice";
import { mineColor } from "../../utils/mineColor";
import "../../App.css";
import Circle from "../../utils/Circle";

export default function Cell({ details }) {
  const dispatch = useDispatch();
  const style = {
    cellStyle: {
      width: 40,
      height: 40,
      backgroundColor: "grey",
      border: "1px solid white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "20px",
    },
  };

  const rightClickProvider = (e, details) => {
    e.preventDefault();
    dispatch(updateFlag([details.x, details.y]));
    console.log(details);
  };

  return (
    <div
      style={style.cellStyle}
      onClick={() => console.log(details)}
      onContextMenu={(e) => {
        rightClickProvider(e, details);
      }}
    >
      {details.value}
    </div>
  );
}
