 # Sample Web App
 `create-react-app`에서 제공하는 샘플 디렉터리는 크게 `src`와 `public`로 나눌 수 있다.  
 Create React App을 실행하면 나오는 첫 화면이 `index.html`을 실행한 결과이다.  
 `index.html`의 내용 중
 ```html
 <div id="root"></div>
 ```
 위 한 줄의 코드를 눈여겨보자.  
 앞으로 React를 이용해 만들 컴포넌트들은 `id`가 `root`인 `div` 요소 안에 들어가게 약속되어 있다.  
 ```js
 ReactDOM.render(<App />, document.getElementById('root'));
 ```
▲ 요렇게
<br>

`src` 디렉토리의 `index.js`는 웹앱의 진입점 역할을 한다.  
`<App />`은 사용자 정의 태그, 즉 **컴포넌트**이다.  
`import App from './App'`을 통해 불러와진 것이다.  
<span style="font-size:70%; opacity:80%">여기서 import 뒤에 나오는 App은 이름이 변경되어도 상관 없으나 './App'은 파일 경로이므로 변경되면 안된다.</span>

# CSS
```js
import './index.css'
```
와 같이 `.css` 파일을 불러올 수 있다.

# Distribution
```
npm run build
```
터미널에 입력하면 빌드 파일들이 생성되고 `build` 디렉토리 안에 저장된다.
```
npm install -g serve
혹은
npx serve -s build
```
`npm`으로 `serve`를 설치한 후 위 명령어를 실행하면 웹 서버를 실행할 수 있다.
`-s build`는 아까 봤던 `build` 디렉토리를 Document Root로 지정하는 옵션이다.

# Making Components
### **\* `src`의 `components` 디렉토리 참조**  
<br>

컴포넌트를 파일로 분리해서
```js
import Comp from './components/Comp';
```
등으로 불러오면 수월하다.

# props
만들어진 컴포넌트에
```js
<Subject title="WEB" sub="WEB stands for World Wide Web."></Subject>
```
와 같이 `props` 값을 전달할 수 있다.  
하위 컴포넌트에선 전달받은 `props` 값에 `this.props.title`, `this.props.sub` 등으로 접근할 수 있다.

# state
```js
class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'read',
      selected_content_id: 3,
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      welcome: { title: 'Welcome', desc: 'Hello, React!!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' }
      ]
    };
  }

  ...
```
위와 같이 `state` 값을 설정할 수 있다.

# render 함수
React에서는 `props`나 `state` 값이 바뀌면 그 `state`를 가지고 있는 컴포넌트의 `render` 함수가 호출되어 화면이 다시 그려진다.  
또한 하위 컴포넌트들의 `render` 함수도 호출된다.

# Event Programming
###  **\* 코드 참조**
`onClick`, `onSubmit` 등의 속성을 이용하여 이벤트 프로그래밍을 할 수 있다.  
* `this`를 사용할 땐 `.bind(this)`를 사용하여 바인딩 해주자.  
* `e.preventDefault();`를 이용하면 HTML 태그에 이벤트를 적용할 때 해당 태그의 이벤트가 가지고 있는 기본적인 동작을 하지 못하게 할 수 있다.
* `state` 값을 변경할 때는, `this.setState({mode: "read"});`와 같이 `setState` 함수를 사용해야 `state` 값이 변경되었다는 사실을 알릴 수 있다. (그냥 대입해서 바꾸면 `render` 실행되지 않음)
<br>

# CRUD Implementation
###  **\* 코드 참조**
