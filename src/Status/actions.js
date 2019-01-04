// @flow
import { CREATE_STATUS } from "./actionTypes";

export function createStatus(name: string) {
  return {
    type: CREATE_STATUS,
    name: name
  };
}
