/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import DevelopersItem from 'containers/DevelopersItem';
import Header from '../../components/Header';
import CenteredSection from './CenteredSection';

export default function FeaturePage() {
  return (
    <article>
      <Helmet>
        <title>Feature Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <div>
        <CenteredSection>
          <Header />
          <DevelopersItem />
        </CenteredSection>
      </div>
    </article>
  );
}
