import React from 'react';
import { BsCircle } from 'react-icons/bs';

function sortArr(arr) {
  const newArr = arr
    .map((element) => element)
    .sort((a, b) => {
      const bDate = b.first_air_date || b.release_date;
      const aDate = a.first_air_date || a.release_date;
      if (!bDate) return 1;
      if (!aDate) return -1;
      return (
        parseInt(bDate.substring(0, 4), 10) -
        parseInt(aDate.substring(0, 4), 10)
      );
    });
  const result = [];
  newArr.forEach((element) => {
    let date = element.release_date || element.first_air_date;
    date = date ? date.slice(0, 4) : '-';
    if (result.length === 0 || result[result.length - 1].date !== date) {
      result.push({ date, data: [element] });
    } else {
      result[result.length - 1].data.push(element);
    }
  });
  return result;
}

export default function personHistory({ person }) {
  const acting = person.credit.cast ? sortArr(person.credit.cast) : [];
  const crew = person.credit.crew ? sortArr(person.credit.crew) : [];
  console.log(acting);
  console.log(crew);
  return (
    <div className="flex flex-col">
      {acting.length > 0 ? (
        <div className="mt-5">
          <p className="text-2xl font-bold">연기</p>
          <div className="border mt-5">
            {acting.map((contents) => (
              <div className="border-b">
                {contents.data.map((content) => (
                  <div className="flex flex-row">
                    <div className="w-10 text-center p-2 text-sm">
                      {contents.date}
                    </div>
                    <div className="my-auto py-2 px-4">
                      <BsCircle className="w-3 h-3" />
                    </div>
                    <div className="text-center p-2 font-bold">
                      {content.title || content.name}
                    </div>
                    {content.character ? (
                      <div className="flex flex-row">
                        <div className="text-sm text-center py-2">
                          {content.character}
                        </div>
                        <div className="text-gray-400 text-center pl-1 py-2">
                          역
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
      {crew.length > 0 ? (
        <div className="mt-5">
          <p className="text-2xl font-bold">제작</p>
          <div className="border mt-5">
            {crew.map((contents) => (
              <div className="border-b">
                {contents.data.map((content) => (
                  <div className="flex flex-row">
                    <div className="w-10 text-center p-2 text-sm">
                      {contents.date}
                    </div>
                    <div className="my-auto py-2 px-4">
                      <BsCircle className="w-3 h-3" />
                    </div>
                    <div className="text-center p-2 font-bold">
                      {content.title || content.name}
                    </div>
                    {content.character ? (
                      <div className="flex flex-row">
                        <div className="text-sm text-center py-2">
                          {content.job}
                        </div>
                        <div className="text-gray-400 text-center pl-1 py-2">
                          역
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
