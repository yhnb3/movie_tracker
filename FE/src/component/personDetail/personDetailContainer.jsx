import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

import PersonDetail from './personDetail';
import { personDetail, fetchPerson } from './personDetailSlice';
import PersonMobileDetail from './personMobileDetail';
import useFetchData from '../custom/useFetchData.tsx';

export default function personDetailContainer() {
  const { id } = useParams();
  const location = useLocation();
  const { loading, hasErrors, data } = useFetchData({
    target: personDetail,
    id,
    location,
    patchData: fetchPerson,
  });

  const render = () => {
    if (loading) return <p>로딩 중....</p>;
    if (hasErrors) return <p>데이터를 불러오는 중에 오류가 발생하였습니다.</p>;

    if (window.innerWidth <= 500) {
      return <PersonMobileDetail person={data} />;
    }
    return <PersonDetail person={data} />;
  };

  return render();
}
