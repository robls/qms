import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import '../styles/Header.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-text">Case 02 - EnfaseLabs</div>
        <Link to="/home" className="header-link home">
          Listar Questões
        </Link>
        <Link to="/novaQuestao" className="header-link new-question">
          Nova Questão
        </Link>        
      </div>
    )
  }
}

export default withRouter(Header)