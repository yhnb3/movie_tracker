import React from 'react';

import { ContentListContainer } from '../index';
import { categories } from './constanst';
import CategoryBtn from './categoryBtn';

export default function HomeTagsContainer() {
  const makeContentList = () =>
    categories.map((item) => (
      <ContentListContainer
        category={item.category}
        url={item.url}
        key={item.category}
      />
    ));

  return (
    <div>
      <CategoryBtn categories={categories} />
      {makeContentList()}
    </div>
  );
}
