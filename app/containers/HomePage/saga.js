/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest, all } from 'redux-saga/effects';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';
import { list } from './list';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

function* fetchRepositories() {
  yield console.log('1234');
  // const json = yield fetch(
  //   'https://gh-trending-api.herokuapp.com/repositories',
  // );
  // json.json().then(body => console.log(body));
  yield put({ type: 'REPOSITORIES_RECEIVED', list });
}

function* actionWatcher() {
  yield takeLatest('GET_REPOSITORIES', fetchRepositories);
  yield put({ type: 'REPOSITORIES_RECEIVED', list });
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSaga() {
  yield all([call(actionWatcher)]);
}
