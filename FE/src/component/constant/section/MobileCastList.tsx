/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import * as React from 'react'

import {Link} from 'react-router-dom'

import useFetchData from '../../custom/useFetchData'

interface Props {
  id: string,
  section: string,
}


const MobileCastList : React.FC<Props> = ({id, section}: Props) => {
  const endPoint = `https://api.themoviedb.org/3/${section}/${id}/credits?api_key=${process.env.REACT_APP_API_CODE}&language=ko`
  const { loading, error, data } = useFetchData({endPoint})
  if (loading) return <p>로딩중...</p>
  if (error) return <p>에러가 발생하였습니다.</p>

  return (
    <div className="my-5">
      <p className="font-bold text-xl m-2">주요 출연진</p>
      <div className=" scrollbar-thumb-rounded scrollbar-thin scrollbar-thumb-gray-300 whitespace-nowrap overflow-x-auto">
        {data.cast.map((element: {order: number, id: string, profile_path: string, name: string, character: string}) => {
          if (element.order < 7) {
            return (
              <div
                className="inline-flex flex-col w-32 border border-gray-200 rounded-lg m-4 shadow-md h-56"
                key={element.id}
              >
                <Link to={`/person/${element.id}`}>
                  <img
                    className="w-32 h-36 object-cover object-top rounded-lg"
                    src={`https://image.tmdb.org/t/p/original/${element.profile_path}`}
                    alt={element.name}
                  />
                </Link>
                <div className="p-1">
                  <p className="text-sm font-bold whitespace-normal">
                    {element.name}
                  </p>
                  <p className="text-xs text-gray-400 whitespace-normal">
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
}

export default MobileCastList