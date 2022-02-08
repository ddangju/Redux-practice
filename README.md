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

`redux`라는 파일을 따로 만들어 그 안에 기능들별로 나누어준다. <br>
그리고 슬라이스 된 기능들을 `index`에서 **객체**로 합쳐주기위해 redux에서 `combineReducers`를 불러온다.

<!-- 🔗 어떻게 설정하고 객체를 불러오는지 그려보기 -->

<!-- <img src="https://user-images.githubusercontent.com/68775082/152990519-2623e8aa-191f-4cb1-a5b2-1322eb5676c3.jpg" width="500px"/> -->


<br>

# Redux의 생명주기

<img src="https://user-images.githubusercontent.com/68775082/153002954-e3806f68-a391-4141-a444-73354db035f1.png" width="700px" />

리덕스는 **단방향**으로 이루어지며 상태 변화가 일어나는 시점과 형태에 제약을 두어 **상태 변화가 예측이 가능하다**. 

이것은 기존 양방향인 **MVC**모델보다 에러를 줄일 수 있고 관리하기가 훨씬 수월하다. 

액션은? 브라우저에서 사용자가 사용하는 **행동**이다. 액션이 이루어진다면? 디스패치가 이루어진다

디스패치란? 액션이 일어났을 때 액션을(실행되는 객체)store로 보낼 수 있다. 

상태관리하는 store에는 reducer함수가 있는데 이것은 action을 확인하고 state를 변경하는 일을 한다.   

그럼 그 변경된 state값이 view에 반영된다. 
