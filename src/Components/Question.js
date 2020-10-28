import React from 'react'
import {connect} from 'react-redux'

function Question(props) {
    console.log(props.questions)
    return (
        <React.Fragment>
            Quesitons
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    questions: state.questions
})
export default connect(mapStateToProps)(Question)