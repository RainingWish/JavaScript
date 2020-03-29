import { put, takeEvery } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreaters';
import axios from 'axios';

function* getInitList() {
    try {
        const res = yield axios.get('/list.json');
        const action = initListAction(res.data);
        yield put(action);
    } catch (e) {
        console.log('cannot find list.json')
    }
}

//generator function
function* mySaga() {
    //after recieve the 'GET_INIT_LIST' action then run getInitList function
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;