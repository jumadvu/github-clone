/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import RepositoriesItem from 'containers/RepositoriesItem';
import CenteredSection from './CenteredSection';
import { getRepositories } from './actions';
import { makeSelectUsername, getLatestRepos } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Header from '../../components/Header';

const key = 'home';

export function HomePage({ loading, error, repos, repositories }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  // useEffect(() => {
  //   getRepositories();
  // }, []);

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <CenteredSection>
          <Header />
          <RepositoriesItem items={repositories} />
        </CenteredSection>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  repositories: getLatestRepos(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getRepositories: dispatch(getRepositories()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
