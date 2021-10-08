import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ContentListContainer } from '../index';
import { categories } from './constanst';
import CategoryBtn from './categoryBtn';

import { changeCategory, contentList } from '../contentList/contentListSlice';

export default function HomeTagsContainer() {
  const dispatch = useDispatch();
  const { loading, hasErrors, items } = useSelector(contentList);

  useEffect(() => {
    dispatch(changeCategory({ section, cateogry }));
  }, [dispatch]);

  const makeContentList = () =>
    categories.map((item) => (
      <ContentListContainer
        name={item.name}
        category={item.category}
        url={item.url}
        key={item.name}
      />
    ));

  return (
    <div>
      <CategoryBtn categories={categories} />
      {makeContentList()}
    </div>
  );
}
