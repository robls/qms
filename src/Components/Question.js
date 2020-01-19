import React, { Component, Fragment } from 'react'
import UpdateQuestion from './UpdateQuestion'
import '../styles/Question.css'


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
    console.log();
    if( size > 35 ){
      return s.substring(0,35).concat('...');
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
          <button className = "question-btn-editar" onClick = {this.toggleQuestion}>Editar</button>
          {showQuestion && (
            <Fragment>
              <UpdateQuestion question = {this.props.question}/>
            </Fragment>            
          )}
        </div>
      </Fragment>
    )
  }

}

export default Question