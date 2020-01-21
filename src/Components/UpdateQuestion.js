import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import '../styles/UpdateQuestion.css'
import { UPDATE_QUESTION, REMOVE_QUESTION } from './QueriesAndMutations'

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
        createdAt: this.props.question.createdAt,
        editedAt: this.props.question.editedAt,    
    }

    deleteQuestion(mutation){
        if(window.confirm('Você tem certeza que deseja excluir essa questão ?')){
            mutation()
        }
    }

    updateQuestion(array, mutation){
        let isEmpty = false
        Object.values(array).forEach(value => {
            if(value === ''){
                isEmpty = true;              
            }
        })
        if(isEmpty) { 
            alert('Existem campos vazios !');
        }else {
            if(window.confirm('Você tem certeza que atualizar essa questão ?')){
                mutation()
                alert('Questão atualizada !');
            }
        }  
    }

    render() {

        const { id, body, a, b, c, d, e, correctAnswer, createdAt, editedAt } = this.state

        return(
            <div>
                <div className = "edit-container">  
                    <div className = "edit-choice-id">ID: {id}</div> 
                    <div className = "edit-choice-id">Criada em: {createdAt}</div> 
                    <div className = "edit-choice-id">Editada em: {editedAt}</div>                    
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
                    <label>
                        <input type="radio" value="a" checked = {correctAnswer === 'a'} 
                        onChange={e => this.setState({ correctAnswer: e.target.value })} />
                        A
                    </label>
                    <label>
                        <input type="radio" value="b" checked = {correctAnswer === 'b'} 
                        onChange={e => this.setState({ correctAnswer: e.target.value })} />
                        B
                    </label>
                    <label>
                        <input type="radio" value="c" checked = {correctAnswer === 'c'} 
                        onChange={e => this.setState({ correctAnswer: e.target.value })} />
                        C
                    </label>
                    <label>
                        <input type="radio" value="d" checked = {correctAnswer === 'd'} 
                        onChange={e => this.setState({ correctAnswer: e.target.value })} />
                        D
                    </label>
                    <label>
                        <input type="radio" value="e" checked = {correctAnswer === 'e'} 
                        onChange={e => this.setState({ correctAnswer: e.target.value })} />
                        E
                    </label>
                </div>
                <div className= "edit-btn-container">
                    <Mutation 
                        mutation={ REMOVE_QUESTION } 
                        variables={ { id } } 
                        onCompleted = { () => window.location.reload()}>
                        {postMutation => <button onClick={ () => this.deleteQuestion(postMutation)}>Excluir</button>}                
                    </Mutation>
                    <Mutation 
                        mutation={ UPDATE_QUESTION } 
                        variables={ { id, body, a, b, c, d, e, correctAnswer, createdAt } } 
                        onCompleted = { () => window.location.reload() }>
                        {postMutation =><button onClick={ () => this.updateQuestion([id, body, a, b, c, d, e, correctAnswer, createdAt], postMutation)}>Confirmar Edição</button>}                
                    </Mutation>   
                </div>          
            </div>
        )
    }
}

export default UpdateQuestion