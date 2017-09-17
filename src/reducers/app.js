'use strict';

import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
};

const app = (state = initialState, action) => {
  let result = {}
  if (action && action.payload) {
    result = action.payload;
  }
  switch(action.type) {
    case ActionTypes.LOAD:
      return Object.assign({}, state, {});
    default:
    break;
  }
  return Object.assign({}, state);
}
export default app;