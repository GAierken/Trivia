const initialState ={
    questions: [],
    userName: ""
}

const triviaReducer = (state = initialState, action) => {
//    console.log(action)
    switch(action.type){
        case "SET_QUESTIONS":
            return{
                ...state,
                questions: action.data
            }
        case "SET_USERNAME":
            return {
                ...state,
                userName: action.data
            }
        default:
            return state
    }
}

export default triviaReducer