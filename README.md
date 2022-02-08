# TMDB 클론 사이트 프로젝트

React를 이용한 TMDB 클론 사이트입니다.

### 주소

https://tmdb-made-by-kangwoo.netlify.app/

### 설치

**패키지 설치**

```bash
npm install
```

**env 추가하기**

FE 폴더 바로 아랫단에 `.env` 추가 후 `.env`파일 안에 다음과 같이 적고 저장

```
REACT_APP_API_CODE = 본인의 TMDB API CODE  //따옴표 없이 입력
```

**실행**

```bash
npm start
```

**빌드**

```bash
npm build
```



## 사용 스킬

- React 17.0.2

- Redux

- tailwind

- storybook

  storybook은 거의 개발이 완료된 시점에 추가하여 몇개의 컴포넌트만 적용하여 개발

- netlify

- swr



## 추가하고픈 스킬

- React 18

  React 18에 추가되는 스킬을 이용하여 업그레이드 해보고 싶습니다.

- Typescript

## 계획

- [x] 코드 리팩토링
  - [x] 여러 곳에 중복되서 사용되는 슬라이드 함수 만들기
  - [x] custom hook을 이용해 일부 컴포넌트에서 Data patch 과정 중복 제거
  - [ ] swr을 추가하여 필요없는 reducer 제거 - 진행중
- [ ] 초기 구동 속도 향상
- [ ] code splitting 코드 해체 분석하기 - 원리에 대해 잘모름.
- [ ] react-helmet 적용하기

### 해결해야하는 문제

- ~~인피니티 스크롤 구현 중에 범위로 `data-fetch`를 할 경우 한 번의 콜백함수를 실행 시키기위해 `throttle`과 함께 구현을 하였음에도 여러번 호출되는 결과가 발생하여 스크롤이 바닥에 닿았을때만 `data-fetch`를 하는 방식으로 변경하여 임시 조치함.~~ 

  **해결방법**

  `useSWRInfinite`을 이용해서 데이터 fetch를 하였습니다. 그래서 한 번의 scroll 이벤트에 여러번의 data fetching이 일어나는 현상이 있었습니다. 

  현상의 이유는 InfinityScroll 컴포넌트 내에 `useEffect`에서 scroll 이벤트를 붙히는데 dependency를 `useSWRInfinite`에서 제공하는 size로 두었을때 data가 아직 fetching되지 않은 상태임에도 불구하고 이벤트에 의해 size의 크기가 변경되다 보니 data fetching이 조금이라도 늦어질 경우 size가 과도하게 커짐에 의해 한꺼번에 여러번 fetching 하는 결과로 이어진것 같습니다.

  그래서 data fetching로딩하는 동안 이벤트 리스너를 작동하지 않도록 하는 방법을 생각 해보다가 InfinityScroll 내에 `useEffect` dependency를 data의 길이로 두면 데이터 로딩하는 동안은 리렌더링 되지 않기때문에 data fetching이 여러번 반복되는 현상을 막을 수 있었습니다. 

  throttle을 이용해서 이러한 현상을 막으려 하였지만 size의 변경으로 인해 InfinityScroll이 리렌더링이 잦아지니 throttle도 의미가 없어진 것 같습니다.(확실하진 않고 왜 throttle이 작동하지 않았냐에 대한 저의 생각입니다.)

  **결론** : useEffect의 dependency를 data의 길이로 두어서 InfinityScroll의 잦은 리렌더링을 막았다! 

  

## lighthouse 결과

![image](https://user-images.githubusercontent.com/60080270/151665459-5834ad14-c269-4357-9f5b-6c6c951105af.png)

현재 `light-house`로 검사 해보았을때 성능과 권장사항 부분은 어느정도 만족하는 것으로 볼 수 있다.

접근성과 검색엔진 최적화 부분을 조금 더 업그레이드 해야할 것 같다.
