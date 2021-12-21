import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTv, tvDetail } from './tvDetailSlice';
import { Detail, MobileDetail } from '../index';

export default function TVDetailContainer() {
  const dispatch = useDispatch();
  const { loading, hasErrors, tv } = useSelector(tvDetail);
  const tvId = useParams();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchTv(tvId));
  }, [location]);

  const renderTv = () => {
    if (loading) return <p>로딩중....</p>;
    if (hasErrors) return <p>데이터를 불러오는데 실패하였습니다.</p>;

    if (window.innerWidth <= 500) return <MobileDetail content={tv} />;
    return <Detail content={tv} />;
  };

  return <div className="pt-20 pb-28">{renderTv()}</div>;
}
