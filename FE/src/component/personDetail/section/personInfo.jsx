/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import { AiFillFacebook } from '@react-icons/all-files/ai/AiFillFacebook';
import { AiOutlineInstagram } from '@react-icons/all-files/ai/AiOutlineInstagram';
import { AiOutlineTwitter } from '@react-icons/all-files/ai/AiOutlineTwitter';
import { AiOutlineLink } from '@react-icons/all-files/ai/AiOutlineLink';
import useFetchData from '../../custom/useFetchData.tsx';

export default function personInfo({ person }) {
  const endPoint = `https://api.themoviedb.org/3/person/${person.id}/external_ids?api_key=${process.env.REACT_APP_API_CODE}&language=ko`;
  const { loading, error, data } = useFetchData({ endPoint });

  if (loading) return <p>로딩중.....</p>;
  if (error) return <p>에러가 발생하였습니다.</p>;

  const now = new Date();
  return (
    <div className="px-1 py-5">
      <div className="flex flex-row my-3">
        <div className="flex flex-row border-r border-gray-200">
          {data.facebook_id ? (
            <a
              href={`https://facebook.com/${data.facebook_id}`}
              target="_blank"
            >
              <AiFillFacebook className="w-8 h-8 mx-2" />
            </a>
          ) : (
            <></>
          )}
          {data.twitter_id ? (
            <a href={`https://twitter.com/${data.twitter_id}`} target="_blank">
              <AiOutlineTwitter className="w-8 h-8 mx-2" />
            </a>
          ) : (
            <></>
          )}
          {data.instagram_id ? (
            <a
              href={`https://instagram.com/${data.instagram_id}`}
              target="_blank"
            >
              <AiOutlineInstagram className="w-8 h-8 mx-2" />
            </a>
          ) : (
            <></>
          )}
        </div>
        <div>
          {person.homepage ? (
            <a href={person.homepage} target="_blank">
              <AiOutlineLink className="w-8 h-8 mx-2" />
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div>
        <p className="text-2xl font-bold py-2">인물정보</p>
        <div className="pb-4">
          <p className="text-xl font-bold">유명분야</p>
          <p>{person.known_for_department}</p>
        </div>
        <div className="pb-4">
          <p className="text-xl font-bold">성별</p>
          <p>{person.gender === 1 ? '여성' : '남성'}</p>
        </div>
        <div className="pb-4">
          <p className="text-xl font-bold">생일</p>
          <p>
            {person.birthday}
            {` (${
              now.getFullYear() - parseInt(person.birthday.substring(0, 4), 10)
            }세)`}
          </p>
        </div>
        <div className="pb-4">
          <p className="text-xl font-bold">출생지</p>
          <p>{person.place_of_birth}</p>
        </div>
        {person.also_known_as.length > 0 ? (
          <div className="pb-4">
            <p className="text-xl font-bold">다른 명칭</p>
            {person.also_known_as.map((element) => (
              <p key={element}>{element}</p>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
