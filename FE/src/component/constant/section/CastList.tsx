import * as React from 'react'

import { Link } from 'react-router-dom'

interface Props {
  cast: Array<any>
}

const CastList : React.FC<Props> = ({cast} : Props) => (
  <div className="my-5">
    <p className="font-bold text-xl m-2">주요 출연진</p>
    <div className="flex flex-row">
      {cast.map((element) => {
        if (element.order < 7) {
          return (
            <div
              className="relative border border-gray-200 rounded-lg w-36 mx-2 shadow-md"
              key={element.id}
            >
              <Link to={`/person/${element.id}`}>
                <img
                  className="h-42 w-full object-cover object-top rounded-lg"
                  src={`https://image.tmdb.org/t/p/original/${element.profile_path}`}
                  alt={element.name}
                />
              </Link>
              <div className="p-1">
                <p className="font-bold">{element.name}</p>
                <p className="text-sm text-gray-400 whitespace-normal">
                  {element.character}
                </p>
              </div>
            </div>
          );
        }
        return <></>;
      })}
    </div>
  </div>
)
export default CastList