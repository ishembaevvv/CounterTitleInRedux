import React, { useEffect } from "react";
import {
  decrease_count,
  increase_count,
  reset_count,
} from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const state = useSelector((state) => state.count);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = state;
  });

  return (
    <div>
      <button onClick={() => dispatch(increase_count())}>+</button>
      <button onClick={() => dispatch(decrease_count())}>-</button>
      <button onClick={() => dispatch(reset_count())}>RESET</button>
    </div>
  );
}
