import React from 'react';

export default function categoryLoading() {
  const items = Array(20)
    .fill(1)
    .map((element, idx) => idx + element);
  console.log(items);
  return <div>...로딩중</div>;
}
