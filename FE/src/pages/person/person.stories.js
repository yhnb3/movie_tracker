import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Person from './person';

export default {
  component: Person,
  title: 'person',
};

const Template = (args) => (
  <BrowserRouter>
    <Person person={args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  adult: false,
  gender: 1,
  id: 1230687,
  known_for: [
    {
      backdrop_path: '/hiK4qc0tZijQ9KNUnBIS1k4tdMJ.jpg',
      first_air_date: '2004-11-16',
      genre_ids: [18, 35, 9648],
      id: 1408,
      media_type: 'tv',
      name: '하우스',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'House',
      overview:
        '2004년 11월 FOX에서 방영을 시작한 미스터리 의학 시리즈. 프린스턴 플레인즈보로 대학병원의 진단의학과 과장인 그레고리 하우스는 환자들을 성심성의껏 돌보는 데는 영 꽝인 의사. 사사건건 병원 원장인 리사 커디와 부딪히는 그는 못된 매너와 그 매너를 더욱 돋보이게 하는 외모로 유명하지만, 또한 창조적인 생각과 결점없는 의학적 본능을 유감없이 발휘하는 최고의 의사이기도 하다. 천재적인 분석능력을 갖춘 전염병 전문의로서 그가 이제 인명을 살리기 위한 흥미롭고 미스터리한 의학의 퍼즐을 풀어간다.',
      poster_path: '/lkvhReTBZ2Ksl0Dl5Oplsf6UYkF.jpg',
      vote_average: 8.6,
      vote_count: 4203,
    },
    {
      backdrop_path: '/vxrpEBnnwUPDDJ0cSKi0Pi9zdlS.jpg',
      first_air_date: '2013-01-11',
      genre_ids: [80, 18],
      id: 41727,
      media_type: 'tv',
      name: '밴쉬',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Banshee',
      overview:
        "교도소에서 10년을 복역 하고 출소한 한 남자가 옛 여자친구를 찾아 펜실베니아주의 작은 마을 '밴쉬'를 찾아오게 된다. 남자는 마을 외곽 술집에서 벌어진 싸움에 휘말리는데 여기서 죽은 남자가 밴쉬에 새로 부임 하려던 보안관 루카스 후드라는 것을 알게 된다. 그는 예전부터 곧잘 함께 일하고 여자친구가 밴쉬에 있다는 것도 알려줬던 동료 죠브에게 부탁하여 죽은 보안관의 신분으로 위장 한 뒤 순식간에 범죄자에서 경찰로 탈바뀜 한다. 그리고 밴쉬의 경제를 사실상 지배하고 있는 악랄한 사업가 프록터와 자신의 전 여자친구 였던 아나스타샤등 수많은 사람들과 엮이며 여러가지 사건에 휘말리게 되는데....  과격한 성적 묘사, 퀄리티 높은 액션과 폭력성으로 인기를 끌었으며 2016년 시즌 4를 끝으로 종영하였다.",
      poster_path: '/5nXFiz8Rn8eezVjSTZBd7HmnF1G.jpg',
      vote_average: 7.9,
      vote_count: 759,
    },
    {
      backdrop_path: '/6slPhy6cI8SxH9VgqyAErldJGxx.jpg',
      first_air_date: '2015-11-17',
      genre_ids: [18],
      id: 62650,
      media_type: 'tv',
      name: '시카고 메드',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Chicago Med',
      overview:
        '대도시 시카고에 위치한 병원을 배경으로, 매일 반복되는 아수라장 속에서 다양한 사건 사고와 마주하며 함께 난관을 헤쳐나가는 의료진들의 이야기를 그리는 메디컬 드라마',
      poster_path: '/8sWkBKCZ4FrzllsLjMQpiFxZWwM.jpg',
      vote_average: 8.4,
      vote_count: 756,
    },
  ],
  known_for_department: 'Acting',
  name: 'Jennifer Landon',
  popularity: 92.679,
  profile_path: '/o1XDkIoyZTwjSXF9SE7mTZb8Xeb.jpg',
};
