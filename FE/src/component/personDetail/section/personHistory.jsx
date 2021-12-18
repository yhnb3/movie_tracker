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
                    {window.innerWidth > 500 ? (
                      <div className="my-auto py-2 px-4">
                        <BsCircle className="w-3 h-3" />
                      </div>
                    ) : (
                      <></>
                    )}

                    <span className="my-2">
                      <strong className="text-center p-2 font-bold whitespace-nowrap">
                        <span>{content.title || content.name}</span>
                      </strong>
                      {content.character ? (
                        <span className="text-sm text-center">
                          {content.character}
                        </span>
                      ) : (
                        // <span className="text-gray-400 text-center pl-1 py-2">

                        // </span>
                        <></>
                      )}
                    </span>
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
