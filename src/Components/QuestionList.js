import React, { Fragment, Component } from 'react'
import Question from './Question'
import { Query } from 'react-apollo'
import '../styles/QuestionList.css'
import { FILTER_QUESTIONS } from './QueriesAndMutations'

class QuestionList extends Component {
  
  state = {
    input: "",
  }
  
  render() {

    const { input } = this.state;
    return (
        <Fragment>
            <input 
              type = "text" 
              className = "question-list-filter-input" 
              placeholder = "Filtrar por pergunta" 
              onChange = { e => this.setState( {input:e.target.value} ) }
            />
            <Query query = { FILTER_QUESTIONS } variables = { {input: input} } pollInterval = { 1000 }>
            {({ loading, error, data }) => {
              if (loading) return <div className = "question-list-header-text" > Carregando a lista...</div>
              if (error) return <div className = "question-list-header-text" > Erro ao buscar questões </div>
              
              const questionsToRender = data.search 
              const dataLenght = Object.keys(questionsToRender).length
              if( dataLenght === 0 ) return <div className = "no-questions-warning" > Não foram encontradas questões com "{ input }". </div>

              return (
                <Fragment>
                  <div className = "question-list-header-text">Lista de Questões</div>
                  <div className = "question-list-container">
                    {questionsToRender.map( question => <Question key = { question.id } question = { question } />)}               
                  </div>
                </Fragment>
              )              
            }}
          </Query>
        </Fragment>
      )
  }
}

export default QuestionList