import {createStore} from 'redux';
export default createStore(function(state, action) {
    if(state === undefined) {
        return {number: 0};  // state가 undefined일 때 state 초기화
    }
    if(action.type === 'INCREMENT') {
        return {...state, number:state.number + action.size};    // type 값이 'INCREMENT'일 때 기존 state.size 값에 인자로 전달된 action.size 값을 추가하여 반환
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
