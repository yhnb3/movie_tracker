import React from 'react';
import { useParams } from 'react-router-dom';

import PersonDetail from './personDetail';
import PersonMobileDetail from './personMobileDetail';
import useFetchData from '../custom/useFetchData.tsx';

export default function personDetailContainer() {
  const { id } = useParams();

  const endPoint = `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_API_CODE}&language=ko`;

  const { loading, error, data } = useFetchData({
    endPoint,
  });

  const render = () => {
    if (loading) return <p>로딩 중....</p>;
    if (error) return <p>데이터를 불러오는 중에 오류가 발생하였습니다.</p>;

    if (window.innerWidth <= 500) {
      return <PersonMobileDetail person={data} />;
    }
    return <PersonDetail person={data} />;
  };

  return render();
}
