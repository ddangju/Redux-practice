# Redux 라이브러리 설치
```js
npm install redux react-redux
```
redux와 react-redux 두가지 라이브러리를 설치해준다
redux는 상태관리를 해주는 API이고 `라이브러리`이고 react-redux는 react에서 redux를 더 편리하게 사용하게 도와주는 기능을 한다.

<br>

# 파일구조

```
ㄴredux
  ㄴ index.js
  ㄴ counter-redux.js 
  ㄴ basket-redux.js
```

`redux`라는 파일을 따로 만들어 그 안에 기능들별로 나누어준다. 그리고 슬라이스된 기능들을 `index`에서 **객체**로 합쳐주기위해 redux에서 **combineReducers**를 불러온다.

🔗 어떻게 설정하고 객체를 불러오는지 그려보기

<img src="https://user-images.githubusercontent.com/68775082/152990519-2623e8aa-191f-4cb1-a5b2-1322eb5676c3.jpg" width="500px"/>



