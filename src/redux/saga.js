import {  call, put, fork, takeLatest } from "redux-saga/effects";
import {REQUEST_SET_QUESTIONS, setQuestions} from './actions'
// import Problems from '../Apprentice_TandemFor400_Data.json'

function* getQuestions(action) {


    yield put(setQuestions(action.data))
  }

function* fetchSaga() {
  
    yield takeLatest(REQUEST_SET_QUESTIONS, getQuestions);
  }

export default function* rootSaga(){
    yield fork(fetchSaga)
   
    
}