import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { FiSend } from "react-icons/fi";
import { CREATE_QUESTION } from '../../utils/QueriesAndMutations';

import { Container, Content, RadioGroup, ButtonContainer } from './styles';

class CreateQuestion extends Component {

  state = {
    body: '',
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
    correctAnswer: '',
  }

  checkEmptyString(array, mutation) {
    let isEmpty = false
    Object.values(array).forEach(value => {
      if (value === '') {
        isEmpty = true;
      }
    })
    if (isEmpty) {
      alert('Existem campos vazios !');
    } else {
      mutation()
      alert('Questão adicionada.');
      this.props.history.push('/');
    }
  }

  render() {

    const { body, a, b, c, d, e, correctAnswer } = this.state

    return (
      <Container>
        <Content>
          <form>
            <input
              value={body}
              onChange={e => this.setState({ body: e.target.value })}
              type="text"
              placeholder="Pergunta"
            />
            <input
              value={a}
              onChange={e => this.setState({ a: e.target.value })}
              type="text"
              placeholder="A"
            />
            <input
              value={b}
              onChange={e => this.setState({ b: e.target.value })}
              type="text"
              placeholder="B"
            />
            <input
              value={c}
              onChange={e => this.setState({ c: e.target.value })}
              type="text"
              placeholder="C"
            />
            <input
              value={d}
              onChange={e => this.setState({ d: e.target.value })}
              type="text"
              placeholder="D"
            />
            <input
              value={e}
              onChange={e => this.setState({ e: e.target.value })}
              type="text"
              placeholder="E"
            />

            <p>Selecione a alternativa correta:</p>

            <RadioGroup>
              <label>
                <input
                  type="radio"
                  value="a"
                  checked={this.state.correctAnswer === 'a'}
                  onChange={e => this.setState({ correctAnswer: e.target.value })}
                />
                A
              </label>
              <label>
                <input
                  type="radio"
                  value="b"
                  checked={this.state.correctAnswer === 'b'}
                  onChange={e => this.setState({ correctAnswer: e.target.value })}
                />
                B
              </label>
              <label>
                <input
                  type="radio"
                  value="c"
                  checked={this.state.correctAnswer === 'c'}
                  onChange={e => this.setState({ correctAnswer: e.target.value })}
                />
                C
              </label>
              <label>
                <input
                  type="radio"
                  value="d"
                  checked={this.state.correctAnswer === 'd'}
                  onChange={e => this.setState({ correctAnswer: e.target.value })}
                />
                D
              </label>
              <label>
                <input
                  type="radio"
                  value="e"
                  checked={this.state.correctAnswer === 'e'}
                  onChange={e => this.setState({ correctAnswer: e.target.value })}
                />
                E
              </label>
            </RadioGroup>
            <ButtonContainer>
              <FiSend size={20} color={"#fff"} />
              <Mutation
                mutation={CREATE_QUESTION}
                variables={{ body, a, b, c, d, e, correctAnswer }}>
                {postMutation => <button onClick={() => this.checkEmptyString(
                  [body, a, b, c, d, e, correctAnswer],
                  postMutation)}>Enviar</button>}
              </Mutation>
            </ButtonContainer>
          </form>

        </Content>

      </Container>
    )
  }
}

export default CreateQuestion
