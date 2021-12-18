import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import PersonDetail from './personDetail';
import { personDetail, fetchPerson } from './personDetailSlice';
import PersonMobileDetail from './personMobileDetail';

export default function personDetailContainer() {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const { loading, isError, data } = useSelector(personDetail);

  useEffect(() => {
    dispatch(fetchPerson(id));
  }, [location]);

  const render = () => {
    if (loading) return <p>로딩 중....</p>;
    if (isError) return <p>데이터를 불러오는 중에 오류가 발생하였습니다.</p>;

    if (window.innerWidth <= 500) {
      return <PersonMobileDetail person={data} />;
    }
    return <PersonDetail person={data} />;
  };

  return render();
}
