# React Redux

## Redux
A predictable state container for Javascript apps

## 설치
```
$ npm install redux
```
혹은  
```html
<script src = "https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.1/redux.min.js"></script>
```

## 리덕스 스토어 생성
`src` directory 내에 `store.js` 작성  
`createStore`는 deprecated 되었다고 한다. @reduxjs/toolkit package에 있는 `configureStore`를 사용하라는데, 공식 문서를 읽어보니 deprecated 되었지만 삭제하지 않을 예정이기 때문에 취소선을 무시하고 그냥 사용해도 된다고 한다.  
취소선이 거슬리면 다음과 같이 import하면 된다.
```js
import { lagacy_createStore as createStore } from 'redux';
```

`createStore` 함수는 첫 번째 인자로 `reducer` 함수를 받는다.  
`reducer` 함수는 두 개의 인자를 받는다. 첫 번째 인자는 `state`(데이터), 두 번째 인자는 `action`(데이터에 가해지는 가공 등)이다.

### Container Component
Redux를 도입하면서 애플리케이션에서 사용하는 Redux의 상태에 의존하게 된다. 이러면 component를 부품으로서 재사용하기 어려워지는데, 이러한 component를 감싸는 새로운 component를 만들고 redux store와 관련된 작업을 실질적으로 처리하는 component를 `Container Component`라고 한다. 감싸여 있는 component(`Presentational Component`라고도 한다.)는 단순히 props로 전달받은 데이터를 출력하거나 함수를 호출하는 것이다.

## Redux DevTool
[크롬 확장 프로그램](https://bit.ly/reduxdevtool)
