import React from 'react'
import {connect} from 'react-redux'
import {Container} from 'semantic-ui-react'
import Question from './Question'

function QuestionContainer(props) {
   
    return (
        <React.Fragment>
            <Container text size="large" textAlign="center" style={{"marginTop":100, color: "navy"}}>Hi {props.username}</Container>
            <Question/>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    username: state.userName
})
export default connect(mapStateToProps)(QuestionContainer)