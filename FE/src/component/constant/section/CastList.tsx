/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import * as React from 'react'

import { Link } from 'react-router-dom'
import useFetchData from '../../custom/useFetchData'

interface Props {
  id: string,
  section: string,
}

const CastList : React.FC<Props> = ({id, section} : Props) => {
  const endPoint = `https://api.themoviedb.org/3/${section}/${id}/credits?api_key=${process.env.REACT_APP_API_CODE}&language=ko`
  const { loading, error, data } = useFetchData({endPoint})
  
  if (loading) return <p>로딩중...</p>
  if (error) return <p>에러가 발생하였습니다.</p>

  return (
  <div className="my-5">
    <p className="font-bold text-xl m-2">주요 출연진</p>
    <div className="flex flex-row">
      {data.cast.map((element: { name: string, character: string, id: string, order: number, profile_path: string}) => {
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
)}
export default CastList