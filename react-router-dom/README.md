# React Router DOM
페이지가 전환될 때마다 주소창의 내용이 달라지며 여러 개의 페이지로 이루어진 웹 애플리케이션을 구현하기 위해선 어떤 주소로 들어왔을 때 그 주소를 알아내서 그에 해당하는 컴포넌트를 렌더링하고 내부적으로 `state`나 `props` 같은 값을 관리해주어야 한다. 이러한 작업을 쉽게 만들어주는 도구가 `react-router-dom`이다.

## react-router-dom 설치
```
$ npm install react-router-dom
```
## [예제 페이지](https://v5.reactrouter.com/web/guides/quick-start)

### 1번 예제: Basic Routing
```js
import { BrowserRouter, Route } from 'react-router-dom';
```
`BrowserRouter`는 리액트 라우터의 도움을 받는 컴포넌트의 최상위 컴포넌트를 감싸는 wrapper 컴포넌트이다. 예제에서 최상위 컴포넌트는 `App` 컴포넌트이므로
```js
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
```
이렇게 감싸주면 된다.  
`Home`, `Topics`, `Contact` 컴포넌트를 URL에 따라 달라지게 하기 위하여 하이퍼링크와 `href`를 추가하고 각 컴포넌트를 `Route`로 감싼다.
> 2023-01-29) 왜 `Route`를 쓰면 페이지가 렌더링이 안되는지 모르겠다.  
['꾸개일'님의 블로그](https://dev-h2.tistory.com/40)  
버전이 문제였다.  
`package.json`에서 react-router-dom의 6버전이 설치되어 있음을 알 수 있었다. 따라서 다음과 같이 downgrading 했다.  
` $ npm install react-router-dom@5.3.0`

`Home` 컴포넌트는 `"/"`, `Topics` 컴포넌트는 `"/topics"`, `Contact` 컴포넌트는 `"/contact"`에 라우팅이 되었는데, 문제점이 있다.  
`"/topics"`에서 `Home`과 `Topics`가 같이 렌더링되고, `"/contact"`에서 `Home`과 `Contact`가 같이 렌더링이 된다.  
이것은 substring인 `"/"`로 지정한 `Home`의 `path`에 매칭되어 일어나는 일이므로, `Route`의 `props`로 주어진 `path`에 `exact` 속성을 부여하면 해결된다.  

## [라우팅 문서](https://v5.reactrouter.com/web/api/Route)
### Switch 컴포넌트
`Switch` 컴포넌트를 쓰면 `exact`라는 속성을 사용하지 않고 같은 효과를 낼 수 있다.  
우선 <u>`Switch` 컴포넌트를 import</u>하여 `Route` 컴포넌트를 감싸보자.
```js
<Switch>
    <Route path="/"><Home></Home></Route>
    <Route path="/topics"><Topics></Topics></Route>
    <Route path="/contact"><Contact></Contact></Route>
</Switch>
```
`Switch` 컴포넌트로 `Route`를 감싸면 `react-router-dom`은 패스와 일치하는 첫 번째 컴포넌트가 발견되면 나머지 컴포넌트는 버린다. 때문에 `Home` 컴포넌트는 `exact` 속성이 없으면 모든 페이지에서 매칭된다. 따라서 언제나 `Home`이 출력될 것이다.  
그러면? `Home` 컴포넌트를 가장 아래에 가져다 두면 기대했던 대로 동작하게 된다.  
<br>
그렇다면, 사용자가 존재하지 않는 페이지로 접근했을 때는 어떻게 해야할까?  
```js
<Switch>
    <Route exact path="/"><Home></Home></Route>
    <Route path="/topics"><Topics></Topics></Route>
    <Route path="/contact"><Contact></Contact></Route>
    <Route path="/"><h1>Page Not Found!</h1></Route>
</Switch>
```
이렇게 하면 된다.

## Link
`Link` 컴포넌트는 페이지가 re-load되지 않게 자동으로 구현하는 컴포넌트이다.  
지금은 app의 상단 링크를 클릭할 때마다 페이지가 새로 로딩되는데, `<a>` 태그를 `<Link>` 컴포넌트로 변경해보자. `href` 속성 대신 `to` 속성을 사용해야 한다는 것을 주의하자.  

`<a>` 대신 `<Link>`를 사용하면 페이지의 `state` 값을 잃고 속도가 저하된다.

### `BrouserRouter`와 `HashRouter`의 차이점
* `BrowserRouter`
    * HTML5의 history API를 활용해서 UI를 업데이트
    * 동적 페이지에 적합
* `HashRouter`
    * 주소에 `#`이 붙는다.
    * 정적 페이지에 적합

## NavLink
`NavLink`는 `Link`와 유사하지만 기능이 조금 더 부가되어 있다.  
`Link`와는 달리 `class="active"`라는 속성이 생기고 이를 통해 사용자가 현재 어떤 페이지에 위치하고 있는지 직관적으로 알 수 있도록 한다.

## Nested Routing
배열을 하나 만들어서 자동으로 리스트가 만들어지고 그에 따라 자동으로 라우터가 만들어지도록 코드를 수정해보자.  
`Index.js` > `contents`라는 이름의 배열을 전역에 선언했는데, 실제로는 Ajax로 데이터를 가져오게 된다.  
반복적인 코드를 개선하기 위해 `Topic`이라는 컴포넌트를 추가했고, `Topic`의 하위 메뉴를 클릭하면 URL이 변경되는데, 이 때 `Topic` 컴포넌트에 `id` 값을 전달해서 `id`에 해당하는 데이터를 출력해야 한다.  
그러기 위해선 `Topic` 컴포넌트 안에서 주소에 있는 숫자 값(`topic_id`)을 알아내야 하는데 이 때 **`useParams`** 라는 hook이 사용된다(임포트하여 사용).  
```js
var params = useParams();
console.log(params);
```
콘솔에 찍어보면 `useParams`의 리턴 값이 `topic_id`임을 알 수 있다.  
`Route`의 `path` 속성에 지정한 것처럼 `:topics+id` 기호를 갖다 놓으면 자리에 들어오는 값이 컴포넌트로 전달되고, 이 값을 사용하기 위해서는 `useParams`를 써서 불러와야 한다.  
(문자열로 불러와져서 `Number()`로 형변환 해주어야 한다.)
___
## 문서
[**Server Rendering**](https://v5.reactrouter.com/web/guides/server-rendering)  
서버 사이드 렌더링에 관해서  
[**Code Splitting**](https://v5.reactrouter.com/web/guides/code-splitting)  
코드를 적당히 쪼개서 필요할 때마다 경제적으로 로드하게 하는 것  
**APIs**
* https://v5.reactrouter.com/web/api/Hooks
* https://v5.reactrouter.com/web/api/BrowserRouter
* https://v5.reactrouter.com/web/api/HashRouter
* https://v5.reactrouter.com/web/api/Link
* https://v5.reactrouter.com/web/api/NavLink
* https://v5.reactrouter.com/web/api/MemoryRouter
* https://v5.reactrouter.com/web/api/Redirect
* https://v5.reactrouter.com/web/api/Route
* https://v5.reactrouter.com/web/api/StaticRouter
* https://v5.reactrouter.com/web/api/Switch
