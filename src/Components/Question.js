import React, { Component, Fragment } from 'react'
import UpdateQuestion from './UpdateQuestion'
import '../styles/Question.css'
import edit from '../icons/editIcon.png'


class Question extends Component {

  constructor(props){
    super(props);
    this.state = {
      showQuestion: false,
    }
    this.toggleQuestion = this.toggleQuestion.bind(this);
  }

  toggleQuestion() {
		const { showQuestion } = this.state;
		this.setState({
			showQuestion: !showQuestion,
		});
  }

  substring(s){ 
    let size = Object.keys(s).length;
    if( size > 40 ){
      return s.substring(0,40).concat('...');
    }else{
      return s;
    }
  }
  
  render() {
    const { showQuestion } = this.state;
    return (     
      <Fragment>          
        <div className = "question-item">
          <div className = "question-body-container ">
            {this.substring(this.props.question.body)}
          </div>          
          <img className = "edit-btn" src = {edit} alt = 'Editar'  onClick = {this.toggleQuestion}></img>
          {showQuestion && (
            <div className = "question-edit-body">
              <UpdateQuestion question = {this.props.question}/>
            </div>            
          )}          
        </div>
        <div className = "divider">--------</div>
      </Fragment>
    )
  }

}

export default Question