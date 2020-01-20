import React, { Fragment, Component } from 'react'
import Question from './Question'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import '../styles/QuestionList.css'

const READ_QUESTIONS = gql`
  query questions{
    questions{
      id
      body
      a
      b
      c
      d
      e
      correctAnswer
      createdAt
      editedAt
    }
  }
`;

class QuestionList extends Component {
  
  render() {
    return (
        <Query query={READ_QUESTIONS}>
        {({ loading, error, data }) => {
          if (loading) return <div className="question-list-header-text" >Carregando a lista...</div>
          if (error) return <div className="question-list-header-text" >Erro ao buscar questões</div>

          const questionsToRender = data.questions 
          const numberOfQuestions = Object.keys(questionsToRender).length
          if( numberOfQuestions === 0 ) return <div className="no-questions-warning" >Não existem questões cadastradas ainda.</div>

          return (
            <Fragment>
              <div className="question-list-header-text">Lista de Questões</div>
              <div className = "question-list-container">
                {questionsToRender.map( question => <Question key={question.id} question = {question} />)}
              </div>
            </Fragment>
          )
        }}
      </Query>
      )
  }
}

export default QuestionList