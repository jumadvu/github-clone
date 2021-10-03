/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  );

const getLatestRepos = () =>
  createSelector(
    selectHome,
    homeState => homeState.repositories,
  );

export { selectHome, makeSelectUsername, getLatestRepos };
