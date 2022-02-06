import React, { useState } from 'react';

import CategoryBtn from './categoryBtn';
import { Poster, Slide } from '../index';
import useFetchData from '../custom/useFetchData.tsx';
import Loading from './Loading';

export default function contentListContainer({
  urls,
  target,
  name,
  categories,
  title,
}) {
  const [currentCategory, setCurrentCategory] = useState(target);

  const { loading, error, data } = useFetchData({
    endPoint: urls[currentCategory],
  });

  const categoryChange = (section) => {
    setCurrentCategory(section);
  };

  const renderContentsList = () => {
    if (error) return <p>에러가 발생하였습니다. </p>;
    if (loading)
      return (
        <div>
          <div className="flex flex-row my-3 px-5">
            <div className="flex items-center">
              <p className="font-bold">{title}</p>
            </div>
            <CategoryBtn
              categories={categories}
              section={name}
              currentCategory={currentCategory}
              categoryChange={categoryChange}
            />
          </div>

          <Loading />
        </div>
      );
    return (
      <div>
        <div className="flex flex-row my-3 px-5">
          <div className="flex items-center">
            <p className="font-bold">{title}</p>
          </div>
          <CategoryBtn
            categories={categories}
            section={name}
            currentCategory={currentCategory}
            categoryChange={categoryChange}
          />
        </div>

        <Slide Component={Poster} contents={data.results} />
      </div>
    );
  };

  return renderContentsList();
}
