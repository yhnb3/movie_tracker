import React from 'react';
// import { Link } from 'react-router-dom';
import RecomendationPoster from './RecommendationPoster.tsx';
import Slide from '../slide.tsx';

export default function recomendationSection({ contents }) {
  return (
    <div>
      <p className="text-xl font-bold m-2">추천</p>
      <Slide Component={RecomendationPoster} contents={contents} />
    </div>
  );
}
