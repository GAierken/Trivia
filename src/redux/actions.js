//get json data
export const REQUEST_SET_QUESTIONS = "REQUEST_SET_QUESTIONS"
export const SET_QUESTIONS = "SET_QUESTIONS"

export const requestSetQuestions = data => ({type: REQUEST_SET_QUESTIONS, data})
export const setQuestions = data => ({type: SET_QUESTIONS, data})

//set username
export const REQUEST_SET_USERNAME = "REQUEST_SET_USERNAME"
export const SET_USERNAME = "SET_USERNAME"

export const requestSetUsername = data => ({type: REQUEST_SET_USERNAME, data})
export const setUserName = data => ({type: SET_USERNAME, data})

//set score
export const REQUEST_SET_SCORE = "REQUEST_SET_SCORE"
export const SET_SCORE = "SET_SCORE"

export const requestSetScore = data => ({type: REQUEST_SET_SCORE, data})
export const setScore = data => ({type: SET_SCORE, data})