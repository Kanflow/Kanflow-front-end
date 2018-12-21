// @flow
import { REORDER_TODO, CREATE_TODO, TRANSITION_TODO } from "./actionTypes";

export function createTodo(name: string) {
  return {
    type: CREATE_TODO,
    name: name
  };
}

export function reorderTodo(
  status_ID: number,
  sourceIndex: number,
  destinationIndex: number
) {
  return {
    type: REORDER_TODO,
    status_ID: status_ID,
    sourceIndex: sourceIndex,
    destinationIndex: destinationIndex
  };
}

export function transitionTodo(
  sourceStatus_ID: number,
  destinationStatus_ID: number,
  sourceIndex: number,
  destinationIndex: number
) {
  return {
    type: TRANSITION_TODO,
    sourceStatus_ID: sourceStatus_ID,
    destinationStatus_ID: destinationStatus_ID,
    sourceIndex: sourceIndex,
    destinationIndex: destinationIndex
  };
}
