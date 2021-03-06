/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import * as React from 'react';

import RecomendationPoster from './RecommendationPoster';
import Slide from '../slide';
import useFetchData from '../../custom/useFetchData';

interface Props {
  id: string,
  section: string
}
const RecommendationSection: React.FC<Props> = ({ id, section } : Props) => {
  const endPoint = `https://api.themoviedb.org/3/${section}/${id}/recommendations?api_key=${process.env.REACT_APP_API_CODE}&language=ko&page=1`
  const { loading, error, data } = useFetchData({endPoint})
  
  if(loading) return <p>로딩중...</p>
  if(error) return <p>에러가 발생하였습니다.</p>

  return (
    <div>
      <p className="text-xl font-bold m-2">추천</p>
      <Slide Component={RecomendationPoster} contents={data.results} />
    </div>
  );
}

export default RecommendationSection