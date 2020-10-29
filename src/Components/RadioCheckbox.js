import React, { Component } from 'react'
import { Form, Checkbox } from 'semantic-ui-react'
import swal from 'sweetalert';


export default class CheckboxExampleRadioGroup extends Component {
  state = {
    value: "",
    score: 0,
    nextButtonClicked: false

  }
  handleChange = (e, { value }) => this.setState({ value })


   formFieldsGenerator = () => {
       
       return this.props.answers.map((ans) => {
         return (
          <Form.Field>
              <Checkbox
                radio
                label={ans}
                name='checkboxRadioGroup'
                value={ans}
                checked={this.state.value === ans}
                onChange={this.handleChange}
              />
         </Form.Field>
         )
       }
       )
   }

   handleSubmit = () => {
     if(this.state.value === this.props.correct){
      swal({
        title: "Good job!",
        text: "You gain one point!",
        icon: "success",
        button: "Next Question",
      }).then(() => {
            this.setState({
              nextButtonClicked: true
            })
      }
      );

       this.setState({
         score: this.state.score + 1
       })
     }else{
      swal({
        title: "Oops!",
        text: "The correct answer is" + " " + this.props.correct,
        icon: "error",
        button: "Next Question",
      }).then(() => {
            this.setState({
              nextButtonClicked: true
            })
      }
      );
     }
   }
  render() {
        console.log(this.state.nextButtonClicked)
    return (
      <Form>
         {this.formFieldsGenerator()}
         <Form.Button onClick={this.handleSubmit}>Submit Your Answer</Form.Button> 
      </Form>
    )
  }
}