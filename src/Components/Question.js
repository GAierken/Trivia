import React from 'react'
import {connect} from 'react-redux'
import RadioCheckbox from './RadioCheckbox'

function Question(props) {



    let hash = {}

    for(let i = 0; i < props.questions.length; i++){
        hash[i+1] = props.questions[i]
    }
   
   console.log(hash[2])
   let allAnswers = [...hash[2].incorrect, hash[2].correct]



   
    return (
        <div>
            {hash[2].question}
            <RadioCheckbox answers={allAnswers} correct={hash[2].correct}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    questions: state.questions
})
export default connect(mapStateToProps)(Question)