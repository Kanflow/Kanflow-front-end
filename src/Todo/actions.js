// @flow
import { REORDER_TODO } from "./actionTypes";

export function reorderTodo(
  statusID: number,
  startIndex: number,
  endIndex: number
) {
  return {
    type: REORDER_TODO,
    statusID: statusID,
    startIndex: startIndex,
    endIndex: endIndex
  };
}
