import React, { useEffect, useRef, useState } from 'react';
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
  const scrollRef = useRef();
  const [isScrolling, setIsScrolling] = useState(false);
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

  const handleScroll = () => {
    if (scrollRef.current.scrollLeft === 0) {
      setIsScrolling(false);
    } else {
      setIsScrolling(true);
    }
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

        <div className="relative">
          <div
            className="relative scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full overflow-y-hidden overflow-x-auto whitespace-nowrap h-list"
            ref={scrollRef}
            onScroll={() => handleScroll()}
          >
            {contents.map((content) => (
              <div className="inline-flex px-5" key={content.id}>
                <Poster content={content} />
              </div>
            ))}
          </div>
          <div
            className={`z-20 h-list w-20 absolute bottom-0 right-0 ${
              isScrolling
                ? ''
                : 'bg-gradient-to-r from-whiteOp0 via-whiteOp50 to-whiteOp100'
            }`}
          />
        </div>
      </div>
    );
  };

  return renderContentsList();
}
