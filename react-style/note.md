함수 방식의 컴포넌트를 만들 때는 반환값만 만들면 바로 컴포넌트의 실제 모양이 된다.  
클래스로 컴포넌트를 만들 때는 `render`라는 이름의 메서드를 정의해서 그것의 반환값이 UI가 된다.  

state 값이 바뀌면 클래스 컴포넌트의 `render` 메서드가 호출되면서 바뀐 결과가 반영된다.  
함수형 컴포넌트에선 state 설정, 초기화, 값을 사용하고 변경하는 작업을 할 수 없었다.  

## 훅(Hook)
리액트 16.8 버전부터 훅이라는 기능이 도입되었다.  
리액트 기본 내장 훅이 있고, 사용자 정의 훅을 만들어서 사용할 수도 있다. [공식 문서](https://ko.reactjs.org/docs/hooks-intro.html)  
리액트에서 제공하는 훅의 이름은 `useState`이다. `useState`는 배열을 반환한다.  
배열의 첫 번째 원소는 **전달된 state 값**이고, 두 번째 원소는 **상태를 바꾸는 함수**이다.
```javascript
var numberState = useState(props.initNumber);
var number = numberState[0];
var setNumber = numberState[1];

setNumber(Math.random());
```
다음과 같이 사용했다. 혹은 간단하게  
```js
var [number, setNumber] = useState(props.initNumber);
```
이렇게 쓰는 것이 더 선호된다.  

---
## 라이프사이클 구현
이제 함수 방식에서도 state를 사용할 수 있게 되었다.  
다음은 함수 방식에서 라이프사이클을 다루는 법을 알아보자.  
