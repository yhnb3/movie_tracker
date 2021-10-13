import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, changeCategory, contentList } from './contentListSlice';

import CategoryBtn from './categoryBtn';
import ContentList from './contentList';

export default function contentListContainer({ urls, name, categories }) {
  const dispatch = useDispatch();
  const { items } = useSelector(contentList);

  const item = items[name];

  useEffect(() => {
    if (!items[name].section[items[name].currentCategory].data.length) {
      dispatch(
        fetchMovies({
          name,
          url: urls[name][item.currentCategory],
          category: items[name].currentCategory,
        }),
      );
    }
  }, [dispatch, items[name].currentCategory]);

  const categoryChange = ({ category, section }) => {
    dispatch(changeCategory({ category, name: section }));
  };
  const renderContentsList = () => {
    const category = item.currentCategory;
    const contents = item.section[category].data;

    if (item.section[category].loading) return <p>Loading...</p>;
    if (item.section[category].hasErrors)
      return <p>api를 불러오지 못했습니다. 새로고침을 해주세요.</p>;

    return (
      <div>
        <p>{name}</p>
        <CategoryBtn
          items={items}
          categories={categories}
          section={name}
          currentCategory={category}
          categoryChange={categoryChange}
        />
        <div className="flex overflow-y-hidden overflow-x-auto">
          <div className="flex flex-nowrap">
            {contents.map((content) => (
              <ContentList content={content} key={content.id} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return renderContentsList();
}
