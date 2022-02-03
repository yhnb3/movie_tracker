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
  - [x] swr을 추가하여 필요없는 reducer 제거
- [ ] 초기 구동 속도 향상
- [ ] code splitting 코드 해체 분석하기 - 원리에 대해 잘모름.
- [ ] react-helmet 적용하기



## lighthouse 결과

![image](https://user-images.githubusercontent.com/60080270/151665459-5834ad14-c269-4357-9f5b-6c6c951105af.png)

현재 `light-house`로 검사 해보았을때 성능과 권장사항 부분은 어느정도 만족하는 것으로 볼 수 있다.

접근성과 검색엔진 최적화 부분을 조금 더 업그레이드 해야할 것 같다.
