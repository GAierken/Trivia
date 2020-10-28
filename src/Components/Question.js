import React from 'react'
import {connect} from 'react-redux'

function Question(props) {
    console.log(props.username)
    return (
        <React.Fragment>
            {props.username}
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    questions: state.questions,
    username: state.userName
})
export default connect(mapStateToProps)(Question)