import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import '../styles/Header.css'
import logoEnfase from '../icons/logoEnfase.png'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src = { logoEnfase } className = "header-logo" alt = "Logo Enfase"></img>
        <div className="header-text"> - Case 02 - </div>
        <Link to="/" className="header-link home">
          Listar
        </Link>
        <Link to="/novaQuestao" className="header-link new-question">
          Adicionar
        </Link>   
      </div>
    )
  }
}

export default withRouter(Header)