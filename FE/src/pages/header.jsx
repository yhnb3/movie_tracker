import React from 'react';

export default function header() {
  return (
    <div className="h-20 w-full bg-blue-300">
      <div className="flex h-full px-48 items-center">
        <button className="mr-12 font-bold text-gray-600 text-xl" type="button">
          HOME
        </button>
        <button className="mr-12 font-bold text-gray-600 text-xl" type="button">
          영화
        </button>
        <button className="font-bold text-gray-600 text-xl" type="button">
          스트리밍 드라마
        </button>
      </div>
    </div>
  );
}
