const initialState ={
    questions: []
}

const triviaReducer = (state = initialState, action) => {
   
    switch(action.type){
        case "SET_QUESTIONS":
            return{
                ...state,
                questions: action.data
            }

        default:
            return state
    }
}

export default triviaReducer