import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom';
import { Mutation } from 'react-apollo'
import { FiTrash2, FiSend } from "react-icons/fi";
import { UPDATE_QUESTION, REMOVE_QUESTION } from '../../utils/QueriesAndMutations'

import { Container, Content, RadioGroup, Buttons, InfosContainer } from './styles';

function Child() {
  let data = useLocation();
  if (data.state) {
    return data.state.question;
  } else {
    return undefined;
  }
}

const UpdateQuestion = () => {
  const history = useHistory();

  const questionFromState = Child();

  { !questionFromState && history.push('/') }

  const [question, setQuestion] = useState(questionFromState);

  function deleteQuestion(mutation) {
    if (window.confirm('Você tem certeza que deseja excluir essa questão ?')) {
      mutation()
    }
  }

  function updateQuestion(array, mutation) {
    let isEmpty = false
    Object.values(array).forEach(value => {
      if (value === '') {
        isEmpty = true;
      }
    })
    if (isEmpty) {
      alert('Existem campos vazios !');
    } else {
      if (window.confirm('Você tem certeza que atualizar essa questão ?')) {
        mutation()
        alert('Questão atualizada !');
      }
    }
  }

  const { id, body, a, b, c, d, e, correctAnswer, createdAt, editedAt } = question

  return (
    <Container>
      <Content>
        <InfosContainer>
          <strong>ID: {id}</strong>
          <strong>Criada em: {createdAt}</strong>
          <strong>Editada em: {editedAt}</strong>
        </InfosContainer>

        <form>
          <p>Pergunta:</p>
          <input
            value={body}
            onChange={e => setQuestion({ ...question, body: e.target.value })}
            type="text"
            placeholder="Pergunta"
          />

          <p>Alternativa A:</p>
          <input
            className="update-question-edit-field"
            value={a}
            onChange={e => setQuestion({ ...question, a: e.target.value })}
            type="text"
            placeholder="Alternativa A"
          />

          <p>Alternativa B:</p>
          <input
            className="update-question-edit-field"
            value={b}
            onChange={e => setQuestion({ ...question, b: e.target.value })}
            type="text"
            placeholder="Alternativa B"
          />

          <p>Alternativa C:</p>
          <input
            className="update-question-edit-field"
            value={c}
            onChange={e => setQuestion({ ...question, c: e.target.value })}
            type="text"
            placeholder="Alternativa C"
          />

          <p>Alternativa D:</p>
          <input
            className="update-question-edit-field"
            value={d}
            onChange={e => setQuestion({ ...question, d: e.target.value })}
            type="text"
            placeholder="Alternativa D"
          />

          <p>Alternativa E:</p>
          <input
            className="update-question-edit-field"
            value={e}
            onChange={e => setQuestion({ ...question, e: e.target.value })}
            type="text"
            placeholder="Alternativa E"
          />
          <p>Selecione a alternativa correta:</p>

          <RadioGroup>
            <label>
              <input
                type="radio"
                value="a"
                checked={correctAnswer === 'a'}
                onChange={e => setQuestion({ ...question, correctAnswer: e.target.value })}
              />
              A
            </label>

            <label>
              <input
                type="radio"
                value="b"
                checked={correctAnswer === 'b'}
                onChange={e => setQuestion({ ...question, correctAnswer: e.target.value })}
              />
                B
            </label>

            <label>
              <input
                type="radio"
                value="c"
                checked={correctAnswer === 'c'}
                onChange={e => setQuestion({ ...question, correctAnswer: e.target.value })}
              />
              C
            </label>

            <label>
              <input
                type="radio"
                value="d" checked={correctAnswer === 'd'}
                onChange={e => setQuestion({ ...question, correctAnswer: e.target.value })}
              />
              D
            </label>

            <label>
              <input
                type="radio"
                value="e" checked={correctAnswer === 'e'}
                onChange={e => setQuestion({ ...question, correctAnswer: e.target.value })}
              />
              E
            </label>
          </RadioGroup>

          <Buttons>
            <div>
              <FiTrash2 size={20} color={"#fff"} />
              <Mutation
                mutation={REMOVE_QUESTION}
                variables={{ id }}
                onCompleted={() => { history.push('/') }}
              >
                {postMutation => <button onClick={() => deleteQuestion(postMutation)}>Excluir</button>}
              </Mutation>
            </div>

            <div>
              <FiSend size={20} color={"#fff"} />
              <Mutation
                mutation={UPDATE_QUESTION}
                variables={{ id, body, a, b, c, d, e, correctAnswer, createdAt }}
                onCompleted={() => { history.push('/') }}
              >
                {postMutation =>
                  <button onClick={() => updateQuestion(
                    [id, body, a, b, c, d, e, correctAnswer, createdAt],
                    postMutation)}> Editar
                  </button>
                }
              </Mutation>
            </div>
          </Buttons>
        </form>
      </Content>
    </Container>
  );

}

export default UpdateQuestion
