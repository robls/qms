import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import '../Styles/CreateQuestion.css'
import { CREATE_QUESTION } from './QueriesAndMutations'

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

  checkEmptyString(array, mutation){
    let isEmpty = false
    Object.values(array).forEach(value => {
        if(value === ''){
            isEmpty = true;              
        }
    })
    if(isEmpty) { 
        alert('Existem campos vazios !');
    }else {        
        mutation()
        alert('Questão adicionada.');
        this.props.history.push('/');
    }    
  }

  render() {

    const { body, a, b, c, d, e, correctAnswer} = this.state

    return (
      <div className = "create-question-container">
        <div className = "create-question-title">Nova Questão</div>
        <input
            className = "create-question-field question-field"
            value = { body }
            onChange = { e => this.setState({ body: e.target.value }) }
            type = "text"
            placeholder = "Pergunta"
        />
        <input
            className = "create-question-field"
            value = { a }
            onChange = { e => this.setState({ a: e.target.value }) }
            type = "text"
            placeholder = "Alternativa A"
        />
        <input
            className = "create-question-field"
            value = { b }
            onChange = { e => this.setState({ b: e.target.value }) }
            type = "text"
            placeholder = "Alternativa B"
        />
        <input
            className = "create-question-field"
            value = { c }
            onChange = { e => this.setState({ c: e.target.value }) } 
            type = "text"
            placeholder = "Alternativa C"
        />
        <input
            className = "create-question-field"
            value = { d }
            onChange= { e => this.setState({ d: e.target.value }) }
            type = "text"
            placeholder = "Alternativa D"
        />
        <input
            className = "create-question-field"
            value = { e }
            onChange = { e => this.setState({ e: e.target.value }) }
            type = "text"
            placeholder = "Alternativa E"
        />

        <div className = "create-question-title">Alternativa Correta:</div>

        <div className = "create-question-radio-group">
            <label>
                <input type = "radio" value = "a" checked = { this.state.correctAnswer === 'a' } 
                onChange={ e => this.setState({ correctAnswer: e.target.value })}/>
                A
            </label>
            <label>
                <input type = "radio" value = "b" checked = { this.state.correctAnswer === 'b' } 
                onChange={ e => this.setState({ correctAnswer: e.target.value })}/>
                B
            </label>
            <label>
                <input type = "radio" value = "c" checked = { this.state.correctAnswer === 'c' } 
                onChange = { e => this.setState({ correctAnswer: e.target.value }) }/>
                C
            </label>
            <label>
                <input type = "radio" value = "d" checked = {this.state.correctAnswer === 'd' } 
                onChange = { e => this.setState({ correctAnswer: e.target.value }) }/>
                D
            </label>
            <label>
                <input type = "radio" value = "e" checked = {this.state.correctAnswer === 'e' } 
                onChange = { e => this.setState({ correctAnswer: e.target.value }) }/>
                E
            </label>
        </div> 
        <div className = "create-question-btn">
            <Mutation 
                mutation = { CREATE_QUESTION } 
                variables = { { body, a, b, c, d, e, correctAnswer } }>
                {postMutation => <button onClick={ () => this.checkEmptyString(
                    [ body, a, b, c, d, e, correctAnswer],
                    postMutation ) }>Adicionar Questão</button>}                
            </Mutation>
        </div>

      </div>
    )
  }
}

export default CreateQuestion