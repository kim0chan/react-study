# **클래스 스타일과 함수 스타일**
### 함수 스타일 원형
```js
function FuncStyle() {
    return (
        <div className="container">
            <h2>function style component</h2>
        </div>
    );
}
```
### 클래스 스타일 원형
```js
class ClassStyle extends React.Component() {
    render() {
        return (
            <div className="container">
                <h2>class style component</h2>
            </div>
        );
    }
}
```
함수 방식으로 컴포넌트를 만들 때는 반환값(`return`되는 값)만 만들면 그것이 컴포넌트의 실제 모양이 된다. 함수에서 `props`를 받으려면 컴포넌트 함수의 첫 번째 파라미터에 인자 값으로 `props` 값을 전달하면 된다.  
아래 코드를 보자. `props`는 사실 변수 명이라 임의의 값을 줘도 되는데 직관적으로 `props`라는 이름을 붙였다.
```js
function FuncStyle(props) {
    return(
        ...
        <p>Number : {this.props.initNumber}</p>
        ...
    );
}
```
클래스 방식으로 컴포넌트를 만들 때는 `render`라는 이름의 메서드를 정의한 뒤에 그것의 반환값이 컴포넌트의 실제 모양이 된다.

## state를 후킹하기, 이펙트를 후킹하기
state 값이 바뀌면 클래스 컴포넌트의 `render` 메서드가 호출되면서 바뀐 결과가 반영된다.  
함수형 컴포넌트에선 state 설정, 초기화, 값을 사용하고 변경하는 작업을 할 수 없었다.  

# 훅(Hook)
리액트 16.8 버전부터 훅이라는 기능이 도입되었다.  
리액트 기본 내장 훅이 있고, 사용자 정의 훅을 만들어서 사용할 수도 있다. [공식 문서](https://ko.reactjs.org/docs/hooks-intro.html)  
리액트에서 제공하는 훅의 이름은 `useState`이다. <u>임포트해서 사용할 수 있다.</u> `useState`는 배열을 반환한다.  
✔ 배열의 첫 번째 원소는 **전달된 state 값**이고, 두 번째 원소는 **상태를 바꾸는 함수**이다.
```js
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

# 라이프사이클 구현
이제 함수 방식에서도 state를 사용할 수 있게 되었다.  
다음은 함수 방식에서 라이프사이클을 다루는 법을 알아보자.  

## 라이프사이클
라이프사이클은 리액트 컴포넌트의 생명주기를 뜻한다.

1. `componentWillMount`  
컴포넌트가 생성되면 리액트가 `componentWillMount`라는 메서드를 호출한다.  
이 메서드 안에 컴포넌트 생성 전(`render` 메서드 호출 전)에 처리해야 코드를 작성할 수 있다.

2. `render`  
화면에 컴포넌트를 그린다.

3. `componentDidMount`  
`render` 메서드로 컴포넌트가 화면에 그려진 다음에 처리해야 할 일이 있다면 `componentDidMount`를 통해 처리할 수 있다.

4. `shouldComponentUpdate`  
컴포넌트의 `state`나 `props`가 바뀔 때마다 `render` 메서드가 호출되는데, `shouldComponentUpdate`가 `true`를 반환하면 `render`를 호출하는 식으로 되어있다.
