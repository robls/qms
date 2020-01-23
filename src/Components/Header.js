import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import '../Styles/Header.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-title">EnfaseLabs</div>
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