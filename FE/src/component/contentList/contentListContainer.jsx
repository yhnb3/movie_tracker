import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, contentList } from './contentListSlice';
import ContentList from './contentList';

export default function contentListContainer({ category, url }) {
  const dispatch = useDispatch();
  const { loading, hasErrors, items } = useSelector(contentList);

  useEffect(() => {
    dispatch(fetchMovies({ category, url }));
  }, [dispatch]);

  const renderContentsList = () => {
    const contents = items[category] || [];

    if (loading) return <p>Loading...</p>;
    if (hasErrors)
      return <p>api를 불러오지 못했습니다. 새로고침을 해주세요.</p>;

    return contents.map((content) => (
      <ContentList content={content} key={content.id} />
    ));
  };

  return (
    <div>
      <div className="flex overflow-y-hidden overflow-x-auto">
        <div className="flex flex-nowrap">{renderContentsList()}</div>
      </div>
    </div>
  );
}
