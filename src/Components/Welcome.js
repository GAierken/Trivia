import React from 'react'
import {Container, Header, Form} from 'semantic-ui-react'

export default function Welcome() {
    return (
        <React.Fragment>
            <Container style={{"marginTop": 50}}>
                <Header as="h1" color="blue" textAlign="center" inverted size="huge"> Welcome to your Tandem Trivia Experience</Header>  
                <Form size="large" inline required>
                    <Form.Input fluid placeholder="name" label="Please Enter Your Name To Start"/>
                    <Form.Button color="blue" inverted>Submit</Form.Button>
                </Form> 
            </Container>
        </React.Fragment>
    )
}
