// @flow
import { REORDER_TODO, CREATE_TODO } from "./actionTypes";

export function createTodo(name: string) {
  return {
    type: CREATE_TODO,
    name: name
  };
}

export function reorderTodo(
  status_ID: number,
  startIndex: number,
  endIndex: number
) {
  return {
    type: REORDER_TODO,
    status_ID: status_ID,
    startIndex: startIndex,
    endIndex: endIndex
  };
}
