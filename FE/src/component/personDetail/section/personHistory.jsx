import React from 'react';
import { BsCircle } from 'react-icons/bs';

import handlingHistory from './handlingHistory';

export default function personHistory({ person }) {
  const newArr = handlingHistory({ credit: person.credit });
  return (
    <div className="flex flex-col">
      {newArr.map((job) => (
        <div className="mt-5" key={job.job}>
          <p className="text-2xl font-bold">{job.job}</p>
          <div className="border mt-5">
            {job.history.map((contents) => (
              <div className="border-b" key={contents.date}>
                {contents.data.map((content) => (
                  <div
                    className="flex flex-row"
                    key={`${job.job}-${content.id}`}
                  >
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
      ))}
    </div>
  );
}
