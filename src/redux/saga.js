import {  call, put, fork, takeLatest } from "redux-saga/effects";
import {REQUEST_SET_QUESTIONS, setQuestions, REQUEST_SET_USERNAME, setUserName } from './actions'
// import Problems from '../Apprentice_TandemFor400_Data.json'

function* getQuestions(action) {


    yield put(setQuestions(action.data))
  }


function* getUserName(action){
    console.log(action)
    yield put(setUserName(action.data))
}

function* fetchSaga() {
  
    yield takeLatest(REQUEST_SET_QUESTIONS, getQuestions);
  }

function* newUserName(){
    yield takeLatest(REQUEST_SET_USERNAME, getUserName)
}

export default function* rootSaga(){
    yield fork(fetchSaga)
    yield fork(newUserName)
   
    
}