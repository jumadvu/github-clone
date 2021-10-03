/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */
import produce from 'immer';

import { GET_REPOSITORIES, REPOSITORIES_RECEIVED } from './constants';

// The initial state of the App
export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_REPOSITORIES:
        draft.loading = true;
        draft.repositories = [];
        break;

      case REPOSITORIES_RECEIVED:
        draft.repositories = action.list;
        draft.loading = false;
        break;
    }
  });

export default homeReducer;
