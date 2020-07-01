import { CREATE_COURSE } from "../actions/actionTypes";
const INITIAL_STATE = [];

const courseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_COURSE:
      return [...state, { ...action.course }];
    default:
      return state;
  }
};
export default courseReducer;
