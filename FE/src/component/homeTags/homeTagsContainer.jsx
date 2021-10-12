import React from 'react';
import { useSelector } from 'react-redux';

import { ContentListContainer } from '../index';
import CategoryBtn from './categoryBtn';

import { changeCategory, contentList } from '../contentList/contentListSlice';

export default function HomeTagsContainer() {
  const { items } = useSelector(contentList);

  const makeContentList = () =>
    items.map((item) => (
      <div>
        <CategoryBtn item={item} />
        <ContentListContainer key={item.name} item={item} />
      </div>
    ));

  return <div>{makeContentList()}</div>;
}
