/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import * as React from 'react'
import useFetchData from '../../custom/useFetchData';

import RateCircle from '../rateCircle';

import  handlingProvider  from './handlingProvider';

interface Props {
  content: {
    id: string,
    title? : string,
    name? : string,
    release_date?: string,
    first_air_date? : string,
    provider: any,
    genres: Array<{name: string}> | [],
    backdrop_path: string,
    poster_path: string,
    production_countries: Array<any>,
    vote_average: number,
    tagline: string,
    overview: string,
  } 
}
const SummarySection: React.FC<Props> = ({content} : Props) => {
  console.log(content.production_countries)
  const section = content.title ? 'movie' : 'tv'
  const date = content.title ? content.release_date : content.first_air_date;
  const backdropUrl = `https://image.tmdb.org/t/p/original/${content.backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w300/${content.poster_path}`;
  const title = content.title || content.name;

  const endPoint = `https://api.themoviedb.org/3/${section}/${content.id}/watch/providers?api_key=${process.env.REACT_APP_API_CODE}`
  const { loading, data, error } = useFetchData({endPoint})

  const Providers = () => {
    if (loading) return <></>
    if (error) return <></>

    const providers = handlingProvider({provider: data.results.KR})
    return <div className="flex flex-row my-2">
    {providers.map((element: { id: string; logo_path: string; }) => (
      <img
        className="h-14 rounded-md mx-2"
        key={element.id}
        src={`https://www.themoviedb.org/t/p/original/${element.logo_path}`}
        alt=""
      />
    ))}
  </div>
  }
  const renderGenre = () => {
    const { genres  } = content;
    const genreString = genres.map((genre: { name: string; }) => genre.name).join(', ');
    return <span className="mx-1">{genreString}</span>;
  };

  const renderDate = () => (
    <span>
      {date.substring(0, 4)}/{date.substring(5, 7)}/{date.substring(8, 10)}
    </span>
  );

  const rate = (score: number) => {
    let color = 'green';

    if (score < 7) {
      color = 'yellow';
    }

    if (score < 4) {
      color = 'red';
    }

    return (
      <div className="h-10">
        <RateCircle rate={score} color={color} times={1.5} />
      </div>
    );
  };

  return (
  <div className="relative h-poster">
  {content.backdrop_path ? (
    <img
      className="h-poster w-full object-cover object-top z-20 opacity-50"
      src={backdropUrl}
      alt=""
    />
  ) : (
    <></>
  )}
  <div className="absolute w-full h-full bg-black bg-opacity-70 top-0 z-10" />
  <div className="absolute h-3/4 bottom-1/8 w-full z-20">
    <div className="flex flex-row w-screen mx-auto">
      <div className="h-full">
        {content.poster_path ? (
          <img className="h-full rounded-lg" src={posterUrl} alt="" />
        ) : (
          <></>
        )}
      </div>
      <div className="flex flex-col w-2/3 px-5 text-white">
        <div className="my-2">
          <div>
            <span className="text-3xl font-bold">{title}</span>{' '}
            <span className="text-3xl text-gray-400">
              ({date.substring(0, 4)})
            </span>
          </div>
          <div className="p-1">
            {renderDate()}
            <span>({content.production_countries[0] ? content.production_countries[0].iso_3166_1 : "??????"})</span>
            {renderGenre()}
          </div>
        </div>
        <div className="h-16 my-2">{rate(content.vote_average)}</div>
        <p className="text-lg italic text-gray-400 my-2">
          {content.tagline}
        </p>
        <p className="text-2xl font-bold my-2">??????</p>
        <p className="max-h-20 overflow-ellipsis overflow-hidden text-sm line-clamp-4 my-2">
          {content.overview || '?????? ????????? ???????????? ???????????? ????????????.'}
        </p>
        <Providers />
      </div>
    </div>
  </div>
</div>)

}

export default SummarySection