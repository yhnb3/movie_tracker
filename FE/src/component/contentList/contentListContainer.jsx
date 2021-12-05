import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, changeCategory, contentList } from './contentListSlice';

import CategoryBtn from './categoryBtn';
import { Poster } from '../index';

export default function contentListContainer({
  urls,
  name,
  categories,
  title,
}) {
  const dispatch = useDispatch();
  const { items } = useSelector(contentList);

  const item = items[name];

  useEffect(() => {
    if (!items[name].section[items[name].currentCategory]) {
      dispatch(
        fetchMovies({
          name,
          url: urls[item.currentCategory],
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
    const contents =
      (item.section[category] && item.section[category].data) || [];

    if (!item.section[category]) return <p>Loading...</p>;
    if (item.section[category].hasErrors)
      return <p>api를 불러오지 못했습니다. 새로고침을 해주세요.</p>;

    return (
      <div>
        <div className="flex flex-row my-3 px-5">
          <div className="flex items-center">
            <p className="font-bold">{title}</p>
          </div>
          <CategoryBtn
            items={items}
            categories={categories}
            section={name}
            currentCategory={category}
            categoryChange={categoryChange}
          />
        </div>

        <div className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full overflow-y-hidden overflow-x-auto whitespace-nowrap h-list ">
          {contents.map((content) => (
            <div className="inline-flex px-5 ">
              <Poster content={content} key={content.id} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return renderContentsList();
}
