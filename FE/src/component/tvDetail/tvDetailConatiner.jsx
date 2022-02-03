import React from 'react';
import { useParams } from 'react-router-dom';
import { Detail, MobileDetail } from '../index';
import useFetchData from '../custom/useFetchData.tsx';

export default function TVDetailContainer() {
  const tvId = useParams();
  const urls = [
    `https://api.themoviedb.org/3/tv/${tvId.id}?api_key=${process.env.REACT_APP_API_CODE}&language=ko`,
    `https://api.themoviedb.org/3/tv/${tvId.id}/watch/providers?api_key=${process.env.REACT_APP_API_CODE}`,

    `https://api.themoviedb.org/3/tv/${tvId.id}/credits?api_key=${process.env.REACT_APP_API_CODE}&language=ko`,

    `https://api.themoviedb.org/3/tv/${tvId.id}/recommendations?api_key=${process.env.REACT_APP_API_CODE}&language=ko&page=1`,
  ];
  const { loading, hasErrors, data } = useFetchData({
    urls,
  });

  const renderTv = () => {
    if (loading) return <p>로딩중....</p>;
    if (hasErrors) return <p>데이터를 불러오는데 실패하였습니다.</p>;

    const [handlingData, provider, crew, recommend] = data;
    handlingData.provier = provider.results.KR;
    handlingData.cast = crew.cast;
    handlingData.crew = crew.crew;
    handlingData.recommend = recommend.results;

    if (window.innerWidth <= 500)
      return <MobileDetail content={handlingData} />;
    return <Detail content={handlingData} />;
  };

  return <div className="pt-20 pb-28">{renderTv()}</div>;
}
