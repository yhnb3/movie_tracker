import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, contentList } from './contentListSlice';
import ContentList from './contentList';

export default function contentListContainer({ urls, name }) {
  const dispatch = useDispatch();
  const { items } = useSelector(contentList);

  const item = items[name];

  useEffect(() => {
    dispatch(
      fetchMovies({
        name,
        url: urls[name][item.currentSection],
        category: items[name].currentSection,
      }),
    );
  }, [dispatch]);

  const renderContentsList = () => {
    const section = item.currentSection;
    const contents = item.section[section].data;

    if (item.section[section].loading) return <p>Loading...</p>;
    if (item.section[section].hasErrors)
      return <p>api를 불러오지 못했습니다. 새로고침을 해주세요.</p>;

    return contents.map((content) => (
      <ContentList content={content} key={content.id} />
    ));
  };

  return (
    <div>
      <p>{name}</p>
      <div className="flex overflow-y-hidden overflow-x-auto">
        <div className="flex flex-nowrap">{renderContentsList()}</div>
      </div>
    </div>
  );
}
