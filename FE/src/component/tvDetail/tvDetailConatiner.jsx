import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchTv, tvDetail } from './tvDetailSlice';
import { Detail, MobileDetail } from '../index';
import useFetchData from '../custom/useFetchData.tsx';

export default function TVDetailContainer() {
  const tvId = useParams();
  const location = useLocation();
  const { loading, hasErrors, data } = useFetchData({
    target: tvDetail,
    patchData: fetchTv,
    location,
    id: tvId,
  });

  const renderTv = () => {
    if (loading) return <p>로딩중....</p>;
    if (hasErrors) return <p>데이터를 불러오는데 실패하였습니다.</p>;

    if (window.innerWidth <= 500) return <MobileDetail content={data} />;
    return <Detail content={data} />;
  };

  return <div className="pt-20 pb-28">{renderTv()}</div>;
}
