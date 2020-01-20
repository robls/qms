import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import '../styles/UpdateQuestion.css'

const REMOVE_QUESTION = gql`
  mutation removeQuestion($id: String! ) {
    removeQuestion(id: $id)
  }
`;

const UPDATE_QUESTION = gql`
  mutation updateQuestion($id: String!, $body: String!, $a: String!, $b: String!, $c: String!,
    $d: String!, $e: String!, $correctAnswer: String! ) {
    updateQuestion(id: $id body: $body, a: $a, b: $b, c: $c, d: $d, e: $e, correctAnswer: $correctAnswer)
  }
`;
 

class UpdateQuestion extends Component {

    state = {        
        id: this.props.question.id,
        body: this.props.question.body,
        a: this.props.question.a,
        b: this.props.question.b,
        c: this.props.question.c,
        d: this.props.question.d,
        e: this.props.question.e,
        correctAnswer: this.props.question.correctAnswer,    
    }

    render() {

        const { id, body, a, b, c, d, e, correctAnswer } = this.state

        return(
            <div>
                <div className = "edit-container"> 
                    <div className = "edit-choice-label">Pergunta:</div>
                    <input
                        className="update-question-edit-field"
                        value={body}
                        onChange={e => this.setState({ body: e.target.value })}
                        type="text"
                        placeholder="Pergunta"
                    />   
                    <div className = "edit-choice-label">Alternativa A:</div>             
                    <input
                        className="update-question-edit-field"
                        value={a}
                        onChange={e => this.setState({ a: e.target.value })}
                        type="text"
                    />
                    <div className = "edit-choice-label">Alternativa B:</div>                
                    <input
                        className="update-question-edit-field"
                        value={b}
                        onChange={e => this.setState({ b: e.target.value })}
                        type="text"
                    />
                    <div className = "edit-choice-label">Alternativa C:</div>                
                    <input
                        className="update-question-edit-field"
                        value={c}
                        onChange={e => this.setState({ c: e.target.value })}
                        type="text"
                    />
                    <div className = "edit-choice-label">Alternativa D:</div>
                    <input
                        className="update-question-edit-field"
                        value={d}
                        onChange={e => this.setState({ d: e.target.value })}
                        type="text"
                    />
                    <div className = "edit-choice-label">Alternativa E:</div> 
                    <input
                        className="update-question-edit-field"
                        value={e}
                        onChange={e => this.setState({ e: e.target.value })}
                        type="text"
                    />                    
                </div>
                <div className = "edit-choice-label">Alternativa Correta:</div>                   
                <div className = "edit-radio-group">
                    <div className="edit-radio">
                        <label>
                            <input type="radio" value="a" checked={correctAnswer === 'a'} 
                            onChange={e => this.setState({ correctAnswer: e.target.value })} />
                            A
                        </label>
                    </div>
                    <div className="edit-radio-item">
                        <label>
                            <input type="radio" value="b" checked={correctAnswer === 'b'} 
                            onChange={e => this.setState({ correctAnswer: e.target.value })} />
                            B
                        </label>
                    </div>
                    <div className="edit-radio-item">
                        <label>
                            <input type="radio" value="c" checked={correctAnswer === 'c'} 
                            onChange={e => this.setState({ correctAnswer: e.target.value })} />
                            C
                        </label>
                    </div>
                    <div className="edit-radio-item">
                        <label>
                            <input type="radio" value="d" checked={correctAnswer === 'd'} 
                            onChange={e => this.setState({ correctAnswer: e.target.value })} />
                            D
                        </label>
                    </div>
                    <div className="edit-radio-item">
                        <label>
                            <input type="radio" value="e" checked={correctAnswer === 'e'} 
                            onChange={e => this.setState({ correctAnswer: e.target.value })} />
                            E
                        </label>
                    </div>
                </div>
                <div className= "edit-btn-container">
                    <Mutation 
                        mutation={ REMOVE_QUESTION } 
                        variables={ { id } } 
                        onCompleted = { () => window.location.reload()}                >
                        {postMutation => <button onClick={postMutation}>Excluir</button>}                
                    </Mutation>
                    <Mutation 
                        mutation={ UPDATE_QUESTION } 
                        variables={ { id, body, a, b, c, d, e, correctAnswer } } 
                        onCompleted = { () => window.location.reload() }                >
                        {postMutation => <button onClick={ postMutation }>Confirmar Edição</button>}                
                    </Mutation>   
                </div>          
            </div>
        )
    }
}

export default UpdateQuestion