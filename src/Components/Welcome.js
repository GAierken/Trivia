import React, {useState} from 'react'
import {Container, Header, Form} from 'semantic-ui-react'
import {requestSetUsername} from '../redux/actions'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"

function Welcome(props) {

    const [username, newUsername] = useState('')

    const handleOnChange = (evt) => {
            
            newUsername(evt.target.value)
    }
    
    const handleOnClick = () => {
        if(username === ""){
            alert("Username can't be blank")
        }else{
            props.requestSetUsername(username)
        }
        

    }
    return (
        <React.Fragment>
            <Container style={{"marginTop": 50}}>
                <Header as="h1" color="blue" textAlign="center" inverted size="huge"> Welcome to your Tandem Trivia Experience</Header>  
                <Form size="large"  required>
                    <Form.Input onChange = {handleOnChange}fluid placeholder="name" label="Please Enter Your Name To Start"/>
                    <Link to='/questions'><Form.Button color="blue" inverted onClick={handleOnClick}>Submit</Form.Button></Link>
                </Form> 
            </Container>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({...state})

export default connect(mapStateToProps, {requestSetUsername})(Welcome)