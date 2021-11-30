/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineLink,
} from 'react-icons/ai';

export default function personInfo({ person }) {
  const now = new Date();
  return (
    <div className="px-1 py-5">
      <div className="flex flex-row my-3">
        <div className="flex flex-row border-r border-gray-200">
          {person.social.facebook_id ? (
            <a
              href={`https://facebook.com/${person.social.facebook_id}`}
              target="_blank"
            >
              <AiFillFacebook className="w-8 h-8 mx-2" />
            </a>
          ) : (
            <></>
          )}
          {person.social.twitter_id ? (
            <a
              href={`https://twitter.com/${person.social.twitter_id}`}
              target="_blank"
            >
              <AiOutlineTwitter className="w-8 h-8 mx-2" />
            </a>
          ) : (
            <></>
          )}
          {person.social.instagram_id ? (
            <a
              href={`https://instagram.com/${person.social.instagram_id}`}
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
        <div className="pb-4">
          <p className="text-xl font-bold">다른 명칭</p>
          {person.also_known_as.map((element) => (
            <p key={element}>{element}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
