/* eslint-disable camelcase */
import React from 'react';

import Youtube from './youtube';

import SeasonSection from './seasonSection';
import { RecomendationSection, SummarySection, CastList } from './section';

export default function detail({ content }) {
  console.log(content);

  const seasonsSection = () => (
    <div className="mx-2">
      <p className="text-xl font-bold">지난 시즌</p>
      <div>
        {content.seasons.map((element) => (
          <SeasonSection content={element} key={element.id} />
        ))}
      </div>
    </div>
  );

  const mediaSection = () => (
    <div>
      <p className="font-bold text-xl m-2">미디어</p>
      {content.video.results.length > 0 ? (
        <div className="flex flex-row m-2">
          {content.video.results[0] ? (
            <Youtube video={content.video.results[0]} key={0} />
          ) : (
            <></>
          )}
          {content.video.results[1] ? (
            <Youtube video={content.video.results[1]} kye={1} />
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div>
          <p>관련 동영상이 존재하지 않습니다.</p>
        </div>
      )}
    </div>
  );

  return (
    <div>
      <SummarySection content={content} />
      <div className="w-screen mx-auto">
        <CastList cast={content.cast} />
        {content.title ? mediaSection() : seasonsSection()}
        <RecomendationSection contents={content.recommend} />
      </div>
    </div>
  );
}
