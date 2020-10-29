import React from 'react'
import {connect} from 'react-redux'
import RadioCheckbox from './RadioCheckbox'

function Question(props) {

    let questions1 = new Array(10)
    let questions2 = new Array(10)

    for(let i = 0; i < questions1.length; i++){
        questions1[i] = props.questions[i]
    }
    
    
    for(let i = 0; i < questions2.length; i++){
        questions2[i] = props.questions[i + 10]
    }
   
    let hash = {}

    for(let i = 0; i < props.questions.length; i++){
        hash[i+1] = props.questions[i]
    }
   
  
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