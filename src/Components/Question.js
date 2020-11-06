import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import { Segment } from 'semantic-ui-react'
import RadioCheckbox from './RadioCheckbox'

function Question(props) {

    const [question1, setQ1] =  useState([])
    const [question2, setQ2] =  useState([])
    useEffect(() => {
        
     let q1 = new Array(10)

        for(let i = 0; i < q1.length; i++){
            q1[i] = props.questions[i]
        }
        
     let q2 = new Array(10)
        for(let i = 0; i < q2.length; i++){
            q2[i] = props.questions[i + 10]
        }

    setQ1(q1)
    setQ2(q2)

    }, []
    )
   
   
    let hash = {}

    for(let i = 0; i < props.questions.length; i++){
        hash[i+1] = props.questions[i]
    }
   
  
   let allAnswers = [...hash[2].incorrect, hash[2].correct]


   const questionGenerator = () => {
            console.log(question1, question2)
   }

   
    return (
        <div>
            <Segment.Group raised>
              <Segment padded="very">
                {questionGenerator()}
              </Segment>
              <RadioCheckbox answers={allAnswers} correct={hash[2].correct}/>
            </Segment.Group>
            
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    questions: state.questions
})
export default connect(mapStateToProps)(Question)