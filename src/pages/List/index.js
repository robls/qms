import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'
import { FILTER_QUESTIONS } from '../../utils/QueriesAndMutations'

import QuestionCard from '../../Components/QuestionCard';

import { FilterForm, TitleTextContainer, Warning } from './styles';

class List extends Component {

  state = {
    input: "",
  }

  render() {
    const { input } = this.state;

    return (
      <>

        <FilterForm>
          <input
            type="text"
            placeholder="Filtrar"
            onChange={e => this.setState({ input: e.target.value })}
          />
          <button>
            Buscar
          </button>
        </FilterForm>

        <Query query={FILTER_QUESTIONS} variables={{ input }} pollInterval={1000}>
          {({ loading, error, data }) => {
            if (loading) return <TitleTextContainer> Carregando a lista...</TitleTextContainer>
            if (error) return <TitleTextContainer> Erro ao buscar questões </TitleTextContainer>

            const questionsToRender = data.search
            const dataLenght = Object.keys(questionsToRender).length

            if (dataLenght === 0) return <Warning> Não foram encontradas questões com "{input}". </Warning>

            return (
              <>
                <TitleTextContainer>
                  Lista de Questões
                </TitleTextContainer>
                {questionsToRender.map(question => (
                  <QuestionCard key={question.id} question={question} />
                ))}
              </>
            )
          }}
        </Query>
      </>
    );
  }
}

export default List;
