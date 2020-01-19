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
    }
  }
`;

class QuestionList extends Component {
  
  render() {
    return (
        <Query query={READ_QUESTIONS}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const questionsToRender = data.questions   

          return (
            <Fragment>
              <div className="question-list-header-text">Lista de Questões</div>
              <div>
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