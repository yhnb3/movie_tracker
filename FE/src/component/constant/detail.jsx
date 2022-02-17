/* eslint-disable camelcase */
import React from 'react';

import { Helmet } from 'react-helmet';

import SeasonsContainer from './SeasonsContainer.tsx';
import MediaSection from './MediaSection.tsx';

import { RecommendationSection, SummarySection, CastList } from './section';

export default function detail({ content }) {
  const section = content.title ? 'movie' : 'tv';
  return (
    <div>
      <Helmet>
        <title>{content.title ? content.title : content.name}</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <SummarySection content={content} />
      <div className="w-screen mx-auto">
        <CastList id={content.id} section={section} />
        {content.title ? (
          <MediaSection id={content.id} />
        ) : (
          <SeasonsContainer seasons={content.seasons} />
        )}
        <RecommendationSection id={content.id} section={section} />
      </div>
    </div>
  );
}
