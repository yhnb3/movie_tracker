import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTv, tvDetail } from './tvDetailSlice';
import { Detail } from '../index';

export default function TVDetailContainer() {
  const dispatch = useDispatch();
  const { loading, hasErrors, tv } = useSelector(tvDetail);
  const tvId = useParams();

  useEffect(() => {
    dispatch(fetchTv(tvId));
  }, [dispatch]);

  const renderTv = () => {
    if (loading) return <p>Loading recipes...</p>;
    if (hasErrors) return <p>Cannot display recipes...</p>;

    return <Detail content={tv} />;
  };

  return <div className="pb-28">{renderTv()}</div>;
}
